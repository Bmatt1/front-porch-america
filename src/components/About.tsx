'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutContent {
  title: string;
  text: string;
}

const STATS = [
  { label: 'Est.', value: '2020' },
  { label: 'Episodes', value: '100+' },
  { label: 'Platform', value: 'YouTube' },
];

export default function About({ content }: { content: AboutContent }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-headline', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-headline',
          start: 'top 85%',
        },
      });

      gsap.from('.about-body', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-body',
          start: 'top 85%',
        },
      });

      gsap.from('.about-stat', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="snap-section flex items-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Golden American landscape at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay — heavier than hero to keep mood consistent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.5) 100%)',
          }}
        />
        {/* Gradient toward center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(10,49,97,0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="about-headline mb-6 font-body uppercase"
            style={{
              color: 'var(--color-red)',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              fontWeight: 600,
            }}
          >
            the show
          </p>

          {/* Headline */}
          <h2 className="about-headline headline-cinematic">
            about the
            <br />
            show.
          </h2>

          <div className="divider-red mt-6 mb-8" />

          {/* Body text */}
          <p
            className="about-body font-body text-base md:text-lg"
            style={{
              color: 'rgba(245,245,220,0.75)',
              lineHeight: 1.85,
              maxWidth: '52ch',
            }}
          >
            {content.text}
          </p>

          {/* Stats */}
          <div className="about-stats flex flex-wrap gap-8 mt-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="about-stat flex flex-col gap-1">
                <span
                  className="font-display text-2xl font-bold"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-body text-xs uppercase"
                  style={{
                    color: 'rgba(245,245,220,0.45)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
