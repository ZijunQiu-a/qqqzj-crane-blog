const POSTS_MANIFEST = "posts/index.json";

// published 里放从 posts/*.md 读取出来的正式文章。公开页面保持只读。
const published = {
  growth: [],
  notes: [],
  videos: [],
};

// 常用 DOM 节点集中存起来，后面渲染时就不用反复 querySelector。
const lists = {
  growth: document.querySelector("#growth-list"),
  notes: document.querySelector("#note-list"),
  videos: document.querySelector("#video-list"),
};

const stats = {
  growth: document.querySelector("#stat-growth"),
  notes: document.querySelector("#stat-notes"),
  videos: document.querySelector("#stat-videos"),
};

const directoryCounts = {
  growth: document.querySelector("#index-growth"),
  notes: document.querySelector("#index-notes"),
  videos: document.querySelector("#index-videos"),
};

// 总渲染入口：三类内容列表和顶部统计都在这里更新。
function render() {
  const growthEntries = entriesFor("growth");
  const noteEntries = entriesFor("notes");
  const videoEntries = entriesFor("videos");

  renderGrowth(growthEntries);
  renderNotes(noteEntries);
  renderVideos(videoEntries);
  stats.growth.textContent = growthEntries.length;
  stats.notes.textContent = noteEntries.length;
  stats.videos.textContent = videoEntries.length;
  directoryCounts.growth.textContent = growthEntries.length;
  directoryCounts.notes.textContent = noteEntries.length;
  directoryCounts.videos.textContent = videoEntries.length;
}

// 正式 Markdown 文章按时间从新到旧排序。
function entriesFor(kind) {
  return [...published[kind]].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// 渲染 News 列表。这里用 escapeHtml 是为了避免用户输入变成真正的 HTML。
function renderGrowth(entries) {
  lists.growth.replaceChildren();
  if (!entries.length) {
    lists.growth.append(emptyState("News / 动态"));
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="date-pill">
        <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
        <span class="tag">${escapeHtml(entry.stage)}</span>
      </div>
      <div class="entry-copy">
        <h3>${escapeHtml(entry.title)}</h3>
        ${bodyMarkup(entry)}
        <div class="card-footer">
          <span>${footerTime(entry)}</span>
          ${publishedBadge()}
        </div>
      </div>
    `;
    lists.growth.append(item);
  });
}

// 渲染 Notes 卡片列表。
function renderNotes(entries) {
  lists.notes.replaceChildren();
  if (!entries.length) {
    lists.notes.append(emptyState("Notes / 笔记"));
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "note-card";
    item.innerHTML = `
      <header>
        <span class="tag">${escapeHtml(entry.tag)}</span>
        <h3>${escapeHtml(entry.title)}</h3>
      </header>
      ${bodyMarkup(entry)}
      <div class="card-footer">
        <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
        ${publishedBadge()}
      </div>
    `;
    lists.notes.append(item);
  });
}

// 渲染 Life 列表；里面可能是 iframe、video，或者普通外链按钮。
function renderVideos(entries) {
  lists.videos.replaceChildren();
  if (!entries.length) {
    lists.videos.append(emptyState("Life log / 生活记录"));
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "video-card";
    item.innerHTML = `
      <div class="video-frame">${entry.url ? videoMarkup(entry.url, entry.title) : lifePostMarkup(entry.title)}</div>
      <div class="video-body">
        <header>
          <h3>${escapeHtml(entry.title)}</h3>
          ${bodyMarkup(entry, "Life moment / 生活片段")}
        </header>
        <div class="card-footer">
          <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
          ${publishedBadge()}
        </div>
      </div>
    `;
    lists.videos.append(item);
  });
}

// 读取 posts/index.json，再读取每篇 Markdown，生成正式公开文章。
async function loadPublishedPosts() {
  if (window.PUBLISHED_POSTS) {
    published.growth = Array.isArray(window.PUBLISHED_POSTS.growth) ? window.PUBLISHED_POSTS.growth : [];
    published.notes = Array.isArray(window.PUBLISHED_POSTS.notes) ? window.PUBLISHED_POSTS.notes : [];
    published.videos = Array.isArray(window.PUBLISHED_POSTS.videos) ? window.PUBLISHED_POSTS.videos : [];
    render();
    return;
  }

  try {
    const response = await fetch(POSTS_MANIFEST);
    if (!response.ok) return;
    const files = await response.json();
    const posts = await Promise.all(files.map(loadPostFile));

    published.growth = [];
    published.notes = [];
    published.videos = [];

    posts.filter(Boolean).forEach((post) => {
      published[post.kind].push(post);
    });
    render();
  } catch {
    // file:// 直接打开时浏览器通常不允许 fetch 本地 Markdown；发布到 GitHub Pages 后会正常读取。
  }
}

async function loadPostFile(file) {
  const response = await fetch(file);
  if (!response.ok) return null;
  const text = await response.text();
  const { meta, body } = parseMarkdownPost(text);
  const category = meta.category || "Notes 笔记";
  const kind = postKind(category);

  return {
    id: file,
    source: "post",
    kind,
    title: meta.title || file.replace(/^posts\/|\.md$/g, ""),
    stage: meta.stage || category,
    tag: meta.tag || category,
    url: meta.url || "",
    body,
    html: markdownToHtml(body),
    createdAt: new Date(meta.date || Date.now()).toISOString(),
  };
}

// 解析 Markdown 顶部的 --- front matter ---，正文保持为 Markdown。
function parseMarkdownPost(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: text.trim() };

  const meta = {};
  match[1].split("\n").forEach((line) => {
    const separator = line.indexOf(":");
    if (separator === -1) return;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    meta[key] = value.replace(/^["']|["']$/g, "");
  });

  return { meta, body: match[2].trim() };
}

function postKind(category) {
  const normalized = category.toLowerCase();
  if (normalized.includes("news") || normalized.includes("动态")) return "growth";
  if (normalized.includes("life") || normalized.includes("生活")) return "videos";
  return "notes";
}

function bodyMarkup(entry, fallback = "") {
  if (entry.html) return `<div class="entry-body">${entry.html}</div>`;
  return `<p>${escapeHtml(entry.body || fallback)}</p>`;
}

function footerTime() {
  return "Published / 已发布";
}

function publishedBadge() {
  return '<span class="published-badge">Post 文章</span>';
}

// 互动小人的台词和点击动画。
const mascotWidget = document.querySelector("#mascot-widget");
const mascotBubble = document.querySelector("#mascot-bubble");
const mascotLines = [
  "今日也要优雅记录 / Keep it elegant.",
  "水面会记得每一次前进 / Every ripple counts.",
  "新的灵感登场了 / A new idea enters the stage.",
  "别忘了给自己一点掌声 / Applause for today.",
  "去写一条 Life 吧 / Capture a tiny life moment.",
];
let mascotLineIndex = 0;
let mascotTimer;

// 重新触发动画的小技巧：移除 class，读取 offsetWidth，再加回 class。
mascotWidget?.addEventListener("click", () => {
  mascotLineIndex = (mascotLineIndex + 1) % mascotLines.length;
  mascotBubble.textContent = mascotLines[mascotLineIndex];
  mascotWidget.classList.remove("is-excited");
  void mascotWidget.offsetWidth;
  mascotWidget.classList.add("is-speaking", "is-excited");

  window.clearTimeout(mascotTimer);
  mascotTimer = window.setTimeout(() => {
    mascotWidget.classList.remove("is-speaking", "is-excited");
  }, 2600);
});

// 根据链接类型输出展示内容：可嵌入平台用 iframe，视频文件用 video，其它用外链。
function videoMarkup(url, title) {
  const embedUrl = toEmbedUrl(url);
  if (embedUrl) {
    return `<iframe src="${escapeAttribute(embedUrl)}" title="${escapeAttribute(title)}" allowfullscreen loading="lazy"></iframe>`;
  }

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return `<video src="${escapeAttribute(url)}" controls preload="metadata"></video>`;
  }

  return `<a href="${escapeAttribute(url)}" target="_blank" rel="noreferrer" aria-label="Open link / 打开链接">▶</a>`;
}

function lifePostMarkup(title) {
  return `<div class="life-post-mark" aria-label="${escapeAttribute(title)}">Life</div>`;
}

// 把 YouTube / Bilibili 的普通链接转换成可嵌入页面的链接。
function toEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }

    if (host === "youtube.com" && parsed.searchParams.has("v")) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
    }

    if (host === "player.bilibili.com") {
      return parsed.href;
    }

    if (host === "bilibili.com" || host.endsWith(".bilibili.com")) {
      const match = parsed.pathname.match(/\/video\/([^/?]+)/);
      if (match) return `https://player.bilibili.com/player.html?bvid=${match[1]}`;
    }
  } catch {
    return "";
  }

  return "";
}

// 复制 HTML template，生成一个“暂无内容”的占位节点。
function emptyState(label) {
  const node = document.querySelector("#empty-template").content.firstElementChild.cloneNode(true);
  node.querySelector("p").textContent = "No entries yet / 暂无内容";
  return node;
}

// 迷你 Markdown 转换器：支持标题、段落、列表、媒体、链接、粗体和斜体。
function markdownToHtml(markdown) {
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);

  return blocks
    .map((block) => {
      const media = mediaMarkdown(block);
      if (media) return media;

      if (/^###\s+/.test(block)) return `<h4>${inlineMarkdown(block.replace(/^###\s+/, ""))}</h4>`;
      if (/^##\s+/.test(block)) return `<h4>${inlineMarkdown(block.replace(/^##\s+/, ""))}</h4>`;
      if (/^#\s+/.test(block)) return `<h4>${inlineMarkdown(block.replace(/^#\s+/, ""))}</h4>`;

      if (/^[-*]\s+/m.test(block)) {
        const items = block
          .split("\n")
          .filter((line) => /^[-*]\s+/.test(line))
          .map((line) => `<li>${inlineMarkdown(line.replace(/^[-*]\s+/, ""))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${inlineMarkdown(block).replaceAll("\n", "<br />")}</p>`;
    })
    .join("");
}

function mediaMarkdown(block) {
  const match = block.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
  if (!match) return "";

  const [, altText, rawUrl] = match;
  const url = normalizeMediaUrl(rawUrl);
  if (!url) return "";

  const alt = altText.replace(/^video:/i, "").trim();
  const escapedUrl = escapeAttribute(url);
  const escapedAlt = escapeAttribute(alt);

  if (/^video:/i.test(altText) || /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url)) {
    return `<figure class="entry-media entry-video"><video src="${escapedUrl}" controls preload="metadata"></video>${alt ? `<figcaption>${escapeHtml(alt)}</figcaption>` : ""}</figure>`;
  }

  return `<figure class="entry-media"><img src="${escapedUrl}" alt="${escapedAlt}" loading="lazy" />${alt ? `<figcaption>${escapeHtml(alt)}</figcaption>` : ""}</figure>`;
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function normalizeMediaUrl(value) {
  if (/^https?:\/\//i.test(value)) return value;
  if (/^(media|assets)\//i.test(value)) return value;
  if (/^\.\/(media|assets)\//i.test(value)) return value.replace(/^\.\//, "");
  if (/^posts\/media\//i.test(value)) return value;
  return "";
}

// 日期格式化：例如 2026年4月24日。
function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(value));
}

// 把文本内容转成纯文本显示，避免 <script> 这类内容被浏览器执行。
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// 属性值里额外处理反引号，给 iframe src / title 等属性使用。
function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

// 页面第一次加载时渲染已有数据。
render();
loadPublishedPosts();
