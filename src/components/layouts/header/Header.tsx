"use client";
import TopRightMenu from "@/components/based_component/TopRightMenu";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white shadow-lg h-[65px]  border border-gray-700 rounded-4xl max-w-5xl w-full mx-auto relative top-8 z-[1000000] backdrop-blur-xl bg-opacity-10">
      <div className="container px-4 py-3 flex flex-col md:flex-row lg:justify-between justify-center items-center">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-16c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z" />
            </svg>
            <span className="text-xl font-semibold">The Motion</span>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden focus:outline-none -mt-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#docs"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Docs
          </a>
          <a
            href="#docs"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contact us
          </a>
          <a
            href="#docs"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            About us
          </a>
          <a
            href="#docs"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            More
          </a>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden absolute top-full left-0 w-full bg-black  border-gray-50 border  rounded-4xl mt-2 bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center py-4">
            <a
              href="#home"
              className="py-2 text-lg hover:text-gray-300 transition-colors duration-200 transform transition-transform duration-300 ease-in-out"
              style={{ animationDelay: "0.1s" }}
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#docs"
              className="py-2 text-lg hover:text-gray-300 transition-colors duration-200 transform transition-transform duration-300 ease-in-out"
              style={{ animationDelay: "0.2s" }}
              onClick={toggleMenu}
            >
              Docs
            </a>
            <a
              href="#docs"
              className="py-2 text-lg hover:text-gray-300 transition-colors duration-200 transform transition-transform duration-300 ease-in-out"
              style={{ animationDelay: "0.3s" }}
              onClick={toggleMenu}
            >
              Contact us
            </a>
            <a
              href="#docs"
              className="py-2 text-lg hover:text-gray-300 transition-colors duration-200 transform transition-transform duration-300 ease-in-out"
              style={{ animationDelay: "0.4s" }}
              onClick={toggleMenu}
            >
              About us
            </a>
            <a
              href="#docs"
              className="py-2 text-lg hover:text-gray-300 transition-colors duration-200 transform transition-transform duration-300 ease-in-out"
              style={{ animationDelay: "0.5s" }}
              onClick={toggleMenu}
            >
              More
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
