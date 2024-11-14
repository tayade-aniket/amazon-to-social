import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">SocialToAmazon</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Home
              </Link>
              <Link to="/products" className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Products
              </Link>
              <Link to="/about" className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                About
              </Link>
              <Link to="/contact" className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">
              Home
            </Link>
            <Link to="/products" className="text-white hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">
              Products
            </Link>
            <Link to="/about" className="text-white hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">
              About
            </Link>
            <Link to="/contact" className="text-white hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
