import Image from 'next/image';
const Mission = () => {
  return (
    <section
      className='section'
      id='mission'
    >
      <h2 className='mb-5 text-2xl font-bold text-center underline md:text-4xl text-primary underline-offset-[10px]'>
        Our Mission
      </h2>
      <div className='grid gap-8 md:grid-cols-2 place-items-center'>
        <div>
          <Image
            src='/assets/images/mission.webp'
            alt='hero'
            width={616}
            height={0}
          />
        </div>
        <div>
          <h3 className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-primary'>
            Empowering Young Minds <br /> For the Future
          </h3>
          <p className='mb-4 text-base leading-7 text-primary'>
            We believe in the power of technology education to shape the future.
            With our expertise in education Industry, we aim to provide a
            stimulating and engaging learning environment for your kids. Our
            carefully crafted courses blend theoretical knowledge with practical
            projects, enabling children to explore their interests and develop
            essential skills for the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
