import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scroll and add sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo or brand */}
            <div className="flex items-center">
              <img
                className="w-[60px] rounded-full"
                src="./assists/logo2.webp"
                alt=""
              />
            </div>
          </div>

          <div className="hidden text-[18px] font-bold md:flex items-center space-x-4">
            <Link href="/" className="hover:text-gray-600">
              HOME
            </Link>
            <Link href="#toulous" className=" hover:text-pink-600">
              The Toulous
            </Link>
            <Link href="#Traditional" className="hover:text-gray-600">
              Traditional Wedding
            </Link>
            <Link href="#registry" className="hover:text-gray-600">
              Mariage Religieux
            </Link>
            <Link href="#place" className="hover:text-gray-600">
              Accomodations
            </Link>
            <Link href="#rvsp" className="hover:text-gray-600">
              RSVP
            </Link>
            <Link href="#accommodations" className="hover:text-gray-600">
              Photos
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-300 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:text-gray-600 block">
              HOME
            </Link>
            <Link href="#people" className="hover:text-gray-600 block">
              PEOPLE
            </Link>
            <Link href="#party" className="hover:text-gray-600 block">
              PARTY
            </Link>
            <Link href="#registry" className="hover:text-gray-600 block">
              REGISTRY
            </Link>
            <Link href="#place" className="hover:text-gray-600 block">
              PLACE
            </Link>
            <Link href="#travel" className="hover:text-gray-600 block">
              TRAVEL
            </Link>
            <Link href="#accommodations" className="hover:text-gray-600 block">
              ACCOMMODATIONS
            </Link>
            <Link href="#rsvp" className="hover:text-gray-600 block">
              RSVP
            </Link>
            <Link href="#photos" className="hover:text-gray-600 block">
              PHOTOS
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
