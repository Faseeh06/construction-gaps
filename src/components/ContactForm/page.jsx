'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
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
        <section className={styles.contactForm}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Kontaktieren Sie uns</h2>
                    <p>Haben Sie Fragen oder möchten Sie Ihr Projekt besprechen? Füllen Sie das Formular aus oder rufen Sie uns an. Wir freuen uns darauf, von Ihnen zu hören.</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4>Telefon</h4>
                                    <p>+49 30 55540</p>
                                </div>
                            </div>
                            
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4>E-Mail</h4>
                                    <p>info@irfan-yildiz.de</p>
                                </div>
                            </div>
                            
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={styles.contactDetails}>
                                    <h4>Adresse</h4>
                                    <p>10 C-Golf Mühlhausen Gassen</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="tel"
                                        name="number"
                                        placeholder="Telefonnummer"
                                        value={formData.number}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Betreff"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            
                            <div className={styles.formGroup}>
                                <textarea
                                    name="message"
                                    placeholder="Ihre Nachricht"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                />
                            </div>
                            
                            <button type="submit" className={styles.submitButton}>
                                Nachricht senden
                            </button>
                        </form>
                    </div>
                    
                    <div className={styles.rightContent}>
                        <div className={styles.mapContainer}>
                            <Image 
                                src="/random/14.jpg" 
                                alt="Location Map" 
                                fill 
                                className={styles.mapImage} 
                            />
                            <div className={styles.locationPin}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#e74c3c"/>
                                    <circle cx="12" cy="10" r="3" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.locationInfo}>
                                <h4>Besuchen Sie uns</h4>
                                <p>Finden Sie unseren Standort auf Google Maps</p>
                            </div>
                        </div>
                        
                        <div className={styles.businessHours}>
                            <h4>Öffnungszeiten</h4>
                            <p>Mo - Fr: 8:00 - 17:00</p>
                            <p>Sa: 9:00 - 14:00</p>
                            <p>So: Geschlossen</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 