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
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6 py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">{content.showName}</h1>
      <p className="text-xl md:text-2xl font-light mb-4 text-amber-400">{content.tagline}</p>
      <p className="max-w-2xl text-lg text-gray-300 mb-8">{content.description}</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href={content.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Watch on YouTube
        </a>
        <a
          href={content.emailSignupUrl}
          className="border border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Join the Newsletter
        </a>
      </div>
    </section>
  );
}
