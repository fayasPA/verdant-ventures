import { motion } from "framer-motion";
import { Section } from "@/shared/ui/Section";
import { GlassCard } from "@/shared/ui/GlassCard";
import { aboutInfo } from "@/data/about";

/**
 * AboutSection - Introduction section with image and stats
 */
export const AboutSection = () => {
  return (
    <Section
      backgroundImage={aboutInfo.image}
      overlayOpacity={0.8}
      className="py-20 md:py-32"
    >
      <div className="space-y-10">

        {/* TITLE + SUBTITLE SIDE BY SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
          
          {/* TITLE (LEFT) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            {aboutInfo.title}
          </motion.h2>

          {/* SUBTITLE (RIGHT) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-foreground/70 leading-relaxed max-w-md lg:justify-self-end"
          >
            {aboutInfo.subtitle}
          </motion.p>

        </div>

        {/* MAIN GRID: IMAGE LEFT, STATS RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.9fr_1fr] gap-12 items-start">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-glass-lg">
              <img
                src={aboutInfo.cardImage}
                alt="Green office"
                className="w-full h-[350px] md:h-[330px] lg:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT — STAT TILES (VERTICAL) */}
          <div className="flex flex-col space-y-6">

            {aboutInfo.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <GlassCard
                  className="
                    flex items-center justify-between
                    px-8 py-6
                    rounded-2xl
                    bg-[hsl(60,1%,18%)/0.92]
                    backdrop-blur-md
                    shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                  "
                >
                  <div className="text-3xl font-display font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </Section>
  );
};

