'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';

interface ScrollContextValue {
  currentSection: number;
  totalSections: number;
  sectionIds: string[];
  scrollToSection: (index: number) => void;
}

const SECTION_IDS = ['hero', 'episodes', 'about', 'community'];

const ScrollContext = createContext<ScrollContextValue>({
  currentSection: 0,
  totalSections: SECTION_IDS.length,
  sectionIds: SECTION_IDS,
  scrollToSection: () => {},
});

export function useScrollContext() {
  return useContext(ScrollContext);
}

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSection, setCurrentSection] = useState(0);
  const ticking = useRef(false);

  const scrollToSection = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, SECTION_IDS.length - 1));
    const el = document.getElementById(SECTION_IDS[clamped]);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const idx = Math.round(scrollY / vh);
        setCurrentSection(Math.min(idx, SECTION_IDS.length - 1));
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        currentSection,
        totalSections: SECTION_IDS.length,
        sectionIds: SECTION_IDS,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
