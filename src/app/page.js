import About from "@/components/home/About";
import GridHome from "@/components/home/GridHome";
import HeroSection from "@/components/home/HeroSection";
import HeroSlider from "@/components/home/HeroSlider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Newsfeed from "@/components/Newsfeed";

export default function Home() {
  return (
    <>
      <div className="w-full h-full sticky  top-0 ">
        <GridHome />
      </div>

      <div className="w-full h-full relative z-[60] bg-white">
        <HeroSection />
        <HeroSlider />
        <About />
        <Newsfeed />
      </div>
    </>
  );
}
