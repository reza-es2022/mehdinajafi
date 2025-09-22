"use client";
import { useTheme } from "next-themes";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
export default function Home() {
  const { theme, setTheme } = useTheme();
  setTheme("light");
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <Features />
      <Portfolio />
      <Footer />
    </section>
  );
}
