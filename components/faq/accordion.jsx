'use client';

import React, { useState } from 'react';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className='pb-8'>
      <div className='flex items-center justify-between px-4 py-3 bg-white rounded shadow'>
        <div className='text-base font-bold sm:text-xl text-primary'>
          {title}
        </div>
        <BsFillArrowDownSquareFill
          className={`${
            id === activeIndex ? 'rotate-180' : 'rotate-0'
          } cursor-pointer transition-all duration-300 text-base font-bold sm:text-xl text-primary`}
          onClick={() => handleClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
            className='p-4'
          >
            <p className='text-base leading-7 md:text-xl text-primary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum
              beatae porro voluptatum aspernatur, id nesciunt reiciendis maxime
              unde necessitatibus illum accusamus mollitia incidunt qui nisi
              tempora facere magni magnam?
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
