'use client';

import { useState } from 'react';

const Pricing = () => {
  const [yearly, setYearly] = useState(true);
  return (
    <section className='section'>
      <h2 className='mb-5 text-2xl font-bold text-center sm:text-3xl text-primary'>
        Pricing plans for all your needs
      </h2>

      <p className='text-xl text-primary leading-7 max-w-[875px] mx-auto mb-3 text-center '>
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>

      <div className='my-4'>
        {/* Pricing toggle */}
        <div className='flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16'>
          <div className='relative flex w-full p-1 bg-white rounded-full dark:bg-primary'>
            <span
              className='absolute inset-0 m-1 pointer-events-none'
              aria-hidden='true'
            >
              <span
                className={`absolute inset-0 w-1/2 bg-accent rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                  yearly ? 'translate-x-0' : 'translate-x-full'
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-bold h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                yearly ? 'text-white' : 'text-slate-500 dark:text-slate-400'
              }`}
              onClick={() => setYearly(true)}
            >
              Yearly{' '}
              <span
                className={`${
                  yearly
                    ? 'text-indigo-800'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                -20%
              </span>
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                yearly ? 'text-slate-500 dark:text-slate-400' : 'text-white'
              }`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className='grid items-start max-w-sm gap-6 mx-auto lg:grid-cols-3 lg:max-w-none'>
          {/* Pricing tab 1 */}
          <div className='h-full'>
            <div className='relative flex flex-col h-full p-6 bg-white border shadow rounded-2xl dark:bg-slate-900 border-slate-200 dark:border-slate-900 shadow-slate-950/5'>
              <div className='mb-5'>
                <div className='mb-1 font-semibold text-slate-900 dark:text-slate-200'>
                  Essential
                </div>
                <div className='inline-flex items-baseline mb-2'>
                  <span className='text-3xl font-bold text-slate-900 dark:text-slate-200'>
                    $
                  </span>
                  <span className='text-4xl font-bold text-slate-900 dark:text-slate-200'>
                    {yearly ? '29' : '35'}
                  </span>
                  <span className='font-medium text-slate-500'>/mo</span>
                </div>
                <div className='mb-5 text-sm text-slate-500'>
                  There are many variations available, but the majority have
                  suffered.
                </div>
                <a
                  className='w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150'
                  href='#0'
                >
                  Purchase Plan
                </a>
              </div>
              <div className='mb-3 font-medium text-slate-900 dark:text-slate-200'>
                Includes:
              </div>
              <ul className='space-y-3 text-sm text-slate-600 dark:text-slate-400 grow'>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Unlimited placeholder texts</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pricing tab 2 */}
          <div className='h-full dark'>
            <div className='relative flex flex-col h-full p-6 bg-white border shadow rounded-2xl dark:bg-slate-900 border-slate-200 dark:border-slate-900 shadow-slate-950/5'>
              <div className='absolute top-0 right-0 mr-6 -mt-4'>
                <div className='inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5'>
                  Most Popular
                </div>
              </div>
              <div className='mb-5'>
                <div className='mb-1 font-semibold text-slate-900 dark:text-slate-200'>
                  Perform
                </div>
                <div className='inline-flex items-baseline mb-2'>
                  <span className='text-3xl font-bold text-slate-900 dark:text-slate-200'>
                    $
                  </span>
                  <span className='text-4xl font-bold text-slate-900 dark:text-slate-200'>
                    {yearly ? '49' : '55'}
                  </span>
                  <span className='font-medium text-slate-500'>/mo</span>
                </div>
                <div className='mb-5 text-sm text-slate-500'>
                  There are many variations available, but the majority have
                  suffered.
                </div>
                <a
                  className='w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150'
                  href='#0'
                >
                  Purchase Plan
                </a>
              </div>
              <div className='mb-3 font-medium text-slate-900 dark:text-slate-200'>
                Includes:
              </div>
              <ul className='space-y-3 text-sm text-slate-600 dark:text-slate-400 grow'>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Unlimited placeholder texts</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Predefined chunks as necessary</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pricing tab 3 */}
          <div className='h-full'>
            <div className='relative flex flex-col h-full p-6 bg-white border shadow rounded-2xl dark:bg-slate-900 border-slate-200 dark:border-slate-900 shadow-slate-950/5'>
              <div className='mb-5'>
                <div className='mb-1 font-semibold text-slate-900 dark:text-slate-200'>
                  Enterprise
                </div>
                <div className='inline-flex items-baseline mb-2'>
                  <span className='text-3xl font-bold text-slate-900 dark:text-slate-200'>
                    $
                  </span>
                  <span className='text-4xl font-bold text-slate-900 dark:text-slate-200'>
                    {yearly ? '79' : '85'}
                  </span>
                  <span className='font-medium text-slate-500'>/mo</span>
                </div>
                <div className='mb-5 text-sm text-slate-500'>
                  There are many variations available, but the majority have
                  suffered.
                </div>
                <a
                  className='w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150'
                  href='#0'
                >
                  Purchase Plan
                </a>
              </div>
              <div className='mb-3 font-medium text-slate-900 dark:text-slate-200'>
                Includes:
              </div>
              <ul className='space-y-3 text-sm text-slate-600 dark:text-slate-400 grow'>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Unlimited placeholder texts</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Predefined chunks as necessary</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-3 h-3 mr-3 fill-emerald-500 shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>Free from repetition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;