import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Link from "next/link";

export default function Index({ setCursorIsActive }) {
  const phrase =
    "Wir realisieren Bauprojekte mit höchster Präzision und Qualität. Von Renovierung bis Neubau – wir setzen Ihre Vision um.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Mit langjähriger Erfahrung und über 30 erfolgreich abgeschlossenen
          Projekten sind wir Ihr zuverlässiger Partner.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Link href="/projects">
            <div
              onMouseEnter={() => setCursorIsActive(true)}
              onMouseLeave={() => setCursorIsActive(false)}
              className={styles.button}
            >
              Alle Projekte
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
