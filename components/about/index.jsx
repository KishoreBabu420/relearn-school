import Image from 'next/image';
const About = () => {
  return (
    <section
      id='about'
      className=' bg-accent'
    >
      <div className='flex flex-col items-center justify-between section '>
        <h2 className='mb-5 text-2xl font-bold text-center sm:text-3xl text-primary'>
          Why <span className='text-secondary'>Relearn School</span>
        </h2>

        <p className='text-lg font-medium text-center text-primary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          rerum magnam nostrum at provident accusamus voluptatibus maxime
          tempora pariatur impedit!
        </p>
        <div className='grid gap-8 md:grid-cols-3 sm:grid-cols-1 place-items-center'>
          <article className='shadow-lg card bg-secondary text-primary'>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </article>
          <article className='shadow-lg card bg-secondary text-primary'>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </article>
          <article className='shadow-lg card bg-secondary text-primary'>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </article>
        </div>

        <button className='btn-custom btn-custom-main'>Know More</button>
      </div>
    </section>
  );
};

export default About;
