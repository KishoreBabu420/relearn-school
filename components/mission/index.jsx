import Image from 'next/image';
const Mission = () => {
  return (
    <section
      className='section'
      id='mission'
    >
      <h2 className='mb-5 text-2xl font-bold text-center sm:text-3xl text-primary'>
        Our Mission
      </h2>
      <div className='grid gap-8 md:grid-cols-2 place-items-center'>
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
          <button className='btn-custom btn-custom-main'>Know More</button>
        </div>
        <div>
          <Image
            src='/assets/images/mission.webp'
            alt='hero'
            width={616}
            height={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
