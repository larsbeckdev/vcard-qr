<script setup lang="ts">
import { NSwitch } from "naive-ui";
import { useTheme } from "@/app/composables/useTheme";

type Props = {
  showLabels?: boolean;
  size?: "small" | "medium" | "large";
};

const props = withDefaults(defineProps<Props>(), {
  showLabels: false,
  size: "medium",
});

const { isDark, setDark } = useTheme();
</script>

<template>
  <div class="theme-toggle">
    <span v-if="props.showLabels" class="label">Theme</span>

    <n-switch
      :value="isDark"
      @update:value="setDark"
      :size="props.size"
      aria-label="Toggle theme">
      <template #checked>🌙</template>
      <template #unchecked>☀️</template>
    </n-switch>
  </div>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.label {
  font-size: 14px;
  opacity: 0.8;
}
</style>
