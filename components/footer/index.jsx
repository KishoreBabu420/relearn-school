'use client';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ height: 0 }}
      whileInView={{ height: 'auto' }}
      transition={{ duration: 1 }}
      className='p-10 bg-primary '
    >
      <div className='grid grid-cols-1 gap-8 text-white md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 place-items-start'>
        <div>
          <div className='mb-6 font-bold'>Get Started</div>
          <p className='text-sm leading-7'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque
            saepe cumque. Veritatis sunt commodi
          </p>
        </div>
        <div>
          <div className='mb-6 font-bold'>Services</div>
          <div className='flex flex-col gap-4'>
            <a
              href=''
              className='text-sm hover:underline'
            >
              Web Design
            </a>
            <a
              href=''
              className='text-sm hover:underline'
            >
              Web Development
            </a>
            <a
              href=''
              className='text-sm hover:underline'
            >
              {' '}
              Science
            </a>
            <a
              href=''
              className='text-sm hover:underline'
            >
              Digital Marketing
            </a>
          </div>
        </div>
        <div>
          <div className='mb-6 font-bold'>Company</div>
          <div className='flex flex-col gap-4'>
            <a
              href=''
              className='text-sm hover:underline'
            >
              Privacy Policy
            </a>
            <a
              href=''
              className='text-sm hover:underline'
            >
              Sitemap
            </a>
            <a
              href=''
              className='text-sm hover:underline'
            >
              Careers
            </a>
            <a
              href=''
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
              href=''
              className='text-xl hover:scale-110'
            >
              <BsFacebook />
            </a>
            <a
              href=''
              className='text-xl hover:scale-110'
            >
              <BsInstagram />
            </a>
            <a
              href=''
              className='text-xl hover:scale-110'
            >
              <BsTwitter />
            </a>
            <a
              href=''
              className='text-xl hover:scale-110'
            >
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
