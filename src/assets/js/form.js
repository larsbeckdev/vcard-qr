import { form, btnClear } from "./dom.js";
import { saveToStorage } from "./storage.js";
import { clearQR, generateQR } from "./qr.js";

let debounce;

form.addEventListener("input", () => {
  saveToStorage();
  clearTimeout(debounce);
  debounce = setTimeout(generateQR, 150);
});

btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  clearQR();
  localStorage.removeItem("vcardqr");
});
