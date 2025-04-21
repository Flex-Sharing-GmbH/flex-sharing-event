import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjektePage() {
  return (
    <div className="px-10 py-20">
      <h1 className="text-4xl font-bold mb-10">Unsere Projekte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <div className="cursor-pointer group">
              <Image
                src={project.cover}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
              <h2 className="mt-4 text-xl font-semibold group-hover:underline">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500">{project.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
