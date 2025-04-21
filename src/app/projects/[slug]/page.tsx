import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="px-10 py-20">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-2">{project.address}</p>
      <p className="mb-6 max-w-3xl">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Ausgeführte Arbeiten:</h2>
      <ul className="list-disc list-inside mb-8">
        {project.works.map((work, i) => (
          <li key={i}>{work}</li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`${project.title} ${i}`}
            width={800}
            height={500}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
}
