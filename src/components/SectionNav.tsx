'use client';

import { useScrollContext } from './ScrollProvider';

const LABELS = ['Hero', 'Episodes', 'About', 'Community'];

export default function SectionNav() {
  const { currentSection, totalSections, scrollToSection } = useScrollContext();

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
    >
      {/* Up arrow */}
      <button
        onClick={() => scrollToSection(currentSection - 1)}
        disabled={currentSection === 0}
        aria-label="Previous section"
        className="w-8 h-8 flex items-center justify-center text-cream/40 hover:text-cream disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
        style={{ color: 'var(--color-cream)' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 10L8 5L13 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Section dots */}
      {Array.from({ length: totalSections }).map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          aria-label={`Go to ${LABELS[i]} section`}
          title={LABELS[i]}
          className="relative group"
        >
          <span
            className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === currentSection
                ? 'var(--color-red)'
                : 'rgba(245,245,220,0.25)',
              transform: i === currentSection ? 'scale(1.5)' : 'scale(1)',
              boxShadow: i === currentSection
                ? '0 0 8px rgba(196,30,58,0.7)'
                : 'none',
            }}
          />
          {/* Tooltip */}
          <span
            className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-body pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap px-2 py-1"
            style={{
              color: 'var(--color-cream)',
              background: 'rgba(0,0,0,0.7)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
            }}
          >
            {LABELS[i].toLowerCase()}
          </span>
        </button>
      ))}

      {/* Down arrow */}
      <button
        onClick={() => scrollToSection(currentSection + 1)}
        disabled={currentSection === totalSections - 1}
        aria-label="Next section"
        className="w-8 h-8 flex items-center justify-center text-cream/40 hover:text-cream disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
        style={{ color: 'var(--color-cream)' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 6L8 11L13 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </nav>
  );
}
