<!-- <script setup>
import { toggleTheme } from "@/app/theme/themeMode";
</script>

<template>
  <button
    type="button"
    id="theme-toggle"
    class="btn"
    @click="toggleTheme"
    aria-label="change Theme">
    Theme wechseln
  </button>
</template> -->

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
