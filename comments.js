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

  function focus(container) {
    if (!container || container.hidden) return;
    scrollToComments(container);
    window.setTimeout(() => {
      const target = container.querySelector("textarea:not(:disabled), [data-comment-action='login']:not(:disabled)");
      target?.focus({ preventScroll: true });
    }, 260);
  }

  function scrollToComments(container) {
    const offset = commentScrollOffset();
    container.style.setProperty("--comment-focus-spacer", "0px");

    const desiredTop = commentScrollTop(container, offset);
    const missingScroll = desiredTop - maxPageScroll();
    if (missingScroll > 0) {
      container.style.setProperty("--comment-focus-spacer", `${Math.ceil(missingScroll + offset + 24)}px`);
    }

    window.requestAnimationFrame(() => {
      const top = commentScrollTop(container, offset);
      window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: "smooth" });
    });
  }

  function commentScrollOffset() {
    const topbar = document.querySelector(".topbar");
    const topbarRect = topbar?.getBoundingClientRect();
    const topbarHeight = topbarRect && topbarRect.bottom > 0 ? topbarRect.height : 0;
    return topbarHeight + Math.max(16, Math.min(28, window.innerHeight * 0.03));
  }

  function commentScrollTop(container, offset) {
    return container.getBoundingClientRect().top + window.scrollY - offset;
  }

  function maxPageScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  function bind(container, settings, term) {
    container.addEventListener("submit", async (event) => {
      if (event.target.matches("[data-comment-email-start]")) {
        event.preventDefault();
        await startEmailLogin(container, settings);
        return;
      }

      if (event.target.matches("[data-comment-email-verify]")) {
        event.preventDefault();
        await verifyEmailLogin(container, settings, term, event.target);
        return;
      }

      if (!event.target.matches("[data-comment-form]")) return;
      event.preventDefault();
      const textarea = event.target.querySelector("[name='comment']");
      const parentId = event.target.dataset.parentId || "";
      const body = textarea?.value.trim() || "";
      if (!body) return setStatus(container, "写点内容再发。", "error");
      const ok = await mutate(container, settings, "POST", { term, body, parentId });
      if (ok) textarea.value = "";
    });

    container.addEventListener("click", async (event) => {
      const action = event.target.closest("[data-comment-action]");
      if (!action) return;
      const id = action.dataset.commentId || "";
      const type = action.dataset.commentAction;

      if (type === "login") {
        rememberCommentFocus();
        window.location.href = loginUrl(settings);
        return;
      }

      if (type === "email-reset") {
        const composer = container.querySelector("[data-comment-composer]");
        if (composer) composer.innerHTML = loginMarkup(settings);
        setStatus(container, "可以重新输入 QQ 邮箱。");
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

      if (type === "reply") {
        openReplyForm(container, action, settings);
        return;
      }

      if (type === "cancel-reply") {
        action.closest("[data-reply-slot]")?.replaceChildren();
        return;
      }

      if (type === "delete") {
        const confirmed = window.confirm("删除这条评论？如果它下面有回复，也会一起删除。");
        if (!confirmed) return;
        await mutate(container, settings, "DELETE", { term, id });
      }
    });
  }

  async function startEmailLogin(container, settings) {
    const form = container.querySelector("[data-comment-email-start]");
    const name = form?.querySelector("[name='name']")?.value.trim() || "";
    const email = form?.querySelector("[name='email']")?.value.trim() || "";
    if (!name) return setStatus(container, "请填写显示昵称。", "error");
    if (!/^[1-9]\d{4,11}@qq\.com$/i.test(email)) return setStatus(container, "请填写 QQ 邮箱。", "error");

    setBusy(container, true);
    try {
      const data = await request(settings, "/api/comment-email-start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const composer = container.querySelector("[data-comment-composer]");
      if (composer) composer.innerHTML = emailCodeMarkup(data.email || email);
      setStatus(container, "验证码已发送，请查看 QQ 邮箱。", "success");
    } catch (error) {
      setStatus(container, error.message || "验证码发送失败。", "error");
    } finally {
      setBusy(container, false);
    }
  }

  async function verifyEmailLogin(container, settings, term, form) {
    const code = form?.querySelector("[name='code']")?.value.trim() || "";
    if (!/^\d{6}$/.test(code)) return setStatus(container, "请输入 6 位验证码。", "error");

    setBusy(container, true);
    try {
      await request(settings, "/api/comment-email-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      await load(container, settings, term);
      setStatus(container, "QQ 邮箱登录成功。", "success");
    } catch (error) {
      setStatus(container, error.message || "登录失败。", "error");
    } finally {
      setBusy(container, false);
    }
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
      return true;
    } catch (error) {
      setStatus(container, error.message || "操作失败。", "error");
      return false;
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
      setStatus(container, "正在跳转退出...", "success");
      rememberCommentFocus();
      window.location.href = logoutUrl(settings);
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
    const thread = threadComments(comments);
    body.innerHTML = comments.length
      ? thread.roots.map((comment) => commentMarkup(comment, user, thread)).join("")
      : '<p class="comment-empty">还没有评论。</p>';
    setStatus(container, comments.length ? `${comments.length} 条评论` : "暂无评论", "success");
    container.dataset.commentTerm = term;
    restoreCommentFocus(container);
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
        <p>登录后可以发表评论、回复，并且编辑或删除自己的评论。</p>
        <div class="comment-login-grid">
          <form class="comment-email-form" data-comment-email-start>
            <input name="name" type="text" maxlength="32" autocomplete="nickname" placeholder="显示昵称" required />
            <input name="email" type="email" inputmode="email" autocomplete="email" placeholder="QQ 邮箱" required />
            <button class="comment-button comment-button-primary" type="submit">QQ 邮箱登录</button>
          </form>
          <div class="comment-github-login">
            <button class="comment-button comment-button-primary" type="button" data-comment-action="login">GitHub 登录</button>
          </div>
        </div>
      </div>
    `;
  }

  function emailCodeMarkup(email) {
    return `
      <div class="comment-login">
        <p>验证码已发送到 ${escapeHtml(email)}。</p>
        <form class="comment-email-form comment-email-code-form" data-comment-email-verify>
          <input name="code" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="\\d{6}" placeholder="6 位验证码" required />
          <div class="comment-login-actions">
            <button class="comment-button comment-button-primary" type="submit">完成登录</button>
            <button class="comment-link-button" type="button" data-comment-action="email-reset">换一个邮箱</button>
          </div>
        </form>
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
          <small>你可以回复他人，也可以随时编辑或删除自己的评论。</small>
          <button class="comment-button comment-button-primary" type="submit">发表评论</button>
        </div>
      </form>
    `;
  }

  function commentMarkup(comment, user, thread, depth = 0) {
    const updated = comment.updatedAt && comment.updatedAt !== comment.createdAt ? " · 已编辑" : "";
    const parent = comment.parentId ? thread.byId.get(comment.parentId) : null;
    const replies = thread.children.get(comment.id) || [];
    const author = commentAuthorName(comment.author);
    const relation = parent ? `
      <p class="comment-reply-context">回复 <strong>@${escapeHtml(commentAuthorName(parent.author))}</strong></p>
    ` : "";
    return `
      <article class="comment-item" data-comment-id="${escapeAttribute(comment.id)}">
        <header>
          <div class="comment-user">
            ${comment.author?.avatarUrl ? `<img src="${escapeAttribute(comment.author.avatarUrl)}" alt="" width="32" height="32" />` : ""}
            <strong>${escapeHtml(author)}</strong>
            <time datetime="${escapeAttribute(comment.createdAt || "")}">${escapeHtml(formatTime(comment.createdAt))}${updated}</time>
          </div>
          ${user || comment.canEdit || comment.canDelete ? `
            <div class="comment-actions">
              ${user ? `<button class="comment-link-button" type="button" data-comment-action="reply" data-comment-id="${escapeAttribute(comment.id)}" data-comment-author="${escapeAttribute(author)}">回复</button>` : ""}
              ${comment.canEdit ? `<button class="comment-link-button" type="button" data-comment-action="edit" data-comment-id="${escapeAttribute(comment.id)}">编辑</button>` : ""}
              ${comment.canDelete ? `<button class="comment-link-button is-danger" type="button" data-comment-action="delete" data-comment-id="${escapeAttribute(comment.id)}">删除</button>` : ""}
            </div>
          ` : ""}
        </header>
        ${relation}
        <p data-comment-body>${formatBody(comment.body)}</p>
        <div class="comment-reply-slot" data-reply-slot="${escapeAttribute(comment.id)}"></div>
        ${replies.length ? `
          <div class="comment-replies">
            ${replies.map((reply) => commentMarkup(reply, user, thread, depth + 1)).join("")}
          </div>
        ` : ""}
      </article>
    `;
  }

  function openReplyForm(container, action, settings) {
    const parentId = action.dataset.commentId || "";
    const author = action.dataset.commentAuthor || "unknown";
    const slots = [...container.querySelectorAll("[data-reply-slot]")];
    const slot = slots.find((item) => item.dataset.replySlot === parentId);
    if (!slot) return;

    slots.forEach((item) => {
      if (item !== slot) item.replaceChildren();
    });

    slot.innerHTML = replyFormMarkup(settings, parentId, author);
    slot.querySelector("textarea")?.focus();
  }

  function replyFormMarkup(settings, parentId, author) {
    return `
      <form class="comment-form comment-reply-form" data-comment-form data-parent-id="${escapeAttribute(parentId)}">
        <p class="comment-reply-target">回复 @${escapeHtml(author)}</p>
        <textarea name="comment" maxlength="${Number(settings.maxLength) || 2000}" placeholder="写下你的回复..." required></textarea>
        <div class="comment-form-actions">
          <button class="comment-link-button" type="button" data-comment-action="cancel-reply">取消</button>
          <button class="comment-button comment-button-primary" type="submit">发布回复</button>
        </div>
      </form>
    `;
  }

  function threadComments(comments) {
    const byId = new Map();
    const children = new Map();
    const roots = [];

    comments.forEach((comment) => {
      byId.set(comment.id, comment);
      children.set(comment.id, []);
    });

    comments.forEach((comment) => {
      const parentId = comment.parentId && comment.parentId !== comment.id && byId.has(comment.parentId)
        ? comment.parentId
        : "";
      if (parentId) {
        children.get(parentId).push(comment);
      } else {
        roots.push(comment);
      }
    });

    return { roots, children, byId };
  }

  function setStatus(container, message, type = "") {
    const status = container.querySelector("[data-comment-status]");
    if (!status) return;
    status.textContent = message || "";
    status.classList.toggle("is-error", type === "error");
    status.classList.toggle("is-success", type === "success");
  }

  function setBusy(container, busy) {
    container.querySelectorAll("button, input, textarea").forEach((control) => {
      control.disabled = busy;
    });
  }

  function commentAuthorName(author) {
    return author?.name || author?.login || "unknown";
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

  function logoutUrl(settings) {
    const url = new URL("/api/comment-auth/logout", settings.apiBase);
    url.searchParams.set("return_to", window.location.href);
    return url.toString();
  }

  function rememberCommentFocus() {
    try {
      window.sessionStorage.setItem("crane_comment_focus", String(Date.now()));
    } catch {
      // Session storage can be unavailable in strict privacy modes.
    }
  }

  function restoreCommentFocus(container) {
    let shouldFocus = false;
    try {
      shouldFocus = Boolean(window.sessionStorage.getItem("crane_comment_focus"));
      if (shouldFocus) window.sessionStorage.removeItem("crane_comment_focus");
    } catch {
      shouldFocus = false;
    }
    if (!shouldFocus) return;
    window.requestAnimationFrame(() => focus(container));
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
    focus,
  };
})();
