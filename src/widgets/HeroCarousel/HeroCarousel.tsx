import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, heroTexts } from "@/data/heroSlides";
import { useUIStore } from "@/shared/store/uiStore";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/shared/ui/GlassCard";

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

export const HeroCarousel = () => {
  const { activeSlide, setActiveSlide, nextSlide, prevSlide, setTotalSlides } = useUIStore();

  useEffect(() => {
    setTotalSlides(heroSlides.length);
  }, [setTotalSlides]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentSlide = heroSlides[activeSlide];

  const handlePrev = useCallback(() => prevSlide(), [prevSlide]);
  const handleNext = useCallback(() => nextSlide(), [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
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
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgrounds[currentSlide.image]})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-14 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center">

          {/* LEFT — TEXT */}
          <motion.div
            key={`text-${activeSlide}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              {currentSlide.title}
            </h1>

            <p className="text-base md:text-lg text-foreground/70 max-w-md mx-auto lg:mx-0">
              {currentSlide.subtitle}
            </p>

            {/* <div className="flex justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to={currentSlide.ctaLink}>
                  {currentSlide.ctaLabel}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div> */}
          </motion.div>

          {/* RIGHT — PRODUCT CARD (Mobile Optimized) */}
          <motion.div
            key={`product-${activeSlide}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-sm">
              <GlassCard
                className="
                  w-full 
                  p-4 sm:p-5 md:p-6 
                  rounded-2xl
                  relative z-0
                  overflow-visible
                "
                hover={false}
              >
                {/* Image positioned to overflow top of card */}
                <div className="absolute -top-[30%] sm:-top-[35%] md:-top-[40%] left-1/2 -translate-x-1/2 z-10 w-full px-4">
                  <img
                    src={products[currentSlide.productImage]}
                    alt="Featured product"
                    className="
                      object-contain
                      w-full
                      max-h-[180px] sm:max-h-[220px] md:max-h-[250px]
                    "
                  />
                </div>

                <div className="mt-12 sm:mt-14 pt-16 sm:pt-20 md:pt-24">
                  <Button variant="hero" size="lg" asChild className="w-full group">
                    <Link to={heroTexts.contactBtn}>
                      {heroTexts.contactBtnText}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide ? "w-6 bg-primary" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <Button
                variant="glass"
                size="sm"
                onClick={handlePrev}
                className="backdrop-blur-md"
              >
                <ChevronLeft size={18} />
              </Button>

              <Button
                variant="glass"
                size="sm"
                onClick={handleNext}
                className="backdrop-blur-md"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
