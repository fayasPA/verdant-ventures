import aboutBg from "@/assets/about-bg.jpg";
import exoticProduce from "@/assets/office-plants.jpg"; // replace with actual image

export interface AboutInfo {
  title: string;
  subtitle: string;
  image: string;
  cardImage: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export const aboutInfo: AboutInfo = {
  title: "Delivering Premium Exotic Vegetables & Fruits",
  subtitle:
    "We provide the finest selection of exotic produce sourced from trusted farms around the world. Freshness, quality, and authenticity define everything we do—ensuring every delivery meets the highest standards for homes, restaurants, and retailers.",
  image: aboutBg,
  cardImage: exoticProduce,
  stats: [
    {
      value: "10+",
      label: "Years of Fresh Supply",
    },
    {
      value: "150+",
      label: "Exotic Varieties",
    },
    {
      value: "99%",
      label: "Happy Customers",
    },
  ],
};
