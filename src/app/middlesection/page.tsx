
// 'use client'

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import greenshirt from '../../../public/greenshirt.png';
// import yellow from '../../../public/yelowshirt.png';
// import womens from '../../../public/womenss.png';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// function MiddleSection() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const cardCount = 3;
//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardCount - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
//     };

//     return (
//         <div className='h-auto w-full grid items-center bg-gray-200 py-8 top-0'>
//             <h1 className='text-black text-4xl font-extrabold mb-8 text-center'>MEN AND WOMEN SHOPPING</h1>
//             <div
//                 className='flex flex-wrap justify-center gap-6 transition-transform duration-1000'
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//                 {/* Card 1 */}
//                 <div className='relative bg-white rounded-lg shadow-xl overflow-hidden w-[350px] flex flex-col items-center p-7 h-[500px]'>
//                     <div className="p-4">
//                         <h2 className="text-lg font-bold mb-2">Mens T-Shirt</h2>
//                         <p className="text-gray-700">Price $ 30</p>
//                     </div>
//                     <div className="relative w-full h-full mb-1 flex items-center justify-center overflow-hidden">
//                         <Image 
//                             src={yellow} 
//                             layout='intrinsic' 
//                             width={300} 
//                             height={325} 
//                             alt='Shirt Image' 
//                             className="object-contain max-w-full max-h-full"  
//                         />
//                     </div>
//                     <div className='flex justify-between w-full px-5 mt-auto'>
//                         <Link href="" className='text-orange-600 font-sans text-lg font-extrabold'>Buy Now</Link>
//                         <Link href="">See More</Link>
//                     </div>  
//                 </div>

//                 {/* Card 2 */}
//                 <div className='relative bg-white rounded-lg shadow-xl overflow-hidden w-[350px] flex flex-col items-center p-7 h-[500px]'>
//                     <div className="p-4">
//                         <h2 className="text-lg font-bold mb-2">Mens T-Shirt</h2>
//                         <p className="text-gray-700">Price $ 30</p>
//                     </div>
//                     <div className="relative w-full mb-1 h-full flex items-center justify-center overflow-hidden">
//                         <Image 
//                             src={greenshirt} 
//                             layout='intrinsic' 
//                             width={300} 
//                             height={325} 
//                             alt='Shirt Image' 
//                             className="object-contain max-w-full max-h-full"  
//                         />
//                     </div> 
//                     <div className='flex justify-between w-full px-5 mt-auto'>
//                         <Link href="" className='text-orange-600 font-sans text-lg font-extrabold'>Buy Now</Link>
//                         <Link href="">See More</Link>
//                     </div>  
//                 </div>

//                 {/* Card 3 */}
//                 <div className='relative bg-white rounded-lg shadow-xl overflow-hidden w-[350px] flex flex-col items-center p-7 h-[500px]'>
//                     <div className="p-4">
//                         <h2 className="text-lg font-bold mb-2">WOMENS Shirt</h2>
//                         <p className="text-gray-700">Price $ 30</p>
//                     </div>
//                     <div className="relative w-full mb-1 h-full flex items-center justify-center overflow-hidden">
//                         <Image 
//                             src={womens} 
//                             layout='intrinsic' 
//                             width={300} 
//                             height={325} 
//                             alt='Shirt Image' 
//                             className="object-contain max-w-full max-h-full"  
//                         />
//                     </div>
//                     <div className=' flex justify-between w-full px-5 mt-auto'>
//                         <Link href="" className='text-orange-600 font-sans text-lg font-extrabold'>Buy Now</Link>
//                         <Link href="">See More</Link>
//                     </div>  
//                 </div>
                
//             </div>
//             {/* buttons for navigation */}
//             <div className='flex items-center justify-center gap-2 mt-2'>
//                 <button className='bg-[#2b2a29] text-white p-5 mr-6'
//                     onClick={handlePrev}
//                 >
//                     <FontAwesomeIcon icon={faAngleLeft} className='text-white' size='lg'/>
//                 </button>

//                 <button className='bg-[#2b2a29] text-white p-5 ml-6'
//                     onClick={handleNext}
//                 >
//                     <FontAwesomeIcon icon={faAngleRight} className='text-white' size='lg'/>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default MiddleSection;



'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { StaticImageData } from "next/image";
interface CardProps {
    // images: { src: string; alt: string ; }[];
    images: { src: string | StaticImageData; alt: string }[];
    headings: string[];
    sectionHeading : any
}

const MiddleSection: React.FC<CardProps> = ({ images, headings,sectionHeading }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardCount = images.length;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardCount - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
    };

    return (
        <div className='h-auto w-full grid items-center bg-gray-200 py-8 top-0'>
            <h1 className='text-black text-4xl font-extrabold mb-8 text-center'>{sectionHeading}</h1>
            <div
                className='flex flex-wrap justify-center gap-6 transition-transform duration-1000'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className='relative bg-white rounded-lg shadow-xl overflow-hidden w-[350px] flex flex-col items-center p-7 h-[500px]'>
                        <div className="p-4">
                            <h2 className="text-lg font-bold mb-2">{headings[index]}</h2>
                            <p className="text-gray-700">Price $ 30</p>
                        </div>
                        <div className="relative w-full h-full mb-1 flex items-center justify-center overflow-hidden">
                            <Image 
                                src={image.src} 
                                layout='intrinsic' 
                                width={300} 
                                height={325} 
                                alt={image.alt} 
                                className="object-contain max-w-full max-h-full"  
                            />
                        </div>
                        <div className='flex justify-between w-full px-5 mt-auto'>
                            <Link href="" className='text-orange-600 font-sans text-lg font-extrabold'>Buy Now</Link>
                            <Link href="">See More</Link>
                        </div>  
                    </div>
                ))}
            </div>
            {/* buttons for navigation */}
            <div className='flex items-center justify-center gap-2 mt-2'>
                <button className='bg-[#2b2a29] text-white p-5 mr-6' onClick={handlePrev}>
                    <FontAwesomeIcon icon={faAngleLeft} className='text-white' size='lg'/>
                </button>

                <button className='bg-[#2b2a29] text-white p-5 ml-6' onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} className='text-white' size='lg'/>
                </button>
            </div>
        </div>
    );
}

export default MiddleSection;
