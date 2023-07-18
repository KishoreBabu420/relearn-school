'use client';
import { useState } from 'react';
import Image from 'next/image';
import { HiMenuAlt1, HiX } from 'react-icons/hi';

import MobileNavLinks from './MobileNavLinks';
import NavLink from './NavLink';

import { useModalGlobalContext } from '@context/modal.context';

import { navLinks } from '@/constants';
import { Form } from '@components';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { setIsModalOpen } = useModalGlobalContext();
  return (
    <nav className='fixed top-0 left-0 z-50 w-full shadow bg-secondary'>
      <div>
        <div className='container flex items-center justify-between px-2 py-4 mx-auto'>
          <div className='flex items-center gap-4'>
            <HiMenuAlt1
              className='text-3xl cursor-pointer sm:hidden text-primary'
              onClick={() => setToggle(true)}
            />
            <a
              href='/'
              className='w-[120px]'
            >
              <Image
                src='/assets/images/relearn.webp'
                alt='relearn school logo'
                style={{ width: '100%', height: 'auto' }}
                width={120}
                height={0}
                priority
              />
            </a>
          </div>
          <ul className='items-center hidden sm:flex'>
            {navLinks.map((navLink) => {
              return (
                <NavLink
                  key={navLink.id}
                  {...navLink}
                />
              );
            })}
          </ul>
          <button
            className='btn-custom btn-custom-main'
            onClick={() => setIsModalOpen(true)}
          >
            Book a Free Session
          </button>
          {toggle && (
            <ul className='fixed top-0 left-0 z-20 flex flex-col items-center justify-center h-full py-8 text-white transition-all duration-300 shadow-lg w-60 bg-primary gap-9'>
              {navLinks.map((navLink) => (
                <MobileNavLinks
                  key={navLink.id}
                  {...navLink}
                  setToggle={setToggle}
                />
              ))}

              <HiX
                className='absolute text-3xl cursor-pointer right-12 top-12 '
                onClick={(prev) => setToggle(!prev)}
              />
            </ul>
          )}
        </div>
      </div>
      <Form />
    </nav>
  );
};

export default Navbar;
