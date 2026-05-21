import { useState, useEffect } from "react";
import Navbar from "../src/assets/components/Header";
import Hero from "../src/assets/components/Hero";
import Stats from "../src/assets/components/Stats";
import ProductGrid from "../src/assets/components/SneakersDiff";
import VideoHero from "../src/assets/components/VideoSection";
import ProductGrid2 from "../src/assets/components/SneakersDiff2";
import MaleSection from "../src/assets/components/MaleSection";
import FemaleSection from "../src/assets/components/FemaleSection";
import ChildrenSection from "../src/assets/components/ChildrenSection";
import Reviews from "../src/assets/components/Reviews";
import Files from "../src/assets/components/Files";
import Seggs from "../src/assets/components/Seggs";
import Footer from "../src/assets/components/Footer";


export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setIsDark(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
    <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
    <Hero />
    <Stats darkMode={isDark} />
    <ProductGrid isDark={isDark} />
    <VideoHero />
    <ProductGrid2 isDark={isDark} />
    <MaleSection isDark={isDark} />
    <FemaleSection isDark={isDark} />
    <ChildrenSection isDark={isDark} />
    <Reviews isDark={isDark} />
    <Files isDark={isDark} />
    <Seggs isDark={isDark} />
    <Footer />
    </>
  );
}