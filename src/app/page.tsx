"use client"

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    }
  }, [i18n]);

  if (!ready) {
    return null; 
  }

  return (
    <main>
      <HeroBanner />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
