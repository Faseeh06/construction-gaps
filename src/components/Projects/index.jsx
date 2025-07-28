'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';

const services = [
  {
    title: "KERNSANIERUNG",
    src: "/random/1.jpg",
    color: "#2C3E50",
    description: "Komplette Renovierung von Grund auf - von der Planung bis zur Fertigstellung."
  },
  {
    title: "INNENAUSBAU",
    src: "/random/2.jpg",
    color: "#34495E",
    description: "Professioneller Innenausbau mit hochwertigen Materialien und modernem Design."
  },
  {
    title: "ROHBAU",
    src: "/random/4.jpg",
    color: "#5D6D7E",
    description: "Solide Grundstruktur mit höchsten Baustandards und höchster Qualität."
  },
  {
    title: "ENERGIEEFFIZIENZ",
    src: "/random/5.jpg",
    color: "#85929E",
    description: "Nachhaltige Lösungen für optimale Energieeffizienz und hohen Komfort."
  }
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (


    <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={styles.projects}>
      <div className={styles.body}>
        {
          services.map((service, index) => {
            return <Project index={index} title={service.title} manageModal={manageModal} key={index} />
          })
        }
      </div>
      <Rounded>
        <p>Alle Leistungen</p>
      </Rounded>
      <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
          <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
            {
              services.map((service, index) => {
                const { src, color, description } = service
                return <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                  <div className={styles.modalContent}>
                    <Image
                      src={src}
                      width={300}
                      height={200}
                      alt="service"
                    />
                    <p className={styles.modalDescription}>{description}</p>
                  </div>
                </div>
              })
            }
          </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>Mehr erfahren</motion.div>
      </>
    </main>
  )
}
