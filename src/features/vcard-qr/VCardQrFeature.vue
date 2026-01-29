<script setup lang="ts">
import { NPageHeader, NGrid, NGridItem, useMessage } from "naive-ui";

import VCardForm from "./components/VCardForm.vue";
import QrPreview from "./components/QrPreview.vue";
import ImportExportPanel from "./components/ImportExportPanel.vue";

import { useVCardQr } from "./composables/useVCardQr";

const message = useMessage();

const {
  data,
  vcardText,
  qrDataUrl,
  qrError,
  isGenerating,
  generateQr,
  clearAll,
  downloadVcf,
  exportJson,
  importJson,
  filename,
} = useVCardQr();

function safeImport(raw: string) {
  try {
    importJson(raw);
    message.success("Import successful");
  } catch (e) {
    message.error(e instanceof Error ? e.message : "Invalid JSON");
  }
}
</script>

<template>
  <n-page-header
    title="vCard → QR"
    subtitle="Generate a QR code that encodes a vCard and download .vcf"
    class="flex justify-center align-center h-20 text-center" />

  <n-grid
    :cols="1"
    :x-gap="12"
    :y-gap="12"
    responsive="screen"
    style="margin-top: 12px">
    <!-- QR Preview -->
    <n-grid-item>
      <QrPreview
        :qr-data-url="qrDataUrl"
        :vcard-text="vcardText"
        :filename="filename"
        :is-generating="isGenerating"
        :error="qrError"
        @download-vcf="downloadVcf"
        @regenerate="generateQr" />
    </n-grid-item>

    <!-- vCard Form -->
    <n-grid-item>
      <VCardForm v-model="data" @clear="clearAll" />
    </n-grid-item>

    <!-- Import / Export Panel -->
    <n-grid-item>
      <n-grid :cols="1" :y-gap="12">
        <n-grid-item>
          <ImportExportPanel
            :export-json="exportJson"
            @import-json="safeImport"
            @clear="clearAll" />
        </n-grid-item>
      </n-grid>
    </n-grid-item>
  </n-grid>
</template>

<style>
.n-page-header__main {
  flex-direction: column;
}
</style>
