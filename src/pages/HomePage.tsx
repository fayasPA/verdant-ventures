import { Navbar } from "@/widgets/Navbar/Navbar";
import { HeroCarousel } from "@/widgets/HeroCarousel/HeroCarousel";
import { AboutSection } from "@/widgets/AboutSection/AboutSection";
import { FeaturesSection } from "@/widgets/FeaturesSection/FeaturesSection";
import { ContactCTA } from "@/widgets/ContactCTA/ContactCTA";
import { Footer } from "@/widgets/Footer/Footer";

/**
 * HomePage - Landing page with all sections
 */
const HomePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <FeaturesSection />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default HomePage;
