"use client";
import { motion } from "framer-motion";
import Hero from "@/components/layouts/home_layout/Hero";
import Footer from "@/components/layouts/footer/Footer";
import InfiniteMenuBased from "@/components/based_component/InfiniteMenu";
import SplashCursor from "@/components/ui/SplashCursor/SplashCursor";
import Header from "@/components/layouts/header/Header";
import MyNavigationBar from "@/components/based_component/NavigationBar";
import Lanyard from "@/components/ui/Lanyard/Lanyard";
import { MacbookScroll } from "@/components/ui/ScrollMack/ScrollMack";
import { WorldMapDemo } from "@/components/based_component/WorldMap";
import { GoogleGeminiEffectDemo } from "@/components/based_component/GoogleGeminiEffectDemo";
import { GlowingEffectDemo } from "@/components/based_component/GlowingEffect";
import LogoLoopDemo from "@/components/based_component/LogoLoop";
import ScrollRevealDemo from "@/components/based_component/ScrollReveal";
import { TracingBeamDemo } from "@/components/based_component/TracingBeamDemo";
import { HeroParallaxDemo } from "@/components/based_component/HeroParallaxDemo";
import CircularGallery from "@/components/ui/CircularGallery/CircularGallery";
import EarthComponent from "@/components/based_component/EarthComponent";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import FoldAnimeText from "@/components/based_component/FoldAnimeText";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-[#000000] text-white -mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <MyNavigationBar />

      <SplashCursor />
      <Lanyard />

      <Hero />
      <LogoLoopDemo />
      <div
        style={{
          height: "600px",
          position: "relative",
          margin: "100px",
          marginTop: "-10vh",
        }}
      >
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
      <FoldAnimeText/>
      <GlowingEffectDemo />
      <TracingBeamDemo />
      <MacbookScroll src="https://i.pinimg.com/1200x/63/db/73/63db736df1eeb5bc584aa4b70c08b4dd.jpg" />
      <WorldMapDemo />
      <GoogleGeminiEffectDemo />

      <InfiniteMenuBased />
      <ScrollRevealDemo />
      <HeroParallaxDemo />
      <AboutUs />
      <EarthComponent />
      <Footer />
    </motion.div>
  );
}
