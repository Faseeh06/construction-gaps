"use client";
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#2C3E50",
        src: "/random/6.jpg",
        title: "Kernsanierung"
    },
    {
        color: "#34495E",
        src: "/random/7.jpg",
        title: "Innenausbau"
    },
    {
        color: "#5D6D7E",
        src: "/random/8.jpg",
        title: "Rohbau"
    },
    {
        color: "#85929E",
        src: "/random/9.jpg",
        title: "Energieeffizienz"
    }
]

const slider2 = [
    {
        color: "#2C3E50",
        src: "/random/10.jpg",
        title: "500+ Projekte"
    },
    {
        color: "#34495E",
        src: "/random/11.jpg",
        title: "15+ Jahre"
    },
    {
        color: "#5D6D7E",
        src: "/random/12.jpg",
        title: "100% Zufriedenheit"
    },
    {
        color: "#85929E",
        src: "/random/13.jpg",
        title: "Kostenlose Beratung"
    }
]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {
                    slider1.map((project, index) => {
                        return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={project.src} />
                            </div>
                            <div className={styles.overlay}>
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {
                    slider2.map((project, index) => {
                        return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                            <div key={index} className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={project.src} />
                            </div>
                            <div className={styles.overlay}>
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}
