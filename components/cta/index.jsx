'use client';
import Image from 'next/image';
import { useModalGlobalContext } from '@context/modal.context';

const CtaSection = () => {
  const { setIsModalOpen } = useModalGlobalContext();
  return (
    <section className=' bg-secondary section'>
      <div className='rounded-xl section bg-primary min-h-[30vh]'>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row '>
          <Image
            src='/assets/images/contact.webp'
            alt='check image'
            width={616}
            height={462}
            style={{ width: '100%', height: 'auto' }}
          />

          <div className='flex flex-col gap-8'>
            <h2 className='text-2xl font-bold text-center text-secondary md:text-4xl md:text-start '>
              Contact our team
            </h2>
            <p className='text-lg font-medium text-secondary md-text-base text-start'>
              Our comprehensive curriculum offers an immersive learning
              experience designed to empower young minds, starting from the
              basics and progressing to advanced concepts. Contact Us to unlock
              your Child&apos; potential to create, innovate, and shape the
              future of technology!
            </p>
            <ul
              role='list'
              className='grid grid-cols-2 text-lg leading-5 text-secondary gap-x-4 gap-y-8 md-text-base'
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
                Comprehensive Curriculum
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
                Engaging Lectures
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
                Project-Based Learning
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
                International Competitions
              </li>
            </ul>
            <div className='mt-5 text-center md:text-start'>
              <button
                onClick={() => setIsModalOpen(true)}
                className='btn-custom btn-custom-dark'
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
