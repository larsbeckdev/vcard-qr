import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import {
  darkTheme,
  type GlobalTheme,
  type GlobalThemeOverrides,
} from "naive-ui";

type ThemeMode = "auto" | "light" | "dark";

const STORAGE_KEY = "ui.theme.mode";

const mode = ref<ThemeMode>("auto");
const systemPrefersDark = ref(false);

let mql: MediaQueryList | null = null;

function readStoredMode(): ThemeMode {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === "light" || raw === "dark" || raw === "auto") return raw;
  return "auto";
}

function writeStoredMode(value: ThemeMode) {
  localStorage.setItem(STORAGE_KEY, value);
}

function getSystemPrefersDark(): boolean {
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}

export function useUiTheme() {
  const isDark = computed(() => {
    if (mode.value === "dark") return true;
    if (mode.value === "light") return false;
    return systemPrefersDark.value; // auto
  });

  const theme = computed<GlobalTheme | null>(() =>
    isDark.value ? darkTheme : null,
  );

  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    return {
      // common: { primaryColor: "#FF8A00" }
    };
  });

  function setMode(value: ThemeMode) {
    mode.value = value;
    writeStoredMode(value);
  }

  function toggleDark() {
    setMode(isDark.value ? "light" : "dark");
  }

  function setAuto() {
    setMode("auto");
  }

  onMounted(() => {
    // initial load
    mode.value = readStoredMode();
    systemPrefersDark.value = getSystemPrefersDark();

    // live OS changes (nur relevant für auto, aber wir tracken immer)
    mql = window.matchMedia?.("(prefers-color-scheme: dark)") ?? null;

    const handler = (e: MediaQueryListEvent) => {
      systemPrefersDark.value = e.matches;
    };

    if (mql?.addEventListener) mql.addEventListener("change", handler);
    else if (mql?.addListener) mql.addListener(handler); // Safari legacy

    onBeforeUnmount(() => {
      if (!mql) return;
      if (mql.removeEventListener) mql.removeEventListener("change", handler);
      else if (mql.removeListener) mql.removeListener(handler);
    });
  });

  return {
    mode,
    isDark,
    theme,
    themeOverrides,
    setMode,
    setAuto,
    toggleDark,
  };
}
