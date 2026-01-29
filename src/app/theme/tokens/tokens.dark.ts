export const tokensDark = {
  radii: {
    sm: "8px",
    md: "10px",
    lg: "14px",
  },

  font: {
    weightSemibold: "600",
  },

  colors: {
    /* Brand */
    primary: "#f97316",
    primaryHover: "#fdba74", // softer, wärmer
    primaryPressed: "#c2410c", // tiefer, weniger knallig

    /* Text */
    textBase: "#f1f5f9", // sehr hell, aber nicht reinweiß
    textMuted: "#94a3b8", // slate-400
    textDisabled: "#64748b", // slate-500

    /* Surfaces */
    bodyBg: "#0a0a0b", // fast schwarz, leicht neutral
    cardBg: "#141417", // graphite-look
    cardBgElevated: "#1c1c21", // Hover / Active

    /* Borders */
    border: "#26262b",
    borderStrong: "#3f3f46",
  },
} as const;

export type TokensDark = typeof tokensDark;
