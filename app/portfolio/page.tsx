import Image from 'next/image';

import pic1 from "../../public/www1/14.jpg"

import bookk16 from "../../public/boooookkkkk/boooookkkkk Page 23.jpg"

import wtf1 from "../../public/wtf/8.jpg"

import pic2 from "../../public/austellung/IMG_5948.jpg"

export default function Home() {

    return (
    <>
        <div className='font-victor-mono'>
        <div className="flex justify-center items-center h-64 text-6xl text-white">
            <Image src={pic1} alt="Menu cover" className="absolute object-cover h-64 w-full" />
            <a href="/www1" className='z-10 text-6xl cursor-pointer hover:underline hover:underline-offset-2'>körper</a>
        </div>
        
        <div className="flex justify-center items-center h-64 text-6xl text-white">
            <Image src={bookk16} alt="Menu cover 2" className="absolute object-cover h-64 w-full" />
            <a href="/bookkk" className='z-10 text-6xl items-center cursor-pointer hover:underline hover:underline-offset-2'>fragiles</a>
        </div>
        
        <div className="flex justify-center items-center h-64 text-6xl text-white">
            <Image src={wtf1} alt="Menu cover 3" className="absolute object-cover h-64 w-full" />
            <a href="/wtf" className='z-10 text-6xl cursor-pointer hover:underline hover:underline-offset-2'>untitled</a>
        </div>
        
        <div className="flex justify-center items-center h-64 text-6xl text-white">
            <Image src={pic2} alt="Menu cover 4" className="absolute object-cover h-64 w-full" />
            <a href="/austellung" className='z-10 text-6xl cursor-pointer hover:underline hover:underline-offset-2'>austellung</a>
        </div>
        </div>
    </>
  );
}