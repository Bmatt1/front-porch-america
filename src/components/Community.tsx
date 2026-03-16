'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
interface CommunityContent {
  title: string;
  text: string;
  ctaText: string;
}
export default function Community({ content }: { content: CommunityContent }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from('.community-headline', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.community-headline',
          start: 'top 85%',
        },
      });
      gsap.from('.community-body', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.community-body',
          start: 'top 85%',
        },
      });
      gsap.from('.community-form', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.community-form',
          start: 'top 90%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('email_address', email);
      formData.append('form_id', '9211067');
      const res = await fetch(
        'https://app.kit.com/forms/9211067/subscriptions',
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        }
      );
      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="community"
      ref={sectionRef}
      className="snap-section flex items-center overflow-hidden"
      style={{ minHeight: '100vh', background: '#0a0a0a' }}
    >
      {/* Background red glow accent */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(196,30,58,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="community-headline mb-6 font-body uppercase"
            style={{
              color: 'var(--color-red)',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              fontWeight: 600,
            }}
          >
            community
          </p>
          {/* Headline */}
          <h2 className="community-headline headline-cinematic">
            join the
            <br />
            porch.
          </h2>
          <div className="divider-red mt-6 mb-8" />
          {/* Body */}
          <p
            className="community-body font-body text-base md:text-lg"
            style={{
              color: 'rgba(245,245,220,0.7)',
              lineHeight: 1.85,
              maxWidth: '48ch',
            }}
          >
            {content.text}
          </p>
          {/* Social proof */}
          <p
            className="community-body mt-4 font-body text-sm"
            style={{ color: 'rgba(245,245,220,0.4)' }}
          >
            1,000+ Americans already on the porch.
          </p>
          {/* Form */}
          <div className="community-form mt-10" id="newsletter">
            {submitted ? (
              <div
                className="animate-fade-in-up p-8 border"
                style={{
                  borderColor: 'rgba(196,30,58,0.3)',
                  background: 'rgba(196,30,58,0.05)',
                }}
              >
                <p
                  className="font-display text-2xl font-bold mb-2"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Welcome to the porch.
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: 'rgba(245,245,220,0.6)' }}
                >
                  You're on the list. We'll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-4 font-body text-sm outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(245,245,220,0.12)',
                    color: 'var(--color-cream)',
                    caretColor: 'var(--color-red)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(196,30,58,0.5)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(245,245,220,0.12)';
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-red flex-shrink-0"
                >
                  {loading ? 'Joining...' : content.ctaText}
                </button>
              </form>
            )}
            {error && (
              <p
                className="mt-3 font-body text-sm"
                style={{ color: 'rgba(196,30,58,0.9)' }}
              >
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
