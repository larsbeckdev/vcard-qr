<script setup lang="ts">
import { useUiTheme } from "@/app/composables/useUiTheme";

const { mode, setMode, toggleDark, isDark } = useUiTheme();
</script>

<template>
  <div style="display: flex; gap: 0.5rem; align-items: center">
    <select
      :value="mode"
      @change="setMode(($event.target as HTMLSelectElement).value as any)">
      <option value="auto">Auto</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>

    <button type="button" @click="toggleDark">
      Toggle (now: {{ isDark ? "dark" : "light" }})
    </button>
  </div>
</template>
