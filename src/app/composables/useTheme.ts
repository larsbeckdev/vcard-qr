// src/app/composables/useTheme.ts
import { computed, watch } from "vue";
import { usePreferredDark, useStorage } from "@vueuse/core";
import { getTheme } from "@/app/theme";

export type ThemeMode = "auto" | "light" | "dark";

/**
 * Persisted mode:
 * - auto: follows system (and updates live)
 * - light/dark: forced
 */
const mode = useStorage<ThemeMode>("ui:themeMode", "auto");

// system preference (reactive)
const preferredDark = usePreferredDark();

// derived boolean used by Naive UI theme function
const isDark = computed(() => {
  if (mode.value === "auto") return preferredDark.value;
  return mode.value === "dark";
});

// Naive UI theme
const theme = computed(() => getTheme(isDark.value));

/**
 * Optional: reflect to DOM (useful for your own CSS too)
 */
watch(
  isDark,
  (v) => {
    document.documentElement.dataset.colorMode = v ? "dark" : "light";
  },
  { immediate: true },
);

export function useTheme() {
  function setMode(next: ThemeMode) {
    mode.value = next;
  }

  function toggleDarkLight() {
    // toggles between forced light/dark (keeps auto separate)
    mode.value = isDark.value ? "light" : "dark";
  }

  return {
    mode,
    isDark,
    theme,
    setMode,
    toggleDarkLight,
  };
}
