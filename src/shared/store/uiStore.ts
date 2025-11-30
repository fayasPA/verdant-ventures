import { create } from "zustand";

interface UIState {
  // Mobile menu state
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  // Video modal state
  isVideoOpen: boolean;
  toggleVideoModal: () => void;
  closeVideoModal: () => void;

  // Hero carousel state
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  totalSlides: number;
  setTotalSlides: (total: number) => void;

  // Navbar scroll state
  isNavbarScrolled: boolean;
  setNavbarScrolled: (scrolled: boolean) => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  // Mobile menu
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Video modal
  isVideoOpen: false,
  toggleVideoModal: () => set((state) => ({ isVideoOpen: !state.isVideoOpen })),
  closeVideoModal: () => set({ isVideoOpen: false }),

  // Hero carousel
  activeSlide: 0,
  totalSlides: 2,
  setActiveSlide: (index) => set({ activeSlide: index }),
  nextSlide: () => {
    const { activeSlide, totalSlides } = get();
    set({ activeSlide: (activeSlide + 1) % totalSlides });
  },
  prevSlide: () => {
    const { activeSlide, totalSlides } = get();
    set({ activeSlide: (activeSlide - 1 + totalSlides) % totalSlides });
  },
  setTotalSlides: (total) => set({ totalSlides: total }),

  // Navbar scroll
  isNavbarScrolled: false,
  setNavbarScrolled: (scrolled) => set({ isNavbarScrolled: scrolled }),
}));
