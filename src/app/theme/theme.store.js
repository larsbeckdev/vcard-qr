import { ref, computed } from "vue";

const KEY = "theme";
const mode = ref(localStorage.getItem(KEY) || "light");

function applyTheme(theme) {
  const html = document.documentElement;

  html.classList.remove("light", "dark");
  html.classList.add(theme);
}

export function initTheme() {
  applyTheme(mode.value);
}

export function useThemeStore() {
  const isDark = computed(() => mode.value === "dark");

  function setTheme(next) {
    mode.value = next;
    localStorage.setItem(KEY, next);
    applyTheme(next);
  }

  function toggleTheme() {
    setTheme(isDark.value ? "light" : "dark");
  }

  applyTheme(mode.value);

  return { mode, isDark, setTheme, toggleTheme };
}
