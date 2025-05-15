import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="bg-[#202020] py-8 pt-40 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[7vw] leading-[0.8] mt-10">
        Flex Sharing Event
      </h1>
      <div>
        <p className="py-1">© Copyright by <b>Flex Sharing GmbH</b></p>
        <div className="flex items-center">
          <p>Developed by <b>Mirka Studio</b></p>
          <Image src="/images/mirka.png" alt="Mirka logo" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 font-bold text-center text-[19px]">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Allgemein</h3>
        <a href="#leistungen" className="hover:text-gray-400 transition-colors">
          Über uns
        </a>
        <a href="#contact" className="hover:text-gray-400 transition-colors">
          Karriere
        </a>
        <a href="#blog" className="hover:text-gray-400 transition-colors">
          Projekte
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Wichtige Links</h3>
        <a href="/impressum" className="hover:text-gray-400 transition-colors">
          Impressum
        </a>
        <a href="/datenschutz" className="hover:text-gray-400 transition-colors">
          Datenschutz
        </a>
        <a href="/agb" className="hover:text-gray-400 transition-colors">
          AGB
        </a>
      </div>
    </div>
  );
};
