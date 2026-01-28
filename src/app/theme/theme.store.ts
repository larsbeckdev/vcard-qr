import { ref, computed } from "vue";
import { applyTheme } from "./theme.dom";
import { THEME_STORAGE_KEY, type ThemeMode } from "./theme.constants";

const mode = ref<ThemeMode>(
  (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || "light",
);

export function useThemeStore() {
  const isDark = computed(() => mode.value === "dark");

  function setTheme(next: ThemeMode) {
    mode.value = next;
    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  }

  function toggleTheme() {
    setTheme(isDark.value ? "light" : "dark");
  }

  return {
    mode,
    isDark,
    setTheme,
    toggleTheme,
  };
}
