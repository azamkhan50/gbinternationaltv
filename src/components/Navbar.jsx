import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/news', label: 'News' },
        { path: '/about', label: 'About' },
        // { path: '/shows', label: 'Shows' },
        { path: '/contact', label: 'Contact' },
        // { path: '/blog', label: 'Blog' },
        { path: '/local-news', label: 'Local News' },
        { path: '/international-news', label: 'International News' },
    ];
    return (
        <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo + Text */}
                    <div className="flex items-center space-x-2">
                        <Link to='/'>
                            <img src={assets.logo} alt="Logo" className="h-10 w-10 object-contain" />
                        </Link>

                        <span className="text-xl font-bold text-white">GB International TV</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <nav className="flex space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-white hover:text-blue-600 font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                 <div className="md:hidden bg-white shadow-md">
      <div className="px-4 pt-2 pb-4 flex flex-col space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
            )}
        </nav>
    );
};

export default Navbar;
