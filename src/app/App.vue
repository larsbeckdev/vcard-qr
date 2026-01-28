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
    <n-layout class="app-layout">
      <!-- Header -->
      <n-layout-header bordered class="layout-header">
        <Header />
      </n-layout-header>

      <!-- Content -->
      <n-layout-content class="layout-content">
        <n-scrollbar class="content-scroll">
          <router-view />
        </n-scrollbar>
      </n-layout-content>

      <!-- Footer -->
      <n-layout-footer bordered class="layout-footer">
        <Footer />
      </n-layout-footer>
    </n-layout>
  </UiProvider>
</template>

<style scoped>
.app-layout {
  height: 100vh;
  overflow: hidden;
}

/* HEADER */
.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 100;
}

/* FOOTER */
.layout-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  z-index: 100;
}

/* CONTENT */
.layout-content {
  position: relative;
  padding-top: 64px;
  padding-bottom: 48px;
  height: 100vh;
  overflow: hidden;
}

.content-scroll {
  height: calc(100vh - 64px - 48px);
}

.main {
  min-height: 100%;
}
</style>
