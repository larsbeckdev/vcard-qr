import type { VCardForm } from "./types";

function escText(str = ""): string {
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .trim();
}

function escUri(str = ""): string {
  return String(str).trim();
}

function nonEmpty(...parts: Array<string | undefined | null>) {
  return parts.some((p) => String(p ?? "").trim().length > 0);
}

export function buildVCard(data: VCardForm): string {
  const firstName = escText(data.firstName);
  const lastName = escText(data.lastName);

  const fullName = escText(
    [data.firstName, data.lastName].filter(Boolean).join(" ").trim(),
  );

  const org = escText(data.org);
  const title = escText(data.title);

  const phone = escText(data.phone);
  const email = escText(data.email);
  const website = escUri(data.website);

  const street = escText(data.street);
  const zip = escText(data.zip);
  const city = escText(data.city);
  const country = escText(data.country);

  const lines: string[] = [];
  lines.push("BEGIN:VCARD");
  lines.push("VERSION:3.0");

  if (nonEmpty(firstName, lastName))
    lines.push(`N:${lastName};${firstName};;;`);
  if (fullName) lines.push(`FN:${fullName}`);

  if (org) lines.push(`ORG:${org}`);
  if (title) lines.push(`TITLE:${title}`);

  if (phone) lines.push(`TEL;TYPE=CELL:${phone}`);
  if (email) lines.push(`EMAIL;TYPE=INTERNET:${email}`);
  if (website) lines.push(`URL:${website}`);

  if (nonEmpty(street, city, zip, country)) {
    lines.push(`ADR;TYPE=HOME:;;${street};${city};;${zip};${country}`);
  }

  lines.push("END:VCARD");
  return lines.join("\r\n");
}

export function hasAnyFormValue(data: VCardForm): boolean {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const v = (data as any)[key];
      if (String(v ?? "").trim().length > 0) return true;
    }
  }
  return false;
}
