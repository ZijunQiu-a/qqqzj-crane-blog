(function attachMarkdownCore(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.CraneMarkdownCore = api;
})(typeof globalThis !== "undefined" ? globalThis : null, function createMarkdownCore() {
  function markdownBlocks(markdown, options = {}) {
    const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
    const blocks = [];
    let current = [];
    let fence = "";
    const trimBlock = options.trimBlock !== false;

    const flush = () => {
      const raw = current.join("\n");
      const block = trimBlock ? raw.trim() : raw.replace(/\n+$/g, "");
      if (block.trim()) blocks.push(block);
      current = [];
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (fence) {
        current.push(line);
        if (isClosingFence(trimmed, fence)) {
          flush();
          fence = "";
        }
        return;
      }

      const nextFence = openingFence(trimmed);
      if (nextFence) {
        flush();
        current.push(line);
        fence = nextFence;
        return;
      }

      if (!trimmed) {
        flush();
        return;
      }

      current.push(line);
    });

    flush();
    return blocks;
  }

  function openingFence(line) {
    if (/^```/.test(line)) return "```";
    if (/^:::\s*(?:note|tip|important|warning|caution|theorem|proof|example|definition|lemma|corollary)\b/i.test(line)) {
      return ":::";
    }
    if (/^\$\$\s*$/.test(line)) return "$$";
    return "";
  }

  function isClosingFence(line, fence) {
    if (fence === "```") return /^```\s*$/.test(line);
    if (fence === ":::") return /^:::\s*$/.test(line);
    if (fence === "$$") return /^\$\$\s*$/.test(line);
    return false;
  }

  function markdownTable(lines) {
    if (lines.length < 2) return null;

    const headers = splitTableRow(lines[0]);
    const divider = splitTableRow(lines[1]);
    if (headers.length < 2 || divider.length < 2) return null;
    if (!divider.every(isTableDividerCell)) return null;

    const rows = lines
      .slice(2)
      .map(splitTableRow)
      .filter((row) => row.some((cell) => cell));

    return { headers, rows };
  }

  function isTableDividerCell(value) {
    return /^:?-{3,}:?$/.test(String(value || "").trim());
  }

  function splitTableRow(value) {
    const text = trimOuterTablePipes(String(value || "").trim());
    const cells = [];
    let cell = "";
    let inCode = false;

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      if (char === "`") inCode = !inCode;
      if (char === "|" && !inCode && !isEscaped(text, index)) {
        cells.push(cell);
        cell = "";
        continue;
      }
      cell += char;
    }
    cells.push(cell);

    return cells.map((part) => part.trim().replace(/\\\|/g, "|"));
  }

  function trimOuterTablePipes(value) {
    let text = value;
    if (text.startsWith("|")) text = text.slice(1);
    if (text.endsWith("|") && !isEscaped(text, text.length - 1)) text = text.slice(0, -1);
    return text;
  }

  function isEscaped(value, index) {
    let slashes = 0;
    for (let cursor = index - 1; cursor >= 0 && value[cursor] === "\\"; cursor -= 1) {
      slashes += 1;
    }
    return slashes % 2 === 1;
  }

  function normalizeCodeLanguage(value) {
    const language = codeInfoString(value).toLowerCase();
    const aliases = {
      bash: "shell",
      cc: "c++",
      cjs: "javascript",
      cpp: "c++",
      cxx: "c++",
      h: "c",
      hh: "c++",
      htm: "html",
      hpp: "c++",
      js: "javascript",
      jsx: "javascript",
      mjs: "javascript",
      py: "python",
      sh: "shell",
      sv: "verilog",
      svh: "verilog",
      ts: "typescript",
      tsx: "typescript",
      v: "verilog",
      vh: "verilog",
      zsh: "shell",
    };
    return aliases[language] || language;
  }

  function codeInfoString(value) {
    return String(value || "").trim().split(/\s+/)[0];
  }

  function highlightCode(code, language) {
    const rules = syntaxRules(language);
    if (!rules.length) return escapeHtml(code);

    let html = "";
    let index = 0;
    while (index < code.length) {
      const match = nextSyntaxMatch(code, index, rules);
      if (match) {
        html += `<span class="syntax-${match.type}">${escapeHtml(match.value)}</span>`;
        index += match.value.length;
        continue;
      }

      html += escapeHtml(code[index]);
      index += 1;
    }

    return html;
  }

  function nextSyntaxMatch(code, index, rules) {
    for (const rule of rules) {
      rule.pattern.lastIndex = index;
      const match = rule.pattern.exec(code);
      if (match?.index === index && match[0]) {
        return { type: rule.type, value: match[0] };
      }
    }
    return null;
  }

  function syntaxRules(language) {
    if (language === "json") {
      return [
        syntaxRule("attr", /"(?:\\[\s\S]|[^"\\])*"(?=\s*:)/y),
        syntaxRule("string", /"(?:\\[\s\S]|[^"\\])*"/y),
        syntaxRule("number", /-?\b(?:0|[1-9]\d*)(?:\.\d+)?(?:e[+-]?\d+)?\b/iy),
        syntaxRule("keyword", /\b(?:true|false|null)\b/y),
      ];
    }

    if (["html", "xml", "vue"].includes(language)) {
      return [
        syntaxRule("comment", /<!--[\s\S]*?-->/y),
        syntaxRule("tag", /<\/?[A-Za-z][\w:-]*(?:\s+[^\n<>]*?)?\/?>/y),
        syntaxRule("string", /"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'/y),
      ];
    }

    if (["css", "scss", "less"].includes(language)) {
      return [
        syntaxRule("comment", /\/\*[\s\S]*?\*\//y),
        syntaxRule("string", /"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'/y),
        syntaxRule("number", /#[\da-f]{3,8}\b|\b\d+(?:\.\d+)?(?:%|[a-z]+)?\b/iy),
        syntaxRule("attr", /-?[_a-z][\w-]*(?=\s*:)/iy),
        syntaxRule("keyword", /\b(?:important|inherit|initial|unset|auto|none|block|inline|grid|flex|relative|absolute|fixed|sticky)\b/iy),
      ];
    }

    if (["python", "shell"].includes(language)) {
      const keywords = language === "python"
        ? "and|as|assert|async|await|break|class|continue|def|del|elif|else|except|False|finally|for|from|global|if|import|in|is|lambda|None|nonlocal|not|or|pass|raise|return|True|try|while|with|yield"
        : "case|do|done|elif|else|esac|export|fi|for|function|if|in|local|then|while";
      return [
        syntaxRule("comment", /#[^\n]*/y),
        syntaxRule("string", /"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'/y),
        syntaxRule("keyword", new RegExp(`\\b(?:${keywords})\\b`, "y")),
        syntaxRule("number", /\b\d+(?:\.\d+)?\b/y),
        syntaxRule("function", /\b[A-Za-z_]\w*(?=\s*\()/y),
      ];
    }

    if (["c", "c++"].includes(language)) {
      const keywords = language === "c++"
        ? "alignas|alignof|and|and_eq|asm|auto|bitand|bitor|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|false|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|not|not_eq|nullptr|operator|or|or_eq|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static_assert|static|static_cast|struct|switch|template|this|thread_local|throw|true|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while|xor|xor_eq"
        : "auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|restrict|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local";
      return [
        syntaxRule("comment", /\/\/[^\n]*|\/\*[\s\S]*?\*\//y),
        syntaxRule("string", /L?"(?:\\[\s\S]|[^"\\])*"|L?'(?:\\[\s\S]|[^'\\])+'/y),
        syntaxRule("keyword", new RegExp(`\\b(?:${keywords})\\b`, "y")),
        syntaxRule("number", /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)(?:[uUlLfF]*)\b/iy),
        syntaxRule("function", /\b[A-Za-z_]\w*(?=\s*\()/y),
      ];
    }

    if (language === "verilog") {
      return [
        syntaxRule("comment", /\/\/[^\n]*|\/\*[\s\S]*?\*\//y),
        syntaxRule("string", /"(?:\\[\s\S]|[^"\\])*"/y),
        syntaxRule("number", /\b(?:\d+)?'[sS]?[bBoOdDhH][0-9a-fA-F_xXzZ?]+|\b\d+(?:\.\d+)?\b/y),
        syntaxRule("keyword", /\b(?:always|always_comb|always_ff|always_latch|and|assign|automatic|begin|buf|case|casex|casez|cell|cmos|config|deassign|default|defparam|design|disable|edge|else|end|endcase|endconfig|endfunction|endgenerate|endmodule|endprimitive|endspecify|endtable|endtask|enum|event|for|force|forever|fork|function|generate|genvar|highz0|highz1|if|ifnone|incdir|include|initial|inout|input|integer|join|large|liblist|library|localparam|macromodule|medium|module|nand|negedge|nmos|nor|noshowcancelled|not|notif0|notif1|or|output|parameter|pmos|posedge|primitive|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|rcmos|real|realtime|reg|release|repeat|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|showcancelled|signed|small|specify|specparam|strong0|strong1|supply0|supply1|table|task|time|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|unsigned|use|uwire|vectored|wait|wand|weak0|weak1|while|wire|wor|xnor|xor|logic|bit|byte|shortint|int|longint|shortreal|struct|typedef|union|var|interface|modport|package|import|export|class|constraint|covergroup|coverpoint|property|sequence|assert|assume|cover)\b/y),
        syntaxRule("function", /\b[A-Za-z_]\w*(?=\s*\()/y),
      ];
    }

    if (["javascript", "typescript"].includes(language)) {
      return [
        syntaxRule("comment", /\/\/[^\n]*|\/\*[\s\S]*?\*\//y),
        syntaxRule("string", /`(?:\\[\s\S]|[^`\\])*`|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'/y),
        syntaxRule("keyword", /\b(?:async|await|break|case|catch|class|const|continue|default|delete|do|else|export|extends|finally|for|from|function|if|import|in|instanceof|interface|let|new|null|of|return|switch|this|throw|try|type|typeof|undefined|var|void|while|yield|true|false)\b/y),
        syntaxRule("number", /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/iy),
        syntaxRule("function", /\b[A-Za-z_$][\w$]*(?=\s*\()/y),
      ];
    }

    return [];
  }

  function syntaxRule(type, pattern) {
    return { type, pattern };
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  return {
    codeInfoString,
    highlightCode,
    isClosingFence,
    isEscaped,
    isTableDividerCell,
    markdownBlocks,
    markdownTable,
    normalizeCodeLanguage,
    openingFence,
    splitTableRow,
    trimOuterTablePipes,
  };
});
