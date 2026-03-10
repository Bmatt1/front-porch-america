'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { label: 'Episodes', href: '#episodes' },
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
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
      const handleScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return () => heroRef.current?.disconnect();
  }, []);

  // Close menu on anchor click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled || menuOpen ? 'rgba(10,10,10,0.94)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom:
          scrolled || menuOpen
            ? '1px solid rgba(245,245,220,0.06)'
            : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={handleLinkClick}>
          <div
            className="w-9 h-9 rounded-full overflow-hidden border-2 flex-shrink-0"
            style={{ borderColor: 'rgba(196,30,58,0.5)' }}
          >
            <Image
              src="/logo.webp"
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

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs uppercase transition-colors duration-200 hover:!text-[var(--color-cream)]"
              style={{
                color: 'rgba(245,245,220,0.5)',
                letterSpacing: '0.12em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@FRONTPORCHAMERICA-g7b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}
          >
            Watch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300 origin-center"
            style={{
              background: 'var(--color-cream)',
              transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--color-cream)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300 origin-center"
            style={{
              background: 'var(--color-cream)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          opacity: menuOpen ? 1 : 0,
          background: 'rgba(10,10,10,0.98)',
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="font-body text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(245,245,220,0.7)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@FRONTPORCHAMERICA-g7b"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="btn-red text-center"
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.8rem' }}
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </nav>
  );
}
