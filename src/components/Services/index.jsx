"use client";
import {
  FaHandsHelping,
  FaMountain,
  FaTruckLoading,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHandsHelping size={70} />,
    title: "STAGE HANDS",
    description: "Hilfe beim Auf- und Abbau von Eventtechnik",
  },
  {
    icon: <FaMountain size={70} />,
    title: "KLETTERER",
    description: "Höhenarbeiten bei Events und Installationen",
  },
  {
    icon: <FaTruckLoading size={70} />,
    title: "STAPLERFAHRER",
    description: "Transport und Logistik bei Events",
  },
  {
    icon: <FaTools size={70} />,
    title: "MONTAGETEAMS",
    description: "Professioneller Aufbau von Bühnen und Zelten",
  },
];

export default function Index({ setCursorIsActive }) {
  return (
    <div
      id="leistungen"
      className="w-full flex flex-col justify-center items-center pt-10 lg:pb-10 pb-6 bg-white text-[#202020]"
    >
      <div className="flex lg:items-start items-center lg:justify-start justify-center w-4/5 max-w-4xl">
        <h1 className="py-4 px-6 text-5xl lg:text-5xl text-center font-extrabold font-heading lg:mb-13 mb-10">
          <span className="w-13 h-[3px] bg-[#202020] lg:inline-block hidden align-middle mx-3"></span>
          Unsere Leistungen
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center w-4/5 max-w-4xl transition-opacity duration-1000 ease-in-out">
        {services.map((service, index) => (
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
