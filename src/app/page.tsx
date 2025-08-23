"use client";
import Image from "next/image";
import Header from '../components/header/page'
import Landing from '../components/landing/page'
import Features from '../components/Features/page'
import HouseLayout from '../components/HouseLayout/page'
import RecentPhotos from '../components/RecentPhotos/page'
import FAQSection from '../components/FAQSection/page'
import ContactSection from '../components/ContactSection/page'
import Footer from '../components/Footer/page'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader/page'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  // Global error handler for DOM operations
  useEffect(() => {
    const handleError = (event) => {
      if (event.error && event.error.message && event.error.message.includes('removeChild')) {
        console.warn('DOM removeChild error caught and handled:', event.error);
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  useEffect(() => {
    let locomotiveScroll = null;
    let isDestroyed = false;
    let initTimeout = null;
    
    const initScroll = async () => {
      try {
        // Check if already destroyed
        if (isDestroyed) return;
        
        // Wait for DOM to be fully ready
        if (typeof window === 'undefined' || document.readyState !== 'complete') {
          return;
        }

        // Check if container exists and is valid
        const scrollContainer = document.querySelector('[data-scroll-container]');
        if (!scrollContainer || !scrollContainer.isConnected) {
          return;
        }

        // Import Locomotive Scroll only when needed
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        // Create new instance only if not already created
        if (!locomotiveScroll && !isDestroyed) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollContainer,
            smooth: true,
            lerp: 0.1,
            multiplier: 1,
            reloadOnContextChange: true,
            touchMultiplier: 2,
            smoothMobile: false
          });
        }
      } catch (error) {
        console.error('Locomotive Scroll initialization error:', error);
      }
    };

    // Initialize with multiple attempts and better timing
    const initAttempts = [0, 200, 500, 1000, 2000];
    initAttempts.forEach(delay => {
      initTimeout = setTimeout(initScroll, delay);
    });

    // Set loading to false after attempts
    setTimeout(() => {
      setIsLoading(false);
      if (typeof document !== 'undefined') {
        document.body.style.cursor = 'default';
      }
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    }, 2500);

    // Cleanup function
    return () => {
      isDestroyed = true;
      if (initTimeout) {
        clearTimeout(initTimeout);
      }
      if (locomotiveScroll && typeof locomotiveScroll.destroy === 'function') {
        try {
          locomotiveScroll.destroy();
          locomotiveScroll = null;
        } catch (error) {
          console.error('Locomotive Scroll cleanup error:', error);
        }
      }
    };
  }, []);
  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div data-scroll-container style={{ minHeight: '100vh' }}>
        <Landing />
        <Features />
        <HouseLayout />
        <RecentPhotos />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
