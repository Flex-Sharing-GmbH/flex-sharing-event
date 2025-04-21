import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "intro.jpg",
  },
  {
    color: "#d6d7dc",
    src: "intro.jpg",
  },
  {
    color: "#e3e3e3",
    src: "intro.jpg",
  },
  {
    color: "#21242b",
    src: "intro.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "intro.jpg",
  },
  {
    color: "#e5e0e1",
    src: "intro.jpg",
  },
  {
    color: "#d7d4cf",
    src: "intro.jpg",
  },
  {
    color: "#e1dad6",
    src: "intro.jpg",
  },
];

export default function Index({ setCursorIsActive }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="bg-white text-[#202020]">
      <div className="w-full text-center pt-40 font-medium uppercase">
        <h1
          onMouseEnter={() => setCursorIsActive(true)}
          onMouseLeave={() => setCursorIsActive(false)}
          className="py-4 px-6 rounded-lg text-4xl md:text-7xl font-semibold font-heading mb-12"
        >
          Die Beste Projekte
        </h1>
      </div>
      <div ref={container} className={styles.slidingImages}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => {
            return (
              <div
                key={index}
                className={styles.project}
                style={{ backgroundColor: project.color }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"image"}
                    src={`/images/${project.src}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((project, index) => {
            return (
              <div
                key={index}
                className={styles.project}
                style={{ backgroundColor: project.color }}
              >
                <div key={index} className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"image"}
                    src={`/images/${project.src}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
