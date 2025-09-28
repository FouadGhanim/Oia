import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/');
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 md:px-0 text-black rounded md:bg-transparent md:border-0 md:p-0 transition-colors duration-300 ${
      isActive 
        ? 'font-bold underline underline-offset-4 decoration-2' 
        : 'hover:text-gray-600'
    }`;

  const navLinks = (
    <>
      <li><NavLink to="/" className={navLinkClasses} onClick={closeMenu} end>Home</NavLink></li>
      <li><NavLink to="/services" className={navLinkClasses} onClick={closeMenu}>Services</NavLink></li>
      <li><NavLink to="/products" className={navLinkClasses} onClick={closeMenu}>Products</NavLink></li>
      <li><NavLink to="/clients" className={navLinkClasses} onClick={closeMenu}>Clients</NavLink></li>
      <li><NavLink to="/contact" className={navLinkClasses} onClick={closeMenu}>Contact</NavLink></li>
      {isAuthenticated ? (
        <>
          <li><NavLink to="/admin" className={navLinkClasses} onClick={closeMenu}>Admin</NavLink></li>
          <li>
            <button onClick={handleLogout} className="block w-full text-left py-2 px-3 md:px-0 text-black hover:text-gray-600">
              Logout
            </button>
          </li>
        </>
      ) : (
         <li><NavLink to="/login" className={navLinkClasses} onClick={closeMenu}>Login</NavLink></li>
      )}
    </>
  );

  return (
    <header className="bg-white/80 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={closeMenu}>
              <img className="h-12 w-auto" src="/Public/Clients/OIA_Main_Logo.png" alt="OIA Agency Logo" />
            </NavLink>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-baseline space-x-10 font-medium">
              {navLinks}
            </ul>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;