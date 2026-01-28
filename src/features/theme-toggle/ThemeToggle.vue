<script setup lang="ts">
import { computed, h } from "vue";
import { NButton, NDropdown } from "naive-ui";
import { Monitor, Sun, Moon } from "lucide-vue-next";
import { useTheme, type ThemeMode } from "@/app/composables/useTheme";

type Props = {
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  showLabel: false,
});

const { mode, resolved, setMode } = useTheme();

function iconComp(mode: ThemeMode) {
  if (mode === "auto") return Monitor;
  if (mode === "light") return Sun;
  return Moon;
}

const currentLabel = computed(() => {
  if (mode.value === "auto") return `Auto (${resolved.value})`;
  return mode.value === "light" ? "Light" : "Dark";
});

const options = computed(() => [
  {
    label: "Auto",
    key: "auto",
    icon: () => h(Monitor, { size: 16 }),
  },
  {
    label: "Light",
    key: "light",
    icon: () => h(Sun, { size: 16 }),
  },
  {
    label: "Dark",
    key: "dark",
    icon: () => h(Moon, { size: 16 }),
  },
]);

function handleSelect(key: string | number) {
  setMode(key as ThemeMode);
}
</script>

<template>
  <n-dropdown :options="options" trigger="click" @select="handleSelect">
    <n-button :size="props.size" secondary>
      <component :is="iconComp(mode)" :size="18" />
      <span v-if="props.showLabel" style="margin: 0 8px">
        {{ currentLabel }}
      </span>
    </n-button>
  </n-dropdown>
</template>
