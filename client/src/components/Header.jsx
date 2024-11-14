import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-white">
            SocialToAmazon
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-yellow-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-yellow-300 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;