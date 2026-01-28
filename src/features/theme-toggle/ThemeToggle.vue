<script setup>
import { NButton } from "naive-ui";
import { useThemeStore } from "@/app/theme/theme.store";

const { isDark, toggleTheme } = useThemeStore();
</script>

<template>
  <n-button secondary @click="toggleTheme">
    {{ isDark ? "Dark" : "Light" }}
  </n-button>
</template>
