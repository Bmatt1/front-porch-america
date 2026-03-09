import Hero from "@/components/Hero";
import FeaturedEpisodes from "@/components/FeaturedEpisodes";
import AboutTeaser from "@/components/AboutTeaser";
import CommunityTeaser from "@/components/CommunityTeaser";
import Footer from "@/components/Footer";
import siteContent from "@/content/site.json";
import episodes from "@/content/featured-episodes.json";

export default function Home() {
  return (
    <main className="min-h-screen grain">
      <Hero content={siteContent.hero} />
      <FeaturedEpisodes episodes={episodes} />
      <AboutTeaser content={siteContent.about} />
      <CommunityTeaser content={siteContent.community} />
      <Footer />
    </main>
  );
}
