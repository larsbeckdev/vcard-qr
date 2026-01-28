function escText(str = "") {
  return String(str)
    .replaceAll("\\", "\\\\")
    .replaceAll("\n", "\\n")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .trim();
}

function escUri(str = "") {
  return String(str).trim();
}

export function buildVCard(data) {
  const NL = "\r\n";

  const firstName = escText(data.firstName);
  const lastName = escText(data.lastName);
  const fn = [firstName, lastName].filter(Boolean).join(" ");

  const adr = `;;${escText(data.street)};${escText(data.city)};;${escText(
    data.zip,
  )};${escText(data.country)}`;

  return [
    "BEGIN:VCARD",
    "VERSION:4.0",
    `N;CHARSET=UTF-8:${lastName};${firstName};;;`,
    fn && `FN;CHARSET=UTF-8:${fn}`,
    data.org && `ORG;CHARSET=UTF-8:${escText(data.org)}`,
    data.title && `TITLE;CHARSET=UTF-8:${escText(data.title)}`,
    data.phone && `TEL;TYPE=cell:${escText(data.phone)}`,
    data.email && `EMAIL:${escText(data.email)}`,
    data.website && `URL:${escUri(data.website)}`,
    (data.street || data.city || data.zip || data.country) &&
      `ADR;TYPE=home;CHARSET=UTF-8:${adr}`,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join(NL);
}
