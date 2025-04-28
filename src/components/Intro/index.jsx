import React from "react";
import Image from "next/image";
import Background from "../../../public/images/intro.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Index({ setCursorIsActive }) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      <motion.div
        style={isLargeScreen ? { y, willChange: "transform" } : {}}
        className="relative h-full w-full"
      >
        <Image
          src={Background}
          fill
          alt="image"
          style={{
            objectFit: "cover",
            filter: "grayscale(100%) brightness(0.3)",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/10 pointer-events-none" />
      </motion.div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <motion.div
          style={{ opacity: opacity }}
          className="flex flex-col justify-center items-center mt-20 md:mt-32"
        >
          <h1 className="text-[1.25rem] md:text-3xl font-extrabold opacity-60 uppercase">
            Wir sind nicht nur Monteure oder Handwerker
          </h1>
          <h1 className="text-[1.375rem] md:text-5xl font-extrabold mt-3 uppercase">
            Wir sind Problemlöser
          </h1>
          <div className="flex flex-col justify-center items-center gap-6 mt-10">
            <a
              href="#contact"
              className="px-6 py-3 border border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-black transition"
            >
              Kontaktieren Sie uns
            </a>
            <a
              href="https://wa.me/4917662813111"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3"
              onMouseEnter={() => setCursorIsActive(true)}
              onMouseLeave={() => setCursorIsActive(false)}
            >
              <FaWhatsapp size={70} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
