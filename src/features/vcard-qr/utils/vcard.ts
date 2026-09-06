import type { VCardData } from "../types/vcard";

// vCard text escaping (RFC 6350-ish)
// - backslash, newline, semicolon, comma
export function escText(input: unknown): string {
  return String(input ?? "")
    .replaceAll("\\", "\\\\")
    .replaceAll("\r\n", "\n")
    .replaceAll("\r", "\n")
    .replaceAll("\n", "\\n")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .trim();
}

// For URIs we usually only trim; do NOT backslash-escape like text.
export function escUri(input: unknown): string {
  return String(input ?? "").trim();
}

function hasAnyAddress(d: VCardData): boolean {
  return Boolean(d.street || d.zip || d.city || d.state || d.country);
}

function hasAnyWorkAddress(d: VCardData): boolean {
  return Boolean(
    d.workStreet || d.workZip || d.workCity || d.workState || d.workCountry,
  );
}

export function buildVCard(d: VCardData): string {
  const prefix = escText(d.prefix);
  const firstName = escText(d.firstName);
  const middleName = escText(d.middleName);
  const lastName = escText(d.lastName);
  const suffix = escText(d.suffix);
  const nickname = escText(d.nickname);

  const org = escText(d.org);
  const department = escText(d.department);
  const title = escText(d.title);

  const phoneCell = escText(d.phoneCell);
  const phoneWork = escText(d.phoneWork);
  const phoneHome = escText(d.phoneHome);
  const fax = escText(d.fax);

  const email = escText(d.email);
  const emailWork = escText(d.emailWork);
  const website = escUri(d.website);

  const street = escText(d.street);
  const city = escText(d.city);
  const state = escText(d.state);
  const zip = escText(d.zip);
  const country = escText(d.country);

  const workStreet = escText(d.workStreet);
  const workCity = escText(d.workCity);
  const workState = escText(d.workState);
  const workZip = escText(d.workZip);
  const workCountry = escText(d.workCountry);

  const birthday = d.birthday?.trim() ?? "";
  const note = escText(d.note);

  // N: Family;Given;Additional;Prefix;Suffix
  // FN: Formatted Name
  const fn = [prefix, firstName, middleName, lastName, suffix]
    .filter(Boolean)
    .join(" ")
    .trim();

  const lines: string[] = [];
  lines.push("BEGIN:VCARD");
  lines.push("VERSION:3.0");
  lines.push(`N:${lastName};${firstName};${middleName};${prefix};${suffix}`);
  if (fn) lines.push(`FN:${escText(fn)}`);
  if (nickname) lines.push(`NICKNAME:${nickname}`);

  // ORG can include department as second component
  if (org || department) {
    const orgLine = department ? `${org};${department}` : org;
    lines.push(`ORG:${orgLine}`);
  }
  if (title) lines.push(`TITLE:${title}`);

  if (phoneCell) lines.push(`TEL;TYPE=CELL:${phoneCell}`);
  if (phoneWork) lines.push(`TEL;TYPE=WORK,VOICE:${phoneWork}`);
  if (phoneHome) lines.push(`TEL;TYPE=HOME,VOICE:${phoneHome}`);
  if (fax) lines.push(`TEL;TYPE=FAX:${fax}`);

  if (email) lines.push(`EMAIL;TYPE=INTERNET,HOME:${email}`);
  if (emailWork) lines.push(`EMAIL;TYPE=INTERNET,WORK:${emailWork}`);
  if (website) lines.push(`URL:${website}`);

  if (hasAnyAddress(d)) {
    // ADR;TYPE=HOME:;;Street;City;Region;PostalCode;Country
    lines.push(`ADR;TYPE=HOME:;;${street};${city};${state};${zip};${country}`);
  }

  if (hasAnyWorkAddress(d)) {
    lines.push(
      `ADR;TYPE=WORK:;;${workStreet};${workCity};${workState};${workZip};${workCountry}`,
    );
  }

  if (birthday) lines.push(`BDAY:${birthday}`);
  if (note) lines.push(`NOTE:${note}`);

  lines.push("END:VCARD");

  // vCard spec uses CRLF line breaks
  return lines.join("\r\n");
}
