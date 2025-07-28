import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import HeroSlider from "@/components/home/HeroSlider";
import HomeGridGallery from "@/components/home/HomeGridGallery";
import Newsfeed from "@/components/home/Newsfeed";

export default function Home() {
  return (
    <>
      <div className="w-full h-fit md:h-[92vh] sticky bg-[linear-gradient(0deg,_#fff5e6,_#fff0eb_25%,_#faebf5_50%,_#f5f0ff_75%,_#fafaff)]">
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
