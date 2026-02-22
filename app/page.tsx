"use client";

import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import LearnCards from "@/components/LearnCards/LearnCards";
import WhyItMatters from "@/components/WhyItMatters/WhyItMatters";
import Audience from "@/components/Audience/Audience";
import Mentor from "@/components/Mentor/Mentor";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import BottomCTA from "@/components/BottomCTA/BottomCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useScrollReveal();

  // Load Tally.so embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as unknown as Record<string, unknown>).Tally !== "undefined") {
        (window as unknown as Record<string, { loadEmbeds: () => void }>).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LearnCards />
        <WhyItMatters />
        <Audience />
        <Mentor />
        <Testimonials />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
