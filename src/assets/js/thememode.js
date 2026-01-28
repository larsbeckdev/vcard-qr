const html = document.documentElement;

// Initial Theme setzen
const stored = localStorage.getItem("theme");

if (stored === "dark") {
  html.classList.add("dark");
  html.classList.remove("light");
} else {
  html.classList.add("light");
  html.classList.remove("dark");
}

// Theme wechseln
function toggleTheme() {
  const isDark = html.classList.toggle("dark");
  html.classList.toggle("light", !isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");
}
