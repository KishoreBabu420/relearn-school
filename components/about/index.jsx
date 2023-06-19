import Image from 'next/image';
const About = () => {
  return (
    <section
      className='section'
      id='about'
    >
      <h2 className='mb-5 text-2xl font-bold text-center sm:text-3xl text-primary'>
        Why <span className='text-accent'>Relearn School</span>
      </h2>
      <div className='grid gap-8 md:grid-cols-2 place-items-center'>
        <div className='border-[3px] border-solid border-accent rounded-lg'>
          <Image
            src='/assets/images/hero.jpg'
            alt='hero'
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-primary'>
            We provide the <br /> best
            <span className='text-accent'> learning Experience</span>
          </div>
          <p className='mb-4 text-sm leading-7 text-primary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
            eum, explicabo quos eos magni vel corporis voluptatibus, inventore
            doloremque aliquam pariatur recusandae.
          </p>
          <button className='px-6 py-3 text-sm font-bold border border-solid rounded-lg border-primary text-primary'>
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
