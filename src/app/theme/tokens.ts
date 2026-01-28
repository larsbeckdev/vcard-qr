export const tokens = {
  radii: {
    sm: "10px",
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
  },
} as const;

export type Tokens = typeof tokens;
