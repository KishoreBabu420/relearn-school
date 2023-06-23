import Image from 'next/image';

const Hero = () => {
  return (
    <header className='pt-[8rem] section text-primary'>
      <div className='items-center justify-center gap-10 md:flex'>
        <div>
          <div className='mb-4 text-xl font-bold text-secondary'>
            Robotics & AI Revolution
          </div>

          <div className='sm:text-[2.25rem] text-[1.875rem] font-extrabold text-primary my-4'>
            Get Future Ready Joining
            <br />
            Robotics & AI Revolution <br /> with Relearn School
          </div>
          <p className='max-w-xl text-[1rem] leading-7 text-primary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            hic quibusdam sit numquam dolor, suscipit dignissimos nulla
            consequuntur? Ea fugit repudiandae libero deleniti aliquam.
            Necessitatibus?
          </p>

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
