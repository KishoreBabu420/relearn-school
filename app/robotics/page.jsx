import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdEmail, MdPermPhoneMsg } from 'react-icons/md';

const Robotics = () => {
  return (
    <main className='container flex flex-col items-center justify-center h-screen mx-auto md:flex-row md:justify-between'>
      <article className='flex flex-col gap-5'>
        <p className='flex justify-center w-48 px-5 py-2 text-lg font-medium uppercase bg-primary text-secondary rounded-3xl'>
          Coming Soon
        </p>
        <p className='text-6xl font-bold leading-[5rem] text-primary'>
          Get Notified <br /> When we Launch
        </p>
        <p className='text-base'>Don&apos;t Worry we will not spam you.</p>
        <form className='flex'>
          <input
            type='email'
            className='px-6 py-3 border border-gray-200 rounded-l shadow-sm focus:outline-none focus:shadow-xl'
            name='email'
            placeholder='Enter Email address'
          />
          <button
            type='submit'
            className='px-6 py-3 font-medium transition duration-300 ease-in-out rounded-r shadow-xl hover:bg-gradient-to-l hover:px-8 bg-gradient-to-r from-blue-950 to-blue-900 text-secondary'
          >
            Notify Me
          </button>
        </form>
        <div className='flex gap-5 mt-6 text-primary'>
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
    </main>
  );
};

export default Robotics;
