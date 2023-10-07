import Link from 'next/link';

const MobileNavLinks = ({ href, link, setToggle }) => {
  return (
    <li className='mr-8 list-none cursor-pointer'>
      <Link
        href={href}
        className='font-bold transition-all duration-300'
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLinks;
