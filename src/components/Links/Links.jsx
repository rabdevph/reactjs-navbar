/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

const links = ['HOME', 'ABOUT', 'SERVICES', 'CONTACT'];

const Links = () => {
  const [activeindex, setAtiveIndex] = useState(null);

  const handleClick = (index) => {
    setAtiveIndex(index);
  };

  return (
    <div className="links">
      {links.map((link, index) => {
        return (
          <button
            key={index}
            className={`link ${activeindex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {link}
          </button>
        );
      })}
    </div>
  );
};

export default Links;
