<script setup lang="ts">
import { NSwitch } from "naive-ui";
import { useTheme } from "@/app/composables/useTheme";

const { isDark, setDark } = useTheme();
</script>

<template>
  <n-switch :value="isDark" @update:value="setDark" />
</template>
