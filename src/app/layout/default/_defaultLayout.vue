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
      <n-layout-header
        bordered
        class="layout-header flex align-center justify-between mx-auto my-0">
        <Header />
      </n-layout-header>

      <!-- Content -->
      <n-layout-content class="layout-content">
        <n-scrollbar class="content-scroll">
          <div class="content-inner">
            <router-view />
          </div>
        </n-scrollbar>
      </n-layout-content>

      <!-- Footer -->
      <n-layout-footer
        bordered
        class="layout-footer flex justify-center items-center">
        <Footer />
      </n-layout-footer>
    </n-layout>
  </UiProvider>
</template>

<style>
:root {
  --header-h: 64px;
  --footer-h: 48px;
}
</style>

<style scoped>
.app-layout {
  --header-h: 64px;
  --footer-h: 48px;

  height: 100vh;
  overflow: hidden;
}

/* HEADER */
.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-h);
  z-index: 100;
}

.layout-header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  max-width: 980px;
  margin: 0 auto;
}

/* FOOTER */
.layout-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--footer-h);
  z-index: 100;
}

/* CONTENT */
.layout-content {
  height: 100vh;
  padding-top: var(--header-h);
  padding-bottom: var(--footer-h);
  overflow: hidden;
}

/* SCROLL AREA */
.content-scroll {
  height: calc(100vh - var(--header-h) - var(--footer-h));
}

/* CENTERED INNER */
.content-inner {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 24px;
}
</style>
