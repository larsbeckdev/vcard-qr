// useUiTheme.ts
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import {
  darkTheme,
  type GlobalTheme,
  type GlobalThemeOverrides,
} from "naive-ui";

type ThemeMode = "auto" | "light" | "dark";

const STORAGE_KEY = "ui.theme.mode";

// global (singleton) state:
const mode = ref<ThemeMode>("auto");
const systemPrefersDark = ref(false);

let mql: MediaQueryList | null = null;
let mqlHandler: ((e: MediaQueryListEvent) => void) | null = null;

function readStoredMode(): ThemeMode {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw === "light" || raw === "dark" || raw === "auto" ? raw : "auto";
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

  const themeOverrides = computed<GlobalThemeOverrides>(() => ({
    // common: { primaryColor: "#FF8A00" }
  }));

  function setMode(value: ThemeMode) {
    mode.value = value;
    writeStoredMode(value);
  }

  function toggleDark() {
    // wenn auto aktiv ist, wird beim Klick explizit light/dark gesetzt
    setMode(isDark.value ? "light" : "dark");
  }

  function setAuto() {
    setMode("auto");
  }

  onMounted(() => {
    // initial
    mode.value = readStoredMode();
    systemPrefersDark.value = getSystemPrefersDark();

    // subscribe OS changes
    mql = window.matchMedia?.("(prefers-color-scheme: dark)") ?? null;

    mqlHandler = (e: MediaQueryListEvent) => {
      systemPrefersDark.value = e.matches;
    };

    if (mql && mqlHandler) {
      if (mql.addEventListener) mql.addEventListener("change", mqlHandler);
      // Safari legacy
      else (mql as any).addListener?.(mqlHandler);
    }
  });

  onBeforeUnmount(() => {
    if (!mql || !mqlHandler) return;

    if (mql.removeEventListener) mql.removeEventListener("change", mqlHandler);
    else (mql as any).removeListener?.(mqlHandler);

    mql = null;
    mqlHandler = null;
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
