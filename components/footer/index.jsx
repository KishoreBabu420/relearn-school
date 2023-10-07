import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdEmail, MdPermPhoneMsg } from 'react-icons/md';

import { FaBlog } from 'react-icons/fa';

import Image from 'next/image';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='h-auto p-10 text-white bg-primary'>
      <div className='grid grid-cols-1 gap-6 my-8 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 place-items-start'>
        <div>
          <div className='mb-6 font-bold'>
            <Link href='/'>
              <Image
                src='/assets/images/relearn_white.webp'
                alt='relearn school logo'
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
          <p className='text-sm leading-7'>
            Coding & Robotics classes for kids with flexible timings and
            schedules. Attend Robotics and Coding classes at our location after
            school.
          </p>
        </div>
        <hr className='block w-full mx-auto border-2 border-white md:hidden' />

        <div>
          <div className='mb-6 font-bold'>Courses</div>
          <div className='flex flex-col gap-4'>
            <Link
              href='/robotics'
              className='text-sm hover:underline'
            >
              Robotics
            </Link>
            <Link
              href='/coding'
              className='text-sm hover:underline'
            >
              Coding
            </Link>
            <Link
              href='/maths'
              className='text-sm hover:underline'
            >
              Mathematics
            </Link>
            <a
              href='https:blog.relearnschool.in'
              target='_blank'
              className='text-sm hover:underline'
            >
              Blog
            </a>
          </div>
        </div>
        <hr className='block w-full mx-auto border-2 border-white md:hidden' />
        <div>
          <div className='mb-6 font-bold'>Other Links</div>
          <div className='flex flex-col gap-4'>
            <Link
              href='/privacy'
              className='text-sm hover:underline'
            >
              Privacy Policy
            </Link>
            <Link
              href='/sitemap.xml'
              className='text-sm hover:underline'
            >
              Sitemap
            </Link>
            <Link
              href='/terms'
              className='text-sm hover:underline'
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <hr className='block w-full mx-auto border-2 border-white md:hidden' />
        <div>
          <div className='mb-6 font-bold'>Reach to us</div>
          <div className='mb-4 '>
            <a
              href='tel:+91 9360136400'
              className='flex items-center gap-2 text-base hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              <MdPermPhoneMsg /> +91 9360136400
            </a>
          </div>
          <div className='text-sm'>
            <a
              href='mailto:connect@relearnschool.in'
              className='flex items-center gap-2 text-base hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              <MdEmail /> connect@relearnschool.in
            </a>
          </div>
          <div className='flex justify-start gap-8 px-8 mt-6 md:justify-center md:px-0'>
            <a
              href='https://www.facebook.com/profile.php?id=100094293221834'
              className='text-3xl hover:scale-110 facebook'
              target='_blank'
              rel='noreferrer'
            >
              <BsFacebook />
            </a>
            <a
              href='https://www.instagram.com/relearn.school/'
              className='text-3xl hover:scale-110 instagram'
              target='_blank'
              rel='noreferrer'
            >
              <BsInstagram />
            </a>
            <a
              href='https://twitter.com/Relearn_School'
              className='text-3xl hover:scale-110 twitter'
              target='_blank'
              rel='noreferrer'
            >
              <BsTwitter />
            </a>
            <a
              href='https://www.youtube.com/channel/UCgM7A1X40ZJVTfsuSnHLuQg'
              className='text-3xl hover:scale-110 youtube'
              target='_blank'
              rel='noreferrer'
            >
              <BsYoutube />
            </a>
            <a
              href='https://blog.relearnshool.in  '
              className='text-3xl hover:scale-110 youtube'
              target='_blank'
              rel='noreferrer'
            >
              <FaBlog />
            </a>
          </div>
        </div>
      </div>
      <hr className='block w-full mx-auto border-2 border-white md:hidden' />

      <div className='mt-10 text-center'>
        <p className='text-secondary'>
          &copy;2023 <strong>Relearn School Coimbatore,</strong> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
