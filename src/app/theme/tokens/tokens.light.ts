export const tokensLight = {
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
    primaryHover: "#fb923c",
    primaryPressed: "#ea580c",

    /* Text */
    textBase: "#0f172a", // slate-900
    textMuted: "#475569", // slate-600
    textDisabled: "#94a3b8", // slate-400

    /* Surfaces */
    bodyBg: "#fafafa", // nicht reinweiß → ruhiger
    cardBg: "#ffffff",
    cardBgElevated: "#f1f5f9", // Hover / aktive Cards

    /* Borders */
    border: "#e5e7eb", // neutral-gray statt blau
    borderStrong: "#cbd5e1", // slate-300
  },
} as const;

export type TokensLight = typeof tokensLight;
