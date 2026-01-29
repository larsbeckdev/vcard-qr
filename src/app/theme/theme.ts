import { darkTheme, lightTheme, type GlobalTheme } from "naive-ui";
import { themeOverridesDark } from "@/app/theme/overrides/overrides.dark";
import { themeOverridesLight } from "@/app/theme/overrides/overrides.light";

export function getNaiveTheme(isDark: boolean): GlobalTheme {
  return isDark ? darkTheme : lightTheme;
}

export function getNaiveOverrides(isDark: boolean) {
  return isDark ? themeOverridesDark : themeOverridesLight;
}
