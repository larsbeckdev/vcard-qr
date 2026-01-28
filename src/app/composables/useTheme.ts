import { computed, watchEffect } from "vue";
import { useOsTheme } from "naive-ui";

export type ThemeMode = "auto" | "light" | "dark";

/**
 * Minimal, no vueuse needed:
 * - mode persisted in localStorage
 * - auto follows OS via Naive UI useOsTheme()
 */

const STORAGE_KEY = "ui:themeMode";

function loadMode(): ThemeMode {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === "light" || raw === "dark" || raw === "auto") return raw;
  return "auto";
}

function saveMode(mode: ThemeMode) {
  localStorage.setItem(STORAGE_KEY, mode);
}

export function useTheme() {
  const osTheme = useOsTheme(); // "light" | "dark"

  // reactive mode (simple, without VueUse)
  const mode = computed<ThemeMode>({
    get() {
      return loadMode();
    },
    set(v) {
      saveMode(v);
    },
  });

  const resolved = computed<"light" | "dark">(() => {
    if (mode.value === "auto") return osTheme.value ?? "light";
    return mode.value;
  });

  const isDark = computed(() => resolved.value === "dark");

  // optional: for your own CSS hooks
  watchEffect(() => {
    document.documentElement.dataset.theme = resolved.value; // "light" | "dark"
  });

  function setMode(next: ThemeMode) {
    mode.value = next;
  }

  return { mode, resolved, isDark, setMode };
}
