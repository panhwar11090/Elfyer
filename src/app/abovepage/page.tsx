
// 'use client'
// import React from 'react'
// import lg from '../../../public/lg.png'
// import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch, faCartShopping, faChevronDown, faUser, faBars, faChevronRight, faChevronLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react'
// import SideBar from '../Sidebar/page'
// const AbovePage = () => {

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const textItems = ["GET STARTED", "YOUR FAVORITE SHOPPING"];

//   const prevText = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? textItems.length - 1 : prevIndex - 1));
//   };

//   const nextText = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === textItems.length - 1 ? 0 : prevIndex + 1));
//   };

//   const handleSidebar=  () =>{
//       <SideBar/>
//   }
  


//   return (
//     <div className='w-full flex flex-col'>
//       <div className=' h-[600px] bg-yellow-500 grid items-center justify-center'
//         style={{
//           backgroundImage: `url('/lg.png')`, // Replace with your image path
//           // backgroundSize:'',
//           //backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center 300px'
//           // top:"102px"
//         }}
//       >
//         <div className='font-sans p-5 bg-[#2b2a29] text-white w-[73%] md:flex items-center justify-center absolute top-0 custom:hidden'
//           style={{
//             clipPath: 'polygon(0 0, 100% 0, 96% 100%, 3% 100%)',
//             left:'14%'
//           }}
//         >
//           <div className='flex sm:space-x-5  '>
//             <Link href='#' className='hover:text-orange-500'>Best Sellers</Link>
//             <Link href='#' className='hover:text-orange-500'>Gift Ideas</Link>
//             <Link href='#' className='hover:text-orange-500'>New Releases</Link>
//             <Link href='#' className='hover:text-orange-500'>Today's Deals</Link>
//             <Link href='#' className='hover:text-orange-500'>Customer Service</Link>
//           </div>
        
//         </div>
//         {/* <div className='top-0 p-1 w-[10%] font-sans text-white text-5xl font-extrabold flex absolute md:top-[80px] sm:left-[44%] sm:items-center sm:justify-center  custom:flex custom:items-center custom:justify-center custom:absolute custom:left[44%] custom:top[7%]'>
//           <h1 className='text-center items-center justify-center'>Eflyer</h1>
//         </div> */}
//         <div className='w-[10%] font-sans text-white text-5xl font-extrabold flex items-center justify-center top-[80px] absolute left-[44%]'>
//           <h1 className='text-center items-center justify-center'>Eflyer</h1>
//         </div>
//         {/* <div className='border border-solid w-full'>search and buttons</div> */}
//         <div className='relative top-[80px]  w-full max-w-screen-lg px-8 mx-auto items-center justify-center gap-6 h-12 bg-transparent grid sm:grid-cols-12 custom:flex custom:items-center'>
//           {/* Hamburger Menu */}
//           <span className='col-span-1 flex items-center justify-center left-0 custom:absolute custom:left-[62px] ' >
//            <FontAwesomeIcon icon={faBars} size='lg' onClick={handleSidebar} className='text-[50px] font-semibold text-white  custom:text-[30px]'/>
//           </span>

//           <div className='custom:hidden lg:col-span-1 p-1 ' 
             
//           >
//             <select className='text-white bg-[#2b2a29] sm:p-2 sm:rounded-md sm:gap-5 '>
//               <option>All Categgory</option>
//               <option>Action</option>
//               <option value="">Another Action</option>
//             </select>
//           </div>

//           <div className='col-span-7  flex ml-20 relative h-10'
//            style={{paddingBottom:'2px', paddingLeft:'6px'}}
//           >
//             <input
//               type='text'
//               className='w-full rounded-l p-2'
//               placeholder='Search this blog'
              
//             />
//             <button className='bg-orange-500 p-3 rounded-r w-10'>
//               <FontAwesomeIcon icon={faSearch} className='text-white' />
//             </button>
//           </div>
          
            
          

//           <div className=' col-span-1 '>
//             <select className='text-black bg-white p-2 rounded-md '>
              
//               <option>ENGLISH</option>
//               <option>FR</option>
//               <option>ES</option>
//             </select>
            
//           </div>

//           <div className='custom:hidden lg:col-span-1 flex justify-between ml-20 '>
//             <Link href='#' className='gap-2'>
//              <FontAwesomeIcon icon={faCartShopping}/>
//              Cart
//             </Link>
//             <Link href='#' className='gap-2 ml-10'>
//              <FontAwesomeIcon icon={faUser}/>
//              User
//             </Link>
//           </div>
//         </div>
//         {/* <div className='border border-solid w-full'>iamges and left right seaction</div> */}
//         <div className=' bg-transparent w-full max-w-4xl flex flex-col items-center p-8 relative top-14'>
//             <div onClick={prevText} className='absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-gray-100 opacity-50 rounded-full cursor-pointer'>
//               <FontAwesomeIcon icon={faChevronLeft} className='text-black' />
//             </div>
//             <div className='text-center w-full overflow-hidden'>
//               <div className='transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {textItems.map((item, index) => (
//                   <div key={index} className='text-3xl md:text-5xl font-bold mb-6 text-white flex-shrink-0 w-full'>
//                     {item}
//                   </div>
//                 ))}
//                 <button className='bg-[#2b2a29] text-white px-6 py-2 rounded-md'>BUY NOW</button>
//               </div>
//             </div>
//             <div onClick={nextText} className='absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-gray-100 opacity-50 rounded-full cursor-pointer'>
//               <FontAwesomeIcon icon={faChevronRight} className='text-black' />
//             </div>
//           </div>

//       </div>
//     </div>
//   )
// }

// export default AbovePage


// components/AbovePage.tsx
'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faUser, faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Sidebar from '../Sidebar/page';

const AbovePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const textItems = ["GET STARTED", "YOUR FAVORITE SHOPPING"];

  const prevText = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? textItems.length - 1 : prevIndex - 1));
  };

  const nextText = () => {
    setCurrentIndex((prevIndex) => (prevIndex === textItems.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='w-full flex flex-col'>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      <div className='h-[600px] bg-yellow-500 grid items-center justify-center'
        style={{
          backgroundImage: `url('/lg.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 300px'
        }}
      >
        <div className='font-sans p-5 bg-[#2b2a29] text-white w-[73%] md:flex items-center justify-center absolute top-0 custom:hidden'
          style={{
            clipPath: 'polygon(0 0, 100% 0, 96% 100%, 3% 100%)',
            left:'14%'
          }}
        >
          <div className='flex sm:space-x-5'>
            <Link href='#' className='hover:text-orange-500'>Best Sellers</Link>
            <Link href='#' className='hover:text-orange-500'>Gift Ideas</Link>
            <Link href='#' className='hover:text-orange-500'>New Releases</Link>
            <Link href='#' className='hover:text-orange-500'>Today's Deals</Link>
            <Link href='#' className='hover:text-orange-500'>Customer Service</Link>
          </div>
        </div>

        <div className='w-[10%] font-sans text-white text-5xl font-extrabold flex items-center justify-center top-[80px] absolute left-[44%]'>
          <h1 className='text-center items-center justify-center'>Eflyer</h1>
        </div>

        <div className='relative top-[80px] w-full max-w-screen-lg px-8 mx-auto items-center justify-center gap-6 h-12 bg-transparent grid sm:grid-cols-12 custom:flex custom:items-center'>
          <span className='col-span-1 flex items-center justify-center left-0 custom:absolute custom:left-[62px]'>
            <FontAwesomeIcon icon={faBars} size='lg' onClick={toggleSidebar} className='text-[50px] font-semibold text-white custom:text-[30px]'/>
          </span>

          <div className='custom:hidden lg:col-span-1 p-1'>
            <select className='text-white bg-[#2b2a29] sm:p-2 sm:rounded-md sm:gap-5'>
              <option>All Categories</option>
              <option>Action</option>
              <option value="">Another Action</option>
            </select>
          </div>

          <div className='col-span-7 flex ml-20 relative h-10' style={{ paddingBottom: '2px', paddingLeft: '6px' }}>
            <input
              type='text'
              className='w-full rounded-l p-2'
              placeholder='Search this blog'
            />
            <button className='bg-orange-500 p-3 rounded-r w-10'>
              <FontAwesomeIcon icon={faSearch} className='text-white' />
            </button>
          </div>

          <div className='col-span-1'>
            <select className='text-black bg-white p-2 rounded-md'>
              <option>ENGLISH</option>
              <option>FR</option>
              <option>ES</option>
            </select>
          </div>

          <div className='custom:hidden lg:col-span-1 flex justify-between ml-20 text-white'>
            <Link href='#' className='gap-2 hover:text-orange-500'>
              <FontAwesomeIcon icon={faCartShopping}/>
              Cart
            </Link>
            <Link href='#' className='gap-2 ml-10 hover:text-orange-500'>
              <FontAwesomeIcon icon={faUser}/>
              User
            </Link>
          </div>
        </div>

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
  )
}

export default AbovePage;
