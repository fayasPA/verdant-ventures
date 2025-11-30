export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  productImage: string;
  // ctaLabel: string;
  // ctaLink: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Greening Office Spaces",
    subtitle: "Create a cozy working environment with our premium green decor",
    image: "hero-bg-1",
    productImage: "plant-product-1",
    // ctaLabel: "View Catalog",
    // ctaLink: "/contact",
  },
  {
    id: 2,
    title: "Premium Plant Collections",
    subtitle: "Transform your workspace into a lush oasis of productivity and calm",
    image: "hero-bg-2",
    productImage: "plant-product-2",
    // ctaLabel: "Explore Plants",
    // ctaLink: "/contact",
  },
];

export const heroTexts = {
  contactBtn: "/contact",
  contactBtnText: "Contact Us",
};