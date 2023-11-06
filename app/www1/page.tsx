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
import LightGal from "./LightGal"



import lightGallery from 'lightgallery';

import pic1 from "../../public/www1/14.jpg"
import pic2 from "../../public/www1/18.jpg"
import pic3 from "../../public/www1/23.jpg"
import pic4 from "../../public/www1/24.jpg"
import pic5 from "../../public/www1/26.jpg"
import pic6 from "../../public/www1/28.jpg"
import pic7 from "../../public/www1/30.jpg"
import pic8 from "../../public/www1/33-2.jpg"
import pic9 from "../../public/www1/34.jpg"
import pic10 from "../../public/www1/35.jpg"
import pic11 from "../../public/www1/49.jpg"


const www1 = [
    pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11
]

export default function Home() {

    const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <>
        <div>
        {/* <h1 className="flex flex-col justify-center items-center text-center h-28 sticky text-7xl text-bold">www1</h1> */}
        <Masonry className="flex" columnClassName="" breakpointCols={2}>
                {www1.map((www1Img, idx) => (
                <Image
                    key={www1Img.src}
                    src={www1Img}
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
        dynamicEl={www1.map((allImg) => ({
            src: allImg.src,
        }))}
    />

            <Menu />
            

        </div>
    </>
  );
}