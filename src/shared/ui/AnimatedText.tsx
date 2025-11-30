import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

/**
 * AnimatedText - Text with fade-in animation
 */
export const AnimatedText = ({
  children,
  className,
  delay = 0,
  as: Component = "p",
}: AnimatedTextProps) => {
  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </MotionComponent>
  );
};
