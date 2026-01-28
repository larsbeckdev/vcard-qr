import { darkTheme, lightTheme, type GlobalTheme } from "naive-ui";

export function getTheme(isDark: boolean): GlobalTheme | null {
  return isDark ? darkTheme : lightTheme;
}
