import Image from 'next/image';

const Hero = () => {
  return (
    <header className='pt-[8rem] section text-primary'>
      <div className='items-center justify-center gap-10 md:flex'>
        <div>
          <span className='px-4 py-2 mb-4 text-xl font-black rounded-lg text-accent bg-primary'>
            Robotics & Coding
          </span>

          <h1 className='sm:text-[2rem] text-[1.75rem] font-extrabold text-primary my-4'>
            Make your Child Future Ready
            <br />
            Learning Robotics and Coding
            <br />
            with ReLearn School
          </h1>
          <h2 className='max-w-xl text-base leading-7 text-primary'>
            At Relearn School, we empower young minds to excel in cutting-edge
            technologies by equipping them with the skills and knowledge needed
            to thrive in tomorrow&apos;s world. Join the revolution and upskill
            your child to succeed in an ever-evolving world.
          </h2>

          <div className='flex gap-2 mt-6'>
            <button className='btn-custom btn-custom-main'>
              Book a Free Session
            </button>
            <button className='btn-custom btn-custom-outline'>
              Contact Us
            </button>
          </div>
        </div>
        <div className='md:w-[50%] mt-5 md:mt-0'>
          <Image
            src='/assets/images/hero.webp'
            alt='hero'
            width={640}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <p className='my-6 text-xl text-center'>
        We are accredited and recognized by top academic and IT institutions
      </p>
      <div className='flex flex-wrap items-center justify-center w-4/5 gap-8 px-5 mx-auto shadow-xl rounded-xl py-7 bg-info'>
        <div className='w-48'>
          <Image
            src='https://res.cloudinary.com/skill-safari/image/upload/v1683791598/nasscom_d2dfl8_hfbyq0.webp'
            alt='partner'
            width={144}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            className='rounded-lg shadow-lg'
          />
        </div>
        <div className='w-48'>
          <Image
            src='https://res.cloudinary.com/skill-safari/image/upload/v1683791598/nasscom_d2dfl8_hfbyq0.webp'
            alt='partner'
            width={144}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className='w-48'>
          <Image
            src='https://res.cloudinary.com/skill-safari/image/upload/v1683791598/nasscom_d2dfl8_hfbyq0.webp'
            alt='partner'
            width={144}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className='w-48'>
          <Image
            src='https://res.cloudinary.com/skill-safari/image/upload/v1683791598/nasscom_d2dfl8_hfbyq0.webp'
            alt='partner'
            width={144}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
