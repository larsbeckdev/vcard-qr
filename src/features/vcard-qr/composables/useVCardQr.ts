import { computed, ref, watch } from "vue";
import * as QRCode from "qrcode";

import type { VCardData } from "../types/vcard";
import { buildVCard } from "../utils/vcard";
import { readJson, writeJson } from "../utils/storage";
import { downloadTextFile } from "../utils/download";

const STORAGE_KEY = "feature.vcardQr.data";

export const defaultVCardData: VCardData = {
  firstName: "",
  lastName: "",
  org: "",
  title: "",
  phone: "",
  email: "",
  website: "",
  street: "",
  zip: "",
  city: "",
  country: "",
  note: "",
};

export function useVCardQr() {
  const data = ref<VCardData>(readJson(STORAGE_KEY, defaultVCardData));

  const vcardText = computed(() => buildVCard(data.value));
  const filename = computed(() => {
    const fn = `${data.value.firstName} ${data.value.lastName}`.trim();
    return (fn ? fn.replace(/\s+/g, "-") : "contact") + ".vcf";
  });

  const qrDataUrl = ref<string>("");
  const qrError = ref<string | null>(null);
  const isGenerating = ref(false);

  async function generateQr() {
    qrError.value = null;
    isGenerating.value = true;
    try {
      // QRCode.toDataURL(text, options)
      qrDataUrl.value = await QRCode.toDataURL(vcardText.value, {
        errorCorrectionLevel: "M",
        margin: 1,
        scale: 6,
      });
    } catch (e) {
      qrDataUrl.value = "";
      qrError.value = e instanceof Error ? e.message : "QR generation failed";
    } finally {
      isGenerating.value = false;
    }
  }

  function clearAll() {
    data.value = { ...defaultVCardData };
  }

  function downloadVcf() {
    downloadTextFile(
      filename.value,
      vcardText.value,
      "text/vcard;charset=utf-8",
    );
  }

  function exportJson(): string {
    return JSON.stringify(data.value, null, 2);
  }

  function importJson(raw: string) {
    const parsed = JSON.parse(raw) as Partial<VCardData>;
    data.value = { ...defaultVCardData, ...parsed };
  }

  // persist
  watch(data, (val) => writeJson(STORAGE_KEY, val), { deep: true });

  watch(
    vcardText,
    () => {
      void generateQr();
    },
    { immediate: true },
  );

  return {
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
  };
}
