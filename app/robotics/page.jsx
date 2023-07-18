import Image from 'next/image';
import { Pricing, CtaSection, Faq } from '@components';
import { roboticsAccordions } from '@/constants/';
const Robotics = () => {
  return (
    <>
      <main className='container flex flex-col items-center justify-center gap-5 p-4 py-6 mx-auto mt-20 md:flex-row md:justify-around'>
        <article className='flex flex-col gap-3 text-center md:text-start'>
          <span className='px-4 py-2 mb-4 text-xl font-black text-center rounded-lg w-36 text-accent bg-primary'>
            Robotics
          </span>
          <h1 className='my-4 text-3xl font-black md:text-5xl md:leading-[4rem] text-primary'>
            ReLearn School <br /> Robotics Junior
          </h1>
          <p className='my-4 text-base font-bold md:text-xl text-primary'>
            Ages 6 - 8 &nbsp; | &nbsp; 2 Days a Week &nbsp; | &nbsp; 12 Months
            &nbsp;
          </p>
          <div className='flex gap-2 mx-auto mt-6 md:mx-0'>
            <button className='px-5 text-xl font-bold btn-custom btn-custom-main'>
              Contact Us
            </button>
          </div>
        </article>

        <article className='flex flex-col'>
          <Image
            src='/assets/images/robo-hero.webp'
            alt='Learn Robotics in Coimbatore'
            width={500}
            height={500}
          />
        </article>
      </main>

      <section
        className=' bg-info'
        id='mission'
      >
        <div className='section'>
          <h2 className='mb-5 text-2xl font-bold text-center md:leading-[4rem] md:text-4xl text-primary'>
            Explore our Robotics <br /> Junior Curriculum
          </h2>
          <hr />
          <article className='grid gap-8 my-4 md:grid-cols-2 place-items-center'>
            <div>
              <h3 className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-primary text-center md:text-start'>
                Electrify Your Curiosity: Discover the Wonders of Basic
                Electronics!
              </h3>
              <div className='block md:hidden'>
                <Image
                  src='/assets/images/robo-electronics.webp'
                  alt='hero'
                  width={616}
                  height={0}
                />
              </div>
              <p className='mb-4 text-base leading-7 text-primary'>
                Spark your interest in circuits, resistors, LEDs, and more! Join
                our immersive Basic Electronics sessions to unveil the secrets
                of electricity, dive into circuitry, and develop essential
                soldering skills. Unleash your potential as you explore power
                sources, decipher voltage, and delve into the captivating realm
                of motors and motor control. Get ready to illuminate your path
                to robotics mastery!
              </p>
            </div>
            <div className='hidden md:block'>
              <Image
                src='/assets/images/robo-electronics.webp'
                alt='hero'
                width={616}
                height={0}
              />
            </div>
          </article>
          <hr />
          <article className='grid gap-8 my-4 md:grid-cols-2 place-items-center'>
            <div className='hidden md:block'>
              <Image
                src='/assets/images/robo-mechanics.webp'
                alt='hero'
                width={616}
                height={0}
              />
            </div>
            <div>
              <h3 className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-primary text-center md:text-start'>
                Master the Mechanics: Unleash the Power of Robotics Structures!
              </h3>
              <div className='block md:hidden'>
                <Image
                  src='/assets/images/robo-mechanics.webp'
                  alt='hero'
                  width={616}
                  height={0}
                />
              </div>
              <p className='mb-4 text-base leading-7 text-primary'>
                Discover the building blocks of robotics as you unravel the
                secrets of mechanical systems and principles. Dive into a world
                of gears, pulleys, and levers, and witness the magic of simple
                mechanisms and linkages come to life. Embark on an exciting
                journey of creation as you learn the art of 3D modeling and
                printing, unlocking endless possibilities to design and
                fabricate robot parts. Get ready to engineer the future, one
                gear at a time!
              </p>
            </div>
          </article>
          <hr />
          <article className='grid gap-8 my-4 md:grid-cols-2 place-items-center'>
            <div>
              <h3 className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-primary text-center md:text-start'>
                Unleash the Power of Perception: Exploring Sensors and Actuators
                in Robotics!
              </h3>
              <div className='block md:hidden'>
                <Image
                  src='/assets/images/robo-sensors.webp'
                  alt='hero'
                  width={616}
                  height={0}
                />
              </div>
              <p className='mb-4 text-base leading-7 text-primary'>
                Embark on a sensorial adventure as you dive into the realm of
                robotics perception. Discover the fascinating world of light,
                touch, sound, and distance sensors, and unlock the potential to
                interface them with micro controllers. Unleash the power of
                control as you delve into motors, servos, and solenoids,
                breathing life into your robotic creations. Witness the magic of
                sensor fusion and integration as your robots gain enhanced
                perception and interact with the world around them. Get ready to
                revolutionize the way your robots sense and act!
              </p>
            </div>
            <div className='hidden md:block'>
              <Image
                src='/assets/images/robo-sensors.webp'
                alt='hero'
                width={616}
                height={0}
              />
            </div>
          </article>
        </div>
      </section>

      <section className='w-9/12 p-5 mx-auto'>
        <div className='container p-5'>
          <Image
            src='/assets/images/robotics_roadmap.png'
            className='mx-auto'
            alt='junior engineer'
            width={1200}
            height={600}
          />
        </div>
      </section>

      <Pricing />
      <CtaSection />
      <Faq accordions={roboticsAccordions} />
    </>
  );
};

export default Robotics;
