const MobileNavLinks = ({ href, link, setToggle }) => {
  return (
    <li className='mr-8 list-none cursor-pointer'>
      <a
        href={href}
        className='font-bold transition-all duration-300'
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </a>
    </li>
  );
};

export default MobileNavLinks;
