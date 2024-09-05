import Link from 'next/link';
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full bg-[#2b2a29] flex flex-col items-center justify-center h-[400px] p-72'>
        {/* <div className=' flex text-white justify-start  font-sans text-5xl border border-solid p-5 top-[80px] h-16 '>
            <h1>Eflyer</h1>
        </div> */}
        <div className='w-full flex justify-center items-center border-b-2 '>
            <input
              type='text'
              className='w-full rounded-l p-2 bg-transparent text-white focus:border-transparent focus:outline-none'
              placeholder='Your Email'
              
            />
            <button className='text-orange-600 bg-transparent'>Subscribe</button>
        </div>
        <div className='w-full flex justify-center items-center mt-6 text-white md:flex-row custom:hidden'>
            <div className='flex flex-wrap space-x-0 md:space-x-10 space-y-4 md:space-y-0'>
            <Link href='#' className='hover:text-orange-500'>Best Sellers</Link>
            <Link href='#' className='hover:text-orange-500'>Gift Ideas</Link>
            <Link href='#' className='hover:text-orange-500'>New Releases</Link>
            <Link href='#' className='hover:text-orange-500'>Today's Deals</Link>
            <Link href='#' className='hover:text-orange-500'>Customer Service</Link>
            </div>
        </div>
        <div className='w-full flex justify-center items-center mt-6 text-white md:flex-row'>
            <p>Help Line Number : +1 1800 1200 1200</p>
        </div>

        <div className='w-full flex justify-center items-center   text-white md:flex-row  '>
            <p>© 2020 All Rights Reserved. Design by Free html Templates</p>
        </div>
    </div>
  )
}

export default Footer;