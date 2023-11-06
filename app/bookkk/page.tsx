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


import bookkCover from "../../public/boooookkkkk/boooookkkkk Cover.jpg"
import bookk1 from "../../public/boooookkkkk/boooookkkkk Page 1.jpg"
import bookk2 from "../../public/boooookkkkk/boooookkkkk Page 2.jpg"
import bookk3 from "../../public/boooookkkkk/boooookkkkk Page 3.jpg"
import bookk4 from "../../public/boooookkkkk/boooookkkkk Page 4.jpg"
import bookk5 from "../../public/boooookkkkk/boooookkkkk Page 5.jpg"
import bookk6 from "../../public/boooookkkkk/boooookkkkk Page 6.jpg"
import bookk7 from "../../public/boooookkkkk/boooookkkkk Page 7.jpg"
import bookk8 from "../../public/boooookkkkk/boooookkkkk Page 8.jpg"
import bookk9 from "../../public/boooookkkkk/boooookkkkk Page 9.jpg"
import bookk10 from "../../public/boooookkkkk/boooookkkkk Page 10.jpg"
import bookk11 from "../../public/boooookkkkk/boooookkkkk Page 11.jpg"
import bookk12 from "../../public/boooookkkkk/boooookkkkk Page 12.jpg"
import bookk13 from "../../public/boooookkkkk/boooookkkkk Page 13.jpg"
import bookk14 from "../../public/boooookkkkk/boooookkkkk Page 14.jpg"
import bookk15 from "../../public/boooookkkkk/boooookkkkk Page 15.jpg"
import bookk16 from "../../public/boooookkkkk/boooookkkkk Page 16.jpg"
import bookk17 from "../../public/boooookkkkk/boooookkkkk Page 17.jpg"
import bookk18 from "../../public/boooookkkkk/boooookkkkk Page 18.jpg"
import bookk19 from "../../public/boooookkkkk/boooookkkkk Page 19.jpg"
import bookk20 from "../../public/boooookkkkk/boooookkkkk Page 20.jpg"
import bookk21 from "../../public/boooookkkkk/boooookkkkk Page 21.jpg"
import bookk22 from "../../public/boooookkkkk/boooookkkkk Page 22.jpg"
import bookk23 from "../../public/boooookkkkk/boooookkkkk Page 23.jpg"
import bookk24 from "../../public/boooookkkkk/boooookkkkk Page 24.jpg"
import bookk25 from "../../public/boooookkkkk/boooookkkkk Page 25.jpg"
import bookk26 from "../../public/boooookkkkk/boooookkkkk Page 26.jpg"
import bookk27 from "../../public/boooookkkkk/boooookkkkk Page 27.jpg"
import bookk28 from "../../public/boooookkkkk/boooookkkkk Page 28.jpg"
import bookk29 from "../../public/boooookkkkk/boooookkkkk Page 29.jpg"
import bookk30 from "../../public/boooookkkkk/boooookkkkk Page 30.jpg"
import bookk31 from "../../public/boooookkkkk/boooookkkkk Page 31.jpg"
import bookk32 from "../../public/boooookkkkk/boooookkkkk Page 32.jpg"



const bookk = [
    bookkCover, bookk1, bookk2, bookk3, bookk4, bookk5, bookk6, bookk7, bookk8, bookk9, bookk10, bookk11, bookk12, bookk13, bookk14, bookk15, bookk16, bookk17, bookk18, bookk19, bookk21, bookk20, bookk22, bookk23, bookk24, bookk26, bookk25, bookk27, bookk28, bookk29, bookk31, bookk30, bookk32
]

export default function Home() {

    const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <>
        <div>
        {/* <h1 className="flex flex-col justify-center items-center text-center h-28 sticky text-7xl text-bold">www1</h1> */}
            <Masonry className="flex" columnClassName="" breakpointCols={2}>
                {bookk.map((bookkImg, idx) => (
                <Image
                    key={bookkImg.src}
                    src={bookkImg}
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
        dynamicEl={bookk.map((allImg) => ({
            src: allImg.src,
        }))}
    />

            <Menu />
            

        </div>
    </>
  );
}