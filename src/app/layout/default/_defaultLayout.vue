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
      <!-- HEADER BAR (full width) -->
      <n-layout-header bordered class="layout-header">
        <div class="container header-inner">
          <Header />
        </div>
      </n-layout-header>

      <!-- CONTENT (scroll area) -->
      <n-layout-content class="layout-content">
        <n-scrollbar class="content-scroll">
          <div class="container content-inner">
            <router-view />
          </div>
        </n-scrollbar>
      </n-layout-content>

      <!-- FOOTER BAR (full width) -->
      <n-layout-footer bordered class="layout-footer">
        <div class="container footer-inner">
          <Footer />
        </div>
      </n-layout-footer>
    </n-layout>
  </UiProvider>
</template>

<style scoped>
.app-layout {
  --header-h: 64px;
  --footer-h: 48px;
  --container-w: 980px;

  height: 100vh;
  overflow: hidden; /* wichtig: body soll nicht scrollen */
}

/* --- shared container --- */
.container {
  max-width: var(--container-w);
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
}

/* --- header/footer are full width fixed bars --- */
.layout-header {
  position: fixed;
  inset: 0 0 auto 0; /* top:0 left:0 right:0 */
  height: var(--header-h);
  z-index: 100;
  display: flex;
  align-items: center;
}

.layout-footer {
  position: fixed;
  inset: auto 0 0 0; /* bottom:0 left:0 right:0 */
  height: var(--footer-h);
  z-index: 100;
  display: flex;
  align-items: center;
}

/* optional: inner alignment */
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* --- content area between header/footer --- */
.layout-content {
  height: 100vh;
  padding-top: var(--header-h);
  padding-bottom: var(--footer-h);
  overflow: hidden; /* wichtig */
}

.content-scroll {
  height: calc(100vh - var(--header-h) - var(--footer-h));
}

.content-inner {
  padding: 24px 16px; /* top/bottom spacing inside content */
}
</style>
