import type { GlobalThemeOverrides } from "naive-ui";
import { tokens } from "./tokens";

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: tokens.colors.primary,
    primaryColorHover: tokens.colors.primaryHover,
    primaryColorPressed: tokens.colors.primaryPressed,
    borderRadius: tokens.radii.md,
  },

  Button: {
    borderRadiusMedium: tokens.radii.md,
    fontWeight: tokens.font.weightSemibold,
  },

  Card: {
    borderRadius: tokens.radii.lg,
  },
};
