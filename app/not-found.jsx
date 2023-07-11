import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Navbar, Footer } from '@components';

import Image from 'next/image';
const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <main className='container flex flex-col items-center justify-center gap-5 p-4 py-8 mx-auto mt-24 md:flex-row md:justify-around'>
        <article className='flex flex-col gap-3 text-center md:text-start'>
          <p className='flex justify-center px-5 py-2 mx-auto text-lg font-medium uppercase w-52 bg-primary text-secondary rounded-3xl md:mx-0'>
            Page Not Found
          </p>
          <h1 className='my-4 text-4xl font-bold leading-8 text-primary'>
            Looks like you&apos;ve found <br /> the doorway to the great nothing
          </h1>
          <p className='my-4 text-base text-primary'>
            Sorry about that! Please visit our hompage to get where you need to
            go.
          </p>

          <button
            type='submit'
            className='self-start px-6 py-3 font-medium transition duration-300 ease-in-out rounded shadow-xl hover:bg-gradient-to-l hover:px-8 bg-gradient-to-r from-blue-950 to-blue-900 text-secondary'
          >
            Take Me There
          </button>

          <div className='flex justify-center gap-5 my-6 md:justify-start text-primary'>
            <a
              href='https://www.facebook.com/profile.php?id=100094293221834'
              className='text-3xl transition-all duration-300 ease-out rounded-xl hover:scale-110'
              target='_blank'
              rel='noreferrer'
            >
              <BsFacebook />
            </a>
            <a
              href='https://www.instagram.com/relearn.school/'
              className='text-3xl transition-all duration-300 ease-out rounded-xl hover:scale-110'
              target='_blank'
              rel='noreferrer'
            >
              <BsInstagram />
            </a>
            <a
              href='https://twitter.com/Relearn_School'
              className='text-3xl transition-all duration-300 ease-out rounded-xl hover:scale-110'
              target='_blank'
              rel='noreferrer'
            >
              <BsTwitter />
            </a>
            <a
              href='https://www.youtube.com/channel/UCgM7A1X40ZJVTfsuSnHLuQg'
              className='text-3xl transition-all duration-300 ease-out rounded-xl hover:scale-110'
              target='_blank'
              rel='noreferrer'
            >
              <BsYoutube />
            </a>
          </div>
        </article>

        <article className='flex flex-col'>
          <Image
            src='/assets/images/error.webp'
            alt='waiting for mathematics'
            width={600}
            height={600}
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PageNotFound;
