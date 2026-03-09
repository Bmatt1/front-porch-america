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
  return (
    <section className="py-20 px-6 bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.title}</h2>
        <p className="text-gray-300 text-lg mb-8">{content.text}</p>
        <a
          href="#newsletter"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-4 rounded-lg transition"
        >
          {content.ctaText}
        </a>
        <p className="mt-6 text-sm text-gray-400 italic">{content.comingSoon}</p>
      </div>
    </section>
  );
}
