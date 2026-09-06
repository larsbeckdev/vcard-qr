export type VCardData = {
  // Name
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  nickname: string;

  // Organisation
  org: string;
  department: string;
  title: string;

  // Phone
  phoneCell: string;
  phoneWork: string;
  phoneHome: string;
  fax: string;

  // Email & Web
  email: string;
  emailWork: string;
  website: string;

  // Home address
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;

  // Work address
  workStreet: string;
  workCity: string;
  workState: string;
  workZip: string;
  workCountry: string;

  // Other
  birthday: string;
  note: string;
};
