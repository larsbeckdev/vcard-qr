<script setup>
import LogoPrimary from "@/components/logo/LogoPrimary.vue";
// import LogoSecondary from "@/components/logo/LogoSecondary.vue";

import ThemeToggle from "@/features/theme-toggle/ThemeToggle.vue";

import UiProvider from "@/app/providers/UiProvider.vue";
</script>

<template>
  <UiProvider>


    
    <!-- --------------- MAIN ------------------ -->
    <main>
      <div class="main-inner">
        <router-view />
      </div>
    </main>


  </UiProvider>
  <!-- --------------- HEADER ------------------ -->
  <header class="site-header">
    <div class="layout site-header-inner">
      <div class="site-header-inner-left">
        <div class="logo-box">
          <LogoPrimary :width="30" />
          <!-- <LogoSecondary :width="50" /> -->
        </div>
      </div>

      <div class="site-header-inner-right">
        <div class="dark-mode-toggle-box">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>

  <!-- --------------- FOOTER ------------------ -->
  <footer class="site-footer">
    <div class="layout site-footer-inner">
      <p>&copy; 2026 vCard-QR. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped></style>
