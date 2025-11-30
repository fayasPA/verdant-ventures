import { motion } from "framer-motion";
import { Section } from "@/shared/ui/Section";
import { GlassCard } from "@/shared/ui/GlassCard";
import { stats } from "@/data/stats";
import aboutBg from "@/assets/about-bg.jpg";
import officePlants from "@/assets/office-plants.jpg";

/**
 * AboutSection - Introduction section with image and stats
 */
export const AboutSection = () => {
  return (
    <Section
      backgroundImage={aboutBg}
      overlayOpacity={0.8}
      className="py-20 md:py-32"
    >
      <div className="space-y-12 md:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Transforming Offices into Comfortable Work Zones
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glass-lg">
              <img
                src={officePlants}
                alt="Modern office with plants"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Right - Text & Stats */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Even a business environment should be pleasant, so we create unique 
              projects that promote productive work for your employees. Our premium 
              plants and expert designs transform any workspace into a thriving oasis.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <GlassCard className="text-center py-6">
                    <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
