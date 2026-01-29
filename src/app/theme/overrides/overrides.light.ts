import type { GlobalThemeOverrides } from "naive-ui";
import { tokensLight } from "@/app/theme/tokens/tokens.light";

export const themeOverridesLight: GlobalThemeOverrides = {
  common: {
    primaryColor: tokensLight.colors.primary,
    primaryColorHover: tokensLight.colors.primaryHover,
    primaryColorPressed: tokensLight.colors.primaryPressed,

    bodyColor: tokensLight.colors.bodyBg,
    cardColor: tokensLight.colors.cardBg,
    borderColor: tokensLight.colors.border,

    textColorBase: tokensLight.colors.textBase,

    borderRadius: tokensLight.radii.md,
  },

  Button: {
    borderRadiusMedium: tokensLight.radii.md,
    fontWeight: tokensLight.font.weightSemibold,
  },

  Card: {
    borderRadius: tokensLight.radii.lg,
  },
};
