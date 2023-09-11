/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';

import Brand from '../components/Brand/Brand.jsx';
import Hamburger from '../assets/icons/hamburger.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const linkArray = [
    { id: 1, text: 'HOME', to: '/reactjs-navbar/' },
    { id: 2, text: 'ABOUT', to: '/reactjs-navbar/about' },
    { id: 3, text: 'SERVICES', to: '/reactjs-navbar/services' },
    { id: 4, text: 'CONTACT', to: '/reactjs-navbar/contact' },
  ];

  const handleItemClick = (id) => {
    setSelectedItem(id);
    setIsMobile(false);
  };

  const handleHambugerClick = () => {
    setIsMobile((prevState) => !prevState);
  };

  return (
    <nav className='nav | font-opensans flex items-center justify-between bg-neutral-900 text-white h-16 w-full px-8 relative'>
      <Brand />
      <div className='nav-links | flex items-center h-full'>
        <button
          type='button'
          className='hamburger | block bg-transparent border-none cursor-pointer outline-none md:hidden'
          onClick={handleHambugerClick}
        >
          <img src={Hamburger} alt='' />
        </button>

        <div
          className={`nav-list ${
            isMobile ? 'mobile' : ''
          } | flex flex-col justify-center bg-neutral-950 absolute top-full right-0 w-0 h-0 text-base | md:flex-row md:bg-transparent md:static md:top-auto md:right-auto md:w-max md:h-full`}
        >
          {linkArray.map((link) => {
            return (
              <Link
                key={link?.id}
                to={link?.to}
                className={`nav-list-item ${
                  selectedItem === link.id ? 'selected' : 'not-selected'
                } | hidden | md:flex md:items-center md:justify-center md:cursor-pointer md:font-bold md:h-full md:w-full md:p-4 md:relative md:hover:bg-orange-500`}
                onClick={() => handleItemClick(link.id)}
              >
                {link?.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
