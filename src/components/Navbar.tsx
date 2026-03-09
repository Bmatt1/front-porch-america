'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-porch-cream/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-display text-lg font-bold text-porch-cream tracking-wide hover:text-porch-red transition-colors">
          FPA
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          <a
            href="#episodes"
            className="text-sm text-porch-cream/60 hover:text-porch-cream transition-colors duration-200"
          >
            Episodes
          </a>
          <a
            href="#about"
            className="text-sm text-porch-cream/60 hover:text-porch-cream transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#newsletter"
            className="text-sm text-porch-cream/60 hover:text-porch-cream transition-colors duration-200"
          >
            Community
          </a>
        </div>
      </div>
    </nav>
  );
}
