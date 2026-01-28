export const tokens = {
  radii: {
    sm: "10px",
    md: "10px",
    lg: "14px",
  },
  font: {
    weightSemibold: "600",
  },
  common: {
    bodyColor: "#0f0f0f",
    textColorBase: "#fff",
  },
  colors: {
    primary: "#f97316",
    primaryHover: "#fb923c",
    primaryPressed: "#ea580c",
  },
} as const;

export type Tokens = typeof tokens;
