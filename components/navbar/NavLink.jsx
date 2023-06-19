import React from 'react';

const NavLink = ({ href, link }) => {
  return (
    <li className='mr-8 list-none cursor-pointer'>
      <a
        href={href}
        className='font-bold transition-all duration-300 text-primary'
      >
        {link}
      </a>
    </li>
  );
};

export default NavLink;
