import Image from 'next/image';

const Hero = () => {
  return (
    <header className='pt-[8rem] section text-primary'>
      <div className='items-center justify-center gap-10 md:flex'>
        <div>
          <div className='mb-4 text-xl font-bold text-secondary'>
            Robotics & AI Revolution
          </div>

          <div className='sm:text-[2.25rem] text-[1.875rem] font-extrabold text-primary'>
            Make your Child Future Ready
            <br />
            Joining Robotics & AI Revolution <br /> with Relearn School
          </div>
          <p className='max-w-xl text-[1rem] leading-7 text-primary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            hic quibusdam sit numquam dolor, suscipit dignissimos nulla
            consequuntur? Ea fugit repudiandae libero deleniti aliquam.
            Necessitatibus?
          </p>

          <div className='mt-6'>
            <button className='px-6 py-3 mr-4 text-sm font-bold text-white rounded-lg bg-primary'>
              Book a Free Session
            </button>
            <button className='px-6 py-3 text-sm font-bold border border-solid rounded-lg border-primary'>
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
      <p className='my-4 text-xl text-center'>
        We are accredited and recognized by top academic and IT institutions
      </p>
      <div className='flex flex-wrap items-center justify-center gap-8 p-2'>
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
