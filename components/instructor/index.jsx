import { accordions } from '@/constants/';
import Accordion from './accordion';
const Instructor = () => {
  return (
    <div
      className='section'
      id='teacher'
    >
      <div className='grid gap-8 sm:grid-cols-2 place-items-center'>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            Become <span className='text-Teal'>An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className='mb-5 text-sm leading-7 text-gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className='px-4 py-3 text-sm font-bold text-white rounded-lg bg-Teal '>
            Start Teaching
          </button>
        </div>
        <div className='p-4 md:w-3/4 sm:row-start-1'>
          {/* <img
            src={teacher1}
            alt=''
          /> */}
        </div>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            Become <span className='text-Teal'>An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className='mb-5 text-sm leading-7 text-gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className='px-4 py-3 text-sm font-bold text-white rounded-lg bg-Teal '>
            Get Started
          </button>
        </div>
        <div className='p-4 md:w-3/4'>
          {/* <img
            src={teacher2}
            alt=''
          /> */}
        </div>
      </div>
      <div className='text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]'>
        Frequently <span className='text-Teal'>Asked Questions</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map((accordion) => {
          return (
            <Accordion
              key={accordion.id}
              {...accordion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Instructor;
