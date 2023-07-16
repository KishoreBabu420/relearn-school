import Image from 'next/image';

const CtaSection = () => {
  return (
    <section className='p-8 md:p-12 bg-secondary'>
      <div className='rounded-xl section bg-primary min-h-[20vh]'>
        <div className='flex flex-col md:flex-row items-center gap-8 justify-center '>
          <Image
            src='/assets/images/mission.webp'
            alt='check image'
            width={525}
            height={300}
          />
          <div className='flex flex-col gap-8'>
            <h2 className='text-secondary font-bold text-2xl md:text-4xl text-center md:text-start '>
              Contact our team
            </h2>
            <p className='text-secondary font-medium md-text-base text-lg text-center md:text-start'>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
            <ul
              role='list'
              className='grid grid-cols-2 leading-5 text-secondary gap-x-4 gap-y-8 md-text-base text-lg'
            >
              <li className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='h-[1.25rem] w-[1.25rem]'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Competitive salaries
              </li>
              <li className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='h-[1.25rem] w-[1.25rem]'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Competitive salaries
              </li>
              <li className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='h-[1.25rem] w-[1.25rem]'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Competitive salaries
              </li>
              <li className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='h-[1.25rem] w-[1.25rem]'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Competitive salaries
              </li>
            </ul>
            <div className='text-center md:text-start mt-5'>
              <a
                href='#'
                className='btn-custom btn-custom-dark'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
