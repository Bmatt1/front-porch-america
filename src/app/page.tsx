import Navbar from "@/components/Navbar";
import ScrollProvider from "@/components/ScrollProvider";
import SectionNav from "@/components/SectionNav";
import Hero from "@/components/Hero";
import Episodes from "@/components/Episodes";
import About from "@/components/About";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import siteContent from "@/content/site.json";
import episodes from "@/content/featured-episodes.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProvider>
        <SectionNav />
        <main>
          <Hero content={siteContent.hero} />
          <Episodes episodes={episodes} />
          <About content={siteContent.about} />
          <Community content={siteContent.community} />
        </main>
        <Footer />
      </ScrollProvider>
    </>
  );
}
