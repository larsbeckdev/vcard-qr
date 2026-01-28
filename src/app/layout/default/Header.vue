<script setup>
import LogoPrimary from "@/components/logo/LogoPrimary.vue";
import LogoSecondary from "@/components/logo/LogoSecondary.vue";
import ThemeToggle from "@/features/theme-toggle/ThemeToggle.vue";
</script>

<template>
  <div class="site-header">
    <div class="logo-box">
      <LogoPrimary :width="30" />
      <LogoSecondary :width="50" />
    </div>

    <ThemeToggle />
  </div>
</template>

<style scoped>
.site-header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
