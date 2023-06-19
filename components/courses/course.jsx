'use client';
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';

const Course = ({ image, category, title }) => {
  return (
    <div className='p-2 shadow-lg min-w-[15rem] bg-white rounded-md'>
      {/* <img
        src={image}
        alt=''
      /> */}
      <div className='mt-2 text-xs text-accent'>{category}</div>
      <h4 className='mt-2 text-sm font-bold text-primary'>{title}</h4>
    </div>
  );
};

export default Course;
