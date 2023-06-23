'use client';

import { categories } from '@/constants/';
import Categories from './categories';
import { motion } from 'framer-motion';

const CoursesSection = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section
      className='bg-info'
      id='courses'
    >
      <div className='mx-auto section'>
        <div className='mb-[8rem] text-center'>
          <h2 className='mb-4 text-2xl font-bold sm:text-3xl text-primary'>
            Our Top <span className='text-accent'>Courses</span>
          </h2>
          <p className='text-xl text-primary leading-7 max-w-[875px] mx-auto '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            tempora illo laborum ex cupiditate tenetur doloribus non velit atque
            amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
            sit! Lorem ipsum dolor sit amet.
          </p>
        </div>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          className='grid gap-8 mt-[8rem] md:grid-cols-3 sm:grid-cols-1'
        >
          {categories.map((category) => {
            return (
              <Categories
                key={category.id}
                {...category}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
