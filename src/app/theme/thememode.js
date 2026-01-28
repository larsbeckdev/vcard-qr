const html = document.documentElement;

export function initTheme() {
  const stored = localStorage.getItem("theme");

  if (stored === "dark") {
    html.classList.add("dark");
    html.classList.remove("light");
  } else {
    html.classList.add("light");
    html.classList.remove("dark");
  }
}

export function toggleTheme() {
  const isDark = html.classList.toggle("dark");
  html.classList.toggle("light", !isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");
}
