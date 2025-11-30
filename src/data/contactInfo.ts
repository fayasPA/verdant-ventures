export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  social: {
    instagram: string;
    whatsapp: string;
  };
}

export const contactInfo: ContactInfo = {
  phone: "+1 (555) 123-4567",
  email: "hello@greenspace.com",
  address: "123 Garden Street, New York, NY 10001",
  social: {
    instagram: "https://instagram.com/greenspace",
    whatsapp: "https://wa.me/15551234567",
  },
};
