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
    title: "Fresh Exotic Vegetables Delivered",
    subtitle: "Sourced from trusted farms and delivered at peak freshness for your home or business.",
    image: "hero-bg-1",
    productImage: "plant-product-1", // replace with veggie image
    // ctaLabel: "View Catalog",
    // ctaLink: "/contact",
  },
  {
    id: 2,
    title: "Premium Imported Fruits & Rare Produce",
    subtitle: "Discover a world of unique flavors with our hand-picked selection of high-quality exotic fruits.",
    image: "hero-bg-2",
    productImage: "plant-product-2", // replace with actual fruit image
    // ctaLabel: "View Catalog",
    // ctaLink: "/contact",
  },
];


export const heroTexts = {
  contactBtn: "/contact",
  contactBtnText: "Order Now",
};