'use client';

import { useState } from 'react';

interface CommunityContent {
  title: string;
  text: string;
  ctaText: string;
  comingSoon: string;
}

interface CommunityTeaserProps {
  content: CommunityContent;
}

export default function CommunityTeaser({ content }: CommunityTeaserProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-800" />
      <div className="absolute inset-0 bg-gradient-to-br from-porch-red/5 via-transparent to-porch-blue/10" />

      {/* Decorative stars accent */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-4 opacity-20">
        {[...Array(5)].map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="w-4 h-4" fill="#f5f5dc">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-porch-cream mb-4">
          {content.title}
        </h2>
        <p className="text-porch-cream/60 text-lg mb-8 leading-relaxed">
          {content.text}
        </p>

        {submitted ? (
          <div className="glassmorphism rounded-xl p-8">
            <div className="text-porch-red text-3xl mb-3">&#9733;</div>
            <p className="text-porch-cream font-semibold text-lg">Welcome to the porch!</p>
            <p className="text-porch-cream/60 text-sm mt-2">Check your inbox for a confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 rounded-lg bg-charcoal-900 border border-porch-cream/20 text-porch-cream placeholder-porch-cream/30 focus:outline-none focus:border-porch-red/60 focus:ring-1 focus:ring-porch-red/30 transition-colors"
            />
            <button
              type="submit"
              className="bg-porch-red hover:bg-porch-red/80 text-porch-cream font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,30,58,0.3)] whitespace-nowrap"
            >
              {content.ctaText}
            </button>
          </form>
        )}

        {/* Social proof placeholder */}
        <p className="mt-6 text-porch-cream/30 text-sm">
          Join 1,000+ Americans already on the porch
        </p>

        <p className="mt-4 text-porch-cream/20 text-xs italic">{content.comingSoon}</p>
      </div>

      {/* Bottom decorative flag stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-porch-red/30" />
        <div className="flex-1 bg-porch-cream/10" />
        <div className="flex-1 bg-porch-blue/30" />
      </div>
    </section>
  );
}
