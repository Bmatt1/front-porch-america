'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroContent {
  showName: string;
  tagline: string;
  description: string;
  youtubeUrl: string;
  emailSignupUrl: string;
}

export default function Hero({ content }: { content: HeroContent }) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.7, delay: 0.2 })
        .from('.hero-title-1', { y: 60, opacity: 0, duration: 1.1 }, '-=0.3')
        .from('.hero-title-2', { y: 60, opacity: 0, duration: 1.1 }, '-=0.8')
        .from('.hero-tagline', { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-desc', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-ctas', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="snap-section flex flex-col justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.webp"
          alt="Front Porch America podcast banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Left-heavy dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0.35) 100%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 55%, rgba(10,10,10,0.7) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="hero-eyebrow mb-6">
            <Image
              src="/logo.webp"
              alt="Front Porch America Podcast logo"
              width={80}
              height={80}
              className="rounded-full"
              style={{ filter: 'invert(1)' }}
            />
          </div>

          {/* Eyebrow */}
          <p
            className="hero-eyebrow mb-6 font-body uppercase"
            style={{
              color: 'var(--color-red)',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              fontWeight: 600,
            }}
          >
            hosted by Rick White
          </p>

          {/* Massive headline */}
          <h1 aria-label={content.showName}>
            <span className="hero-title-1 block headline-cinematic">
              front porch
            </span>
            <span className="hero-title-2 block headline-cinematic">
              america.
            </span>
          </h1>

          {/* Divider */}
          <div className="divider-red mt-6 mb-6" />

          {/* Tagline */}
          <p
            className="hero-tagline text-base md:text-lg font-body"
            style={{
              color: 'rgba(245,245,220,0.75)',
              letterSpacing: '0.02em',
              maxWidth: '38ch',
            }}
          >
            {content.tagline}
          </p>

          {/* Description */}
          <p
            className="hero-desc mt-3 text-sm font-body"
            style={{
              color: 'rgba(245,245,220,0.48)',
              maxWidth: '44ch',
              lineHeight: 1.75,
            }}
          >
            {content.description}
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4 mt-10">
            <a
              href={content.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </a>
            <a href="#community" className="btn-outline">
              Join the Newsletter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: 'rgba(245,245,220,0.3)' }}
      >
        <span
          className="font-body uppercase"
          style={{ letterSpacing: '0.2em', fontSize: '0.6rem' }}
        >
          scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background:
              'linear-gradient(to bottom, rgba(245,245,220,0.3), transparent)',
          }}
        />
      </div>
    </section>
  );
}
