import aboutBg from "@/assets/about-bg.jpg";
import officePlants from "@/assets/office-plants.jpg";
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
    title: "Transforming Offices into Comfortable Work Zones",
    subtitle: "Even a business environment should be pleasant, so we create unique projects that promote productive work for your employees. Our premium plants and expert designs transform any workspace into a thriving oasis.",
    image: aboutBg,
    cardImage: officePlants,
    stats: [
      {
        value: "10+",
        label: "Years on Market",
      },
      {
        value: "500+",
        label: "Completed Projects",
      },
      {
        value: "99%",
        label: "Satisfied Clients",
      },
    ],
  };
  