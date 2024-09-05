// 'use client'
// import Link from 'next/link';
// import React from 'react'
// import { FaArrowDown } from "react-icons/fa";
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Search from 'antd/es/transfer/search';
// import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
// import { faCartShopping, faChevronDown, faUser, faBars, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import checkshirt from '../../../public/checkshirt.png'
// import blueshirt from '../../../public/blueshirt.png'
// import ladiesshirt from '../../../public/womenshirt.png'
// import Image from 'next/image';
// import middleSection from '../middlesection/page';


// const landingPage = () => {

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [currentIndex, setCurrentIndex] = useState(0);
//     // Text items
//     const textItems = [
//         "GET STARTED",
//         "YOUR FAVORITE SHOPPING",
//         // Add more items if needed
//     ];

    
//     const prevText = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? textItems.length - 1 : prevIndex - 1));
//     };

    
//     const nextText = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === textItems.length - 1 ? 0 : prevIndex + 1));
//     };

    
//   const categoryOnClick = () => {
//     return(
//       <div className='bg-black'>
//         <ul className='flex flex-col'>
//           <li className='hover:bg-gray-200'>Category 1</li>
//           <li className='hover:bg-gray-200'>Category 2</li>
//           <li className='hover:bg-gray-200'>Category 3</li>
//           <li className='hover:bg-gray-200'>Category 4</li>
//         </ul>
//       </div>
//     )      
//     }



//   return (
//     <div className='items-center justify-center h-screen w-[100%] '>
//         <div  className='bg-yellow-500 w-[100%] h-[650px] flex flex-col items-center justify-center'>
//           {/* navbar */}
//           <div className='w-[70%] h-auto bg-[#2b2a29] text-white flex items-center justify-center fixed top-0 z-50 py-3'
//               style={{
//                   clipPath: 'polygon(0 0, 100% 0, 96% 100%, 3% 100%)',
                  
//               }}
//           >
//               <Link href='#' className='hover:text-orange-500 mx-3'>Best Seller</Link>
//               <Link href='#' className='hover:text-orange-500 mx-3'>Gift Ideas</Link>
//               <Link href='#' className='hover:text-orange-500 mx-3'>New Releases</Link>
//               <Link href='#' className='hover:text-orange-500 mx-3'>Today Deal</Link>
//               <Link href='#' className='hover:text-orange-500 mx-3'>Customer Service</Link>
//           </div>
//           {/* Search bar */}
//           <div className='w-[80%] flex items-center justify-between h-auto top-[140px] '>
//             <FontAwesomeIcon icon={faBars} className='text-white'/>
//             {/* All Category Button */}
//             <button
//                 className='bg-[#30302e] text-white text-lg rounded-md flex items-center p-2'
//                 onClick={categoryOnClick}
//             >
//                 <FontAwesomeIcon icon={faChevronDown} className='mr-2' />
//                 All Category
//             </button>
//             {/* Search Container */}
//             <div className='flex items-center w-[50%] max-w-[800px]'>
//                 <input
//                     type="text"
//                     placeholder="Search This Blog"
//                     className="bg-white h-9 flex-grow rounded-md px-4"
//                 />
//                 <button
//                     className="bg-orange-600 p-2 rounded flex items-center justify-center ml-2"
//                 >
//                     <FontAwesomeIcon icon={faSearch} className="text-white" />
//                 </button>
//             </div>
//             {/* English Button */}
//             <button className='bg-white rounded-md text-black p-2 flex items-center text-sm'>
//                 <FontAwesomeIcon icon={faChevronDown} className='mr-2' />
//                 English
//             </button>
//             {/* Cart Link */}
//             <Link href='#' className='text-white flex items-center'>
//                 <FontAwesomeIcon icon={faCartShopping} className='mr-2' />
//                 Cart
//             </Link>
//             {/* User Link */}
//             <Link href='#' className='text-white flex items-center'>
//                 <FontAwesomeIcon icon={faUser} className='mr-2' />
//                 User
//             </Link>
//           </div>
//           {/* Shoping buynow  */}
//           <div className='bg-transparent w-[80%] h-auto flex flex-col items-center justify-center p-8 rounded-md  relative top-14'>
//               <div onClick={prevText} className='absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-gray-100 opacity-50 rounded-full cursor-pointer'>
//                   <FontAwesomeIcon icon={faChevronLeft} className='text-black' />
//               </div>
              
//               <div className='text-center relative w-full overflow-hidden'>
//                 <div 
//                     className='transition-transform duration-500 ease-in-out'
//                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 >
//                     {textItems.map((item, index) => (
//                         <div key={index} className='text-5xl font-bold mb-6 text-white  flex-shrink-0 w-full'>
//                             {item}
//                         </div>
                        
//                     ))}
//                     <button className='bg-[#2b2a29] text-white px-6 py-2 rounded-md'>BUY NOW</button>
//                 </div>
                
//               </div>
//               <div onClick={nextText} className='absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-gray-100 opacity-50 rounded-full cursor-pointer'>
//                   <FontAwesomeIcon icon={faChevronRight} className='text-black' />
//               </div>   
//           </div>
//         </div>
       
//     </div>

//   )
// }

// export default landingPage;

'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faChevronDown, faUser, faBars, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Dropdown, Space } from 'antd';
import lg from '../../../public/lg.png'


const landingPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const textItems = ["GET STARTED", "YOUR FAVORITE SHOPPING"];

  const prevText = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? textItems.length + 1 : prevIndex - 1));
  };

  const nextText = () => {
    setCurrentIndex((prevIndex) => (prevIndex === textItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='w-full  flex flex-col   '>
      <div className='bg-yellow-500 flex flex-col items-center justify-center flex-grow h-[600px] '
        style={{
          backgroundImage: `url('/lg.png')`, // Replace with your image path
          // backgroundSize:'',
          //backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 300px'
          // top:"102px"
        }}
      >
        {/* Navbar */}
        <div 
          className='w-[73%] bg-[#2b2a29] text-white flex items-center justify-center fixed top-0 z-50 p-5 md:px-8 hidden md:flex '
          style={{
            clipPath: 'polygon(0 0, 100% 0, 96% 100%, 3% 100%)',
            
          }}
        >
          <div className='flex space-x-4 p-0 font-sans gap-0 md:space-x-6 '>
            <Link href='#' className='hover:text-orange-500'>Best Sellers</Link>
            <Link href='#' className='hover:text-orange-500'>Gift Ideas</Link>
            <Link href='#' className='hover:text-orange-500'>New Releases</Link>
            <Link href='#' className='hover:text-orange-500'>Today's Deals</Link>
            <Link href='#' className='hover:text-orange-500'>Customer Service</Link>
          </div>
        </div>
        {/* heading */}
        <div className=' font-sans text-white text-6xl font-extrabold  absolute top-[91px]'
         style={{
          fontWeight:'1000px',
          
          
         }}
        >
          <h1 className=''>Eflyer</h1>
        </div>
        {/* Search bar and buttons */}
        <div className=' w-full flex flex-col items-center justify-center pt-16 px-4 md:px-8 '>
          {/* <div className=' absolute top-[190px] w-full max-w-4xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4 border border-solid md:justify-between '> */}
          <div className='absolute top-[190px] w-auto max-w-4xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 border border-solid md:justify-between'>  
            <FontAwesomeIcon icon={faBars} className='text-white text-[50px] font-extrabold'/>
            <button className='bg-[#30302e] text-white text-md rounded-md flex items-center px-3  h-[35px]'>
              
              All Category
              <FontAwesomeIcon icon={faChevronDown} className='mr-2' />
            </button>
            <div className='flex items-center bg-white rounded-md font-sans'>
              <input
                type="text"
                placeholder="Search This Blog"
                className="bg-white h-9 flex-grow rounded-md px-4 w-[383px]"
                
              />
              <button className="bg-orange-600 p-2 rounded ml-2">
                <FontAwesomeIcon icon={faSearch} className="text-white" />
              </button>
            </div>
            <button className='bg-white rounded-md text-black p-2 flex items-center text-sm'>
              <FontAwesomeIcon icon={faChevronDown} className='mr-2' />
              English
            </button>
            <Link href='#' className='text-white flex items-center ml-4'>
              <FontAwesomeIcon icon={faCartShopping} className='mr-2' />
              Cart
            </Link>
            <Link href='#' className='text-white flex items-center ml-4'>
              <FontAwesomeIcon icon={faUser} className='mr-2' />
              User
            </Link>
          </div>

          {/* Slider */}
          <div className='bg-transparent w-full max-w-4xl flex flex-col items-center p-8 relative top-14'>
            <div onClick={prevText} className='absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-gray-100 opacity-50 rounded-full cursor-pointer'>
              <FontAwesomeIcon icon={faChevronLeft} className='text-black' />
            </div>
            <div className='text-center w-full overflow-hidden'>
              <div className='transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {textItems.map((item, index) => (
                  <div key={index} className='text-3xl md:text-5xl font-bold mb-6 text-white flex-shrink-0 w-full'>
                    {item}
                  </div>
                ))}
                <button className='bg-[#2b2a29] text-white px-6 py-2 rounded-md'>BUY NOW</button>
              </div>
            </div>
            <div onClick={nextText} className='absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-gray-100 opacity-50 rounded-full cursor-pointer'>
              <FontAwesomeIcon icon={faChevronRight} className='text-black' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
