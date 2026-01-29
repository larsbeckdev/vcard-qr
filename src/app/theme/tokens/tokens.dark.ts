export const tokensDark = {
  radii: { sm: "8px", md: "10px", lg: "14px" },
  font: { weightSemibold: "600" },
  colors: {
    primary: "#f97316",
    primaryHover: "#fb923c",
    primaryPressed: "#ea580c",

    textBase: "#ffffff",
    bodyBg: "#0e0f0fff",
    cardBg: "#020617",
    border: "#1e293b",
  },
} as const;

export type TokensDark = typeof tokensDark;
