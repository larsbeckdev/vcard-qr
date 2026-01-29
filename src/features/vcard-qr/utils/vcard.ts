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
  return Boolean(d.street || d.zip || d.city || d.country);
}

export function buildVCard(d: VCardData): string {
  const firstName = escText(d.firstName);
  const lastName = escText(d.lastName);

  const org = escText(d.org);
  const title = escText(d.title);

  const phone = escText(d.phone);
  const email = escText(d.email);
  const website = escUri(d.website);

  const street = escText(d.street);
  const zip = escText(d.zip);
  const city = escText(d.city);
  const country = escText(d.country);

  const note = escText(d.note);

  // N: Family;Given;Additional;Prefix;Suffix
  // FN: Formatted Name
  const fn = [firstName, lastName].filter(Boolean).join(" ").trim();

  const lines: string[] = [];
  lines.push("BEGIN:VCARD");
  lines.push("VERSION:3.0");
  lines.push(`N:${lastName};${firstName};;;`);
  if (fn) lines.push(`FN:${escText(fn)}`);

  if (org) lines.push(`ORG:${org}`);
  if (title) lines.push(`TITLE:${title}`);

  if (phone) lines.push(`TEL;TYPE=CELL:${phone}`);
  if (email) lines.push(`EMAIL;TYPE=INTERNET:${email}`);
  if (website) lines.push(`URL:${website}`);

  if (hasAnyAddress(d)) {
    // ADR;TYPE=HOME:;;Street;City;Region;PostalCode;Country
    lines.push(`ADR;TYPE=HOME:;;${street};${city};;${zip};${country}`);
  }

  if (note) lines.push(`NOTE:${note}`);

  lines.push("END:VCARD");

  // vCard spec uses CRLF line breaks
  return lines.join("\r\n");
}
