'use client'

import { useState, useEffect } from 'react';
import Menu from "./components/menu_no_scroll"
import Image from 'next/image';

import wtf1 from "../public/wtf/10.jpg"

export default function Home() {


  return (
    <body>
      <div className="relative font-victor-mono">
        <div className="absolute inset-x-0 text-white top-0 text-center font-bold z-50">
          <div className="sm:text-7xl text-5xl">KILIAN KOVACS</div>
        </div>

        <div className="relative z-0">
          {/* <img className="object-cover h-screen" src="/angels.jpg" alt="Angels" /> */}
          <Image src={wtf1} alt="Menu cover" className="sm:hidden flex h-[calc(100svh)]" />
        </div>

        <div className="grid grid-cols-3">
          <div className="sm:flex hidden grid-item z-0">
            <img className="object-cover h-screen w-full md:block-hidden" src="/hors.jpg" alt="Hors" />
          </div>
          <div className="sm:flex hidden grid-item z-0">
            <img className="object-cover h-screen w-full" src="/angels.jpg" alt="Angels" />

          </div>
          <div className="sm:flex hidden grid-item z-0">
            <img className="object-cover h-screen w-full" src="/blue.jpg" alt="Blue" />
          </div>
        </div>
        <Menu />
      </div>
  
    </body>

  );
}