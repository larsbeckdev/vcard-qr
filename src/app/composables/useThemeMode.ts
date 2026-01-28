import { computed, onBeforeUnmount, onMounted, ref } from "vue";

export type ThemeMode = "auto" | "light" | "dark";

const STORAGE_KEY = "theme-mode";

export function useThemeMode() {
  const mode = ref<ThemeMode>(
    (localStorage.getItem(STORAGE_KEY) as ThemeMode) || "auto",
  );

  const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
  const systemIsDark = ref<boolean>(mediaQuery?.matches ?? false);

  const onMediaChange = (e: MediaQueryListEvent) => {
    systemIsDark.value = e.matches;
  };

  onMounted(() => {
    mediaQuery?.addEventListener?.("change", onMediaChange);
  });

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener?.("change", onMediaChange);
  });

  const isDark = computed(() =>
    mode.value === "auto" ? systemIsDark.value : mode.value === "dark",
  );

  const setMode = (next: ThemeMode) => {
    mode.value = next;
    localStorage.setItem(STORAGE_KEY, next);
  };

  return {
    mode,
    isDark,
    setMode,
  };
}
