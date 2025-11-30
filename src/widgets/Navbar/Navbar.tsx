import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { useUIStore } from "@/shared/store/uiStore";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/contactInfo";

/**
 * Navbar - Premium transparent navbar that darkens on scroll
 */
export const Navbar = () => {
  const location = useLocation();
  const {
    isNavbarScrolled,
    setNavbarScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  } = useUIStore();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNavbarScrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isNavbarScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">
                Green<span className="text-primary">Space</span>
                {/* {companyInfo.name} */}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="pl-16 hidden md:flex items-center justify-start w-full gap-8">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      "text-sm font-medium animated-underline transition-colors",
                      location.pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-8"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "text-3xl font-display font-semibold transition-colors",
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    )}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Get in Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
