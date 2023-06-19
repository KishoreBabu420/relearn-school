import { accordions } from '@/constants/';
import Accordion from './accordion';
const FAQ = () => {
  return (
    <div
      className='section'
      id='teacher'
    >
      <h2 className='mb-5 text-2xl font-bold text-center sm:text-3xl text-primary'>
        Frequently <span className='text-Teal'>Asked Questions</span>
      </h2>
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

export default FAQ;
