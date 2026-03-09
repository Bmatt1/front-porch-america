'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use IntersectionObserver to detect when hero leaves viewport
    const hero = document.getElementById('hero');
    if (hero) {
      heroRef.current = new IntersectionObserver(
        ([entry]) => {
          setScrolled(!entry.isIntersecting || entry.intersectionRatio < 0.3);
        },
        { threshold: [0.3] }
      );
      heroRef.current.observe(hero);
    } else {
      // Fallback to scroll event
      const handleScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => heroRef.current?.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled
          ? 'rgba(10,10,10,0.94)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(245,245,220,0.06)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        {/* Logo — circular badge */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-full overflow-hidden border-2 flex-shrink-0"
            style={{ borderColor: 'rgba(196,30,58,0.5)' }}
          >
            <Image
              src="/logo-temp.jpg"
              alt="Front Porch America logo"
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          </div>
          <span
            className="font-display text-sm font-bold hidden sm:block transition-colors duration-200"
            style={{ color: 'rgba(245,245,220,0.85)' }}
          >
            Front Porch America
          </span>
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-7">
          {[
            { label: 'Episodes', href: '#episodes' },
            { label: 'About', href: '#about' },
            { label: 'Community', href: '#community' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs uppercase transition-colors duration-200"
              style={{
                color: 'rgba(245,245,220,0.5)',
                letterSpacing: '0.12em',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = 'var(--color-cream)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = 'rgba(245,245,220,0.5)';
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@FRONTPORCHAMERICA-g7b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red py-2 px-4 text-xs"
            style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}
          >
            Watch
          </a>
        </div>
      </div>
    </nav>
  );
}
