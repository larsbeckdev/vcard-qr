<!-- src/app/components/ThemeModeToggle.vue -->
<script setup lang="ts">
import NSegmented from "naive-ui";
import { useTheme, type ThemeMode } from "@/app/composables/useTheme";

const { mode, setMode } = useTheme();

const options: Array<{ label: string; value: ThemeMode }> = [
  { label: "Auto", value: "auto" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];
</script>

<template>
  <n-segmented :value="mode" :options="options" @update:value="setMode" />
</template>
