import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkStyles = ({ isActive }) => ({
    textcolor: isActive ? 'text-red-600' : 'black',
  });

  return (
    <nav className='bg-white'>
      <div className='flex flex-wrap justify-between items-center md:px-24 p-4'>
        <p className='text-5xl md:text-7xl font-bold font-sans'>ps<span className='text-red-600'>a</span></p>
        <button onClick={toggleMobileMenu} className='text-black inline-flex items-center p-2 rounded md:hidden'>
          <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
          {/* Toggle icon for menu button */}
          {isMobileMenuOpen ? (
            // Close icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
        <div className={`w-full md:flex md:items-center md:w-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0'>
            <li>
              <NavLink to="/" style={navLinkStyles} className='block w-56 h-7 font-sans font-semibold text-2xl p-4 text-red-600 hover:text-red-600 active:text-red-600'>EXHIBITION</NavLink>
            </li>
            <li>
              <NavLink to="/reservation" style={navLinkStyles} className='block w-56 h-7 font-sans font-semibold text-2xl p-4 hover:text-red-600 active:text-red-600'>RESERVATION</NavLink>
            </li>
            <li>
              <NavLink to="/location" style={navLinkStyles} className='block w-56 h-7 font-sans font-semibold text-2xl p-4 hover:text-red-600 active:text-red-600'>LOCATION</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

