'use client'

import { useState, useEffect } from 'react';
import Menu from "./components/menu_no_scroll"
import Image from 'next/image';

import wtf1 from "../public/wtf/10.jpg"

export default function Home() {

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the screen width is below a certain threshold to determine mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    // Initial check
    handleResize();

    const setHeight = () => {
      const currentHeight = window.innerHeight;
      document.body.style.height = `${currentHeight}px`
    };
    window.addEventListener("resize", setHeight)
    setHeight();

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

    

  }, []);

  return (
    <body>
      <div className="relative font-victor-mono">
        <div className="absolute inset-x-0 text-white top-0 text-center font-bold z-50">
          {isMobile ? (
            <div className="text-5xl md:text-7xl">KILIAN KOVACS</div>
          ) : (
            <div className="text-7xl">KILIAN KOVACS</div>
          )}
        </div>
        {isMobile ? (
          <div className="relative z-0">
            {/* <img className="object-cover h-screen" src="/angels.jpg" alt="Angels" /> */}
            <Image src={wtf1} alt="Menu cover" className="flex h-[calc(100svh)]" />
            <Menu />
          </div>
        ) : (
          <div className="grid grid-cols-3">
            <div className="grid-item relative z-0">
            <img className="object-cover h-screen w-full md:block-hidden" src="/hors.jpg" alt="Hors" />
          </div>
          <div className="grid-item relative z-0">
            <img className="object-cover h-screen w-full" src="/angels.jpg" alt="Angels" />
          
          </div>
          <div className="grid-item relative z-0">
            <img className="object-cover h-screen w-full" src="/blue.jpg" alt="Blue" />
          </div>
          </div>
        )}
      </div>
      <Menu />
    </body>
    
  );
}