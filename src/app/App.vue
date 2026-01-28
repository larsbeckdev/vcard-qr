<script setup lang="ts">
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NScrollbar,
} from "naive-ui";
</script>

<template>
  <n-layout style="min-height: 100vh">
    <header>
      <n-layout-header
        bordered
        style="
          height: 64px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        ">
        <slot name="header" />
      </n-layout-header>
    </header>

    <main>
      <n-layout-content>
        <n-scrollbar style="max-height: calc(100vh - 64px - 48px)">
          <div style="padding: 16px">
            <slot />
          </div>
        </n-scrollbar>
      </n-layout-content>
    </main>

    <footer>
      <n-layout-footer
        bordered
        style="
          height: 48px;
          padding: 0 16px;
          display: flex;
          align-items: center;
        ">
        <slot name="footer" />
      </n-layout-footer>
    </footer>
  </n-layout>
</template>
