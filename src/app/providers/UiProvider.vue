<script setup lang="ts">
import { computed } from "vue";
import { NConfigProvider, darkTheme } from "naive-ui";
import { useThemeStore } from "@/app/theme/theme.store";
import { createNaiveThemeOverrides } from "@/app/theme/naive/overrides";

// store
const { isDark } = useThemeStore();

const nTheme = computed(() => (isDark.value ? darkTheme : null));

const nOverrides = computed(() => {
  void isDark.value;
  return createNaiveThemeOverrides();
});
</script>

<template>
  <n-config-provider :theme="nTheme" :theme-overrides="nOverrides">
    <slot />
  </n-config-provider>
</template>
