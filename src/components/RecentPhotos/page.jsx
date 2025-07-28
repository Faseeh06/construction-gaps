'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function RecentPhotos() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    
    const images = [
        "/random/8.jpg",
        "/random/9.jpg", 
        "/random/10.jpg",
        "/random/11.jpg",
        "/random/12.jpg"
    ];

    const nextImage = () => {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setDirection(-1);
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className={styles.recentPhotos}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Aktuelle Fotos</h2>
                    <p>Wunderschöner Überblick über unser Haus, um Ihnen das ultimative Erlebnis zu bieten
                        
                    </p>
                </div>
                
                <div className={styles.gallerySection}>
                    <div className={styles.imageGallery}>
                        <div className={styles.galleryContainer}>
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentImageIndex}
                                    className={styles.galleryImage}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                >
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt={`House Photo ${currentImageIndex + 1}`}
                                        fill
                                        className={styles.galleryImg}
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Image counter overlay */}
                            <div className={styles.imageCounter}>
                                <span>{currentImageIndex + 1} / {images.length}</span>
                            </div>
                        </div>
                        
                        <div className={styles.galleryControls}>
                            <div className={styles.pagination}>
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
                                        onClick={() => {
                                            setDirection(index > currentImageIndex ? 1 : -1);
                                            setCurrentImageIndex(index);
                                        }}
                                    />
                                ))}
                            </div>
                            
                            <div className={styles.navigation}>
                                <button className={styles.navButton} onClick={prevImage}>
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button className={styles.navButton} onClick={nextImage}>
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.videoSection}>
                    <div className={styles.videoContainer}>
                        <Image
                            src="/random/13.jpg"
                            alt="Video Thumbnail"
                            fill
                            className={styles.videoThumbnail}
                            priority
                        />
                        <div className={styles.playButton}>
                            <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="white"/>
                                <path d="M20 16L32 24L20 32V16Z" fill="#1a1a1a"/>
                            </svg>
                        </div>
                        <div className={styles.videoOverlay}>
                            <h3>House Tour Video</h3>
                            <p>Watch our complete house tour</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 