export const tokensLight = {
  radii: { sm: "8px", md: "10px", lg: "14px" },
  font: { weightSemibold: "600" },
  colors: {
    primary: "#f97316",
    primaryHover: "#fb923c",
    primaryPressed: "#ea580c",

    textBase: "#0f172a",
    bodyBg: "#ffffff",
    cardBg: "#f8fafc",
    border: "#e2e8f0",
  },
} as const;

export type TokensLight = typeof tokensLight;
