import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export default function Index({ setCursorIsActive }) {
  const phrase =
    "Wir bieten ebenfalls Monteure für die Montage oder Demontage von Mobile Fahrstraßen an. Besonders gut ausgebildet sind wir was die Montage und Demontage von Aluminiumpanels angeht.";
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
          Unsere Teams arbeiten schnell, zuverlässig und mit viel Erfahrung –
          egal ob bei kleinen Einsätzen oder großen Projekten
        </motion.p>
        {/*
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
        */}
      </div>
    </div>
  );
}
