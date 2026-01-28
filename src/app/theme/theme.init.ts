import { applyTheme } from "./theme.dom";
import { THEME_STORAGE_KEY, type ThemeMode } from "./theme.constants";

export function initTheme() {
  const stored =
    (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || "light";

  applyTheme(stored);
}
