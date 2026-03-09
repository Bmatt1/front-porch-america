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
  videoId?: string;
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
                className="episode-card group flex items-start gap-5 p-4 rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(245,245,220,0.03)',
                  border: '1px solid rgba(245,245,220,0.06)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(196,30,58,0.3)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,245,220,0.05)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,245,220,0.06)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,245,220,0.03)';
                }}
              >
                {/* YouTube Thumbnail */}
                {ep.videoId ? (
                  <div className="flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden relative">
                    <img
                      src={`https://img.youtube.com/vi/${ep.videoId}/mqdefault.jpg`}
                      alt={ep.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: 'rgba(196,30,58,0.9)' }}
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="#f5f5dc" style={{ marginLeft: '1px' }}>
                          <path d="M2 1.5L10 6L2 10.5V1.5Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <span
                    className="flex-shrink-0 font-display text-4xl font-bold leading-none"
                    style={{ color: 'rgba(196,30,58,0.35)' }}
                  >
                    {String(ep.order).padStart(2, '0')}
                  </span>
                )}

                <div className="flex-1 min-w-0">
                  <span
                    className="font-body text-[0.65rem] uppercase font-semibold"
                    style={{ color: 'var(--color-red)', letterSpacing: '0.15em' }}
                  >
                    EP {String(ep.order).padStart(2, '0')}
                  </span>
                  <h3
                    className="font-display text-base font-bold leading-tight mb-1 mt-0.5 transition-colors duration-300"
                    style={{ color: 'var(--color-cream)' }}
                  >
                    {ep.title}
                  </h3>
                  <p
                    className="text-xs font-body line-clamp-2"
                    style={{ color: 'rgba(245,245,220,0.45)', lineHeight: 1.6 }}
                  >
                    {ep.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
