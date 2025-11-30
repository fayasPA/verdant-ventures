export interface Feature {
  id: number;
  title: string;
  description: string;
}

export interface FeaturesInfo {
  title: string;
  subtitle: string;
  // description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Quality",
    description: "We use only the best plants that maintain their appearance for many years.",
  },
  {
    id: 2,
    title: "Speed",
    description: "We value your time and guarantee fast results while maintaining high quality.",
  },
  {
    id: 3,
    title: "Variety",
    description: "We offer a wide selection of designs tailored to your preferences and budget.",
  },
  {
    id: 4,
    title: "Accessibility",
    description: "Ready to implement a project of any complexity in any corner of the country.",
  },
];

export const featuresInfo: FeaturesInfo = {
  title: "4 Reasons Why Working With Us is",
  subtitle: "Convenient and Reliable",
  // description: "We use only the best plants that maintain their appearance for many years.",
};