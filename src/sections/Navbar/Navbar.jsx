import Brand from '../../components/Brand/Brand.jsx';
import Hamburger from '../../assets/icons/hamburger.svg';
import { useRef } from 'react';

const Navbar = () => {
  const navListRef = useRef(null);

  const handleClickHamburger = () => {
    if (navListRef.current) {
      navListRef.current.classList.toggle('mobile');
    }
  };

  return (
    <nav className="nav">
      <Brand />
      <div className="nav-links">
        <button type="button" className="hamburger" onClick={handleClickHamburger}>
          <img src={Hamburger} alt="" />
        </button>
        <ul ref={navListRef} className="nav-list">
          <li className="nav-list-item">HOME</li>
          <li className="nav-list-item">ABOUT</li>
          <li className="nav-list-item">SERVICES</li>
          <li className="nav-list-item">CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
