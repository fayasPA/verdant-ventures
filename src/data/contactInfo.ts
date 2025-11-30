export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  social: {
    instagram: string;
    whatsapp: string;
  };
}

export interface CompanyInfo {
  name: string;
  address: string;
}

export interface ContactCTAInfo {
  title: string;
  description: string;
  contactBtnText: string;
  callBtnText: string;
  contactBtnLink: string;
}

export interface ContactPageInfo {
  title: string;
  description: string;
  formPlaceholder: {
    fullName: string;
    phone: string;
    email: string;
    message: string;
  };
}

export const contactCTAInfo: ContactCTAInfo = {
  title: "Ready to Order Fresh Exotic Produce?",
  description:
    "Get premium exotic vegetables and fruits sourced from trusted farms, delivered straight to your home or business.",
  contactBtnText: "Order Now",
  callBtnText: "Call Now",
  contactBtnLink: "/contact",
};


export const contactPageInfo: ContactPageInfo = {
  title: "Get Fresh Exotic Produce Today",
  description:
    "Reach out to us for orders, pricing, or bulk supply of premium exotic vegetables and fruits. We’re here to help you get the freshest produce delivered with care.",
  formPlaceholder: {
    fullName: "Enter your full name",
    phone: "Enter your phone number",
    email: "Enter your email address",
    message: "Tell us what produce you’re looking for...",
  },
};



export const contactInfo: ContactInfo = {
  phone: "+1 (555) 123-4567",
  email: "hello@greenspace.com",
  address: "123 Garden Street, New York, NY 10001",
  social: {
    instagram: "https://instagram.com/greenspace",
    whatsapp: "https://wa.me/15551234567",
  },
};

export const companyInfo: CompanyInfo = {
  name: "GreenSpace",
  address: "123 Garden Street, New York, NY 10001",
};