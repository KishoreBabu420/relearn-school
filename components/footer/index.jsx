'use client';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  return (
    <motion.footer
      initial={{ height: 0 }}
      whileInView={{ height: 'auto' }}
      transition={{ duration: 0.5 }}
      className='p-10 bg-primary '
    >
      <footer className='grid grid-cols-1 gap-8 text-white md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 place-items-start pb-7'>
        <div>
          <div className='mb-6 font-bold'>
            <a href='/'>
              <Image
                src='/assets/images/logo.webp'
                alt='relearn school logo'
                width={120}
                height={0}
                priority
              />
            </a>
          </div>
          <p className='text-sm leading-7'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque
            saepe cumque. Veritatis sunt commodi
          </p>
        </div>
        <div>
          <div className='mb-6 font-bold'>Courses</div>
          <div className='flex flex-col gap-4'>
            <a
              href='/robotics'
              className='text-sm hover:underline'
            >
              Robotics
            </a>
            <a
              href='/coding'
              className='text-sm hover:underline'
            >
              Coding
            </a>
            <a
              href='/mathematics'
              className='text-sm hover:underline'
            >
              Mathematics
            </a>
            <a
              href='science'
              className='text-sm hover:underline'
            >
              Science
            </a>
          </div>
        </div>
        <div>
          <div className='mb-6 font-bold'>Other Links</div>
          <div className='flex flex-col gap-4'>
            <a
              href='/privacy-policy'
              className='text-sm hover:underline'
            >
              Privacy Policy
            </a>
            <a
              href='/sitemap'
              className='text-sm hover:underline'
            >
              Sitemap
            </a>
            <a
              href='/careers'
              className='text-sm hover:underline'
            >
              Careers
            </a>
            <a
              href='/terms-and-conditions'
              className='text-sm hover:underline'
            >
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className='mb-6 font-bold'>Follow us</div>
          <div className='mb-4 text-sm'>skillexlearning@gmail.com</div>
          <div className='text-sm'>+959883271929</div>
          <div className='flex gap-4 mt-4'>
            <a
              href='https://www.facebook.com/profile.php?id=100094293221834'
              className='text-xl hover:scale-110'
              target='_blank'
              rel='noreferrer'
            >
              <BsFacebook />
            </a>
            <a
              href='https://www.instagram.com/relearn.school/'
              className='text-xl hover:scale-110'
              target='_blank'
              rel='noreferrer'
            >
              <BsInstagram />
            </a>
            <a
              href='https://twitter.com/Relearn_School'
              className='text-xl hover:scale-110'
              target='_blank'
              rel='noreferrer'
            >
              <BsTwitter />
            </a>
            <a
              href='https://www.youtube.com/channel/UCgM7A1X40ZJVTfsuSnHLuQg'
              className='text-xl hover:scale-110'
              target='_blank'
              rel='noreferrer'
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </footer>
    </motion.footer>
  );
};

export default Footer;
