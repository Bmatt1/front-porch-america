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
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.title}</h2>
        <p className="text-gray-300 text-lg mb-6">{content.text}</p>
        <p className="text-sm text-amber-400 italic">{content.comingSoon}</p>
      </div>
    </section>
  );
}
