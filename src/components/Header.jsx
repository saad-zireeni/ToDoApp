import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };

  return (
    <>
      <nav class="">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <a
                  href="#"
                  class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <span class="font-bold">Do</span>
                </a>
              </div>

              <div class="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  class="py-5 px-3 text-gray-700 hover:text-violet-700"
                >
                  Home
                </Link>
                <Link
                  to="/aboutUs"
                  class="py-5 px-3 text-gray-700 hover:text-violet-700"
                >
                  About
                </Link>
                <Link
                  to="/contactUs"
                  class="py-5 px-3 text-gray-700 hover:text-violet-700"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a href="" class="py-5 px-3">
                Login
              </a>
              <a
                href=""
                class="py-2 px-3 bg-violet-200 hover:Violet-400 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div>

            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button" onClick={toggleMenu}>
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${isMenuHidden ? "hidden" : ""}`}>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            About
          </a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Contact
          </a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Login
          </a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Signup
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
