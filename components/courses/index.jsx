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
          <h2 className='mb-5 text-2xl font-bold md:text-4xl text-primary underline underline-offset-[10px]'>
            Explore Our Exciting Courses
          </h2>
          <p className='mx-auto text-base leading-7 text-primary '>
            Our comprehensive range of courses introduces children to the world
            of robotics and coding in a fun and interactive way. Whether they
            are beginners or have some prior experience, our expert instructors
            guide students through progressive lessons that encourage
            exploration, innovation, and teamwork. From building robots to
            programming games, our courses offer a wide variety of exciting
            projects to challenge and inspire young minds.
          </p>
        </div>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          className='grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 place-content-stretch'
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
