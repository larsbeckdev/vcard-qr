<script setup>


import UiProvider from "@/app/providers/UiProvider.vue";

import Header from "@/app/layout/default/Header.vue";
import Main from "@/app/layout/default/Main.vue";
import Footer from "@/app/layout/default/Footer.vue";
</script>

<template>
  <UiProvider>
    <!-- --------------- HEADER ------------------ -->
    <Header />
    <!-- --------------- MAIN ------------------ -->
    <Main />
    <!-- --------------- FOOTER ------------------ -->
    <Footer />
  </UiProvider>
</template>

<style scoped></style>
