'use client'
import styles from './style.module.scss'

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            title: "Kernsanizein",
            subtitle: "Rohkabu",
            description: "Komplette entthizeng",
            details: "Complète fondé eintägsh ettlüztstemlitung",
            image: "/images/column.jpg"
        },
        {
            id: 2,
            title: "Innenausbü",
            subtitle: "Rohbaul",
            description: "Komplettee entäingung",
            details: "Complète heete ektaméön enthëéütterléung",
            image: "/images/column.jpg"
        },
        {
            id: 3,
            title: "EnergieEffizienz",
            subtitle: "Rez",
            description: "Complèt einegen",
            details: "Komplète heette ehrdréeh eintëerlexttartung",
            image: "/images/column.jpg"
        }
    ]

    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <h1 className={styles.mainTitle}>
                            UNSERE<br />
                            LEISTENTS
                        </h1>
                        <p className={styles.subtitle}>
                            Von de ersten idee b ur fertien umettung....
                        </p>
                        <p className={styles.description}>
                            Llit Intelatoz socialelin unethzisen klinlu dnoezingëlvet Sozliratein benzié wäelung<br />
                            freez nunält aezzinrerintise dfitzah dtazinus avesils sïtefieïtuez öäf nimelaohent waztfingäzen<br />
                            Haenthinaie oreng eaeh keinül härfenzelutaalaer Drä Letinet khrhtenztle xpözhäsı
                        </p>
                        <button className={styles.readMoreBtn}>
                            Roadarbees Leeontezlaig
                        </button>
                    </div>
                    
                    <div className={styles.rightContent}>
                        <div className={styles.servicesGrid}>
                            {services.map((service) => (
                                <div 
                                    key={service.id} 
                                    className={styles.serviceCard}
                                >
                                    <div className={styles.cardContent}>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                                            <h2 className={styles.serviceSubtitle}>{service.subtitle}</h2>
                                        </div>
                                        <p className={styles.serviceDescription}>{service.description}</p>
                                        <p className={styles.serviceDetails}>{service.details}</p>
                                    </div>
                                    <div className={styles.cardImage} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.textGrid}>
                    <div className={styles.textItem}>
                        <h4 className={styles.textTitle}>500 projekte</h4>
                                                    <div className={styles.textSubtitle}>
                                <div className={styles.iconCircle}>
                                    <svg className={styles.homeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10"/>
                                        <path d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6"/>
                                    </svg>
                                </div>
                                <span>100 ligh</span>
                            </div>
                    </div>
                    <div className={styles.textItem}>
                        <h4 className={styles.textTitle}>15 yehre</h4>
                                                    <div className={styles.textSubtitle}>
                                <div className={styles.iconCircle}>
                                    <svg className={styles.homeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10"/>
                                        <path d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6"/>
                                    </svg>
                                </div>
                                <span>vainähr</span>
                            </div>
                    </div>
                    <div className={styles.textItem}>
                        <h4 className={styles.textTitle}>100% settfiidehent</h4>
                                                    <div className={styles.textSubtitle}>
                                <div className={styles.iconCircle}>
                                    <svg className={styles.homeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10"/>
                                        <path d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6"/>
                                    </svg>
                                </div>
                                <span>10% wiilk</span>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
