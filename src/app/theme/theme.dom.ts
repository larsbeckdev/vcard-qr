import type { ThemeMode } from "./theme.constants";

export function applyTheme(theme: ThemeMode) {
  const html = document.documentElement;

  html.classList.remove("light", "dark");
  html.classList.add(theme);
}
