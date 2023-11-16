'use client'

import { useState, useEffect } from 'react';

export default function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is below a certain threshold to determine mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    // Initial check
    handleResize();

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <div className={`absolute bottom-0 left-0 right-0 text-center font-bold text-white text-3xl sm:text-7xl z-30 cursor-pointer hover:underline hover:underline-offset-2 ${menuVisible ? 'fixed' : 'absolute'}`} onClick={() => setMenuVisible(!menuVisible)}>
  <button className="hover:underline hover:underline-offset-2 font-victor-mono">MENU</button>
</div>
        {menuVisible && (
          
        <div className="fixed inset-0 font-victor-mono bg-black flex justify-center items-center">
          <div className="absolute inset-x-0 text-white top-0 text-center font-bold z-10">
          <a href='/' className="sm:text-5xl cursor-pointer text-7xl">KILIAN KOVACS</a>
        </div>
          <div className="flex flex-col justify-center font-victor-mono items-center">
            <img className="absolute object-cover h-screen w-full z-10" src="/wow.jpg" alt="Wow" />
            <div className="text-white text-4xl mb-40 z-20 cursor-pointer hover:underline hover:underline-offset-2">
              <a href='/portfolio'>PORTFOLIO</a>
            </div>
            <div className="text-white text-4xl mb-40 z-20 cursor-pointer hover:underline hover:underline-offset-2">
              <a href='/posters'>POSTERS</a>
              </div>
            <div className="text-white text-4xl mb-0 z-20 cursor-pointer hover:underline hover:underline-offset-2">
              <a href='/contact'>CONTACT</a>
            </div>
          </div>
        </div>
        
      )}
      

    </>
  );
}

  
