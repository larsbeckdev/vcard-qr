import type { GlobalThemeOverrides } from "naive-ui";

function cssVar(name: string): string {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

/**
 * Nur deine Farben verwenden:
 * --background, --foreground, --muted-foreground,
 * --card, --button, --popover,
 * --primary, --primary-foreground,
 * --secondary, --secondary-foreground,
 * --accent, --accent-foreground,
 * --border, --input, --ring,
 * --destructive
 */
export function createNaiveThemeOverrides(): GlobalThemeOverrides {
  const background = cssVar("--background");
  const foreground = cssVar("--foreground");
  const mutedForeground = cssVar("--muted-foreground");

  const card = cssVar("--card");
  const button = cssVar("--button");
  const popover = cssVar("--popover");

  const primary = cssVar("--primary");
  const primaryFg = cssVar("--primary-foreground");

  const secondary = cssVar("--secondary");
  const secondaryFg = cssVar("--secondary-foreground");

  const accent = cssVar("--accent");
  const accentFg = cssVar("--accent-foreground");

  const border = cssVar("--border");
  const input = cssVar("--input");
  const ring = cssVar("--ring");

  const destructive = cssVar("--destructive");

  return {
    common: {
      // Surfaces
      bodyColor: background,
      baseColor: background,
      cardColor: card,
      popoverColor: popover,

      // Text
      textColorBase: foreground,
      textColor1: foreground,
      textColor2: mutedForeground,
      textColor3: mutedForeground,

      // Borders / divider / input
      borderColor: border,
      dividerColor: border,
      inputColor: input,

      // Primary
      primaryColor: primary,
      primaryColorHover: primary,
      primaryColorPressed: primary,
      primaryColorSuppl: primary,

      // Focus / ring

      // Status colors (nur aus deinen Tokens gemappt)
      successColor: accent,
      warningColor: primary,
      errorColor: destructive,
      infoColor: secondary,
    },

    Button: {
      // Default (secondary-ish)
      color: button,
      textColor: foreground,
      border: border,

      // Primary
      colorPrimary: primary,
      textColorPrimary: primaryFg,
      borderPrimary: primary,
    },

    Input: {
      color: input,
      textColor: foreground,
      placeholderColor: mutedForeground,
      border: border,
      borderHover: ring,
      borderFocus: ring,
      caretColor: foreground,
    },

    Card: {
      color: card,
      titleTextColor: foreground,
      textColor: foreground,
    },

    Modal: {
      color: card,
      textColor: foreground,
    },

    Drawer: {
      color: card,
      textColor: foreground,
      titleTextColor: foreground,
    },

    Popover: {
      color: popover,
      textColor: foreground,
    },

    Dropdown: {
      color: popover,
      optionTextColor: foreground,
      optionTextColorHover: foreground,
      optionTextColorActive: foreground,
      optionColorHover: secondary,
      optionColorActive: secondary,
    },

    Tooltip: {
      color: popover,
      textColor: foreground,
    },

    Tabs: {
      tabTextColorLine: mutedForeground,
      tabTextColorActiveLine: foreground,
      barColor: primary,
    },

    Menu: {
      itemTextColor: mutedForeground,
      itemTextColorHover: foreground,
      itemTextColorActive: foreground,
      itemColorHover: secondary,
      itemColorActive: secondary,
    },

    Alert: {
      color: card,
      contentTextColor: foreground,
      titleTextColor: foreground,
      border: border,
    },

    Message: {
      color: popover,
      textColor: foreground,
    },

    Tag: {
      color: secondary,
      textColor: secondaryFg || foreground,
    },

    Badge: {
      color: secondary,
    },

    Switch: {
      railColorActive: primary,
    },

    Progress: {
      railColor: border,
      fillColor: primary,
    },

    Slider: {
      fillColor: primary,
      railColor: border,
    },
  };
}
