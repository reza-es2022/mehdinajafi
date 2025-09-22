import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <Features />
      <Portfolio />
      <Footer />
    </section>
  );
}
