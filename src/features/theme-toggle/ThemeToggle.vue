<script setup lang="ts">
import { computed } from "vue";
import { Sun, Moon, Monitor } from "lucide-vue-next";
import { useUiTheme } from "@/app/composables/useUiTheme";

const { mode, isDark, toggleDark, setMode } = useUiTheme();

const Icon = computed(() => {
  if (mode.value === "auto") return Monitor;
  return isDark.value ? Moon : Sun;
});

const title = computed(() => {
  if (mode.value === "auto") return "Theme: Auto (system)";
  return isDark.value ? "Theme: Dark" : "Theme: Light";
});

function onClick() {
  toggleDark();
}

function onRightClick(e: MouseEvent) {
  e.preventDefault();
  setMode("auto");
}
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :title="title"
    :aria-label="title"
    @click="onClick"
    @contextmenu="onRightClick">
    <component :is="Icon" :size="18" aria-hidden="true" />
  </button>
</template>

<style scoped>
/* .theme-toggle {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;

  background: transparent;
  border: 1px solid rgba(127, 127, 127, 0.25);
  cursor: pointer;

  line-height: 0;
  user-select: none;
}

.theme-toggle:hover {
  border-color: rgba(127, 127, 127, 0.45);
}

.theme-toggle:focus-visible {
  outline: 2px solid rgba(127, 127, 127, 0.6);
  outline-offset: 2px;
} */
</style>
