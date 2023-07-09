'use client';

import { useState } from 'react';

import { roboticsPricing } from '@/constants';

import PricingCard from './PricingCard';

const Pricing = () => {
  const [yearly, setYearly] = useState(true);
  return (
    <section className='bg-info'>
      <div className='section'>
        <h2 className='mb-5 text-2xl font-bold text-center sm:text-3xl text-primary'>
          Pricing plans for all your needs
        </h2>

        <p className='text-xl text-primary leading-7 max-w-[875px] mx-auto mb-3 text-center '>
          Unlock a world of knowledge at affordable prices with relearning.
          Access high-quality courses and resources without breaking the bank.
        </p>

        <div className='my-4'>
          {/* Pricing toggle */}
          <div className='flex justify-center max-w-[22rem] m-auto mb-8 lg:mb-16'>
            <div className='relative flex w-full px-5 py-3 rounded-full bg-accent'>
              <span
                className='absolute inset-0 m-1 pointer-events-none'
                aria-hidden='true'
              >
                <span
                  className={`absolute inset-0 w-1/2 bg-secondary rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                    yearly ? 'translate-x-0' : 'translate-x-full'
                  }`}
                ></span>
              </span>
              <button
                className={`relative flex-1 text-base font-bold h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out text-primary`}
                onClick={() => setYearly(true)}
              >
                Pay Full{' '}
                <span
                  className={`${yearly ? 'text-success' : 'text-secondary'}`}
                >
                  -20%
                </span>
              </button>
              <button
                className={`relative flex-1 text-base font-bold h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out text-primary`}
                onClick={() => setYearly(false)}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className='grid items-start max-w-sm gap-6 mx-auto lg:grid-cols-3 lg:max-w-6xl'>
            {roboticsPricing.map((item) => {
              return (
                <PricingCard
                  key={`${item.type.toUpperCase()}`}
                  {...item}
                  yearly={yearly}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
