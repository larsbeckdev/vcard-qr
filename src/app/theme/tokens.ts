// app/theme/tokens.ts
export const tokens = {
  radii: {
    sm: "8px",
    md: "10px",
    lg: "14px",
  },

  font: {
    weightSemibold: "600",
  },

  colors: {
    primary: "#f97316",
    primaryHover: "#fb923c",
    primaryPressed: "#ea580c",

    textBase: "#ffffff",
    bodyBg: "#0f172a",
    cardBg: "#020617",
    border: "#1e293b",
  },
} as const;

export type Tokens = typeof tokens;
