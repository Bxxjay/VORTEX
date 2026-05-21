import { useState, useEffect } from "react";
import Navbar from "../src/assets/components/Header";
import Footer from "../src/assets/components/Footer";
import AboutSection from "../src/assets/components/AboutSection";
import AboutHero from "../src/assets/components/AboutHero";
import Seggs from "../src/assets/components/Seggs";

export default function About() {
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
    <AboutHero isDark={isDark} />
    <AboutSection isDark={isDark}/>
    <Seggs isDark={isDark}/>
    <Footer />
    </>
  );
}