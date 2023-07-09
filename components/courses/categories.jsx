'use client';
import { motion } from 'framer-motion';

import Image from 'next/image';

import Link from 'next/link';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Categories = ({ image, category, description }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <article className='flex flex-col items-center gap-4 p-8 bg-white border-2 border-solid rounded-md border-accent mt-[5rem] md:mt-[2rem]'>
      <div className='w-48 h-48 -mt-[8rem] relative'>
        <Image
          src={image}
          alt={category}
          width={192}
          height={192}
          className='absolute object-cover overflow-hidden border-[5px]  border-secondary rounded-full shadow-xl top-[50%] right-[50%] h-[100%] w-auto translate-x-[50%] -translate-y-[50%]'
        />
      </div>
      <h3 className='self-start my-4 text-2xl font-semibold text-primary'>
        {category}
      </h3>

      <p className='text-base font-normal text-primary'>{description}</p>
      <Link
        href='/'
        className='flex items-center self-start justify-center gap-2 text-secondary btn-custom btn-custom-secondary group'
      >
        View More{'  '}
        <BsFillArrowRightCircleFill className='invisible transition-all duration-500 ease-in-out -translate-x-4 group-hover:visible group-hover:translate-x-0' />
      </Link>
    </article>
  );
};

export default Categories;
