'use client'
import styles from './style.module.scss'

export default function FeedbackSection() {
    const testimonials = [
        {
            id: 1,
            name: "Fabrizio Romano",
            role: "Projektleiter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "/images/pfp/pfp.jpg"
        },
        {
            id: 2,
            name: "Fabrizio Romano",
            role: "Projektleiter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "/images/pfp/pfp.jpg"
        },
        {
            id: 3,
            name: "Fabrizio Romano",
            role: "Projektleiter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "/images/pfp/pfp.jpg"
        },
        {
            id: 4,
            name: "Fabrizio Romano",
            role: "Projektleiter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "/images/pfp/pfp.jpg"
        },
        {
            id: 5,
            name: "Fabrizio Romano",
            role: "Projektleiter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "/images/pfp/pfp.jpg"
        },
        {
            id: 6,
            name: "Fabrizio Romano",
            role: "Projektleiter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "/images/pfp/pfp.jpg"
        },
        {
            id: 7,
            name: "Fabrizio Romano",
            role: "Projektleiter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "/images/pfp/pfp.jpg"
        },
        {
            id: 8,
            name: "Fabrizio Romano",
            role: "Projektleiter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            avatar: "/images/pfp/pfp.jpg"
        }
    ]

    return (
        <section className={styles.feedbackSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.mainTitle}>
                        Unsere<br />
                        Bewertungen
                    </h1>
                    <p className={styles.subtitle}>
                        hier kommt nochmal sowas wie komm und lass dich von unseren<br />
                        kunden überzeugen mit ihren meinungen
                    </p>
                </div>
                
                <div className={styles.testimonialsGrid}>
                    {/* Top Row - Moving Left to Right */}
                    <div className={`${styles.testimonialRow} ${styles.rowTop}`}>
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={`top-${testimonial.id}-${index}`} className={styles.testimonialCard}>
                                <div className={styles.testimonialContent}>
                                    <div className={styles.authorInfo}>
                                        <div className={styles.avatar}>
                                            <img src={testimonial.avatar} alt={testimonial.name} />
                                        </div>
                                        <div className={styles.authorDetails}>
                                            <h4 className={styles.authorName}>{testimonial.name}</h4>
                                            <p className={styles.authorRole}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className={styles.testimonialText}>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Bottom Row - Moving Right to Left */}
                    <div className={`${styles.testimonialRow} ${styles.rowBottom}`}>
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={`bottom-${testimonial.id}-${index}`} className={styles.testimonialCard}>
                                <div className={styles.testimonialContent}>
                                    <div className={styles.authorInfo}>
                                        <div className={styles.avatar}>
                                            <img src={testimonial.avatar} alt={testimonial.name} />
                                        </div>
                                        <div className={styles.authorDetails}>
                                            <h4 className={styles.authorName}>{testimonial.name}</h4>
                                            <p className={styles.authorRole}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className={styles.testimonialText}>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className={styles.buttonContainer}>
                    <button className={styles.moreButton}>
                        Bewertung schreiben
                    </button>
                </div>
            </div>
        </section>
    )
}
