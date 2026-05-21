import { useState, useEffect } from "react";
import Navbar from "../src/assets/components/Header";
import Footer from "../src/assets/components/Footer";
import Seggs from "../src/assets/components/Seggs";
import CartPage from "../src/assets/components/CartPage";

export default function Cart() {
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
    <CartPage isDark={isDark} />
    <Seggs isDark={isDark}/>
    <Footer />
    </>
  );
}