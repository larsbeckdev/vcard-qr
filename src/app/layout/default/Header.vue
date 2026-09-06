<script setup lang="ts">
import LogoSecondary from "@/components/logo/LogoSecondary.vue";
import ThemeToggle from "@/features/theme-toggle/ThemeToggle.vue";
import { Github } from "lucide-vue-next";
</script>

<template>
  <div class="logo-box flex items-center gap-2">
    <LogoSecondary class="h-full" />
  </div>

  <n-space>
    <n-button
      tertiary
      tag="a"
      href="https://github.com/larsbeckdev/vcard-qr"
      target="_blank"
      rel="noopener noreferrer">
      <span class="inline-flex items-center gap-2">
        <n-icon>
          <Github />
        </n-icon>
        <span class="hidden sm:block">GitHub</span>
      </span>
    </n-button>

    <ThemeToggle />
  </n-space>
</template>
