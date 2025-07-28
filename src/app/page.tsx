"use client";
import Image from "next/image";
import Header from '../components/header/page'
import Description from '../components/Description/page'
import Landing from '../components/landing/page'
import SlidingImages from '../components/Slidingimages/index'
import Contact from '../components/Contact/page'
import Projects from '../components/Projects/index'
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
      <div data-section="description">
        <Description />
      </div>
      <Projects />
      <SlidingImages />
      <Contact />
    </>
  );
}
