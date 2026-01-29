import type { GlobalThemeOverrides } from "naive-ui";
import { tokensDark } from "@/app/theme/tokens/tokens.dark";

export const themeOverridesDark: GlobalThemeOverrides = {
  common: {
    primaryColor: tokensDark.colors.primary,
    primaryColorHover: tokensDark.colors.primaryHover,
    primaryColorPressed: tokensDark.colors.primaryPressed,

    bodyColor: tokensDark.colors.bodyBg,
    cardColor: tokensDark.colors.cardBg,
    borderColor: tokensDark.colors.border,

    textColorBase: tokensDark.colors.textBase,

    borderRadius: tokensDark.radii.md,
  },

  Button: {
    borderRadiusMedium: tokensDark.radii.md,
    fontWeight: tokensDark.font.weightSemibold,
  },

  Card: {
    borderRadius: tokensDark.radii.lg,
  },
};
