'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Episode {
  id: number;
  title: string;
  description: string;
  platform: string;
  url: string;
  order: number;
}

interface FeaturedEpisodesProps {
  episodes: Episode[];
}

export default function FeaturedEpisodes({ episodes }: FeaturedEpisodesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const sorted = [...episodes].sort((a, b) => a.order - b.order);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.episode-card');
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: undefined,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="episodes" className="relative py-24 px-6 bg-charcoal-900">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-porch-red/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-porch-cream mb-3">
            Featured Episodes
          </h2>
          <p className="text-porch-cream/50 text-lg">Tune in to the conversation</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sorted.map((ep) => (
            <a
              key={ep.id}
              href={ep.url}
              target="_blank"
              rel="noopener noreferrer"
              className="episode-card group block rounded-xl overflow-hidden border border-porch-cream/10 hover:border-porch-red/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,30,58,0.15)]"
            >
              {/* Video thumbnail placeholder */}
              <div className="relative bg-charcoal-800 aspect-video flex items-center justify-center overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-porch-blue/30 to-charcoal-900/60" />
                {/* Episode number badge */}
                <div className="absolute top-3 left-3 bg-porch-red text-porch-cream text-xs font-bold px-2.5 py-1 rounded-md z-10">
                  EP {String(ep.order).padStart(2, '0')}
                </div>
                {/* Play button */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-porch-red/90 flex items-center justify-center group-hover:bg-porch-red group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1" fill="#f5f5dc">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                {/* Decorative mic icon watermark */}
                <div className="absolute bottom-3 right-3 opacity-10">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#f5f5dc">
                    <rect x="9" y="1" width="6" height="14" rx="3" />
                    <path d="M5 10a7 7 0 0014 0" fill="none" stroke="#f5f5dc" strokeWidth="1.5" />
                    <line x1="12" y1="17" x2="12" y2="22" stroke="#f5f5dc" strokeWidth="1.5" />
                    <line x1="8" y1="22" x2="16" y2="22" stroke="#f5f5dc" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 bg-charcoal-800/50">
                <h3 className="font-display text-lg font-semibold text-porch-cream mb-2 group-hover:text-porch-red transition-colors duration-300">
                  {ep.title}
                </h3>
                <p className="text-porch-cream/60 text-sm mb-3 leading-relaxed">{ep.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-porch-red font-medium uppercase tracking-wider">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M23 12l-10.5-6v12L23 12zM1 12l10.5-6v12L1 12z" />
                  </svg>
                  {ep.platform}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
