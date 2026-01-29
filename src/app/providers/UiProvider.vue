<script setup lang="ts">
import { computed } from "vue";
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  NLoadingBarProvider,
  NModalProvider,
  darkTheme,
  lightTheme,
} from "naive-ui";

import { getNaiveOverrides } from "@/app/theme";
import { useTheme } from "@/app/composables/useTheme";

const { isDark } = useTheme();

const theme = computed(() => (isDark.value ? darkTheme : lightTheme));
const themeOverrides = computed(() => getNaiveOverrides(isDark.value));
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider :container-style="{ top: '64px' }">
            <n-modal-provider>
              <slot />
            </n-modal-provider>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
