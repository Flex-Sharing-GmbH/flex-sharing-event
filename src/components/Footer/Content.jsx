import React from "react";

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
      <h1 className="text-[10vw] leading-[0.8] mt-10">Flex Sharing</h1>
      <p>© Copyright by Flex Sharing</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 font-bold text-[19px]">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Allgemein</h3>
        <a href="#" className="hover:text-gray-400 transition-colors">
          Über uns
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors">
          Karriere
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors">
          Projekte
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Wichtige Links</h3>
        <a href="#" className="hover:text-gray-400 transition-colors">
          Impressum
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors">
          Datenschutz
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors">
          AGB
        </a>
      </div>
    </div>
  );
};
