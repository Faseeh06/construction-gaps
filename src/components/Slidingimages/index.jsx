"use client";
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#2C3E50",
        src: "/images/panda.jpg",
        title: "Industrial Electronics"
    },
    {
        color: "#34495E",
        src: "/images/wix.jpg",
        title: "R&D and Development"
    },
    {
        color: "#5D6D7E",
        src: "/images/silencio.png",
        title: "Automation Solutions"
    },
    {
        color: "#85929E",
        src: "/images/officestudio.png",
        title: "Electronics Repair"
    }
]

const slider2 = [
    {
        color: "#2C3E50",
        src: "/images/powell.jpg",
        title: "500+ Projects"
    },
    {
        color: "#34495E",
        src: "/images/funny.jpg",
        title: "15+ Years"
    },
    {
        color: "#5D6D7E",
        src: "/images/maven.jpg",
        title: "100% Satisfaction"
    },
    {
        color: "#85929E",
        src: "/images/c2.jpg",
        title: "Free Consultation"
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
