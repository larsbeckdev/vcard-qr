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
  

  <!-- --------------- FOOTER ------------------ -->
  <footer class="site-footer">
    <div class="layout site-footer-inner">
      <p>&copy; 2026 vCard-QR. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped></style>
