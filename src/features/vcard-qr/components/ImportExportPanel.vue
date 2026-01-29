<script setup lang="ts">
import { ref } from "vue";
import { NCard, NSpace, NButton, NInput } from "naive-ui";

const props = defineProps<{
  exportJson: () => string;
}>();

const emit = defineEmits<{
  (e: "import-json", raw: string): void;
  (e: "clear"): void;
}>();

const raw = ref("");

function doExport() {
  raw.value = props.exportJson();
}

function doImport() {
  emit("import-json", raw.value);
}
</script>

<template>
  <n-card title="Import / Export" size="medium">
    <n-space>
      <n-button @click="doExport">Export</n-button>
      <n-button @click="doImport">Import</n-button>
      <n-button type="error" secondary @click="emit('clear')">Clear</n-button>
    </n-space>

    <div style="margin-top: 12px">
      <n-input
        v-model:value="raw"
        type="textarea"
        placeholder='Paste JSON here (exported data), then click "Import".'
        :autosize="{ minRows: 8, maxRows: 14 }" />
    </div>
  </n-card>
</template>
