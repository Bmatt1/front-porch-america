'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Episode {
  id: number;
  title: string;
  description: string;
  platform: string;
  url: string;
  order: number;
}

export default function Episodes({ episodes }: { episodes: Episode[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.episodes-headline', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.episodes-headline',
          start: 'top 85%',
        },
      });

      gsap.from('.episode-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.episodes-list',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featured = episodes.slice(0, 3);

  return (
    <section
      id="episodes"
      ref={sectionRef}
      className="snap-section flex items-center overflow-hidden"
      style={{ minHeight: '100vh', background: '#0a0a0a' }}
    >
      {/* Subtle red glow accent */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,30,58,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Big headline */}
          <div>
            <p
              className="episodes-headline mb-4 font-body uppercase"
              style={{
                color: 'var(--color-red)',
                letterSpacing: '0.2em',
                fontSize: '0.7rem',
                fontWeight: 600,
              }}
            >
              on the show
            </p>
            <h2 className="episodes-headline headline-cinematic">
              featured
              <br />
              episodes.
            </h2>
            <div className="divider-red mt-6 mb-6" />
            <p
              className="episodes-headline font-body text-sm"
              style={{ color: 'rgba(245,245,220,0.5)', maxWidth: '32ch', lineHeight: 1.75 }}
            >
              Conversations that cut through the noise. Real stories, real faith,
              real America.
            </p>
            <a
              href="https://www.youtube.com/@FRONTPORCHAMERICA-g7b"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex mt-8"
            >
              View all episodes
            </a>
          </div>

          {/* Right: Episode cards */}
          <div className="episodes-list flex flex-col gap-4">
            {featured.map((ep) => (
              <a
                key={ep.id}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="episode-card group flex items-start gap-5"
              >
                {/* Episode number */}
                <span
                  className="flex-shrink-0 font-display text-4xl font-bold leading-none"
                  style={{ color: 'rgba(196,30,58,0.35)' }}
                >
                  {String(ep.order).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display text-lg font-bold leading-tight mb-1 group-hover:text-glow"
                    style={{ color: 'var(--color-cream)' }}
                  >
                    {ep.title}
                  </h3>
                  <p
                    className="text-sm font-body line-clamp-2"
                    style={{ color: 'rgba(245,245,220,0.5)', lineHeight: 1.6 }}
                  >
                    {ep.description}
                  </p>
                </div>

                {/* Play icon */}
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:border-porch-red"
                  style={{
                    borderColor: 'rgba(245,245,220,0.15)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ color: 'var(--color-cream)', marginLeft: '1px' }}>
                    <path d="M2 1.5L10 6L2 10.5V1.5Z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
