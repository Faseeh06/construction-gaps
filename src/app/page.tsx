"use client";
import Image from "next/image";
import Header from '../components/header/page'
import Landing from '../components/landing/page'
import Features from '../components/Features/page'
import HouseLayout from '../components/HouseLayout/page'
import RecentPhotos from '../components/RecentPhotos/page'
import ContactForm from '../components/ContactForm/page'
import Footer from '../components/Footer/page'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader/page'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])
  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Features />
      <HouseLayout />
      <RecentPhotos />
      <ContactForm />
      <Footer />
    </>
  );
}
