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
      className='section'
      id='courses'
    >
      <div className='text-center'>
        <h2 className='mb-5 text-2xl font-bold sm:text-3xl text-primary'>
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
        className='grid gap-8 mt-12 md:grid-cols-4 sm:grid-cols-2'
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
    </section>
  );
};

export default CoursesSection;
