'use client'
import Image from 'next/image'
import styles from './style.module.scss'

export default function HouseLayout() {
    return (
        <section className={styles.houseLayout}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={styles.textWrapper}>
                            <div className={styles.header}>
                                <h2>Ihr Traumhaus wird Wirklichkeit</h2>
                                <p>Entdecken Sie unsere maßgeschneiderten Lösungen für Ihre Kernsanierung. Von der ersten Planung bis zur Schlüsselübergabe begleiten wir Sie professionell durch Ihr Projekt.</p>
                            </div>
                            
                            <div className={styles.description}>
                                <p>Unsere erfahrenen Architekten und Handwerker arbeiten eng mit Ihnen zusammen, um Ihre Vision zu verwirklichen. Wir garantieren höchste Qualität, pünktliche Fertigstellung und transparente Kommunikation während des gesamten Projekts.</p>
                            </div>
                        </div>
                        
                        <div className={styles.livingRoomImage}>
                            <Image 
                                src="/random/7.jpg" 
                                alt="Living Room" 
                                fill 
                                className={styles.image} 
                            />
                        </div>
                    </div>
                    
                    <div className={styles.rightContent}>
                        <div className={styles.floorPlanContainer}>
                            <Image 
                                src="/images/map.jpg" 
                                alt="House Floor Plan" 
                                fill 
                                className={styles.floorPlanImage} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 