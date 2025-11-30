import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  backgroundImage?: string;
  overlayOpacity?: number;
  className?: string;
  containerClassName?: string;
  fullHeight?: boolean;
}

/**
 * Section - Reusable section component with background image and overlay support
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      backgroundImage,
      overlayOpacity = 0.75,
      className,
      containerClassName,
      fullHeight = false,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          fullHeight && "min-h-screen",
          className
        )}
        {...props}
      >
        {/* Background image */}
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover-center z-0"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}

        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />

        {/* Content */}
        <div
          className={cn(
            "relative z-10 container mx-auto px-4 md:px-6 lg:px-8",
            containerClassName
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
