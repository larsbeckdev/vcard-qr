import { ref, computed, watch, watchEffect } from "vue";
import { useOsTheme } from "naive-ui";

export type ThemeMode = "auto" | "light" | "dark";

const STORAGE_KEY = "theme";

function loadMode(): ThemeMode {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === "light" || raw === "dark" || raw === "auto") return raw;
  return "auto";
}

const mode = ref<ThemeMode>(loadMode());

watch(mode, (v) => localStorage.setItem(STORAGE_KEY, v));

export function useTheme() {
  const osTheme = useOsTheme();

  const resolved = computed<"light" | "dark">(() => {
    if (mode.value === "auto") return osTheme.value ?? "light";
    return mode.value;
  });

  const isDark = computed(() => resolved.value === "dark");

  watchEffect(() => {
    document.documentElement.dataset.theme = resolved.value;
  });

  return {
    mode,
    resolved,
    isDark,
    setMode: (v: ThemeMode) => (mode.value = v),
  };
}
