import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import HeroSlider from "@/components/home/HeroSlider";
import HomeGridGallery from "@/components/home/HomeGridGallery";
import Newsfeed from "@/components/home/Newsfeed";

export default function Home() {
  return (
    <>
      <div className="w-full pb-10 md:pb-0 h-[90vh] sticky">
        <HomeGridGallery />
      </div>

      <div className="w-full h-full rounded-r-4xl rounded-l-4xl relative z-[60] bg-white top-0">
        <HeroSection />
        <HeroSlider />
        <About />
        <Newsfeed />
      </div>
    </>
  );
}
