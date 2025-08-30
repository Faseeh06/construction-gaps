'use client'
import styles from './style.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Top Header */}
            <div className={styles.topHeader}>
                {/* <span className={styles.topLeft}>Tordaetrolum 00-15000</span> */}
                {/* <span className={styles.topRight}>ed locutiorit</span> */}
            </div>

            {/* Main Header */}
            <div className={styles.mainHeader}>
                {/* <h1 className={styles.headerTitle}>LOREM IPSUM DOLOR LOREM</h1> */}
            </div>

            {/* Horizontal Line */}
            <div className={styles.horizontalLine}></div>

            {/* Main Content Grid */}
            <div className={styles.contentGrid}>
                {/* Left Section */}
                <div className={styles.leftSection}>
                    <h2 className={styles.companyName}>Irfan Yildiz</h2>
                    <p className={styles.companyDescription}>
                        Wir planen und bauen mit Leidenschaft.<br />
                        Maßgeschneiderte Lösungen für jeden Raum.
                    </p>
                    <div>
                        
                        <p className={styles.companyDescription}>
                            Max Mustermann – Co‑Founder<br />
                            „Gemeinsam gestalten wir Räume, die wirken.“<br />
                            </p> 
                        
                    </div>
                    
                    <div className={styles.navigationSection}>
                        {/* <div className={styles.navigationLine}></div> */}
                        {/* <h3 className={styles.navigationTitle}>Navigation</h3> */}
                        {/* <div className={styles.navigationLine}></div> */}
                    </div>
                    
                    <div className={styles.profileImage}>
                        <img 
                            src="/images/pfp/pfp.jpg" 
                            alt="Irfan Yildiz" 
                            className={styles.photo}
                        />
                    </div>
                </div>

                {/* Vertical Line 1 */}
                <div className={styles.verticalLine}></div>

                {/* Center Section */}
                <div className={styles.centerSection}>
                    <div className={styles.expandButton}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    
                    <div id="contact-section" className={styles.logoContainer}>
                        <svg className={styles.logo} viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="140" y="55" fontSize="65" fontWeight="900" fontFamily="rf-dewi, Arial, sans-serif" fill="currentColor" className={styles.addressSvgText} textAnchor="middle">
                                Adresse
                            </text>
                        </svg>
                    </div>
                    
                    <div className={styles.contactDescription}>
                        <p>Kontaktieren Sie uns, um Ihr  </p>
                        <p>Projekt erfolgreich umzusetzen.</p>
                        
                    </div>
                    
                    
                    <div className={styles.addressSection}>
                        <h4 className={styles.addressTitle}>Kontakt Us</h4>
                        <p className={styles.address}><a href="#contact-section" onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact-section'); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>irfan@yildiz.com</a></p>
                        <p className={styles.phoneDetail}>(+49 30 444 789)</p>
                        <p className={styles.additionalInfo}>Feonigmem</p>
                    </div>
                </div>

                {/* Vertical Line 2 */}
                <div className={styles.verticalLine}></div>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    <div className={styles.expandButton}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    
                    <h2 className={styles.followTitle}>Folgen</h2>
                    <h2 className={styles.followSubtitle}>sie uns</h2>
                    
                    <div className={styles.followDescription} style={{ textAlign: 'left' }}>
                        <p>Folgen Sie uns auf unseren Social-Media-Kanälen,</p>
                        <p>um über Neuigkeiten, Veranstaltungen</p>
                        <p>und wichtige Updates stets informiert zu bleiben.</p>
                        
                    </div>
                    
                    
                    
                    <div className={styles.impressumSection}>
                        <h4 className={styles.impressumTitle}>Impressum</h4>
                        
                        <div className={styles.socialIcons}>
                            <div className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                        
                        <p className={styles.legalNote}>Link art Whtescum.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className={styles.bottomSection}>
                <p className={styles.copyright}>
                Copyright © 2025 Irfan Yildiz – Alle Rechte vorbehalten. <strong>Impressum/ED</strong>

                </p>
            </div>
        </footer>
    )
} 