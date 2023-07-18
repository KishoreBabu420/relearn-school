'use client';

import React, { useState } from 'react';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
const Accordion = ({ id, question, answer }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className='pb-8'>
      <div className='flex items-center justify-between gap-5 p-6 bg-white rounded shadow'>
        <h4 className='text-base font-bold sm:text-lg text-primary'>
          {question}
        </h4>
        <BsFillArrowDownSquareFill
          className={`${
            id === activeIndex ? 'rotate-180' : 'rotate-0'
          } cursor-pointer transition-all duration-300 text-lg font-bold text-primary min-w-[1.5rem]`}
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
            className='p-5'
          >
            <h5 className='text-sm leading-7 md:text-lg text-primary'>
              {answer}
            </h5>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
