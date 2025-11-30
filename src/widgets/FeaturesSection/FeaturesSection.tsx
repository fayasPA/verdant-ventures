import { motion } from "framer-motion";
import { Section } from "@/shared/ui/Section";
import { GlassCard } from "@/shared/ui/GlassCard";
import { features } from "@/data/features";
import featuresBg from "@/assets/features-bg.jpg";

/**
 * FeaturesSection - 4 reasons to work with us
 */
export const FeaturesSection = () => {
  return (
    <Section
      id="features"
      backgroundImage={featuresBg}
      overlayOpacity={0.85}
      className="py-20 md:py-32"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          4 Reasons Why Working With Us is{" "}
          <span className="text-gradient">Convenient and Reliable</span>
        </h2>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="h-full relative overflow-hidden group">
              {/* Large number background */}
              <span className="absolute -top-4 -left-2 text-8xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                {feature.id}
              </span>
              
              {/* Content */}
              <div className="relative z-10 pt-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
