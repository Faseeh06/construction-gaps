'use client'
import { useState } from 'react'
import styles from './style.module.scss'

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                {/* Left Section - Contact Form */}
                <div className={styles.leftSection}>
                    <h2 className={styles.title}>Kontattiere uns</h2>
                    <p className={styles.subtitle}>
                        IHr Ansprechpartner für Traumhaus - 
                        Today um QuBAl Cest. 20. August 
                        2023
                    </p>
                    
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-Mail"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                name="number"
                                placeholder="Number"
                                value={formData.number}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                rows={4}
                                required
                            />
                        </div>
                        
                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                        
                        <p className={styles.callInfo}>
                            *You can call us directly if you want to discuss urgently
                        </p>
                    </form>
                </div>

                {/* Middle Section - AI Avatar */}
                <div className={styles.middleSection}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatarCard}>
                            <img 
                                src="/images/ai.jpg" 
                                alt="AI Projektberaterin" 
                                className={styles.avatarImage}
                            />
                        </div>
                    </div>
                    <h3 className={styles.roleTitle}>Project Consultant</h3>

                    <div className={styles.consultantInfo}>
                        <p className={styles.consultantName}>Irfan Yildiz</p>
                        <p className={styles.consultantQuote}>"Building visions into reality."</p>
                    </div>
                </div>

                {/* Right Section - Contact Info */}
                <div className={styles.rightSection}>
                    <div className={styles.contactCard}>
                        <div className={styles.locationIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <div className={styles.phoneIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4>Master Schmidt</h4>
                                </div>
                            </div>
                            
                            <div className={styles.contactItem}>
                                <div className={styles.phoneIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4>Telefon</h4>
                                </div>
                            </div>
                            
                            <div className={styles.contactItem}>
                                <div className={styles.phoneIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4>+ 49 30 55500</h4>
                                </div>
                            </div>
                            
                            <div className={styles.contactItem}>
                                <div className={styles.emailIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4>Maintiftart Niladan</h4>
                                    <p>Wiften Yildtz</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.mapSection}>
                            <h4 className={styles.mapTitle}>Auf Google Map anschaun</h4>
                            <div className={styles.mapDetails}>
                                <div className={styles.mapItem}>
                                    <div className={styles.mapIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span>ww. Mlastadsstreet 123</span>
                                </div>
                                
                                <div className={styles.mapItem}>
                                    <div className={styles.mapIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span>12ott@haupthstroerem</span>
                                </div>
                                
                                <div className={styles.mapItem}>
                                    <div className={styles.mapIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span>Telefon 31313 864</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
