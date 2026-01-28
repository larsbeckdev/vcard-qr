import { qrContainer, vcardTextEl, downloadLink } from "./dom.js";
import { buildVCard } from "./vcard.js";
import { getFormData } from "./storage.js";

let qrInstance = null;

function toUTF8ByteString(str) {
  return unescape(encodeURIComponent(str));
}

export function clearQR() {
  qrContainer.innerHTML = "";
  vcardTextEl.textContent = "";
  downloadLink.style.display = "none";
  qrInstance = null;
}

export function generateQR() {
  const vcard = buildVCard(getFormData());
  vcardTextEl.textContent = vcard;

  clearQR();

  qrInstance = new QRCode(qrContainer, {
    text: toUTF8ByteString(vcard),
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
