<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  NLoadingBarProvider,
  NModalProvider,
  darkTheme,
} from "naive-ui";

import { computed } from "vue";
import { themeOverrides } from "@/app/theme";
import { useTheme } from "@/app/composables/useTheme";

const { isDark } = useTheme();

const theme = computed(() => (isDark.value ? darkTheme : null));
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <n-modal-provider>
              <slot />
            </n-modal-provider>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
