const form = document.getElementById("vcard-form");
const qrContainer = document.getElementById("qr");
const vcardTextEl = document.getElementById("vcardText");
const downloadLink = document.getElementById("download");

const btnGenerate = document.getElementById("btn-generate");
const btnClear = document.getElementById("btn-clear");

let qrInstance = null;

function esc(str = "") {
  // vCard escaping (basic)
  return String(str)
    .replaceAll("\\", "\\\\")
    .replaceAll("\n", "\\n")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .trim();
}

function buildVCard(data) {
  const firstName = esc(data.firstName);
  const lastName = esc(data.lastName);
  const org = esc(data.org);
  const title = esc(data.title);
  const phone = esc(data.phone);
  const email = esc(data.email);
  const website = esc(data.website);

  const street = esc(data.street);
  const zip = esc(data.zip);
  const city = esc(data.city);
  const country = esc(data.country);

  // ADR format: PO Box;Extended;Street;City;Region;PostalCode;Country
  const adr = `;;${street};${city};;${zip};${country}`;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;;`,
    `FN:${[firstName, lastName].filter(Boolean).join(" ")}`,

    org ? `ORG:${org}` : null,
    title ? `TITLE:${title}` : null,

    phone ? `TEL;TYPE=CELL:${phone}` : null,
    email ? `EMAIL;TYPE=INTERNET:${email}` : null,
    website ? `URL:${website}` : null,

    street || city || zip || country ? `ADR;TYPE=HOME:${adr}` : null,

    "END:VCARD",
  ].filter(Boolean);

  return lines.join("\n");
}

function getFormData() {
  const fd = new FormData(form);
  return Object.fromEntries(fd.entries());
}

function clearQR() {
  qrContainer.innerHTML = "";
  vcardTextEl.textContent = "";
  downloadLink.style.display = "none";
  qrInstance = null;
}

function generateQR() {
  const data = getFormData();
  const vcard = buildVCard(data);

  // show vCard debug
  vcardTextEl.textContent = vcard;

  // reset container
  qrContainer.innerHTML = "";
  downloadLink.style.display = "none";

  // Create QR
  qrInstance = new QRCode(qrContainer, {
    text: vcard,
    width: 240,
    height: 240,
    correctLevel: QRCode.CorrectLevel.M,
  });

  // enable download (canvas or img depending on lib output)
  setTimeout(() => {
    const img = qrContainer.querySelector("img");
    const canvas = qrContainer.querySelector("canvas");

    const dataUrl = img?.src || canvas?.toDataURL("image/png");
    if (dataUrl) {
      downloadLink.href = dataUrl;
      downloadLink.style.display = "inline-block";
    }
  }, 50);
}

btnGenerate.addEventListener("click", generateQR);

btnClear.addEventListener("click", () => {
  form.reset();
  clearQR();
});

// optional: live update
form.addEventListener("input", () => {
  // wenn du live willst: generateQR();
  // wenn nicht: auskommentiert lassen
});
