import { getFormData, setFormData, saveToStorage } from "./storage.js";
import { generateQR } from "./qr.js";

const ALLOWED_KEYS = [
  "firstName",
  "lastName",
  "org",
  "title",
  "phone",
  "email",
  "website",
  "street",
  "zip",
  "city",
  "country",
];

export function handleExport() {
  const data = getFormData();
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `vcardqr-${new Date().toISOString().slice(0, 19)}.json`;
  a.click();
}

export async function handleImportFile(file) {
  const text = await file.text();
  const data = JSON.parse(text);

  const cleaned = Object.fromEntries(
    ALLOWED_KEYS.filter((k) => k in data).map((k) => [k, data[k]]),
  );

  setFormData(cleaned);
  saveToStorage();
  generateQR();
}
