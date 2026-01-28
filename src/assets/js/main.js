import { btnGenerate, btnExport, importFile } from "./dom.js";
import { generateQR } from "./qr.js";
import { handleExport, handleImportFile } from "./import-export.js";
import { loadFromStorage, setFormData } from "./storage.js";

btnGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  generateQR();
});

btnExport?.addEventListener("click", (e) => {
  e.preventDefault();
  handleExport();
});

importFile?.addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  await handleImportFile(file);
  e.target.value = "";
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = loadFromStorage();
  if (saved) {
    setFormData(saved);
    generateQR();
  }
});
