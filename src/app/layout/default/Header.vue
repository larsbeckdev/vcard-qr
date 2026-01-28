<script setup>
import LogoPrimary from "@/components/logo/LogoPrimary.vue";
import LogoSecondary from "@/components/logo/LogoSecondary.vue";
import ThemeToggle from "@/features/theme-toggle/ThemeToggle.vue";
</script>

<template>
  <header class="site-header">
    <div class="layout site-header-inner">
      <div class="site-header-inner-left">
        <div class="logo-box">
          <LogoPrimary :width="30" />
          <LogoSecondary :width="50" />
        </div>
      </div>

      <div class="site-header-inner-right">
        <div class="dark-mode-toggle-box">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
