interface AboutContent {
  title: string;
  text: string;
  comingSoon: string;
}

interface AboutTeaserProps {
  content: AboutContent;
}

export default function AboutTeaser({ content }: AboutTeaserProps) {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-porch-blue/20 to-charcoal-900" />

      {/* Decorative American flag motif - stripes */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${i % 2 === 0 ? 'bg-porch-red/20' : 'bg-transparent'}`}
          />
        ))}
      </div>

      {/* Decorative stars */}
      <div className="absolute top-8 left-8 opacity-10">
        <svg viewBox="0 0 120 80" className="w-32 h-20">
          {[
            [15, 15], [40, 15], [65, 15], [90, 15],
            [27, 35], [52, 35], [77, 35],
            [15, 55], [40, 55], [65, 55], [90, 55],
          ].map(([x, y], i) => (
            <text key={i} x={x} y={y} fill="#f5f5dc" fontSize="12" textAnchor="middle" dominantBaseline="central">
              &#9733;
            </text>
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-porch-red/40" />
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-porch-red/60" fill="currentColor">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          <div className="w-12 h-px bg-porch-red/40" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-porch-cream mb-6">
          {content.title}
        </h2>

        <p className="text-porch-cream/70 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
          {content.text}
        </p>

        <p className="text-porch-red/70 text-sm italic font-display">{content.comingSoon}</p>

        {/* Bottom decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="w-20 h-px bg-porch-cream/10" />
          <div className="w-2 h-2 rounded-full bg-porch-red/40" />
          <div className="w-20 h-px bg-porch-cream/10" />
        </div>
      </div>

      {/* Decorative stars on right */}
      <div className="absolute bottom-8 right-8 opacity-10">
        <svg viewBox="0 0 120 80" className="w-32 h-20">
          {[
            [15, 15], [40, 15], [65, 15], [90, 15],
            [27, 35], [52, 35], [77, 35],
            [15, 55], [40, 55], [65, 55], [90, 55],
          ].map(([x, y], i) => (
            <text key={i} x={x} y={y} fill="#f5f5dc" fontSize="12" textAnchor="middle" dominantBaseline="central">
              &#9733;
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}
