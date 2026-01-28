import { ref, computed } from "vue";

const KEY = "theme";
const mode = ref(localStorage.getItem(KEY) || "light");

export function useThemeStore() {
  const isDark = computed(() => mode.value === "dark");

  function setTheme(next) {
    mode.value = next;
    localStorage.setItem(KEY, next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  function toggleTheme() {
    setTheme(isDark.value ? "light" : "dark");
  }

  // init einmalig beim ersten Use
  setTheme(mode.value);

  return { mode, isDark, setTheme, toggleTheme };
}
