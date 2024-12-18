import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // GitHub and Envelope (Gmail) icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Code icon

const Header = () => {
  return (
    <header className="bg-blue-300 text-white py-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center space-y-4">
        {/* Code Icon and Name */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faCode} className="text-white text-4xl" />
          <h1 className="text-6xl font-extrabold text-gray-200 tracking-wider">Carson Healy</h1>
          <FontAwesomeIcon icon={faCode} className="text-white text-4xl" />
        </div>
        
        {/* Social Icons */}
        <div className="flex space-x-6 text-5xl">
          {/* GitHub Link */}
          <a href="https://github.com/CarsonHealy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-300 transition-all duration-200" />
          </a>

          {/* Gmail Link (opens Gmail compose page) */}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=carson.healy@tis.edu.mo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-gray-300 transition-all duration-200" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
