import { computed, onMounted, ref } from "vue";
import { darkTheme, type GlobalTheme } from "naive-ui";
import { createNaiveThemeOverrides } from "./overrides";

function isDark(): boolean {
  return document.documentElement.classList.contains("dark");
}

export function useNaiveTheme() {
  const theme = ref<GlobalTheme | null>(null);
  const overrides = ref(createNaiveThemeOverrides());

  const apply = () => {
    theme.value = isDark() ? darkTheme : null;
    overrides.value = createNaiveThemeOverrides();
  };

  onMounted(() => {
    apply();

    const obs = new MutationObserver(() => apply());
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });

  return {
    theme: computed(() => theme.value),
    themeOverrides: computed(() => overrides.value),
    refreshTheme: apply,
  };
}
