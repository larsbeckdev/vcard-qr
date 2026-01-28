// src/app/composables/useTheme.ts
import { ref, computed, watch, watchEffect } from "vue";
import { useOsTheme } from "naive-ui";

export type ThemeMode = "auto" | "light" | "dark";

const STORAGE_KEY = "ui:themeMode";

function loadMode(): ThemeMode {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === "light" || raw === "dark" || raw === "auto") return raw;
  return "auto";
}

export function useTheme() {
  const osTheme = useOsTheme();

  const mode = ref<ThemeMode>(loadMode());

  watch(mode, (v) => {
    localStorage.setItem(STORAGE_KEY, v);
  });

  const resolved = computed<"light" | "dark">(() => {
    if (mode.value === "auto") return osTheme.value ?? "light";
    return mode.value;
  });

  const isDark = computed(() => resolved.value === "dark");

  watchEffect(() => {
    document.documentElement.dataset.theme = resolved.value;
  });

  function setMode(next: ThemeMode) {
    mode.value = next;
  }

  return { mode, resolved, isDark, setMode };
}
