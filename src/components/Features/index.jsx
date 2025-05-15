import {
  FaLightbulb,
  FaGlobe,
  FaHandshake,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const featureList = [
  {
    icon: FaLightbulb,
    title: "Problemlöser-Mentalität",
    description:
      "Ganzheitliches Denken statt Standardlösung. Wir analysieren und handeln mit Blick aufs Ganze.",
  },
  {
    icon: FaGlobe,
    title: "Internationale Expertise",
    description:
      "Vielfältige Erfahrung für kreative Ansätze – global gedacht, lokal umgesetzt.",
  },
  {
    icon: FaHandshake,
    title: "Kunden­orientierter Service",
    description:
      "Transparente Kommunikation von der Beratung bis zur Abnahme – jederzeit auf Augenhöhe.",
  },
  {
    icon: FaClock,
    title: "Termintreue & Effizienz",
    description:
      "Moderne Ausrüstung und schlanke Prozesse sichern termingerechte Ergebnisse.",
  },
  {
    icon: FaUsers,
    title: "Eingespielte Teams",
    description:
      "Schnelle, reibungslose Projektumsetzung durch eingespielte Montageeinheiten.",
  },
];

export default function Index({ setCursorIsActive }) {
  return (
    <section className="w-full py-20 px-6 lg:px-24 bg-white text-[#202020]">
      <h2 className="text-lg text-center mb-2">
        Features
      </h2>
      <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-4">
        Warum Flex Sharing?
      </h2>

      <h3 className="lg:w-1/2 mx-auto text-xl text-center mb-12">
        Unsere Werte spiegeln sich in allem wider, was wir tun – von der Planung
        bis zur Umsetzung
      </h3>

      <div className="flex flex-wrap justify-center gap-8">
        {featureList.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="w-full sm:w-[45%] lg:w-[30%] text-center p-6 bg-gray-50 rounded-xl shadow"
          >
            <div
              className="flex justify-center items-center mb-4"
              onMouseEnter={() => setCursorIsActive(true)}
              onMouseLeave={() => setCursorIsActive(false)}
            >
              <div className="bg-primary/20 p-4 rounded-full ring-8 ring-primary/10">
                <Icon size={35} className="text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1.5">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
