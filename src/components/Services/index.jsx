"use client";
import { FaTools, FaPaintRoller, FaCouch, FaHome } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const services = [
  {
    icon: <FaTools size={70} />,
    title: "SANIERUNGSARBEITEN",
    description:
      "Umfassende Modernisierung und Wiederherstellung von Gebäuden.",
  },
  {
    icon: <FaPaintRoller size={70} />,
    title: "RENOVIERUNGSARBEITEN",
    description: "Auffrischung und Erneuerung von Innen- und Außenbereichen.",
  },
  {
    icon: <FaCouch size={70} />,
    title: "TISCHLERARBEITEN",
    description: "Maßgeschneiderte Holzarbeiten für Möbel und Innenausbau.",
  },
  {
    icon: <FaHome size={70} />,
    title: "EFH NEUBAU",
    description:
      "Planung und Bau von Einfamilienhäusern nach höchsten Standards.",
  },
];

export default function Index({ setCursorIsActive }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center items-center pt-10 lg:pb-0 pb-6 bg-white text-[#202020]"
    >
      <div className="flex lg:items-start items-center lg:justify-start justify-center w-4/5 max-w-4xl">
        <h1 className="py-4 px-6 text-5xl lg:text-5xl text-center font-extrabold font-heading lg:mb-13 mb-10">
          <span className="w-13 h-[3px] bg-[#202020] lg:inline-block hidden align-middle mx-3"></span>
          Unsere Leistungen
        </h1>
      </div>
      <div
        className="flex lg:flex-row flex-col justify-center lg:items-start items-center w-4/5 max-w-4xl transition-opacity duration-1000 ease-in-out"
        style={{
          opacity: inView ? 1 : 0,
          transform: `translateY(${inView ? "0" : "50px"})`,
          transition: "all 0.7s ease-out",
        }}
      >
        {inView &&
          services.map((service, index) => (
            <div
              key={index}
              className="px-4 flex flex-col justify-center items-center mb-10"
            >
              <div
                onMouseEnter={() => setCursorIsActive(true)}
                onMouseLeave={() => setCursorIsActive(false)}
                className="mb-4 text-primary"
              >
                {service.icon}
              </div>
              <h2
                onMouseEnter={() => setCursorIsActive(true)}
                onMouseLeave={() => setCursorIsActive(false)}
                className="font-heading text-xl uppercase font-bold mb-2"
              >
                {service.title}
              </h2>
              <p className="uppercase text-sm font-black text-center opacity-50">
                {service.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
