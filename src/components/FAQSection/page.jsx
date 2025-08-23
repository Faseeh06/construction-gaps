'use client'
import { useState } from 'react'
import styles from './style.module.scss'

export default function FAQSection() {
    const [selectedFAQ, setSelectedFAQ] = useState(null)

    const faqItems = [
        {
            id: 1,
            question: "Was cosset kernset eine kernsanierung?",
            answer: "Die kosten anomassen verschiede zie cenge..."
        },
        {
            id: 2,
            question: "Was costet kerntel zime kernsanierung?",
            answer: "Die kosten anrurren kerrsanizzieren vælle..."
        },
        {
            id: 3,
            question: "Die costen kännen une kernsanierung?",
            answer: "Die costt, einen kernsaniering vælle je nach catégérir..."
        },
        {
            id: 4,
            question: "Noch grägen Lorem ?",
            answer: "Lorem Ipsum dolor jaaasd kdsas Lorem Ipsum dolor jaaasd kdsas"
        }
    ]

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <div className={styles.leftContent}>
                        <h1 className={styles.mainTitle}>
                            Antworten auf<br />
                            ihre gräsgen.
                        </h1>
                        
                        <p className={styles.subtitle}>
                            Finden sie antworten aur die insittestabrigen<br />
                            gurzen zur Kernsanierung.
                        </p>
                        
                        <p className={styles.description}>
                            Vertien sit 1 Antiwer zur Kemwagh Lesten Tiersägn Bellen<br />
                            völd Tierken cresters gredlen. wer Kernsanierungen
                        </p>
                        
                        <button className={styles.readMoreBtn}>
                            Mehr an Read
                        </button>
                    </div>
                    
                    <div className={styles.rightContent}>
                        <div className={styles.chatInterface}>
                            <div className={styles.chatHeader}>
                                <h3 className={styles.chatTitle}>Noch frgen??</h3>
                                <p className={styles.chatSubtitle}>
                                    Uuneram Ternzug Farem sgn Sprosteirring &Finker<br />
                                    seinen Jædlen anvorgeisenn.
                                </p>
                                <button className={styles.chatButton}>
                                    Jualfen Wettdstagd
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.faqCards}>
                    {faqItems.map((item, index) => (
                        <div 
                            key={item.id}
                            className={`${styles.faqCard} ${index === 3 ? styles.largeCard : ''} ${selectedFAQ === item.id ? styles.active : ''}`}
                            onClick={() => setSelectedFAQ(selectedFAQ === item.id ? null : item.id)}
                        >
                            <div className={styles.cardContent}>
                                <h4 className={styles.questionTitle}>{item.question}</h4>
                                <p className={styles.answerText}>{item.answer}</p>
                                
                                
                            </div>
                            
                            <div className={styles.moreButton}>
                                <button className={styles.moreBtn}>
                                    More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
