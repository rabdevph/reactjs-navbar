import Brand from '../../components/Brand/Brand.jsx';
import Hamburger from '../../assets/icons/hamburger.svg';
import { useRef, useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navListRef = useRef(null);

  const linkArray = ['HOME', 'ABOUT', 'SERVICES', 'CONTACT'];

  const handleClickHamburger = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav className='nav | flex items-center justify-between bg-neutral-900 text-white h-16 w-full px-8 relative'>
      <Brand />
      <div className='nav-links | flex items-center h-full'>
        <button
          type='button'
          className='hamburger | block bg-transparent border-none cursor-pointer outline-none md:hidden'
          onClick={handleClickHamburger}
        >
          <img src={Hamburger} alt='' />
        </button>

        <ul
          ref={navListRef}
          className={`nav-list ${
            isActive ? 'active' : ''
          } | flex flex-col justify-center bg-orange-500 absolute top-full right-0 w-0 h-0 text-base | md:flex-row md:bg-transparent md:static md:top-auto md:right-auto md:w-max md:h-full`}
        >
          {linkArray.map((link) => {
            return (
              <li
                key={link}
                className={`nav-list-item ${
                  isActive ? 'active' : ''
                } | hidden | md:flex md:items-center md:justify-center md:cursor-pointer md:font-bold md:h-full md:w-full md:p-4 md:relative md:hover:bg-neutral-950`}
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
