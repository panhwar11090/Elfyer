
'use client'

import React from 'react';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[250px] h-full bg-black text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
    >
      <div className='flex justify-between items-center p-4 border-gray-700 '>
        
        <button onClick={onClose} className='ml-auto'>
          <FontAwesomeIcon icon={faTimes} size='lg' className='text-white font-extrabold text-3xl' />
        </button>
      </div>
      <nav className='p-4'>
        <ul className=' space-y-8 mt-9 ml-8 font-sans text-xl '>
          <li>
            <Link href='#' className='hover:text-orange-500'>HOME</Link>
          </li>
          <li>
            <Link href='#' className='hover:text-orange-500'>FASHION</Link>
          </li>
          <li>
            <Link href='#' className='hover:text-orange-500'>ELECTRONICS</Link>
          </li>
          <li>
            <Link href='#' className='hover:text-orange-500'>JEWELLERY</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
