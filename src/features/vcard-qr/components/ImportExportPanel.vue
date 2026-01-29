<script setup lang="ts">
import { ref } from "vue";
import type { UploadFileInfo } from "naive-ui";
import {
  NCard,
  NSpace,
  NButton,
  NUpload,
  NUploadDragger,
  NText,
  NP,
  NInput,
} from "naive-ui";

import { downloadTextFile } from "../utils/download";

const props = defineProps<{
  exportJson: () => string;
  exportFilename?: string;
}>();

const emit = defineEmits<{
  (e: "import-json", raw: string): void;
}>();

const exportName = props.exportFilename ?? "vcard-data.json";
const raw = ref("");

// ---------- Export ----------
function downloadExport() {
  const json = props.exportJson();
  raw.value = json;
  downloadTextFile(exportName, json, "application/json;charset=utf-8");
}

function exportToTextarea() {
  raw.value = props.exportJson();
}

// ---------- Import (Textarea) ----------
function importFromTextarea() {
  emit("import-json", raw.value);
}

// ---------- Import (File) ----------
async function handleFileChange(options: { file: UploadFileInfo }) {
  const f = options.file.file;
  if (!f) return;

  const text = await f.text();
  raw.value = text; // ersetzt den Inhalt (nicht append)
  emit("import-json", text); // triggert deinen Import
}

// ---------- Clear (nur Textarea) ----------
function clearTextarea() {
  raw.value = "";
}
</script>

<template>
  <n-card title="Import / Export" size="medium">
    <n-space>
      <n-button @click="downloadExport">Download JSON</n-button>
      <n-button secondary @click="exportToTextarea">Export → Text</n-button>
      <n-button secondary @click="importFromTextarea">Import ← Text</n-button>
      <n-button type="warning" secondary @click="clearTextarea"
        >Clear Text</n-button
      >
    </n-space>

    <div style="margin-top: 12px">
      <n-input
        v-model:value="raw"
        type="textarea"
        placeholder="Paste JSON here or import a .json file below."
        :autosize="{ minRows: 8, maxRows: 14 }" />
    </div>

    <div style="margin-top: 16px">
      <n-upload
        accept=".json,application/json"
        :max="1"
        :default-upload="false"
        :show-file-list="false"
        @change="handleFileChange">
        <n-upload-dragger>
          <n-text style="font-size: 16px"
            >Click or drag a JSON file here</n-text
          >
          <n-p depth="3" style="margin-top: 8px">
            Imports your vCard form data from a local .json file.
          </n-p>
        </n-upload-dragger>
      </n-upload>
    </div>
  </n-card>
</template>
