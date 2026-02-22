"use client";

import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustSection from "@/components/TrustSection/TrustSection";
import LearnCards from "@/components/LearnCards/LearnCards";
import WhyItMatters from "@/components/WhyItMatters/WhyItMatters";
import Audience from "@/components/Audience/Audience";
import Mentor from "@/components/Mentor/Mentor";
import Testimonials from "@/components/Testimonials/Testimonials";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import ZeroRisk from "@/components/ZeroRisk/ZeroRisk";
import FAQ from "@/components/FAQ/FAQ";
import CountdownBanner from "@/components/CountdownBanner/CountdownBanner";
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
        <TrustSection />
        <LearnCards />
        <WhyItMatters />
        <Audience />
        <Mentor />
        <Testimonials />
        <CourseDetails />
        <ZeroRisk />
        <FAQ />
        <CountdownBanner />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
