const form = document.getElementById("vcard-form");
const qrContainer = document.getElementById("qr");
const vcardTextEl = document.getElementById("vcardText");
const downloadLink = document.getElementById("download");

const btnGenerate = document.getElementById("btn-generate");
const btnClear = document.getElementById("btn-clear");

// NEW
const btnExport = document.getElementById("btn-export");
const importFile = document.getElementById("import-file");

let qrInstance = null;

// ===== Storage =====
const STORAGE_KEY = "vcardqr.form.v1";

function escText(str = "") {
  return String(str)
    .replaceAll("\\", "\\\\")
    .replaceAll("\r\n", "\n")
    .replaceAll("\r", "\n")
    .replaceAll("\n", "\\n")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .trim();
}

function escUri(str = "") {
  return String(str).trim();
}

function buildVCard(data) {
  const firstName = escText(data.firstName);
  const lastName = escText(data.lastName);

  const org = escText(data.org);
  const title = escText(data.title);

  const phone = escText(data.phone);
  const email = escText(data.email);
  const website = escUri(data.website);

  const street = escText(data.street);
  const zip = escText(data.zip);
  const city = escText(data.city);
  const country = escText(data.country);

  const NL = "\r\n";
  const adr = `;;${street};${city};;${zip};${country}`;
  const fn = [firstName, lastName].filter(Boolean).join(" ").trim();

  const lines = [
    "BEGIN:VCARD",
    "VERSION:4.0",
    `N;CHARSET=UTF-8:${lastName};${firstName};;;`,
    fn ? `FN;CHARSET=UTF-8:${fn}` : null,

    org ? `ORG;CHARSET=UTF-8:${org}` : null,
    title ? `TITLE;CHARSET=UTF-8:${title}` : null,

    phone ? `TEL;TYPE=cell:${phone}` : null,
    email ? `EMAIL:${email}` : null,
    website ? `URL:${website}` : null,

    street || city || zip || country
      ? `ADR;TYPE=home;CHARSET=UTF-8:${adr}`
      : null,

    "END:VCARD",
  ].filter(Boolean);

  return lines.join(NL);
}

function getFormData() {
  const fd = new FormData(form);
  return Object.fromEntries(fd.entries());
}

function setFormData(data = {}) {
  // setzt Werte anhand der "name" Attribute im Formular
  for (const [key, value] of Object.entries(data)) {
    const el = form.elements.namedItem(key);
    if (!el) continue;

    // falls mehrere Felder gleichen Namen haben (Radio/Checkbox Gruppen)
    if (el instanceof RadioNodeList) {
      // bei einfachen Textfeldern ist das hier oft nicht nötig, aber safe:
      if (typeof el.value !== "undefined") el.value = String(value ?? "");
      continue;
    }

    el.value = String(value ?? "");
  }
}

// ===== QR =====
function clearQR() {
  qrContainer.innerHTML = "";
  vcardTextEl.textContent = "";
  downloadLink.style.display = "none";
  qrInstance = null;
}

function toUTF8ByteString(str) {
  return unescape(encodeURIComponent(str));
}

function generateQR() {
  const data = getFormData();
  const vcard = buildVCard(data);

  vcardTextEl.textContent = vcard;

  qrContainer.innerHTML = "";
  downloadLink.style.display = "none";

  const qrText = toUTF8ByteString(vcard);

  qrInstance = new QRCode(qrContainer, {
    text: qrText,
    width: 240,
    height: 240,
    correctLevel: QRCode.CorrectLevel.M,
  });

  setTimeout(() => {
    const img = qrContainer.querySelector("img");
    const canvas = qrContainer.querySelector("canvas");
    const dataUrl = img?.src || canvas?.toDataURL("image/png");

    if (dataUrl) {
      downloadLink.href = dataUrl;
      downloadLink.style.display = "inline-block";
    }
  }, 80);
}

// ===== Local Storage =====
function saveToStorage() {
  const data = getFormData();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore (private mode/quota)
  }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// ===== Export / Import =====
function downloadJson(filename, dataObj) {
  const blob = new Blob([JSON.stringify(dataObj, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

function handleExport() {
  const data = getFormData();
  const ts = new Date().toISOString().slice(0, 19).replaceAll(":", "-");
  downloadJson(`vcardqr-${ts}.json`, data);
}

async function handleImportFile(file) {
  const text = await file.text();
  const data = JSON.parse(text);

  if (!data || typeof data !== "object") {
    throw new Error("Invalid JSON structure");
  }

  setFormData(data);
  saveToStorage();
  generateQR();
}

// ===== Events =====
btnGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  generateQR();
});

btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  clearQR();
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
});

btnExport?.addEventListener("click", (e) => {
  e.preventDefault();
  handleExport();
});

importFile?.addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
    await handleImportFile(file);
  } catch (err) {
    alert("Import fehlgeschlagen. Bitte eine gültige JSON-Datei wählen.");
  } finally {
    // allow importing same file again
    e.target.value = "";
  }
});

// Live autosave + optional QR update (mit Debounce)
let t = null;
form.addEventListener("input", () => {
  saveToStorage();

  clearTimeout(t);
  t = setTimeout(() => {
    generateQR();
  }, 150);
});

// Restore on load
window.addEventListener("DOMContentLoaded", () => {
  const saved = loadFromStorage();
  if (saved) {
    setFormData(saved);
    generateQR();
  }
});
