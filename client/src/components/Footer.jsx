import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src="/placeholder.svg?height=40&width=40" alt="Company logo" />
            <p className="text-gray-400 text-base">
              Making the world a better place through converting social media to e-commerce.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="#" className="text-base text-gray-400 hover:text-white transition duration-150 ease-in-out">
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-base text-gray-400 hover:text-white transition duration-150 ease-in-out">
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-base text-gray-400 hover:text-white transition duration-150 ease-in-out">
                      Commerce
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="#" className="text-base text-gray-400 hover:text-white transition duration-150 ease-in-out">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-base text-gray-400 hover:text-white transition duration-150 ease-in-out">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-base text-gray-400 hover:text-white transition duration-150 ease-in-out">
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 SocialToAmazon, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}