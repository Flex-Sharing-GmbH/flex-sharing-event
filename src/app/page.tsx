"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';
import Lenis from "lenis";
import Preloader from '@/components/Preloader';
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Partner from "@/components/Partner";
import Description from "@/components/Description";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [isCursorActive, setCursorIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.width = "100%";
      document.body.style.height = "100vh";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [isLoading]);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0);
    }, 2000)

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time / 3);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isTouchDevice && <Cursor isActive={isCursorActive} />}
      <Header setCursorIsActive={setCursorIsActive} />
      <Intro setCursorIsActive={setCursorIsActive} />
      <Services setCursorIsActive={setCursorIsActive} />
      <Partner />
      <Description setCursorIsActive={setCursorIsActive} />
      <Team setCursorIsActive={setCursorIsActive} />
      {/* <Projects setCursorIsActive={setCursorIsActive} /> */}
      <Blog setCursorIsActive={setCursorIsActive} />
      <Contact />
      <Footer />
    </main>
  );
}
