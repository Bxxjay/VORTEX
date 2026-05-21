import { useState, useEffect } from "react";
import Navbar from "../src/assets/components/Header";
import Footer from "../src/assets/components/Footer";
import Seggs from "../src/assets/components/Seggs";
import StoreHero from "../src/assets/components/StoreHero";
import StoreSection from "../src/assets/components/StoreSection";
import FloatingCart from "../src/assets/components/FloatingCart";
export default function Contact() {
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
    <StoreHero />
    <StoreSection isDark={isDark}/>
    <Seggs isDark={isDark}/>
    <Footer />
    <FloatingCart />
    </>
  );
}