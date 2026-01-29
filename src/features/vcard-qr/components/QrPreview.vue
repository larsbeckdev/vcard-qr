<script setup lang="ts">
import { computed } from "vue";
import {
  NCard,
  NSpace,
  NButton,
  NAlert,
  NImage,
  NCode,
  NScrollbar,
  NSpin,
} from "naive-ui";

const props = defineProps<{
  qrDataUrl: string;
  vcardText: string;
  filename: string;
  isGenerating: boolean;
  error: string | null;
}>();

const emit = defineEmits<{
  (e: "download-vcf"): void;
  (e: "regenerate"): void;
}>();

const pngName = computed(() => {
  const base = props.filename.replace(/\.vcf$/i, "") || "qr";
  return `${base}.png`;
});
</script>

<template>
  <n-card title="QR Preview" size="medium">
    <n-space justify="space-between" align="center">
      <n-space>
        <n-button @click="emit('regenerate')">Regenerate</n-button>

        <n-button type="primary" @click="emit('download-vcf')">
          Download {{ filename }}
        </n-button>

        <n-button
          tag="a"
          :href="qrDataUrl || undefined"
          :download="pngName"
          :disabled="!qrDataUrl">
          Download QR (PNG)
        </n-button>
      </n-space>

      <n-spin v-if="isGenerating" size="small" />
    </n-space>

    <div style="margin-top: 12px">
      <n-alert v-if="error" type="error" :show-icon="false">
        {{ error }}
      </n-alert>
    </div>

    <div class="preview">
      <n-card size="small" title="QR">
        <div class="qrBox">
          <n-image
            v-if="qrDataUrl"
            :src="qrDataUrl"
            alt="vCard QR"
            :preview-disabled="true"
            width="240" />
          <div v-else class="empty">No QR yet</div>
        </div>
      </n-card>

      <n-card size="small" title="vCard Text">
        <n-scrollbar style="max-height: 360px">
          <n-code :code="vcardText" language="text" />
        </n-scrollbar>
      </n-card>
    </div>
  </n-card>
</template>

<style scoped>
.preview {
  margin-top: 12px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 12px;
}
.qrBox {
  min-height: 280px;
  display: grid;
  place-items: center;
}
.empty {
  opacity: 0.7;
}
@media (max-width: 900px) {
  .preview {
    grid-template-columns: 1fr;
  }
  .qrBox {
    min-height: 220px;
  }
}
</style>
