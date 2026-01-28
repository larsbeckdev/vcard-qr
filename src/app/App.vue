<script setup lang="ts">
import UiProvider from "@/app/providers/UiProvider.vue";
import Header from "@/app/layout/default/Header.vue";
import Main from "@/app/layout/default/Main.vue";
import Footer from "@/app/layout/default/Footer.vue";

import { NLayout, NLayoutHeader, NLayoutContent, NScrollbar } from "naive-ui";
</script>

<template>
  <UiProvider>
    <!-- --------------- HEADER ------------------ -->
    <Header />
    <!-- --------------- MAIN ------------------ -->
    <Main />
    <!-- --------------- FOOTER ------------------ -->
    <!-- --------------- FOOTER ------------------ -->
    <Footer />
     
  </UiProvider>
</template>
