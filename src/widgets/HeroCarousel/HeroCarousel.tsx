import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import { useUIStore } from "@/shared/store/uiStore";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/shared/ui/GlassCard";

// Import background images
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import plantProduct1 from "@/assets/plant-product-1.png";
import plantProduct2 from "@/assets/plant-product-2.png";

const backgrounds: Record<string, string> = {
  "hero-bg-1": heroBg1,
  "hero-bg-2": heroBg2,
};

const products: Record<string, string> = {
  "plant-product-1": plantProduct1,
  "plant-product-2": plantProduct2,
};

/**
 * HeroCarousel - Full-screen hero carousel with premium transitions
 */
export const HeroCarousel = () => {
  const { activeSlide, setActiveSlide, nextSlide, prevSlide, setTotalSlides } = useUIStore();

  // Set total slides on mount
  useEffect(() => {
    setTotalSlides(heroSlides.length);
  }, [setTotalSlides]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentSlide = heroSlides[activeSlide];

  const handlePrev = useCallback(() => prevSlide(), [prevSlide]);
  const handleNext = useCallback(() => nextSlide(), [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover-center"
            style={{ backgroundImage: `url(${backgrounds[currentSlide.image]})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full pt-20">
          {/* Left side - Text content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight text-shadow">
                {currentSlide.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                {currentSlide.subtitle}
              </p>
              <Button variant="hero" size="xl" asChild className="group">
                <Link to={currentSlide.ctaLink}>
                  {currentSlide.ctaLabel}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </AnimatePresence>

          {/* Right side - Product card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`product-${activeSlide}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:flex justify-center lg:justify-end"
            >
              <GlassCard 
                className="max-w-sm animate-float"
                hover={false}
              >
                <div className="relative">
                  <img
                    src={products[currentSlide.productImage]}
                    alt="Featured plant"
                    className="w-full h-64 object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <Button variant="hero" size="lg" className="w-full group" asChild>
                    <Link to={currentSlide.ctaLink}>
                      {currentSlide.ctaLabel}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Slide indicators */}
            <div className="flex items-center gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow controls */}
            <div className="flex items-center gap-4">
              <Button
                variant="glass"
                size="icon"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="glass"
                size="icon"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
