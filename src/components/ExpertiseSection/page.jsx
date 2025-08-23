'use client'
import styles from './style.module.scss'

export default function ExpertiseSection() {
    return (
        <section className={styles.expertiseSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Section - Character and Text */}
                    <div className={styles.leftContent}>
                        <div className={styles.characterImage}>
                            <img 
                                src="/images/ai_bg.png" 
                                alt="AI Avatar" 
                                className={styles.avatarImage}
                            />
                        </div>
                        <h2 className={styles.mainTitle}>
                            Ihre Vision<br />
                            Unesere expertise
                        </h2>
                        <p className={styles.description}>
                            Mehr als 15 Jahre verlässliche 15 Jahre verlässliche Erfahrung.
                        </p>
                        <p className={styles.bottomText}>
                            some information or something like that which looks good here
                        </p>
                    </div>

                    {/* Central Dark Card */}
                    <div className={styles.centralCard}>
                        <h3 className={styles.cardTitle}>15+ yahre, expertise</h3>
                        <ul className={styles.checklist}>
                            <li>
                                <svg className={styles.checkmarkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                                <span>Professienele Kernsamigen</span>
                            </li>
                            <li>
                                <svg className={styles.checkmarkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                                <span>Highste Quillite</span>
                            </li>
                            <li>
                                <svg className={styles.checkmarkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                                <span>Zuefesten Quallisen</span>
                            </li>
                            <li>
                                <svg className={styles.checkmarkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                                <span>Zurellagle Unnsitting</span>
                            </li>
                        </ul>
                        <button className={styles.ctaButton}>
                            Projet Starten
                        </button>
                    </div>

                    {/* Right Section - Achievement Blocks */}
                    <div className={styles.rightContent}>
                        <div className={styles.achievementBlock}>
                            <div className={styles.achievementIcon}>
                                <img src="/images/check.png" alt="Check Icon" className={styles.iconImage} />
                            </div>
                            <h4 className={styles.achievementTitle}>50+ Projekte</h4>
                            <p className={styles.achievementDescription}>
                                Über 50 erfolgreich umgesetzte Projekte.
                            </p>
                        </div>

                        <div className={styles.achievementBlock}>
                            <div className={styles.achievementIcon}>
                                <img src="/images/badge.png" alt="Badge Icon" className={styles.iconImage} />
                            </div>
                            <h4 className={styles.achievementTitle}>15+ Jahre Erfahrung</h4>
                            <p className={styles.achievementDescription}>
                                Mehr als 15 Jahre verlässliche Erfahrung.
                            </p>
                        </div>

                        <div className={styles.achievementBlock}>
                            <div className={styles.achievementIcon}>
                                <img src="/images/5star.png" alt="5 Star Rating" className={styles.iconImage5Star} />
                            </div>
                            <h4 className={styles.achievementTitle}>4.8 Bewertung</h4>
                            <p className={styles.achievementDescription}>
                                4.8 - Ausdruck Ihres Vertraus in uns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Elements */}
                <div className={styles.bottomElements}>
                    <div className={styles.leftBottomText}>
                        some information<br />
                        or something like that<br />
                        which looks good here
                    </div>
                    <div className={styles.centerLine}></div>
                    <div className={styles.rightBottomText}>
                        more information<br />
                        or something like thather<br />
                        which looks good here bla bla
                    </div>
                </div>
            </div>
        </section>
    )
}
