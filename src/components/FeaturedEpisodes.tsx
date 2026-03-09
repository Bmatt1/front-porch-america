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
  const sorted = [...episodes].sort((a, b) => a.order - b.order);
  return (
    <section className="py-20 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Featured Episodes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sorted.map((ep) => (
            <a
              key={ep.id}
              href={ep.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{ep.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{ep.description}</p>
              <span className="text-xs text-amber-400 font-medium uppercase tracking-wide">{ep.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
