const POSTS_MANIFEST = "posts/index.json";
const READING_UNITS_PER_MINUTE = 500;

// published 里放从 posts/ 分类目录读取出来的正式文章。公开页面保持只读。
const published = {
  growth: [],
  notes: [],
  videos: [],
};

seedPublishedPosts();

// 常用 DOM 节点集中存起来，后面渲染时就不用反复 querySelector。
const lists = {
  recent: document.querySelector("#recent-list"),
  growth: document.querySelector("#growth-list"),
  notes: document.querySelector("#note-list"),
  videos: document.querySelector("#video-list"),
};

const views = {
  home: document.querySelector("#home-view"),
  detail: document.querySelector("#post-detail"),
  detailKind: document.querySelector("#post-detail-kind"),
  detailTitle: document.querySelector("#post-detail-title"),
  detailMeta: document.querySelector("#post-detail-meta"),
  detailToc: document.querySelector("#post-detail-toc"),
  detailBody: document.querySelector("#post-detail-body"),
  jumpTop: document.querySelector("#post-jump-top"),
  neighborNav: document.querySelector("#post-neighbor-nav"),
  progress: document.querySelector("#reading-progress"),
};

const homeLinks = document.querySelectorAll('a[href="#home"]');

const discovery = {
  panel: document.querySelector(".topbar-search .search-panel"),
  search: document.querySelector("#post-search"),
  clear: document.querySelector("#clear-search"),
  status: document.querySelector("#filter-status"),
  results: document.querySelector("#search-results"),
  tags: document.querySelector("#tag-filter"),
  archive: document.querySelector("#archive-list"),
  noteCategories: document.querySelector("#note-category-tabs"),
};

const filters = {
  query: "",
  tag: "all",
  noteCategory: "all",
};

let tocObserver = null;
let searchRenderTimer = null;
const SEARCH_RENDER_DELAY = 160;

// 总渲染入口：三类内容列表和顶部统计都在这里更新。
function render() {
  const allPosts = allEntries();
  const filteredPosts = allPosts.filter(matchesFilters);
  const growthEntries = filteredPosts.filter((entry) => entry.kind === "growth");
  const noteBaseEntries = filteredPosts.filter((entry) => entry.kind === "notes");
  const noteEntries = noteBaseEntries.filter(matchesNoteCategory);
  const videoEntries = filteredPosts.filter((entry) => entry.kind === "videos");

  renderRecent(allPosts.slice(0, 4));
  renderGrowth(growthEntries);
  renderNoteCategories(noteBaseEntries);
  renderNotes(noteEntries);
  renderVideos(videoEntries);
  renderTagFilters(allPosts);
  renderArchive(filteredPosts);
  renderFilterStatus(filteredPosts.length, allPosts.length);
  renderSearchResults(filteredPosts);
  renderRoute();
}

// 正式 Markdown 文章按时间从新到旧排序。
function entriesFor(kind) {
  return [...published[kind]].sort(comparePosts);
}

function comparePosts(a, b) {
  const dateDiff = new Date(b.createdAt) - new Date(a.createdAt);
  if (dateDiff !== 0) return dateDiff;
  return (b.publishedIndex ?? 0) - (a.publishedIndex ?? 0);
}

function renderRecent(entries) {
  lists.recent.replaceChildren();
  if (!entries.length) {
    lists.recent.append(emptyState("Recent / 最近更新"));
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("a");
    item.className = "recent-card post-card";
    item.href = postHref(entry);
    item.innerHTML = `
      <div class="recent-card-meta">
        <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
        <span>${escapeHtml(entry.tag || kindLabel(entry.kind))}</span>
        ${authorChip(entry)}
      </div>
      <div class="recent-card-copy">
        <h3>${escapeHtml(entry.title)}</h3>
        <p>${escapeHtml(entry.excerpt || kindLabel(entry.kind))}</p>
      </div>
      ${readMoreLabel()}
    `;
    lists.recent.append(item);
  });
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
          ${authorChip(entry)}
          <span>${readTimeLabel(entry)}</span>
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
        ${authorChip(entry)}
        <span>${readTimeLabel(entry)}</span>
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
          ${authorChip(entry)}
          <span>${readTimeLabel(entry)}</span>
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
    return;
  }

  try {
    const response = await fetch(POSTS_MANIFEST);
    if (!response.ok) return;
    const files = await response.json();
    const posts = await Promise.all(files.map((file, index) => loadPostFile(file, index)));

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

function seedPublishedPosts() {
  if (!window.PUBLISHED_POSTS) return;

  published.growth = Array.isArray(window.PUBLISHED_POSTS.growth) ? window.PUBLISHED_POSTS.growth : [];
  published.notes = Array.isArray(window.PUBLISHED_POSTS.notes) ? window.PUBLISHED_POSTS.notes : [];
  published.videos = Array.isArray(window.PUBLISHED_POSTS.videos) ? window.PUBLISHED_POSTS.videos : [];
}

async function loadPostFile(file, publishedIndex = 0) {
  const response = await fetch(file);
  if (!response.ok) return null;
  const text = await response.text();
  const { meta, body } = parseMarkdownPost(text);
  if (isDraft(meta)) return null;

  const category = meta.category || "Notes 笔记";
  const kind = postKind(category);
  const rendered = renderMarkdown(body);

  return {
    id: file,
    source: "post",
    kind,
    title: meta.title || file.replace(/^posts\/|\.md$/g, ""),
    slug: postSlugFromPath(file),
    publishedIndex,
    stage: meta.stage || category,
    tag: meta.tag || category,
    author: meta.author || "ZijunQiu-a",
    url: meta.url || "",
    body,
    html: rendered.html,
    headings: rendered.headings,
    excerpt: excerptFromMarkdown(body),
    readingMinutes: readingMinutes(body),
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

function isDraft(meta) {
  return String(meta.draft || "").toLowerCase() === "true";
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

function readTimeLabel(entry) {
  return `约 ${entry.readingMinutes || 1} 分钟`;
}

function authorName(entry) {
  return entry.author || "ZijunQiu-a";
}

function authorChip(entry) {
  return `<span class="author-chip">作者 ${escapeHtml(authorName(entry))}</span>`;
}

function postHref(entry) {
  return `#post/${encodeURIComponent(postKey(entry))}`;
}

function postKey(entry) {
  return entry.slug || postSlugFromPath(entry.id || "");
}

function postSlugFromPath(file) {
  return String(file)
    .split("/")
    .pop()
    .replace(/\.md$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function allEntries() {
  return ["growth", "notes", "videos"]
    .flatMap((kind) => published[kind])
    .sort(comparePosts);
}

function matchesFilters(entry) {
  const query = filters.query.trim().toLowerCase();
  const tagMatches = filters.tag === "all" || entry.tag === filters.tag;
  if (!tagMatches) return false;
  if (!query) return true;

  return searchableText(entry).toLowerCase().includes(query);
}

function matchesNoteCategory(entry) {
  return filters.noteCategory === "all" || entry.tag === filters.noteCategory;
}

function searchableText(entry) {
  return [
    entry.title,
    entry.tag,
    entry.stage,
    entry.author,
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

function renderNoteCategories(entries) {
  if (!discovery.noteCategories) return;

  const categories = [...new Set(entries.map((entry) => entry.tag).filter(Boolean))];
  if (!categories.includes(filters.noteCategory)) filters.noteCategory = "all";

  const tabs = ["all", ...categories];
  discovery.noteCategories.replaceChildren();

  tabs.forEach((category) => {
    const count = category === "all"
      ? entries.length
      : entries.filter((entry) => entry.tag === category).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = category === filters.noteCategory ? "is-active" : "";
    button.textContent = category === "all" ? `全部笔记 ${count}` : `${category} ${count}`;
    button.addEventListener("click", () => {
      filters.noteCategory = category;
      render();
    });
    discovery.noteCategories.append(button);
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
      <small>${escapeHtml(entry.tag || kindLabel(entry.kind))} · ${escapeHtml(authorName(entry))}</small>
    </a>
  `;
}

function renderFilterStatus(filteredCount, totalCount) {
  discovery.status.textContent = `${filteredCount} / ${totalCount} posts`;
  discovery.clear.disabled = !filters.query && filters.tag === "all" && filters.noteCategory === "all";
}

function renderSearchResults(entries) {
  if (!discovery.results) return;

  const query = filters.query.trim().toLowerCase();
  discovery.results.replaceChildren();
  discovery.results.hidden = !query;
  if (!query) return;

  const rankedEntries = entries
    .map((entry) => ({
      entry,
      score: searchRank(entry, query),
      snippet: searchSnippet(entry, query),
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score || comparePosts(left.entry, right.entry));

  if (!rankedEntries.length) {
    const empty = document.createElement("p");
    empty.textContent = "No matching posts / 没有匹配文章";
    discovery.results.append(empty);
    return;
  }

  rankedEntries.slice(0, 8).forEach(({ entry, snippet }) => {
    const link = document.createElement("a");
    link.href = postHref(entry);
    link.innerHTML = `
      <span>${escapeHtml(kindLabel(entry.kind))} · ${escapeHtml(entry.tag || "")}</span>
      <strong>${escapeHtml(entry.title)}</strong>
      <small>${escapeHtml(authorName(entry))} · ${snippet || escapeHtml(previewText(entry, "Open post / 打开文章"))}</small>
    `;
    discovery.results.append(link);
  });
}

function searchRank(entry, query) {
  const fields = [
    [entry.title, 90],
    [entry.tag, 58],
    [entry.stage, 48],
    [entry.author, 42],
    [entry.excerpt, 30],
    [stripHtml(entry.html || ""), 18],
  ];

  return fields.reduce((score, [value, weight]) => {
    const text = String(value || "").toLowerCase();
    if (!text.includes(query)) return score;
    const positionBonus = Math.max(0, 18 - text.indexOf(query));
    return score + weight + positionBonus;
  }, 0);
}

function searchSnippet(entry, query) {
  const fields = [
    entry.title,
    entry.excerpt,
    stripHtml(entry.html || ""),
  ].filter(Boolean);
  const source = fields.find((value) => String(value).toLowerCase().includes(query)) || fields[0] || "";
  const text = String(source).replace(/\s+/g, " ").trim();
  const lower = text.toLowerCase();
  const index = lower.indexOf(query);
  if (index < 0) return "";

  const start = Math.max(0, index - 24);
  const end = Math.min(text.length, index + query.length + 42);
  const prefix = start > 0 ? "..." : "";
  const suffix = end < text.length ? "..." : "";
  const before = escapeHtml(text.slice(start, index));
  const match = escapeHtml(text.slice(index, index + query.length));
  const after = escapeHtml(text.slice(index + query.length, end));
  return `匹配：${prefix}${before}<mark>${match}</mark>${after}${suffix}`;
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
  disconnectTocObserver();
  if (views.progress) views.progress.style.transform = "scaleX(0)";
  document.title = "qqqzj@Crane";
  typesetMath();
}

function navigateHomeTop(behavior = "smooth") {
  if (window.location.hash !== "#home") {
    window.location.hash = "home";
  }

  showHome();
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior });
  });
}

function showPostDetail(entry) {
  closeSearchResults();
  views.home.hidden = true;
  views.detail.hidden = false;
  views.detailKind.textContent = kindLabel(entry.kind);
  views.detailTitle.textContent = entry.title;
  views.detailMeta.innerHTML = `
    <time datetime="${entry.createdAt}">${formatDate(entry.createdAt)}</time>
    <span>${escapeHtml(entry.tag || entry.stage || "")}</span>
    ${authorChip(entry)}
    <span>${escapeHtml(readTimeLabel(entry))}</span>
  `;
  views.detailBody.innerHTML = `
    ${entry.url ? `<div class="detail-video-frame">${videoMarkup(entry.url, entry.title)}</div>` : ""}
    ${bodyMarkup(entry)}
  `;
  renderPostToc(entry);
  setupTocHighlight(views.detailToc, views.detailBody);
  renderNeighborNav(entry);
  document.title = `${entry.title} · qqqzj@Crane`;
  hydrateFilePreviews(views.detailBody);
  typesetMath();
  window.scrollTo({ top: 0, behavior: "auto" });
  updateReadingProgress();
}

function renderPostToc(entry) {
  if (!views.detailToc) return;

  const headings = Array.isArray(entry.headings) ? entry.headings : [];
  views.detailToc.replaceChildren();
  views.detailToc.hidden = headings.length < 2;
  views.detailToc.classList.remove("is-open");
  if (views.detailToc.hidden) return;

  views.detailToc.innerHTML = `
    <strong>Contents 目录</strong>
    <div>
      ${headings.map((heading) => `<a class="toc-level-${heading.level}" href="#${escapeAttribute(heading.id)}" data-heading-id="${escapeAttribute(heading.id)}">${escapeHtml(heading.title)}</a>`).join("")}
    </div>
  `;
}

function setupTocHighlight(toc, contentRoot) {
  disconnectTocObserver();
  if (!toc || toc.hidden || !contentRoot) return;

  const links = [...toc.querySelectorAll("a[data-heading-id]")];
  const sections = links
    .map((link) => findHeadingById(contentRoot, link.dataset.headingId))
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  let tocClickLockUntil = 0;

  const activate = (id) => {
    links.forEach((link) => {
      const active = link.dataset.headingId === id;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const heading = findHeadingById(contentRoot, link.dataset.headingId);
      if (!heading) return;
      event.preventDefault();
      scrollToHeading(heading.id);
      activate(heading.id);
      tocClickLockUntil = Date.now() + 900;
    });
  });

  activate(sections[0].id);

  if (!("IntersectionObserver" in window)) return;

  const visibleSections = new Map();
  tocObserver = new IntersectionObserver((entries) => {
    if (Date.now() < tocClickLockUntil) return;

    entries.forEach((entry) => {
      visibleSections.set(entry.target.id, entry.isIntersecting);
    });

    const current = sections.find((section) => visibleSections.get(section.id))
      || [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 140)
      || sections[0];

    activate(current.id);
  }, {
    rootMargin: "-18% 0px -68% 0px",
    threshold: [0, 1],
  });

  sections.forEach((section) => tocObserver.observe(section));
}

function disconnectTocObserver() {
  if (!tocObserver) return;
  tocObserver.disconnect();
  tocObserver = null;
}

function findHeadingById(root, id) {
  if (!root || !id) return null;
  const escapedId = window.CSS?.escape ? window.CSS.escape(id) : id.replaceAll('"', '\\"');
  return root.querySelector(`#${escapedId}`);
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

const contactCopy = document.querySelector(".contact-copy");
const contactCopyText = contactCopy?.querySelector("small");

contactCopy?.addEventListener("click", async () => {
  const user = contactCopy.dataset.emailUser || "";
  const domain = contactCopy.dataset.emailDomain || "";
  const email = `${user}@${domain}`;
  if (!user || !domain || !contactCopyText) return;

  try {
    await navigator.clipboard.writeText(email);
    contactCopyText.textContent = "Copied / 已复制";
  } catch {
    contactCopyText.textContent = email;
  }

  window.setTimeout(() => {
    contactCopyText.textContent = "Click to copy / 点击复制";
  }, 2200);
});

views.detailToc?.addEventListener("click", (event) => {
  const link = event.target.closest("[data-heading-id]");
  if (!link) {
    views.detailToc.classList.toggle("is-open");
    return;
  }

  event.preventDefault();
  views.detailToc.classList.remove("is-open");
  scrollToHeading(link.dataset.headingId);
});

document.addEventListener("click", (event) => {
  if (!views.detailToc || views.detailToc.hidden || views.detailToc.contains(event.target)) return;
  views.detailToc.classList.remove("is-open");
});

homeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navigateHomeTop();
  });
});

discovery.panel?.addEventListener("pointerdown", (event) => {
  if (event.target.closest("input, button, a")) return;
  event.preventDefault();
  discovery.search?.focus();
});

views.detailBody?.addEventListener("click", async (event) => {
  const link = event.target.closest(".heading-anchor");
  if (!link) return;

  event.preventDefault();
  const id = link.dataset.headingId || link.getAttribute("href")?.replace(/^#/, "");
  scrollToHeading(id);
  await copyText(sectionLink(id));
});

views.jumpTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);

function scrollToHeading(id) {
  if (!id) return;
  const heading = document.getElementById(id);
  if (!heading) return;
  const topbarHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
  const offset = topbarHeight + 8;
  const top = heading.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function sectionLink(id) {
  const route = window.location.hash.match(/^#post\/(.+)$/);
  const entry = route
    ? allEntries().find((post) => postKey(post) === decodeURIComponent(route[1]))
    : null;

  if (entry?.slug) {
    return `${new URL(`post/${encodeURIComponent(entry.slug)}/`, window.location.href).href}${id ? `#${id}` : ""}`;
  }

  return `${window.location.href.split("#")[0]}${id ? `#${id}` : ""}`;
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    // Clipboard can fail on file:// preview; the visible anchor still works as a fallback.
  }
}

function updateReadingProgress() {
  if (!views.progress) return;
  if (views.detail.hidden) {
    views.progress.style.transform = "scaleX(0)";
    return;
  }

  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max <= 0 ? 1 : Math.min(1, Math.max(0, window.scrollY / max));
  views.progress.style.transform = `scaleX(${progress})`;
}

// 互动小人的台词和点击动画。
const mascotWidget = document.querySelector("#mascot-widget");
const mascotBubble = document.querySelector("#mascot-bubble");
const helloBurst = document.querySelector("#hello-burst");
const mascotLines = {
  home: [
    "今日也要优雅记录 / Keep it elegant.",
    "水面会记得每一次前进 / Every ripple counts.",
    "新的灵感登场了 / A new idea enters the stage.",
    "欢迎回到 Crane 的小剧场。",
    "先看最近更新，还是直接开写？",
    "今天也有一点点进度，已经很好。",
    "把碎片收起来，日后会发光。",
  ],
  about: [
    "这里是 Crane 的小小剧场 / Welcome backstage.",
    "慢慢写，慢慢变好 / Becoming better counts.",
    "我会帮你守着这片水面 / I am watching the archive.",
    "这里放的是关于你的线索。",
    "安静的系统，也可以很漂亮。",
    "个人站嘛，要像自己才好。",
    "成长不是宣言，是每天留下的一点痕迹。",
  ],
  news: [
    "公告板有新剧情吗 / Any new chapter today?",
    "把变化记下来，就是站点的心跳。",
    "今天的更新也值得被看见。",
    "这条动态可以写得短一点，没关系。",
    "修过的细节，也算一次小胜利。",
    "网站在慢慢长出自己的样子。",
    "发布前再看一眼标题，优雅但谨慎。",
  ],
  notes: [
    "笔记区开演 / Study scene begins.",
    "公式不要怕，先把思路写下来。",
    "把难题拆小，掌声就会变近。",
    "不会的地方，先标出来就赢一半。",
    "今日份知识点，正在入座。",
    "证明可以慢慢补，结构先搭起来。",
    "复习不是重来，是把路走顺一点。",
    "这一步如果卡住，就换个角度看。",
  ],
  life: [
    "生活片段也有主角光 / Tiny moments matter.",
    "去写一条 Life 吧 / Capture a tiny life moment.",
    "今天的小事，也可以存档。",
    "浪费掉的一天，也可能有可爱的证据。",
    "照片、天气、晚饭，都可以成为文章。",
    "生活不一定宏大，但可以被温柔记录。",
    "这一幕值得留一下。",
  ],
  post: [
    "读到这里辛苦啦 / Good progress.",
    "双击我，可以回到开头。",
    "这一节要不要复制链接留个锚点？",
    "如果看累了，可以先停在这里。",
    "长文也可以一段一段读。",
    "这个标题看起来很重要。",
    "读完这一节就给自己一点掌声。",
    "需要回顶部的话，我在右下角。",
  ],
};
const mascotMoods = ["is-twirl", "is-bow", "is-wave"];
let mascotTimer;
let mascotClickTimer;
let lastMascotLine = "";
let mascotTapCount = 0;
let mascotTapTimer;
const helloWords = ["你好呀"];

// 重新触发动画的小技巧：移除 class，读取 offsetWidth，再加回 class。
mascotWidget?.addEventListener("click", () => {
  mascotTapCount += 1;
  playMascotTapFeedback();
  window.clearTimeout(mascotClickTimer);
  mascotClickTimer = window.setTimeout(() => {
    showMascotLine(randomMascotLine(), { preserveCombo: true, sparkle: true });
  }, 210);
});

mascotWidget?.addEventListener("dblclick", (event) => {
  event.preventDefault();
  window.clearTimeout(mascotClickTimer);
  mascotTapCount = 0;
  const inPost = window.location.hash.startsWith("#post/");
  showMascotLine(inPost ? "回到文章开头 / Back to the opening." : "回到舞台中央 / Back to top.", {
    mood: "is-bow",
    resetCombo: true,
    sparkle: true,
  });

  if (inPost) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    navigateHomeTop();
  }
});

function showMascotLine(line, options = {}) {
  if (!mascotWidget || !mascotBubble) return;

  if (!options.preserveCombo) mascotTapCount = options.resetCombo ? 0 : mascotTapCount + 1;
  const comboMood = mascotTapCount >= 4 ? "is-curtain-call" : "";
  const mood = comboMood || options.mood || mascotMoods[Math.floor(Math.random() * mascotMoods.length)];
  lastMascotLine = line;
  mascotBubble.textContent = comboMood ? "连击成功 / Encore!" : line;
  mascotWidget.classList.remove("is-excited", "is-combo", "is-curtain-call", ...mascotMoods);
  void mascotWidget.offsetWidth;
  mascotWidget.classList.add("is-speaking", "is-excited", mood);
  if (mascotTapCount >= 2) mascotWidget.classList.add("is-combo");
  if (options.sparkle) addMascotSparkles();

  window.clearTimeout(mascotTimer);
  mascotTimer = window.setTimeout(() => {
    mascotTapCount = 0;
    mascotWidget.classList.remove("is-speaking", "is-excited", "is-combo", "is-curtain-call", ...mascotMoods);
  }, 2600);
}

function playMascotTapFeedback() {
  if (!mascotWidget) return;
  mascotWidget.classList.remove("is-quick-tap");
  void mascotWidget.offsetWidth;
  mascotWidget.classList.add("is-quick-tap");
  if (mascotTapCount >= 2) mascotWidget.classList.add("is-combo");
  if (mascotTapCount >= 3) addMascotSparkles();

  window.clearTimeout(mascotTapTimer);
  mascotTapTimer = window.setTimeout(() => {
    mascotWidget.classList.remove("is-quick-tap");
  }, 360);
}

function randomMascotLine() {
  const pool = mascotLines[mascotContext()] || mascotLines.home;
  const candidates = pool.length > 1 ? pool.filter((line) => line !== lastMascotLine) : pool;
  return candidates[Math.floor(Math.random() * candidates.length)] || pool[0] || "Bonjour / 你好呀";
}

function mascotContext() {
  const hash = window.location.hash || "#home";
  if (hash.startsWith("#post/")) return "post";
  if (hash.includes("about")) return "about";
  if (hash.includes("news") || hash.includes("growth")) return "news";
  if (hash.includes("notes")) return "notes";
  if (hash.includes("life")) return "life";
  return "home";
}

function addMascotSparkles() {
  if (!mascotWidget) return;
  const points = [
    ["8px", "52%", "-18px", "-18px"],
    ["58%", "18%", "12px", "-24px"],
    ["76%", "60%", "20px", "2px"],
  ];

  points.forEach(([left, top, dx, dy], index) => {
    const sparkle = document.createElement("span");
    sparkle.className = "mascot-sparkle";
    sparkle.style.left = left;
    sparkle.style.top = top;
    sparkle.style.setProperty("--dx", dx);
    sparkle.style.setProperty("--dy", dy);
    sparkle.style.setProperty("--delay", `${index * 45}ms`);
    mascotWidget.append(sparkle);
    window.setTimeout(() => sparkle.remove(), 980);
  });
}

function playHelloBurst() {
  if (!helloBurst) return;

  helloBurst.replaceChildren();
  helloWords.forEach((word, index) => {
    const spark = document.createElement("span");
    spark.className = "hello-spark";
    spark.textContent = word;
    spark.style.setProperty("--dx", "6px");
    spark.style.setProperty("--dy", "0px");
    spark.style.setProperty("--delay", `${index * 80}ms`);
    helloBurst.append(spark);
  });

  window.setTimeout(() => {
    helloBurst.replaceChildren();
  }, 1700);
}

window.setTimeout(playHelloBurst, 700);

discovery.search?.addEventListener("input", (event) => {
  filters.query = event.target.value;
  scheduleSearchRender();
});

discovery.search?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  const query = filters.query.trim().toLowerCase();
  if (!query) return;
  const [firstMatch] = allEntries()
    .filter(matchesFilters)
    .sort((left, right) => searchRank(right, query) - searchRank(left, query) || comparePosts(left, right));
  if (!firstMatch) return;

  event.preventDefault();
  window.location.hash = postHref(firstMatch);
});

discovery.clear?.addEventListener("click", () => {
  filters.query = "";
  filters.tag = "all";
  filters.noteCategory = "all";
  discovery.search.value = "";
  closeSearchResults();
  render();
});

function scheduleSearchRender() {
  window.clearTimeout(searchRenderTimer);
  searchRenderTimer = window.setTimeout(render, SEARCH_RENDER_DELAY);
}

function closeSearchResults() {
  if (!discovery.results) return;
  discovery.results.hidden = true;
  discovery.results.replaceChildren();
}

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
  return renderMarkdown(markdown).html;
}

function renderMarkdown(markdown) {
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const context = {
    headings: [],
    headingIds: new Map(),
  };

  const html = blocks
    .map((block) => {
      const file = fileMarkdown(block);
      if (file) return file;

      const media = mediaMarkdown(block);
      if (media) return media;

      const callout = calloutMarkdown(block);
      if (callout) return callout;

      const fence = codeFenceMarkdown(block);
      if (fence) return fence;

      if (/^\$\$[\s\S]*\$\$$/.test(block)) {
        return `<div class="math-display">${escapeHtml(block)}</div>`;
      }

      if (/^-{3,}$/.test(block)) return "<hr />";

      const table = tableMarkdown(block);
      if (table) return table;

      const quote = blockquoteMarkdown(block);
      if (quote) return quote;

      if (/^####\s+/.test(block)) return headingMarkdown(block.replace(/^####\s+/, ""), 5, context, 6);
      if (/^###\s+/.test(block)) return headingMarkdown(block.replace(/^###\s+/, ""), 5, context, 5);
      if (/^##\s+/.test(block)) return headingMarkdown(block.replace(/^##\s+/, ""), 4, context, 4);
      if (/^#\s+/.test(block)) return headingMarkdown(block.replace(/^#\s+/, ""), 4, context, 3);

      const lines = block.split("\n").filter(Boolean);

      if (lines.length > 0 && lines.every((line) => /^\s*[-*]\s+/.test(line))) {
        const items = block
          .split("\n")
          .filter((line) => /^\s*[-*]\s+/.test(line))
          .map((line) => `<li>${inlineMarkdown(line.replace(/^\s*[-*]\s+/, ""))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      if (lines.length > 0 && lines.every((line) => /^\s*\d+\.\s+/.test(line))) {
        const items = block
          .split("\n")
          .filter((line) => /^\s*\d+\.\s+/.test(line))
          .map((line) => `<li>${inlineMarkdown(line.replace(/^\s*\d+\.\s+/, ""))}</li>`)
          .join("");
        return `<ol>${items}</ol>`;
      }

      return paragraphMarkdown(block);
    })
    .join("");

  return { html, headings: context.headings };
}

function headingMarkdown(value, level, context, tocLevel = level) {
  const title = plainInlineText(value);
  const id = uniqueHeadingId(title, context.headingIds);
  context.headings.push({ id, title, level: tocLevel });

  return `<h${level} id="${escapeAttribute(id)}">${inlineMarkdown(value)}<a class="heading-anchor" href="#${escapeAttribute(id)}" data-heading-id="${escapeAttribute(id)}" aria-label="Copy section link / 复制小节链接">#</a></h${level}>`;
}

function uniqueHeadingId(value, seen) {
  const base = slugify(value) || "section";
  const count = seen.get(base) || 0;
  seen.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

function slugify(value) {
  return plainInlineText(value)
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function plainInlineText(value) {
  return String(value)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function paragraphMarkdown(block) {
  const html = inlineMarkdown(block);
  if (block.includes("$$")) return `<p>${html}</p>`;
  return `<p>${html.replaceAll("\n", "<br />")}</p>`;
}

function codeFenceMarkdown(block) {
  const match = block.match(/^```([a-z0-9_-]+)?\n([\s\S]*?)\n```$/i);
  if (!match) return "";

  const language = match[1] ? ` data-language="${escapeAttribute(match[1])}"` : "";
  return `<pre${language}><code>${escapeHtml(match[2])}</code></pre>`;
}

function tableMarkdown(block) {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
  if (lines.length < 2 || !isTableDivider(lines[1]) || !lines[0].includes("|")) return "";

  const headers = splitTableRow(lines[0]);
  if (headers.length < 2) return "";

  const rows = lines.slice(2).map(splitTableRow).filter((row) => row.length);
  return `<div class="table-scroll"><table><thead><tr>${headers.map((header) => `<th>${inlineMarkdown(header)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${headers.map((_, index) => `<td>${inlineMarkdown(row[index] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function isTableDivider(value) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(value);
}

function splitTableRow(value) {
  return value
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function blockquoteMarkdown(block) {
  const lines = block.split("\n");
  if (!lines.every((line) => /^>\s?/.test(line))) return "";

  const text = lines.map((line) => line.replace(/^>\s?/, "")).join("\n");
  return `<blockquote>${paragraphMarkdown(text).replace(/^<p>|<\/p>$/g, "")}</blockquote>`;
}

function calloutMarkdown(block) {
  const github = parseGithubCallout(block);
  if (github) return calloutMarkup(github.type, github.title, github.body);

  const fenced = parseFencedCallout(block);
  if (fenced) return calloutMarkup(fenced.type, fenced.title, fenced.body);

  return "";
}

function parseGithubCallout(block) {
  const lines = block.split("\n");
  if (!lines.length || !lines.every((line) => /^>\s?/.test(line))) return null;

  const first = lines[0].replace(/^>\s?/, "").trim();
  const match = first.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|THEOREM|PROOF|EXAMPLE|DEFINITION|LEMMA|COROLLARY)\]\s*(.*)$/i);
  if (!match) return null;

  const body = lines.slice(1).map((line) => line.replace(/^>\s?/, "")).join("\n").trim();
  return {
    type: match[1].toLowerCase(),
    title: match[2].trim(),
    body,
  };
}

function parseFencedCallout(block) {
  const match = block.match(/^:::\s*(note|tip|important|warning|caution|theorem|proof|example|definition|lemma|corollary)(?:\s+([^\n]+))?\n([\s\S]*?)\n:::$/i);
  if (!match) return null;

  return {
    type: match[1].toLowerCase(),
    title: (match[2] || "").trim(),
    body: match[3].trim(),
  };
}

function calloutMarkup(type, title, body) {
  const normalized = calloutType(type);
  const label = title || calloutTitle(normalized);
  const content = body ? calloutBodyMarkdown(body) : "";
  return `<aside class="entry-callout callout-${normalized}"><strong>${escapeHtml(label)}</strong>${content}</aside>`;
}

function calloutBodyMarkdown(body) {
  return body
    .split(/\n{2,}/)
    .map((part) => paragraphMarkdown(part.trim()))
    .join("");
}

function calloutType(type) {
  if (type === "caution") return "warning";
  if (["note", "tip", "important", "warning", "theorem", "proof", "example", "definition", "lemma", "corollary"].includes(type)) return type;
  return "note";
}

function calloutTitle(type) {
  const labels = {
    note: "Note / 注意",
    tip: "Tip / 提示",
    important: "Important / 重点",
    warning: "Warning / 警告",
    theorem: "Theorem / 定理",
    proof: "Proof / 证明",
    example: "Example / 例题",
    definition: "Definition / 定义",
    lemma: "Lemma / 引理",
    corollary: "Corollary / 推论",
  };

  return labels[type] || labels.note;
}

function typesetMath() {
  if (typeof window.renderBlogMath === "function") {
    window.renderBlogMath(document.body);
    return;
  }

  if (!window.MathJax || typeof window.MathJax.typesetPromise !== "function") return;
  window.MathJax.typesetPromise([document.body]).catch(() => {});
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

function readingMinutes(markdown) {
  const text = markdownToPlainText(markdown);
  const cjkUnits = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  const wordUnits = (text.replace(/[\u4e00-\u9fa5]/g, " ").match(/[a-z0-9]+(?:[-'][a-z0-9]+)?/gi) || []).length;
  return Math.max(1, Math.ceil((cjkUnits + wordUnits) / READING_UNITS_PER_MINUTE));
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
  const codeSpans = [];
  let html = escapeHtml(value).replace(/`([^`]+)`/g, (_, code) => {
    const token = `@@INLINE_CODE_${codeSpans.length}@@`;
    codeSpans.push(inlineCodeMarkdown(code));
    return token;
  });

  html = html
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  codeSpans.forEach((replacement, index) => {
    html = html.replace(`@@INLINE_CODE_${index}@@`, replacement);
  });

  return html;
}

function inlineCodeMarkdown(escapedCode) {
  const rawCode = unescapeHtml(escapedCode);
  if (isFormulaCodeSpan(rawCode)) {
    return `<span class="math-inline">\\(${escapeHtml(mathCodeToLatex(rawCode))}\\)</span>`;
  }

  return `<code>${escapedCode}</code>`;
}

function isFormulaCodeSpan(value) {
  const text = String(value).trim();
  if (!text || /[\u4e00-\u9fa5]/.test(text) || /^https?:\/\//i.test(text)) return false;
  if (/^[\w.-]+\/[\w./-]+$/.test(text) && !/[=^<>+*()|]/.test(text)) return false;

  if (/^[A-Za-z](?:\d+|'{1,2})?$/.test(text)) return true;
  if (/^[A-Za-z]+_[A-Za-z0-9]+$/.test(text)) return true;
  if (/^(?:mg|bv|cv|at|kx|dx|dt|dr|dm|du|dv|dtheta|domega)$/i.test(text)) return true;
  if (/^[A-Za-z]\([^)]+\)$/.test(text)) return true;
  if (/[=^<>+*|]/.test(text)) return true;
  if (/^[A-Za-z][A-Za-z0-9_]*-[A-Za-z][A-Za-z0-9_]*$/.test(text)) return true;
  if (/\s[-/]\s/.test(text)) return true;

  return /\b(?:Delta|theta|omega|alpha|lambda|mu|tau|phi|pi|sqrt|integral|partial|sum|grad|approx|proportional|sin|cos|tan|ln|log|exp)\b/i.test(text);
}

function mathCodeToLatex(value) {
  let text = String(value).trim();

  text = text
    .replace(/\bproportional to\b/gi, "\\propto")
    .replace(/<=/g, "\\le ")
    .replace(/>=/g, "\\ge ")
    .replace(/!=/g, "\\ne ")
    .replace(/\s+\.\s+/g, " \\cdot ")
    .replace(/\bintegral\b/gi, "\\int")
    .replace(/\bpartial\b/gi, "\\partial")
    .replace(/\bDelta\b/g, "\\Delta")
    .replace(/\bsum\b/gi, "\\sum")
    .replace(/\bgrad\b/gi, "\\nabla")
    .replace(/\bapprox\b/gi, "\\approx");

  let previous;
  do {
    previous = text;
    text = text.replace(/\bsqrt\(([^()]+)\)/gi, "\\sqrt{$1}");
  } while (text !== previous);

  const commands = {
    alpha: "\\alpha",
    beta: "\\beta",
    gamma: "\\gamma",
    theta: "\\theta",
    lambda: "\\lambda",
    mu: "\\mu",
    omega: "\\omega",
    phi: "\\phi",
    pi: "\\pi",
    tau: "\\tau",
    sin: "\\sin",
    cos: "\\cos",
    tan: "\\tan",
    ln: "\\ln",
    log: "\\log",
    exp: "\\exp",
  };

  Object.entries(commands).forEach(([word, latex]) => {
    text = text
      .replace(new RegExp(`([A-Za-z0-9])${word}\\b`, "gi"), (_, prefix) => `${prefix}${latex}`)
      .replace(new RegExp(`\\b${word}(?=\\b|\\d|_)`, "gi"), (match, offset, fullText) => {
        return fullText[offset - 1] === "\\" ? match : latex;
      });
  });

  return text
    .replace(/(\\[A-Za-z]+|[A-Za-z]+)_([A-Za-z0-9]+)/g, "$1_{$2}")
    .replace(/(\\[A-Za-z]+|[A-Za-z])(\d+)/g, "$1_{$2}");
}

function unescapeHtml(value) {
  return String(value)
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&amp;", "&");
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
  if (extension === "pdf") {
    return `<details class="file-preview"><summary>Preview / 预览</summary><iframe src="${escapeAttribute(url)}" title="${escapeAttribute(fileName)}" loading="lazy"></iframe></details>`;
  }

  if (!["md", "markdown", "txt", "css", "csv", "json", "html", "js"].includes(extension)) return "";

  return `<details class="file-preview"><summary>Preview / 预览</summary><pre data-file-preview-url="${escapeAttribute(url)}"><code>Loading preview / 正在加载预览...</code></pre></details>`;
}

async function hydrateFilePreviews(root) {
  const previews = [...root.querySelectorAll("[data-file-preview-url]")];
  if (previews.length === 0) return;

  await Promise.all(previews.map(async (preview) => {
    const code = preview.querySelector("code");
    if (!code) return;

    try {
      const response = await fetch(preview.dataset.filePreviewUrl);
      if (!response.ok) throw new Error("Preview request failed");
      const text = await response.text();
      code.textContent = text.length > 50000 ? `${text.slice(0, 50000)}\n\n... preview truncated ...` : text;
    } catch {
      code.textContent = "Preview unavailable / 预览暂不可用";
    }
  }));
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
