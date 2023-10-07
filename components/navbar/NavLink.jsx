import Link from 'next/link';

const NavLink = ({ href, link }) => {
  return (
    <li className='mr-8 list-none cursor-pointer'>
      <Link
        href={href}
        className='font-bold transition-all duration-300 text-primary'
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
