<script setup>
import LogoPrimary from "@/components/logo/LogoPrimary.vue";
import LogoSecondary from "@/components/logo/LogoSecondary.vue";
import ThemeToggle from "@/features/theme-toggle/ThemeToggle.vue";
</script>

<template>
  <div class="logo-box flex align-center gap-2 w-8">
    <LogoPrimary :width="30" />
    <LogoSecondary :width="50" />
  </div>
  <ThemeToggle />
</template>

<style scoped></style>
