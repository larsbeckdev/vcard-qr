import { form } from "./dom.js";

export const STORAGE_KEY = "vcardqr";

export function getFormData() {
  const fd = new FormData(form);
  return Object.fromEntries(fd.entries());
}

export function setFormData(data = {}) {
  for (const [key, value] of Object.entries(data)) {
    const el = form.elements.namedItem(key);
    if (!el) continue;
    el.value = String(value ?? "");
  }
}

export function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormData()));
  } catch {}
}

export function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
