(() => {
  const DEFAULT_CONFIG = {
    enabled: false,
    apiBase: "",
    maxLength: 2000,
  };

  function config() {
    return { ...DEFAULT_CONFIG, ...(window.CRANE_COMMENTS || {}) };
  }

  function render(container, post = {}) {
    if (!container) return;
    const settings = config();
    clear(container);

    if (!settings.enabled || !settings.apiBase) {
      container.hidden = true;
      return;
    }

    const term = commentTerm(post);
    container.hidden = false;
    container.innerHTML = shellMarkup(settings);
    bind(container, settings, term);
    load(container, settings, term);
  }

  function clear(container) {
    if (!container) return;
    container.replaceChildren();
  }

  function bind(container, settings, term) {
    container.addEventListener("submit", async (event) => {
      if (!event.target.matches("[data-comment-form]")) return;
      event.preventDefault();
      const textarea = event.target.querySelector("[name='comment']");
      const body = textarea?.value.trim() || "";
      if (!body) return setStatus(container, "写点内容再发。", "error");
      await mutate(container, settings, "POST", { term, body });
      textarea.value = "";
    });

    container.addEventListener("click", async (event) => {
      const action = event.target.closest("[data-comment-action]");
      if (!action) return;
      const id = action.dataset.commentId || "";
      const type = action.dataset.commentAction;

      if (type === "login") {
        window.location.href = loginUrl(settings);
        return;
      }

      if (type === "logout") {
        await logout(container, settings, term);
        return;
      }

      if (type === "edit") {
        const item = action.closest("[data-comment-id]");
        const current = item?.querySelector("[data-comment-body]")?.textContent || "";
        const body = window.prompt("编辑评论", current);
        if (body === null) return;
        if (!body.trim()) return setStatus(container, "评论不能为空。", "error");
        await mutate(container, settings, "PATCH", { term, id, body: body.trim() });
        return;
      }

      if (type === "delete") {
        const confirmed = window.confirm("删除这条评论？这个操作只会删除评论，不会影响文章。");
        if (!confirmed) return;
        await mutate(container, settings, "DELETE", { term, id });
      }
    });
  }

  async function load(container, settings, term) {
    setStatus(container, "正在读取评论...");
    try {
      const data = await request(settings, `/api/comments?term=${encodeURIComponent(term)}`);
      renderState(container, settings, term, data);
    } catch (error) {
      setStatus(container, error.message || "评论暂时读取失败。", "error");
    }
  }

  async function mutate(container, settings, method, payload) {
    setBusy(container, true);
    try {
      const data = await request(settings, "/api/comments", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      renderState(container, settings, payload.term, data);
    } catch (error) {
      setStatus(container, error.message || "操作失败。", "error");
    } finally {
      setBusy(container, false);
    }
  }

  async function logout(container, settings, term) {
    setBusy(container, true);
    try {
      await request(settings, "/api/comment-auth/logout", { method: "POST" });
      await load(container, settings, term);
    } catch (error) {
      setStatus(container, error.message || "退出失败。", "error");
    } finally {
      setBusy(container, false);
    }
  }

  async function request(settings, path, options = {}) {
    const response = await fetch(`${settings.apiBase}${path}`, {
      credentials: "include",
      ...options,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `Request failed: ${response.status}`);
    return data;
  }

  function renderState(container, settings, term, data) {
    const user = data.user || null;
    const comments = Array.isArray(data.comments) ? data.comments : [];
    const body = container.querySelector("[data-comments-body]");
    const composer = container.querySelector("[data-comment-composer]");
    if (!body || !composer) return;

    composer.innerHTML = user ? composerMarkup(user, settings) : loginMarkup(settings);
    body.innerHTML = comments.length ? comments.map(commentMarkup).join("") : '<p class="comment-empty">还没有评论。</p>';
    setStatus(container, comments.length ? `${comments.length} 条评论` : "暂无评论", "success");
    container.dataset.commentTerm = term;
  }

  function shellMarkup(settings) {
    return `
      <div class="comments-heading">
        <div>
          <p class="eyebrow">Comments 评论</p>
          <h2>留言区</h2>
        </div>
      </div>
      <div class="comments-panel">
        <p class="comment-status" data-comment-status aria-live="polite"></p>
        <div data-comment-composer></div>
        <div class="comment-list" data-comments-body></div>
      </div>
    `;
  }

  function loginMarkup() {
    return `
      <div class="comment-login">
        <p>使用 GitHub 登录后可以发表评论，并且可以编辑或删除自己的评论。</p>
        <button class="comment-button comment-button-primary" type="button" data-comment-action="login">GitHub 登录评论</button>
      </div>
    `;
  }

  function composerMarkup(user, settings) {
    return `
      <form class="comment-form" data-comment-form>
        <div class="comment-user">
          ${user.avatarUrl ? `<img src="${escapeAttribute(user.avatarUrl)}" alt="" width="32" height="32" />` : ""}
          <span>${escapeHtml(user.login)}</span>
          <button class="comment-link-button" type="button" data-comment-action="logout">退出</button>
        </div>
        <textarea name="comment" maxlength="${Number(settings.maxLength) || 2000}" placeholder="写下你的评论..." required></textarea>
        <div class="comment-form-actions">
          <small>你可以随时编辑或删除自己的评论。</small>
          <button class="comment-button comment-button-primary" type="submit">发表评论</button>
        </div>
      </form>
    `;
  }

  function commentMarkup(comment) {
    const updated = comment.updatedAt && comment.updatedAt !== comment.createdAt ? " · 已编辑" : "";
    return `
      <article class="comment-item" data-comment-id="${escapeAttribute(comment.id)}">
        <header>
          <div class="comment-user">
            ${comment.author?.avatarUrl ? `<img src="${escapeAttribute(comment.author.avatarUrl)}" alt="" width="32" height="32" />` : ""}
            <strong>${escapeHtml(comment.author?.login || "unknown")}</strong>
            <time datetime="${escapeAttribute(comment.createdAt || "")}">${escapeHtml(formatTime(comment.createdAt))}${updated}</time>
          </div>
          ${comment.canEdit || comment.canDelete ? `
            <div class="comment-actions">
              ${comment.canEdit ? `<button class="comment-link-button" type="button" data-comment-action="edit" data-comment-id="${escapeAttribute(comment.id)}">编辑</button>` : ""}
              ${comment.canDelete ? `<button class="comment-link-button is-danger" type="button" data-comment-action="delete" data-comment-id="${escapeAttribute(comment.id)}">删除</button>` : ""}
            </div>
          ` : ""}
        </header>
        <p data-comment-body>${formatBody(comment.body)}</p>
      </article>
    `;
  }

  function setStatus(container, message, type = "") {
    const status = container.querySelector("[data-comment-status]");
    if (!status) return;
    status.textContent = message || "";
    status.classList.toggle("is-error", type === "error");
    status.classList.toggle("is-success", type === "success");
  }

  function setBusy(container, busy) {
    container.querySelectorAll("button, textarea").forEach((control) => {
      control.disabled = busy;
    });
  }

  function commentTerm(post = {}) {
    const raw = post.commentTerm || post.slug || post.key || post.id || document.title || window.location.pathname;
    return String(raw).startsWith("post:") ? String(raw) : `post:${raw}`;
  }

  function loginUrl(settings) {
    const url = new URL("/api/auth/start", settings.apiBase);
    url.searchParams.set("mode", "comment");
    url.searchParams.set("return_to", window.location.href);
    return url.toString();
  }

  function formatBody(value) {
    return escapeHtml(value).replace(/\n/g, "<br>");
  }

  function formatTime(value) {
    const date = new Date(value || Date.now());
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }

  window.CraneComments = {
    render,
    clear,
  };
})();
