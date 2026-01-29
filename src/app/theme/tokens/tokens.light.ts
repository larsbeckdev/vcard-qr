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
    primary: "#f97316", // Orange klar & präsent
    primaryHover: "#fb923c",
    primaryPressed: "#ea580c",

    /* Text – deutlich gestaffelt */
    textBase: "#020617", // fast schwarz → maximale Lesbarkeit
    textMuted: "#334155", // slate-700
    textDisabled: "#64748b", // slate-500

    /* Backgrounds – klare Ebenen */
    bodyBg: "#f1f5f9", // sichtbar grau → UI-Rahmen
    cardBg: "#ffffff", // harte Trennung zum Body
    cardBgElevated: "#e5e7eb", // Hover / aktive Flächen klar erkennbar

    /* Borders – sichtbar, nicht zart */
    border: "#cbd5e1", // slate-300
    borderStrong: "#94a3b8", // slate-400
  },
} as const;

export type TokensLight = typeof tokensLight;
