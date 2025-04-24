"use client";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import Cursor from "@/components/Cursor";

export default function ProjectsPage() {
  const [isCursorActive, setCursorIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    setTimeout(() => {
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
      {!isTouchDevice && <Cursor isActive={isCursorActive} />}
    </main>
  );
}
{/* 
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
</div>*/}