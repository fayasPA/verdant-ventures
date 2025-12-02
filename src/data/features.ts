export interface Feature {
  id: number;
  title: string;
  description: string;
}

export interface FeaturesInfo {
  title: string;
  subtitle: string;
}

export const featuresInfo: FeaturesInfo = {
  title: "4 Reasons Why Buying Exotic Produce From Us is",
  subtitle: "Fresh, Easy, and Reliable",
};

export const features: Feature[] = [
  {
    id: 1,
    title: "Premium Quality",
    description:
      "We source only the freshest and finest exotic vegetables and fruits, hand-picked for superior taste and nutrition.",
  },
  {
    id: 2,
    title: "Fast Delivery",
    description:
      "Your orders are packed with care and delivered quickly to preserve freshness and ensure peak quality on arrival.",
  },
  {
    id: 3,
    title: "Wide Selection",
    description:
      "Choose from a diverse range of rare and exotic produce sourced from trusted farms around the world.",
  },
  {
    id: 4,
    title: "Trusted & Convenient",
    description:
      "We make ordering simple and reliable, serving both households and businesses with consistent quality you can count on.",
  },
];
