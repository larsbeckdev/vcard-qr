<script setup>
import LogoPrimary from "@/components/logo/LogoPrimary.vue";
import LogoSecondary from "@/components/logo/LogoSecondary.vue";
import ThemeToggle from "@/features/theme-toggle/ThemeToggle.vue";
</script>

<template>
  <div class="header-inner">
    <div class="logo-box">
      <LogoPrimary :width="30" />
      <LogoSecondary :width="50" />
    </div>

    <ThemeToggle />
  </div>
</template>

<style scoped>


.logo-box {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
