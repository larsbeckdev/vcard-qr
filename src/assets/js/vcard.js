const form = document.getElementById("vcard-form");
const qrContainer = document.getElementById("qr");
const vcardTextEl = document.getElementById("vcardText");
const downloadLink = document.getElementById("download");

const btnGenerate = document.getElementById("btn-generate");
const btnClear = document.getElementById("btn-clear");

let qrInstance = null;

function escText(str = "") {
  // vCard text escaping (RFC-ish)
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
  // URLs shouldn't be backslash-escaped like text; trim only
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

  // vCard uses CRLF line breaks
  const NL = "\r\n";

  // ADR format: PO Box;Extended;Street;Locality(City);Region;PostalCode;Country
  const adr = `;;${street};${city};;${zip};${country}`;

  // Use vCard 4.0 (UTF-8 friendly)
  // Add CHARSET=UTF-8 to text properties for better compatibility
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
  }, 80);
}

btnGenerate.addEventListener("click", (e) => {
  e.preventDefault(); // wichtig, falls Button im <form> ist
  generateQR();
});

btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  clearQR();
});

// optional: live update
form.addEventListener("input", () => {
  // generateQR();
});
