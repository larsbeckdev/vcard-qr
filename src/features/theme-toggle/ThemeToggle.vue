<script setup lang="ts">
import { NButtonGroup, NButton, NTooltip } from "naive-ui";
import { Monitor, Sun, Moon } from "lucide-vue-next";
import { useTheme, type ThemeMode } from "@/app/composables/useTheme";

const { mode, setMode } = useTheme();

function isActive(v: ThemeMode) {
  return mode.value === v;
}
</script>

<template>
  <n-button-group>
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button
          :type="isActive('auto') ? 'primary' : 'default'"
          @click="setMode('auto')"
          aria-label="Theme: Auto">
          <Monitor :size="18" />
        </n-button>
      </template>
      Auto
    </n-tooltip>

    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button
          :type="isActive('light') ? 'primary' : 'default'"
          @click="setMode('light')"
          aria-label="Theme: Light">
          <Sun :size="18" />
        </n-button>
      </template>
      Light
    </n-tooltip>

    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button
          :type="isActive('dark') ? 'primary' : 'default'"
          @click="setMode('dark')"
          aria-label="Theme: Dark">
          <Moon :size="18" />
        </n-button>
      </template>
      Dark
    </n-tooltip>
  </n-button-group>
</template>
