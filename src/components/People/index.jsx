"use client";

import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const teamList = [
  {
    imageUrl: "/images/team/nikita.png",
    name: "Nikita Dudchenko",
    positions: "Geschäftsführer",
    phone: "+49 15679 624045",
  },
  {
    imageUrl: "/images/team/daniel.png",
    name: "Daniel Kopanev",
    positions: "Projektplanung / Disposition",
    phone: "+49 15679 627181",
  },
  {
    imageUrl: "/images/team/hleb.jpg",
    name: "Hleb Hlebov",
    positions: "Staplerfahrer / Montagemitarbeiter",
  },
  {
    imageUrl: "/images/team/michael.png",
    name: "Michael Blum",
    positions: "Staplerfahrer / Montagemitarbeiter",
  },
  {
    imageUrl: "/images/team/magomed.png",
    name: "Magomed Acharayev",
    positions: "Staplerfahrer / Montagemitarbeiter",
  },
  {
    imageUrl: "/images/team/vyacheslav.png",
    name: "Vyacheslav Konovchenko",
    positions: "Ingenieur",
  },
  {
    imageUrl: "/images/team/vitalii.png",
    name: "Vitalii Sierokurov",
    positions: "Montagemitarbeiter",
  },
];

export default function Index() {
  return (
    <section className="w-full py-20 pt-30 px-6 lg:px-8 bg-white text-[#202020]">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold font-heading lg:mb-13 mb-10">
          Das eingespielte Expertenteam
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {teamList.map(({ imageUrl, name, positions, phone }, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 rounded-lg overflow-hidden shadow-md group w-72"
          >
            <div className="w-full overflow-hidden">
              <Image
                src={imageUrl}
                alt={name}
                width={300}
                height={300}
                className="w-full aspect-square object-cover saturate-0 transition-all duration-400 group-hover:saturate-100 group-hover:scale-[1.01]"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">{name}</h3>
              {positions && (
                <p className="text-muted-foreground text-sm mt-1">
                  {positions}
                </p>
              )}
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold mt-3 px-4 py-2 rounded-full bg-[#202020] text-white hover:bg-[#505050] transition duration-500"
                >
                  <FaPhoneAlt className="w-4 h-4 text-white" />
                  Kontaktieren
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
