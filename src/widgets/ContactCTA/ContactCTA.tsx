import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/shared/ui/Section";
import { Button } from "@/components/ui/button";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import { companyInfo, contactCTAInfo, contactInfo } from "@/data/contactInfo";

/**
 * ContactCTA - Call to action section for contact
 */
export const ContactCTA = () => {
  return (
    <Section
      backgroundImage={heroBg1}
      overlayOpacity={0.85}
      className="py-10 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          {contactCTAInfo.title}
        </h2>
        <p className="text-lg text-foreground/70">
          {contactCTAInfo.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="hero" size="xl" asChild className="group">
            <Link to={contactCTAInfo.contactBtnLink}>
              {contactCTAInfo.contactBtnText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href={`tel:${contactInfo.phone}`}>
              {contactCTAInfo.callBtnText}
            </a>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};
