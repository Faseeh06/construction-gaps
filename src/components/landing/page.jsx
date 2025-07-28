'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        
        if (video) {
            // Force high quality settings
            video.setAttribute('playsinline', 'true');
            video.setAttribute('webkit-playsinline', 'true');
            video.setAttribute('muted', 'true');
            video.setAttribute('loop', 'true');
            video.setAttribute('autoplay', 'true');
            video.setAttribute('preload', 'metadata');
            
            // Set video quality properties
            video.style.objectFit = 'cover';
            video.style.width = '100%';
            video.style.height = '100%';
            
            const handleVideoLoad = () => {
                setVideoLoaded(true);
                // Force play with high quality
                video.currentTime = 0;
                video.playbackRate = 1.0;
                video.volume = 0;
                
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Auto-play prevented:', error);
                        // Retry play on user interaction
                        document.addEventListener('click', () => {
                            video.play();
                        }, { once: true });
                    });
                }
            };

            const handleVideoEnd = () => {
                video.currentTime = 0;
                video.play();
            };

            const handleVideoError = () => {
                console.log('Video error, retrying...');
                setTimeout(() => {
                    video.load();
                    video.play();
                }, 1000);
            };

            // Event listeners
            video.addEventListener('loadedmetadata', handleVideoLoad);
            video.addEventListener('ended', handleVideoEnd);
            video.addEventListener('error', handleVideoError);
            video.addEventListener('stalled', () => video.play());
            video.addEventListener('waiting', () => video.play());

            // Force reload and play
            video.load();
            
            // Continuous monitoring
            const monitorInterval = setInterval(() => {
                if (video.paused || video.ended) {
                    video.currentTime = 0;
                    video.play();
                }
            }, 1000);

            return () => {
                video.removeEventListener('loadedmetadata', handleVideoLoad);
                video.removeEventListener('ended', handleVideoEnd);
                video.removeEventListener('error', handleVideoError);
                video.removeEventListener('stalled', () => video.play());
                video.removeEventListener('waiting', () => video.play());
                clearInterval(monitorInterval);
            };
        }
    }, []);

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
            <video
                ref={videoRef}
                className={styles.backgroundVideo}
                poster="/images/random/1.jpg"
            >
                <source src="/videos/landing.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
                <source src="/videos/landing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div data-scroll data-scroll-speed={0.1} className={styles.description}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                </svg>
                <p>Professionelle Kernsanierung</p>
                <p>Von der ersten Idee bis zur fertigen Umsetzung</p>
            </div>
        </motion.main>
    )
}
