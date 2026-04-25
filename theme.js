const CRANE_THEME_KEY = "qqqzj-crane-theme";
const CRANE_THEME_MODES = ["pneuma", "ousia", "auto"];
const CRANE_THEME_COLORS = {
  pneuma: "#f3f7f8",
  ousia: "#091523",
};
const CRANE_THEME_LABELS = {
  pneuma: "白天",
  ousia: "黑夜",
  auto: "自动",
};
const CRANE_THEME_ICONS = {
  pneuma: "☀",
  ousia: "☾",
  auto: "A",
};

const themeMedia = window.matchMedia?.("(prefers-color-scheme: dark)");
let themeTransitionTimer;
let assetSyncToken = 0;
const imageAvailability = new Map();
const ASSET_SWAP_FADE_MS = 290;
const MASCOT_ASSET_SWAP_FADE_MS = 760;
const MASCOT_STRIKE_MS = 1180;

// 主题偏好只保存“用户选择”：白天、黑夜、自动。真正显示的芒/荒状态由 resolveThemeState 计算。
function currentThemePreference() {
  try {
    const stored = window.localStorage.getItem(CRANE_THEME_KEY);
    return CRANE_THEME_MODES.includes(stored) ? stored : "auto";
  } catch {
    return "auto";
  }
}

function resolveThemeState(preference = currentThemePreference()) {
  if (preference === "auto") return themeMedia?.matches ? "ousia" : "pneuma";
  return preference === "ousia" ? "ousia" : "pneuma";
}

function applyThemeMode(preference, options = {}) {
  const mode = CRANE_THEME_MODES.includes(preference) ? preference : "auto";
  const state = resolveThemeState(mode);
  const root = document.documentElement;
  const previousState = root.dataset.themeState || state;
  const shouldAnimate = options.animate && previousState !== state;

  if (options.persist) {
    try {
      window.localStorage.setItem(CRANE_THEME_KEY, mode);
    } catch {
      // localStorage 在少数隐私模式下可能不可用；页面主题仍然可以临时切换。
    }
  }

  if (shouldAnimate) startThemeTransition(state);

  root.dataset.themePreference = mode;
  root.dataset.themeState = state;
  root.style.colorScheme = state === "ousia" ? "dark" : "light";
  updateThemeColor(state);
  syncThemeControls(mode, state);
  syncThemeAssets(state, { animate: shouldAnimate });
}

function startThemeTransition(state) {
  const root = document.documentElement;
  window.clearTimeout(themeTransitionTimer);
  root.classList.remove("theme-transitioning", "theme-enter-pneuma", "theme-enter-ousia");
  void root.offsetWidth;
  root.classList.add("theme-transitioning", `theme-enter-${state}`);
  themeTransitionTimer = window.setTimeout(() => {
    root.classList.remove("theme-transitioning", "theme-enter-pneuma", "theme-enter-ousia");
  }, 1180);
}

function updateThemeColor(state) {
  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor?.setAttribute("content", CRANE_THEME_COLORS[state] || CRANE_THEME_COLORS.pneuma);
}

function syncThemeControls(mode, state) {
  document.querySelectorAll("[data-theme-switcher]").forEach((switcher) => {
    switcher.dataset.resolvedState = state;
    const label = switcher.querySelector("[data-theme-current-label]");
    const icon = switcher.querySelector("[data-theme-current-icon]");
    if (label) label.textContent = CRANE_THEME_LABELS[mode] || CRANE_THEME_LABELS.auto;
    if (icon) icon.textContent = CRANE_THEME_ICONS[mode] || CRANE_THEME_ICONS.auto;
  });

  document.querySelectorAll("[data-theme-mode]").forEach((button) => {
    const active = button.dataset.themeMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-checked", String(active));
  });
}

function bindThemeControls() {
  document.querySelectorAll("[data-theme-switcher]").forEach((switcher) => {
    const trigger = switcher.querySelector("[data-theme-trigger]");

    const setOpen = (open) => {
      switcher.classList.toggle("is-open", open);
      trigger?.setAttribute("aria-expanded", String(open));
    };

    switcher.addEventListener("mouseenter", () => setOpen(true));
    switcher.addEventListener("mouseleave", () => setOpen(false));
    switcher.addEventListener("focusin", () => setOpen(true));
    switcher.addEventListener("focusout", (event) => {
      if (!switcher.contains(event.relatedTarget)) setOpen(false);
    });

    trigger?.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(true);
    });
  });

  document.querySelectorAll("[data-theme-mode]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      applyThemeMode(button.dataset.themeMode, { persist: true, animate: true });
      closeThemeMenus();
      button.blur();
    });
  });

  document.addEventListener("click", closeThemeMenus);
  applyThemeMode(currentThemePreference());
  preloadThemeAssets();
}

function closeThemeMenus() {
  document.querySelectorAll("[data-theme-switcher]").forEach((switcher) => {
    switcher.classList.remove("is-open");
    switcher.querySelector("[data-theme-trigger]")?.setAttribute("aria-expanded", "false");
  });
}

function preloadThemeAssets() {
  document.querySelectorAll("[data-theme-asset]").forEach((asset) => {
    [asset.dataset.pneumaSrc, asset.dataset.ousiaSrc].filter(Boolean).forEach((src) => {
      imageCanLoad(src);
    });
  });
}

async function syncThemeAssets(state, options = {}) {
  const token = ++assetSyncToken;
  const assets = [...document.querySelectorAll("[data-theme-asset]")];

  await Promise.all(assets.map(async (asset) => {
    const preferred = asset.dataset[`${state}Src`];
    const fallback = asset.dataset.fallbackSrc || asset.getAttribute("src");
    const chosen = preferred && await imageCanLoad(preferred) ? preferred : fallback;

    if (token !== assetSyncToken || !chosen) return;
    const willSwap = asset.getAttribute("src") !== chosen;
    const assetShell = asset.closest(".brand-avatar, .mascot-widget");
    let assetGhost;

    if (willSwap && options.animate) {
      asset.dataset.assetSwapToken = String(token);
      assetGhost = createThemeAssetGhost(asset, assetShell);
      asset.classList.add("is-theme-asset-swapping");
      assetShell?.classList.add("is-theme-asset-shell-swapping");
      playThemeAssetEffect(assetShell);
      if (!assetShell?.classList.contains("mascot-widget")) {
        await delay(ASSET_SWAP_FADE_MS);
      }
    }

    if (token !== assetSyncToken) {
      cleanupThemeAssetSwap(asset, assetShell, assetGhost, token);
      return;
    }
    if (willSwap) asset.setAttribute("src", chosen);

    const isFallback = chosen !== preferred;
    asset.dataset.assetState = isFallback ? "fallback" : state;
    asset.classList.toggle("is-theme-fallback", isFallback);
    assetShell?.classList.toggle("is-theme-fallback", isFallback);

    if (willSwap && options.animate) {
      await nextFrame();
      asset.classList.add("is-theme-asset-entering");
      await delay(assetShell?.classList.contains("mascot-widget") ? MASCOT_ASSET_SWAP_FADE_MS : ASSET_SWAP_FADE_MS);
      cleanupThemeAssetSwap(asset, assetShell, assetGhost, token);
    }
  }));
}

function createThemeAssetGhost(asset, assetShell) {
  if (!assetShell?.classList.contains("mascot-widget")) return null;

  const ghost = asset.cloneNode(false);
  ghost.removeAttribute("id");
  ghost.removeAttribute("data-theme-asset");
  ghost.removeAttribute("data-pneuma-src");
  ghost.removeAttribute("data-ousia-src");
  ghost.removeAttribute("data-fallback-src");
  ghost.setAttribute("aria-hidden", "true");
  ghost.alt = "";
  ghost.className = "theme-asset-ghost";
  asset.before(ghost);
  return ghost;
}

function cleanupThemeAssetSwap(asset, assetShell, assetGhost, token) {
  assetGhost?.remove();
  if (asset.dataset.assetSwapToken !== String(token)) return;

  asset.classList.remove("is-theme-asset-swapping", "is-theme-asset-entering");
  assetShell?.classList.remove("is-theme-asset-shell-swapping");
  delete asset.dataset.assetSwapToken;
}

function playThemeAssetEffect(assetShell) {
  if (!assetShell?.classList.contains("mascot-widget")) return;

  assetShell.classList.remove("is-theme-striking");
  void assetShell.offsetWidth;
  assetShell.classList.add("is-theme-striking");
  window.setTimeout(() => {
    assetShell.classList.remove("is-theme-striking");
  }, MASCOT_STRIKE_MS);
}

function delay(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

function nextFrame() {
  return new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
}

function imageCanLoad(src) {
  if (!src) return Promise.resolve(false);
  if (imageAvailability.has(src)) return imageAvailability.get(src);

  const promise = new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => resolve(true);
    probe.onerror = () => resolve(false);
    probe.src = src;
  });

  imageAvailability.set(src, promise);
  return promise;
}

themeMedia?.addEventListener?.("change", () => {
  if (currentThemePreference() === "auto") {
    applyThemeMode("auto", { animate: true });
  }
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindThemeControls, { once: true });
} else {
  bindThemeControls();
}

window.craneTheme = {
  apply: applyThemeMode,
  preference: currentThemePreference,
  state: resolveThemeState,
};
