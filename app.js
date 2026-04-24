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
  total: document.querySelector("#index-total"),
};

const views = {
  home: document.querySelector("#home-view"),
  detail: document.querySelector("#post-detail"),
  detailKind: document.querySelector("#post-detail-kind"),
  detailTitle: document.querySelector("#post-detail-title"),
  detailMeta: document.querySelector("#post-detail-meta"),
  detailBody: document.querySelector("#post-detail-body"),
  neighborNav: document.querySelector("#post-neighbor-nav"),
};

const discovery = {
  search: document.querySelector("#post-search"),
  clear: document.querySelector("#clear-search"),
  status: document.querySelector("#filter-status"),
  tags: document.querySelector("#tag-filter"),
  archive: document.querySelector("#archive-list"),
};

const filters = {
  query: "",
  tag: "all",
};

// 总渲染入口：三类内容列表和顶部统计都在这里更新。
function render() {
  const growthTotal = entriesFor("growth");
  const noteTotal = entriesFor("notes");
  const videoTotal = entriesFor("videos");
  const allPosts = allEntries();
  const filteredPosts = allPosts.filter(matchesFilters);
  const growthEntries = filteredPosts.filter((entry) => entry.kind === "growth");
  const noteEntries = filteredPosts.filter((entry) => entry.kind === "notes");
  const videoEntries = filteredPosts.filter((entry) => entry.kind === "videos");

  renderGrowth(growthEntries);
  renderNotes(noteEntries);
  renderVideos(videoEntries);
  renderTagFilters(allPosts);
  renderArchive(filteredPosts);
  renderFilterStatus(filteredPosts.length, allPosts.length);
  stats.growth.textContent = growthTotal.length;
  stats.notes.textContent = noteTotal.length;
  stats.videos.textContent = videoTotal.length;
  directoryCounts.growth.textContent = growthTotal.length;
  directoryCounts.notes.textContent = noteTotal.length;
  directoryCounts.videos.textContent = videoTotal.length;
  directoryCounts.total.textContent = allPosts.length;
  renderRoute();
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
    const item = document.createElement("a");
    item.className = "timeline-item post-card";
    item.href = postHref(entry);
    item.innerHTML = `
      <div class="date-pill">
        <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
        <span class="tag">${escapeHtml(entry.stage)}</span>
      </div>
      <div class="entry-copy">
        <h3>${escapeHtml(entry.title)}</h3>
        ${bodyPreviewMarkup(entry)}
        <div class="card-footer">
          <span>${footerTime(entry)}</span>
          ${readMoreLabel()}
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
    const item = document.createElement("a");
    item.className = "note-card post-card";
    item.href = postHref(entry);
    item.innerHTML = `
      <header>
        <span class="tag">${escapeHtml(entry.tag)}</span>
        <h3>${escapeHtml(entry.title)}</h3>
      </header>
      ${bodyPreviewMarkup(entry)}
      <div class="card-footer">
        <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
        ${readMoreLabel()}
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
    const item = document.createElement("a");
    item.className = "video-card post-card";
    item.href = postHref(entry);
    item.innerHTML = `
      <div class="video-frame video-frame-preview">${previewVisualMarkup(entry)}</div>
      <div class="video-body">
        <header>
          <h3>${escapeHtml(entry.title)}</h3>
          ${bodyPreviewMarkup(entry, "Life moment / 生活片段")}
        </header>
        <div class="card-footer">
          <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
          ${readMoreLabel()}
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
    excerpt: excerptFromMarkdown(body),
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

function bodyPreviewMarkup(entry, fallback = "") {
  return `<p class="post-preview">${escapeHtml(previewText(entry, fallback))}</p>`;
}

function previewText(entry, fallback = "") {
  const text = entry.excerpt || stripHtml(entry.html || "") || markdownToPlainText(entry.body || "") || fallback;
  return truncateText(text, 88);
}

function previewVisualMarkup(entry) {
  const image = firstImageFromHtml(entry.html || "");
  if (image) {
    return `<img class="video-preview-image" src="${escapeAttribute(image.src)}" alt="${escapeAttribute(image.alt)}" loading="lazy" />`;
  }

  return lifePostMarkup(entry.title);
}

function footerTime() {
  return "Published / 已发布";
}

function readMoreLabel() {
  return '<span class="published-badge">Read more / 详情</span>';
}

function postHref(entry) {
  return `#post/${encodeURIComponent(postKey(entry))}`;
}

function postKey(entry) {
  return String(entry.id || "").replace(/^posts\//, "");
}

function allEntries() {
  return ["growth", "notes", "videos"]
    .flatMap((kind) => published[kind])
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function matchesFilters(entry) {
  const query = filters.query.trim().toLowerCase();
  const tagMatches = filters.tag === "all" || entry.tag === filters.tag;
  if (!tagMatches) return false;
  if (!query) return true;

  return searchableText(entry).toLowerCase().includes(query);
}

function searchableText(entry) {
  return [
    entry.title,
    entry.tag,
    entry.stage,
    kindLabel(entry.kind),
    entry.excerpt,
    stripHtml(entry.html || ""),
  ]
    .filter(Boolean)
    .join(" ");
}

function renderTagFilters(entries) {
  const tags = ["all", ...new Set(entries.map((entry) => entry.tag).filter(Boolean))];
  discovery.tags.replaceChildren();

  tags.forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = tag === filters.tag ? "is-active" : "";
    button.textContent = tag === "all" ? "All 全部" : tag;
    button.addEventListener("click", () => {
      filters.tag = tag;
      render();
    });
    discovery.tags.append(button);
  });
}

function renderArchive(entries) {
  discovery.archive.replaceChildren();
  if (!entries.length) {
    discovery.archive.append(emptyState("Archive / 归档"));
    return;
  }

  const groups = new Map();
  entries.forEach((entry) => {
    const month = archiveMonth(entry.createdAt);
    if (!groups.has(month)) groups.set(month, []);
    groups.get(month).push(entry);
  });

  groups.forEach((posts, month) => {
    const group = document.createElement("section");
    group.className = "archive-group";
    group.innerHTML = `
      <h3>${escapeHtml(month)}</h3>
      <div class="archive-items">
        ${posts.map(archiveItemMarkup).join("")}
      </div>
    `;
    discovery.archive.append(group);
  });
}

function archiveItemMarkup(entry) {
  return `
    <a href="${postHref(entry)}">
      <span>${escapeHtml(formatDate(entry.createdAt))}</span>
      <strong>${escapeHtml(entry.title)}</strong>
      <small>${escapeHtml(entry.tag || kindLabel(entry.kind))}</small>
    </a>
  `;
}

function renderFilterStatus(filteredCount, totalCount) {
  discovery.status.textContent = `${filteredCount} / ${totalCount} posts`;
  discovery.clear.disabled = !filters.query && filters.tag === "all";
}

function archiveMonth(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
  }).format(new Date(value));
}

function renderRoute() {
  const match = window.location.hash.match(/^#post\/(.+)$/);
  if (!match) {
    showHome();
    return;
  }

  const key = decodeURIComponent(match[1]);
  const entry = allEntries().find((post) => postKey(post) === key);
  if (!entry) {
    showHome();
    return;
  }

  showPostDetail(entry);
}

function showHome() {
  views.home.hidden = false;
  views.detail.hidden = true;
  document.title = "qqqzj@Crane";
}

function showPostDetail(entry) {
  views.home.hidden = true;
  views.detail.hidden = false;
  views.detailKind.textContent = kindLabel(entry.kind);
  views.detailTitle.textContent = entry.title;
  views.detailMeta.innerHTML = `
    <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
    <span>${escapeHtml(entry.tag || entry.stage || "")}</span>
  `;
  views.detailBody.innerHTML = `
    ${entry.url ? `<div class="detail-video-frame">${videoMarkup(entry.url, entry.title)}</div>` : ""}
    ${bodyMarkup(entry)}
  `;
  renderNeighborNav(entry);
  document.title = `${entry.title} · qqqzj@Crane`;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderNeighborNav(entry) {
  const posts = allEntries();
  const index = posts.findIndex((post) => postKey(post) === postKey(entry));
  const newer = posts[index - 1];
  const older = posts[index + 1];

  views.neighborNav.replaceChildren();
  if (!newer && !older) return;

  views.neighborNav.innerHTML = `
    ${newer ? neighborLinkMarkup(newer, "Newer / 上一篇") : "<span></span>"}
    ${older ? neighborLinkMarkup(older, "Older / 下一篇") : "<span></span>"}
  `;
}

function neighborLinkMarkup(entry, label) {
  return `
    <a href="${postHref(entry)}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(entry.title)}</strong>
    </a>
  `;
}

function kindLabel(kind) {
  if (kind === "growth") return "News 动态";
  if (kind === "videos") return "Life Log 生活记录";
  return "Notes 笔记";
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

discovery.search?.addEventListener("input", (event) => {
  filters.query = event.target.value;
  render();
});

discovery.clear?.addEventListener("click", () => {
  filters.query = "";
  filters.tag = "all";
  discovery.search.value = "";
  render();
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
      const file = fileMarkdown(block);
      if (file) return file;

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

function fileMarkdown(block) {
  const match = block.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
  if (!match) return "";

  const [, label, rawUrl] = match;
  const url = normalizeFileUrl(rawUrl);
  if (!url) return "";

  const fileName = url.split("/").pop() || "download";
  const isExternal = /^https?:\/\//i.test(url);
  const target = isExternal ? ' target="_blank" rel="noreferrer"' : " download";
  const preview = filePreviewMarkup(url, fileName);

  return `<div class="entry-file"><a class="download-button" href="${escapeAttribute(url)}"${target}><span>${escapeHtml(label)}</span><small>${escapeHtml(fileName)}</small></a>${preview}</div>`;
}

function excerptFromMarkdown(markdown) {
  return truncateText(markdownToPlainText(markdown), 120);
}

function markdownToPlainText(markdown) {
  return String(markdown)
    .split("\n")
    .filter((line) => !/^!\[[^\]]*\]\([^)]+\)$/.test(line.trim()))
    .map((line) => line.replace(/^#{1,6}\s+/, "").replace(/^[-*]\s+/, ""))
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(html) {
  return String(html)
    .replace(/<figure[\s\S]*?<\/figure>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function truncateText(value, limit) {
  const text = String(value).trim();
  if (text.length <= limit) return text;
  return `${text.slice(0, limit).trim()}...`;
}

function firstImageFromHtml(html) {
  const match = String(html).match(/<img\s+src="([^"]+)"\s+alt="([^"]*)"/);
  if (!match) return null;
  return { src: match[1], alt: match[2] };
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
  if (/^assets\//i.test(value)) return value;
  if (/^\.\/assets\//i.test(value)) return value.replace(/^\.\//, "");
  if (/^media\//i.test(value)) return `posts/${value}`;
  if (/^\.\/media\//i.test(value)) return value.replace(/^\.\/media\//i, "posts/media/");
  if (/^posts\/media\//i.test(value)) return value;
  return "";
}

function normalizeFileUrl(value) {
  if (/^https?:\/\//i.test(value)) return value;
  if (/^files\//i.test(value)) return `posts/${value}`;
  if (/^\.\/files\//i.test(value)) return value.replace(/^\.\/files\//i, "posts/files/");
  if (/^posts\/files\//i.test(value)) return value;
  return "";
}

function filePreviewMarkup(url, fileName) {
  const extension = fileExtension(url);
  if (!["pdf", "md", "markdown", "txt", "css", "csv", "json", "html", "js"].includes(extension)) return "";

  return `<details class="file-preview"><summary>Preview / 预览</summary><iframe src="${escapeAttribute(url)}" title="${escapeAttribute(fileName)}" loading="lazy"></iframe></details>`;
}

function fileExtension(value) {
  return (value.split("?")[0].split("#")[0].split(".").pop() || "").toLowerCase();
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
window.addEventListener("hashchange", renderRoute);
render();
loadPublishedPosts();
