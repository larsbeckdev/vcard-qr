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
    /* Brand / Action */
    primary: "#f97316", // orange-500
    primaryHover: "#fb923c", // orange-400
    primaryPressed: "#ea580c", // orange-600

    /* Text */
    textBase: "#e5e7eb", // gray-200 (angenehmer als reines Weiß)
    textMuted: "#9ca3af", // gray-400

    /* Backgrounds */
    bodyBg: "#0b0f14", // leicht blau-grau statt rein schwarz
    cardBg: "#111827", // gray-900 → sauberer Kontrast
    cardBgElevated: "#1f2933", // für Hover / aktive Cards

    /* Borders / Dividers */
    border: "#1f2937", // gray-800
    borderStrong: "#374151", // gray-700
  },
} as const;

export type TokensDark = typeof tokensDark;
