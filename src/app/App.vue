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
    <!-- <Header /> -->
    <!-- --------------- MAIN ------------------ -->
    <!-- <Main /> -->
    <!-- --------------- FOOTER ------------------ -->
    <!-- <Footer /> -->

    <n-layout style="height: 100vh">
      <n-layout-header
        bordered
        style="
          height: 64px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        ">
        <strong>vCard-QR</strong>
        <slot name="header-right" />
      </n-layout-header>

      <n-layout-content style="height: calc(100vh - 64px)">
        <n-scrollbar style="height: 100%">
          <div style="padding: 16px">
            <slot />
          </div>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </UiProvider>
</template>
