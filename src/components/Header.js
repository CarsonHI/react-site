import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess, faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <FontAwesomeIcon icon={faCode} className="text-white text-4xl mr-2" />
        <h1 className="text-4xl font-extrabold text-white tracking-wider">Carson Healy</h1>
        <FontAwesomeIcon icon={faCode} className="text-white text-4xl mr-2" />
      </div>
    </header>
  );
};

export default Header;
