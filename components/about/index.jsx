import { FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id='about'
      className=' bg-accent'
    >
      <div className='flex flex-col items-center justify-center gap-[1.5rem] section '>
        <h2 className='mb-5 text-2xl font-bold text-center sm:text-3xl text-primary underline underline-offset-[10px]'>
          Why Choose ReLearn School for Your Child?
        </h2>

        <div className='grid gap-6 my-4 md:grid-cols-3 sm:grid-cols-1 place-items-center'>
          <article className='shadow-lg card bg-secondary text-primary'>
            <div className='relative card-body'>
              <h3 className='text-xl card-title'>
                <FaChalkboardTeacher className='mr-2 text-4xl font-black' />
                Hands-On Learning
              </h3>
              <p className='mb-4 text-base leading-7 text-primary'>
                Our courses provide hands-on experiences that allow kids to
                apply theoretical concepts to real-world projects, enhancing
                their understanding and creativity.
              </p>
            </div>
          </article>
          <article className='shadow-lg card bg-secondary text-primary'>
            <div className='relative card-body'>
              <h3 className='text-xl card-title'>
                <FaChalkboardTeacher className='mr-2 text-4xl font-black' />
                Future Skills Development
              </h3>

              <p className='mb-4 text-base leading-7 text-primary'>
                Through robotics and coding, children develop critical skills
                such as problem-solving, logical thinking, teamwork, and
                adaptability—essential for success in the 21st century.
              </p>
            </div>
          </article>
          <article className='shadow-lg card bg-secondary text-primary'>
            <div className='relative card-body'>
              <h3 className='text-xl card-title'>
                <FaChalkboardTeacher className='mr-2 text-4xl font-black' />
                Personalized Approach
              </h3>

              <p className='mb-4 text-base leading-7 text-primary'>
                We understand that each child is unique, and our instructors
                tailor the learning experience to meet individual needs,
                ensuring optimal progress and engagement.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
