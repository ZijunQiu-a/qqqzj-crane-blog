(() => {
  const DEFAULT_CONFIG = {
    enabled: false,
    provider: "giscus",
    repo: "",
    repoId: "",
    category: "Announcements",
    categoryId: "",
    mapping: "specific",
    strict: "1",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "bottom",
    lang: "zh-CN",
    loading: "lazy",
    themeLight: "light",
    themeDark: "dark_dimmed",
  };

  const requiredKeys = ["repo", "repoId", "category", "categoryId"];

  function activeConfig() {
    return { ...DEFAULT_CONFIG, ...(window.CRANE_COMMENTS || {}) };
  }

  function isConfigured(config) {
    return requiredKeys.every((key) => String(config[key] || "").trim());
  }

  function postTerm(post = {}) {
    const raw = post.commentTerm || post.slug || post.key || post.id || document.title || window.location.pathname;
    return String(raw).startsWith("post:") ? String(raw) : `post:${raw}`;
  }

  function giscusTheme(config) {
    const state = document.documentElement.dataset.themeState;
    return state === "ousia" ? config.themeDark : config.themeLight;
  }

  function scriptAttributes(config, post) {
    return {
      src: "https://giscus.app/client.js",
      "data-repo": config.repo,
      "data-repo-id": config.repoId,
      "data-category": config.category,
      "data-category-id": config.categoryId,
      "data-mapping": config.mapping,
      "data-term": postTerm(post),
      "data-strict": config.strict,
      "data-reactions-enabled": config.reactionsEnabled,
      "data-emit-metadata": config.emitMetadata,
      "data-input-position": config.inputPosition,
      "data-theme": giscusTheme(config),
      "data-lang": config.lang,
      "data-loading": config.loading,
      crossorigin: "anonymous",
      async: "",
    };
  }

  function setStatus(container, title, body) {
    container.hidden = false;
    container.innerHTML = `
      <div class="comments-placeholder">
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(body)}</p>
      </div>
    `;
  }

  function render(container, post = {}) {
    if (!container) return;

    const config = activeConfig();
    clear(container);

    if (!config.enabled) {
      container.hidden = true;
      return;
    }

    if (config.provider !== "giscus") {
      setStatus(container, "Comments unavailable / 评论区暂不可用", "Unsupported comments provider.");
      return;
    }

    if (!isConfigured(config)) {
      setStatus(
        container,
        "Comments setup needed / 评论区待配置",
        "Enable GitHub Discussions, choose a category, then fill comments-config.js.",
      );
      return;
    }

    container.hidden = false;
    container.innerHTML = `
      <div class="comments-heading">
        <p class="eyebrow">Comments 评论</p>
        <h2>留言区</h2>
      </div>
      <div class="giscus"></div>
    `;

    const script = document.createElement("script");
    Object.entries(scriptAttributes(config, post)).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    container.querySelector(".giscus").append(script);
    syncTheme(container);
  }

  function clear(container) {
    if (!container) return;
    container.replaceChildren();
  }

  function syncTheme(container) {
    const config = activeConfig();
    if (!config.enabled || !isConfigured(config)) return;

    const frame = container.querySelector("iframe.giscus-frame");
    frame?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: giscusTheme(config) } } },
      "https://giscus.app",
    );
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  if ("MutationObserver" in window) {
    const themeObserver = new MutationObserver(() => {
      document.querySelectorAll(".post-comments").forEach(syncTheme);
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme-state"],
    });
  }

  window.CraneComments = {
    render,
    clear,
    isConfigured: () => isConfigured(activeConfig()),
  };
})();
