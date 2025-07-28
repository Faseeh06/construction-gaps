'use client'
import { motion } from 'framer-motion'
import styles from './style.module.scss'

export default function Features() {
    const features = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 21V11L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "KERNSANIERUNG",
            description: "Komplette Renovierung von Grund auf - von der Planung bis zur Fertigstellung.",
            features: ["Komplette Gebäudesanierung", "Neue Elektrik & Heizung", "Moderne Böden & Küche"]
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "INNENAUSBAU",
            description: "Professioneller Innenausbau mit hochwertigen Materialien und modernem Design.",
            features: ["Trockenbau & Verputz", "Bodenbeläge & Fliesen", "Küchen & Bäder"]
        }
    ]

    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.leftHeader}>
                        <h2>Unsere Leistungen</h2>
                        <p>Von der ersten Idee bis zur fertigen Umsetzung - wir begleiten Sie durch jeden Schritt Ihrer Kernsanierung mit höchster Qualität und Zuverlässigkeit.</p>
                    </div>
                    <div className={styles.rightHeader}>
                        <p>Entdecken Sie unsere umfassenden Dienstleistungen für Ihre Kernsanierung. Wir bieten professionelle Lösungen von der Planung bis zur Fertigstellung.</p>
                    </div>
                </div>
                
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={styles.imageContainer}>
                            <img src="/random/1.jpg" alt="Construction Services" />
                        </div>
                    </div>
                    
                    <div className={styles.rightContent}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureCard}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.iconContainer}>
                                    <span className={styles.icon}>{feature.icon}</span>
                                </div>
                                <div className={styles.featureInfo}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                    <ul>
                                        {feature.features.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 