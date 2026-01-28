<script setup>
import { computed } from "vue";
import { NConfigProvider, darkTheme } from "naive-ui";
import { useThemeStore } from "@/app/theme/theme.store";

const { isDark } = useThemeStore();

const nTheme = computed(() => (isDark.value ? darkTheme : null));
</script>

<template>
  <n-config-provider :theme="nTheme">
    <slot />
  </n-config-provider>
</template>
