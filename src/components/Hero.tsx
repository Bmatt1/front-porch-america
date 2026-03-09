'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroContent {
  showName: string;
  tagline: string;
  description: string;
  youtubeUrl: string;
  emailSignupUrl: string;
}

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const onAirRef = useRef<SVGTextElement>(null);
  const micRef = useRef<SVGGElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // ON AIR neon flicker then settle to pulse
      if (onAirRef.current) {
        const tl = gsap.timeline();
        tl.set(onAirRef.current, { opacity: 0 });
        tl.to(onAirRef.current, { opacity: 1, duration: 0.1, delay: 0.3 });
        tl.to(onAirRef.current, { opacity: 0.3, duration: 0.05 });
        tl.to(onAirRef.current, { opacity: 1, duration: 0.1 });
        tl.to(onAirRef.current, { opacity: 0.2, duration: 0.08 });
        tl.to(onAirRef.current, { opacity: 1, duration: 0.1 });
        tl.to(onAirRef.current, { opacity: 0.5, duration: 0.06 });
        tl.to(onAirRef.current, { opacity: 1, duration: 0.15 });
        // Settle into pulse
        tl.to(onAirRef.current, {
          opacity: 0.85,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Mic gentle float
      if (micRef.current) {
        gsap.to(micRef.current, {
          y: -6,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1,
        });
      }

      // Badge fade in
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
      }

      // Text panel slide in
      if (textPanelRef.current) {
        gsap.from(textPanelRef.current, {
          x: 40,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: 'power2.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dusk/sunset gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-porch-blue via-charcoal-900 to-charcoal-900" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-porch-red/20 via-porch-red/5 to-transparent" />

      {/* Radial glow behind badge */}
      <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-porch-red/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT: Vintage badge with ON AIR + Microphone */}
        <div ref={badgeRef} className="flex-shrink-0">
          <svg
            viewBox="0 0 400 400"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 on-air-glow"
            aria-label="On Air badge with vintage microphone"
          >
            {/* Outer circle with stars */}
            <circle cx="200" cy="200" r="190" fill="none" stroke="#f5f5dc" strokeWidth="2" opacity="0.3" />
            <circle cx="200" cy="200" r="180" fill="none" stroke="#c41e3a" strokeWidth="3" opacity="0.6" />
            <circle cx="200" cy="200" r="170" fill="rgba(10,49,97,0.4)" stroke="none" />

            {/* Star decorations around the rim */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x = 200 + 185 * Math.cos(rad);
              const y = 200 + 185 * Math.sin(rad);
              return (
                <text
                  key={angle}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#f5f5dc"
                  fontSize="10"
                  opacity="0.5"
                >
                  &#9733;
                </text>
              );
            })}

            {/* Rays emanating from center */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 200 + 80 * Math.cos(rad);
              const y1 = 200 + 80 * Math.sin(rad);
              const x2 = 200 + 160 * Math.cos(rad);
              const y2 = 200 + 160 * Math.sin(rad);
              return (
                <line
                  key={`ray-${angle}`}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#f5f5dc"
                  strokeWidth="1"
                  opacity="0.1"
                />
              );
            })}

            {/* Microphone group */}
            <g ref={micRef}>
              {/* Mic stand */}
              <rect x="195" y="240" width="10" height="80" rx="2" fill="#f5f5dc" opacity="0.7" />
              {/* Mic base */}
              <ellipse cx="200" cy="320" rx="30" ry="6" fill="#f5f5dc" opacity="0.5" />
              {/* Mic head (condenser style) */}
              <rect x="178" y="140" width="44" height="105" rx="22" fill="none" stroke="#f5f5dc" strokeWidth="2.5" opacity="0.9" />
              {/* Mic grille lines */}
              {[155, 165, 175, 185, 195, 205, 215, 225, 235].map((lineY) => (
                <line
                  key={`grille-${lineY}`}
                  x1="183" y1={lineY} x2="217" y2={lineY}
                  stroke="#f5f5dc" strokeWidth="0.8" opacity="0.4"
                />
              ))}
              {/* Mic inner circle detail */}
              <circle cx="200" cy="190" r="16" fill="none" stroke="#f5f5dc" strokeWidth="1" opacity="0.3" />
            </g>

            {/* ON AIR banner/ribbon */}
            <g>
              {/* Ribbon background */}
              <rect x="110" y="80" width="180" height="44" rx="4" fill="#c41e3a" opacity="0.9" />
              {/* Ribbon side notches */}
              <polygon points="110,80 120,102 110,124" fill="#8b1528" />
              <polygon points="290,80 280,102 290,124" fill="#8b1528" />
              {/* ON AIR text */}
              <text
                ref={onAirRef}
                x="200"
                y="108"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#f5f5dc"
                fontSize="28"
                fontWeight="bold"
                fontFamily="Georgia, serif"
                letterSpacing="6"
              >
                ON AIR
              </text>
            </g>
          </svg>
        </div>

        {/* RIGHT: Text panel with glassmorphism */}
        <div
          ref={textPanelRef}
          className="glassmorphism rounded-2xl p-8 md:p-10 max-w-xl w-full"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-porch-cream mb-4 leading-tight text-glow-cream">
            {content.showName}
          </h1>
          <p className="text-porch-red font-display text-xl md:text-2xl italic mb-4 tracking-wide">
            {content.tagline}
          </p>
          <div className="w-16 h-0.5 bg-porch-red/60 mb-6" />
          <p className="text-porch-cream/80 text-base md:text-lg mb-8 leading-relaxed">
            {content.description}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={content.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-porch-red hover:bg-porch-red/80 text-porch-cream font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,30,58,0.4)]"
            >
              Watch on YouTube
            </a>
            <a
              href={content.emailSignupUrl}
              className="border border-porch-cream/30 hover:border-porch-cream hover:bg-porch-cream/10 text-porch-cream font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              Join the Newsletter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal-900 to-transparent" />
    </section>
  );
}
