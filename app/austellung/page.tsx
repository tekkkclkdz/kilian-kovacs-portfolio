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




import pic1 from "../../public/austellung/IMG_5939.jpg"
import pic2 from "../../public/austellung/IMG_5948.jpg"
import pic3 from "../../public/austellung/IMG_5993.jpg"
import pic4 from "../../public/austellung/IMG_5994.jpg"
import pic5 from "../../public/austellung/IMG_6001-2.jpg"


const pic = [
    pic1, pic2, pic3, pic4, pic5
]

export default function Home() {

    const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <>
        <div>
            <Masonry className="flex" columnClassName="" breakpointCols={2}>
                {pic.map((wtfImg, idx) => (
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
        dynamicEl={pic.map((allImg) => ({
            src: allImg.src,
        }))}
    />

            <Menu />
            

        </div>
    </>
  );
}