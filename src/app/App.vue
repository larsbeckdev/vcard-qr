<script setup lang="ts">
import UiProvider from "@/app/providers/UiProvider.vue";

import Header from "@/app/layout/default/Header.vue";
import Footer from "@/app/layout/default/Footer.vue";

import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NScrollbar,
} from "naive-ui";
</script>

<template>
  <UiProvider>
    <n-layout style="height: 100vh">
      <!-- Header -->
      <n-layout-header bordered style="height: 64px" class="layout-header">
        <Header />
      </n-layout-header>

      <!-- Content -->
      <n-layout-content style="flex: 1; min-height: 0" class="layout-content">
        <n-scrollbar style="height: 100%">
          <main class="main">
            <router-view />
          </main>
        </n-scrollbar>
      </n-layout-content>

      <!-- Footer -->
      <n-layout-footer bordered style="height: 48px" class="layout-footer">
        <Footer />
      </n-layout-footer>
    </n-layout>
  </UiProvider>
</template>

<style scoped>

</style>
