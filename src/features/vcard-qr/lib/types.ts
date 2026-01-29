export type VCardForm = {
  firstName: string;
  lastName: string;
  org: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  street: string;
  zip: string;
  city: string;
  country: string;
};

export const EMPTY_FORM: VCardForm = {
  firstName: "",
  lastName: "",
  org: "",
  title: "",
  phone: "",
  email: "",
  website: "",
  street: "",
  zip: "",
  city: "",
  country: "",
};
