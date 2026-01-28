<script setup>
import LogoPrimary from "@/components/logo/LogoPrimary.vue";
// import LogoSecondary from "@/components/logo/LogoSecondary.vue";

import ThemeToggle from "@/features/theme-toggle/ThemeToggle.vue";

import UiProvider from "@/app/providers/UiProvider.vue";

import Header from "@/app/layout/default/Header.vue";
import Footer from "@/app/layout/default/Footer.vue";
</script>

<template>
  <UiProvider>
    <!-- --------------- HEADER ------------------ -->
    <Header />
    <!-- --------------- MAIN ------------------ -->
    <main>
      <div class="main-inner">
        <router-view />
      </div>
    </main>
    <!-- --------------- FOOTER ------------------ -->
    <Footer />
  </UiProvider>
</template>

<style scoped></style>
