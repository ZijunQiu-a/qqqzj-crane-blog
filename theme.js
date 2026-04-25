const CRANE_THEME_KEY = "qqqzj-crane-theme";
const CRANE_THEME_MODES = ["pneuma", "ousia", "auto"];
const CRANE_THEME_COLORS = {
  pneuma: "#f3f7f8",
  ousia: "#091523",
};

const themeMedia = window.matchMedia?.("(prefers-color-scheme: dark)");
let themeTransitionTimer;

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

  if (options.persist) {
    try {
      window.localStorage.setItem(CRANE_THEME_KEY, mode);
    } catch {
      // localStorage 在少数隐私模式下可能不可用；页面主题仍然可以临时切换。
    }
  }

  root.dataset.themePreference = mode;
  root.dataset.themeState = state;
  root.style.colorScheme = state === "ousia" ? "dark" : "light";
  updateThemeColor(state);
  syncThemeControls(mode, state);

  if (options.animate && previousState !== state) {
    playThemeTransition(state);
  }
}

function playThemeTransition(state) {
  const root = document.documentElement;
  window.clearTimeout(themeTransitionTimer);
  root.classList.remove("theme-transitioning", "theme-enter-pneuma", "theme-enter-ousia");
  void root.offsetWidth;
  root.classList.add("theme-transitioning", `theme-enter-${state}`);
  themeTransitionTimer = window.setTimeout(() => {
    root.classList.remove("theme-transitioning", "theme-enter-pneuma", "theme-enter-ousia");
  }, 880);
}

function updateThemeColor(state) {
  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor?.setAttribute("content", CRANE_THEME_COLORS[state] || CRANE_THEME_COLORS.pneuma);
}

function syncThemeControls(mode, state) {
  document.querySelectorAll("[data-theme-switcher]").forEach((switcher) => {
    switcher.dataset.resolvedState = state;
  });

  document.querySelectorAll("[data-theme-mode]").forEach((button) => {
    const active = button.dataset.themeMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function bindThemeControls() {
  document.querySelectorAll("[data-theme-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      applyThemeMode(button.dataset.themeMode, { persist: true, animate: true });
    });
  });

  applyThemeMode(currentThemePreference());
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
