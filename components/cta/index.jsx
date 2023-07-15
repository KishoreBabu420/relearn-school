import Image from 'next/image';

const CtaSection = () => {
  return (
    <section className='px-12 py-8 bg-secondary'>
      <div className='rounded-xl section bg-primary'>
        <div class='flex items-center gap-8 justify-between'>
          <Image
            src='/assets/images/mission.webp'
            alt='check image'
            width={800}
            height={300}
          />
          <div class='flex flex-col gap-8'>
            <h2 class='text-secondary font-bold text-4xl'>Contact our team</h2>
            <p class='text-secondary font-medium text-lg'>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
            <ul
              role='list'
              class='grid grid-cols-2 leading-5 text-secondary gap-5 '
            >
              <li class='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  class='h-[1.25rem] w-[1.25rem]'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                Competitive salaries
              </li>
              <li class='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  class='h-[1.25rem] w-[1.25rem]'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                Competitive salaries
              </li>
              <li class='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  class='h-[1.25rem] w-[1.25rem]'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                Competitive salaries
              </li>
              <li class='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  class='h-[1.25rem] w-[1.25rem]'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                Competitive salaries
              </li>
            </ul>
            <div class=''>
              <a
                href='#'
                class=''
              >
                See our job postings <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
