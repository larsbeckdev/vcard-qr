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
    <n-layout style="min-height: 100vh">
      <!-- Header -->
      <header>
        <n-layout-header bordered style="height: 64px">
          <Header />
        </n-layout-header>
      </header>

      <!-- Content -->
      <main>
        <n-layout-content style="height: calc(100vh - 64px - 48px)">
          <n-scrollbar style="height: 100%">
            <div class="main-inner">
              <router-view />
            </div>
          </n-scrollbar>
        </n-layout-content>
      </main>

      <!-- Footer -->

      <footer>
        <n-layout-footer bordered style="height: 48px">
          <Footer />
        </n-layout-footer>
      </footer>
    </n-layout>
  </UiProvider>
</template>
