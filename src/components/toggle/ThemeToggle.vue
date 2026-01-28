<script setup>
import { toggleTheme } from "@/app/theme/themeMode";
</script>

<template>
  <button type="button" id="theme-toggle" class="btn" @click="toggleTheme">
    Theme wechseln
  </button>
</template>
