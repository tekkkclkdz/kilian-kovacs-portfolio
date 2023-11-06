'use client'

import { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css'
import Image from 'next/image';
import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Menu from '../components/menu'




import wtf1 from "../../public/wtf/1.jpg"
import wtf2 from "../../public/wtf/3.jpg"
import wtf3 from "../../public/wtf/2.jpg"
import wtf4 from "../../public/wtf/4.jpg"
import wtf5 from "../../public/wtf/5.jpg"
import wtf6 from "../../public/wtf/6.jpg"
import wtf7 from "../../public/wtf/7.jpg"
import wtf8 from "../../public/wtf/8.jpg"
import wtf9 from "../../public/wtf/9.jpg"
import wtf10 from "../../public/wtf/10.jpg"

const wtf = [
    wtf1, wtf2, wtf3, wtf4, wtf5, wtf6, wtf7, wtf8, wtf9, wtf10, 
]

export default function Home() {

    const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <>
        <div>
            <Masonry className="flex" columnClassName="" breakpointCols={2}>
                {wtf.map((wtfImg, idx) => (
                <Image
                    key={wtfImg.src}
                    src={wtfImg}
                    alt="placeholder"
                    className="transition duration-150 hover:opacity-70 cursor-pointer"
                    placeholder="blur" 
                    onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                    }}
                />
                ))}   
            </Masonry>

            <LightGalleryComponent
        onInit={(ref) => {
            if (ref) {
                lightboxRef.current = ref.instance
            }
        }}
        speed={500}
        plugins={[lgZoom]}
        dynamic
        dynamicEl={wtf.map((allImg) => ({
            src: allImg.src,
        }))}
    />

            <Menu />
            

        </div>
    </>
  );
}