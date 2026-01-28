<script setup>
import LogoPrimary from "@/components/logo/LogoPrimary.vue";
import LogoSecondary from "@/components/logo/LogoSecondary.vue";
import ThemeToggle from "@/features/theme-toggle/ThemeToggle.vue";
</script>

<template>
  <div class="layout site-header-inner">
    <div class="site-header-inner-left">
      <div class="logo-box">
        <LogoPrimary :width="30" />
        <LogoSecondary :width="50" />
      </div>
    </div>

    <div class="site-header-inner-right">
      <ThemeToggle />
    </div>
  </div>
</template>

<style scoped>


.logo-box {
}

.site-header-inner-right {
}
</style>
