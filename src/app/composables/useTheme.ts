import { computed } from "vue";
import { usePreferredDark, useStorage } from "@vueuse/core";
import { getTheme } from "@/app/theme";


const preferredDark = usePreferredDark();
const isDark = useStorage<boolean>("ui:isDark", preferredDark.value);

const theme = computed(() => getTheme(isDark.value));

function toggleTheme() {
  isDark.value = !isDark.value;
}

function setDark(value: boolean) {
  isDark.value = value;
}

export function useTheme() {
  return {
    isDark,
    theme,
    toggleTheme,
    setDark,
  };
}
