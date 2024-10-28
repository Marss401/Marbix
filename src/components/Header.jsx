import React, { useState } from 'react';
import { BiSolidCart } from 'react-icons/bi';
import { FaBars, FaRegUserCircle, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from '../pages/Cart';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const cart = useSelector(state => state.cart)
  
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0)
      setMenuOpen(false)
    }
  }, [location.pathname])


  return (
    <header className="fixed z-50 top-0 left-0 text-burnt bg-white w-full p-4">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <Link to={"/"} className="flex w-max gap-2 items-center">
          <h1 className="text-xl md:text-2xl font-semibold">Marbix</h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl md:hidden relative z-10"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex md:w-auto flex-col md:flex-row md:gap-8 md:justify-center items-center bg-white md:bg-transparent md:z-auto transition-transform duration-300 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <Link
            to={"/"}
            className="hover:text-ivory cursor-pointer flex justify-center items-center py-2 md:py-0"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="hover:text-ivory cursor-pointer flex justify-center items-center py-2 md:py-0"
          >
            About
          </Link>
          <Link
            to={"/shop"}
            className="hover:text-ivory cursor-pointer flex justify-center items-center py-2 md:py-0"
          >
            Shop
          </Link>
          <Link
            to={"/login"}
            className="flex justify-center items-center border-solid text-burnt text-sm bg-light hover:bg-burnt hover:text-ivory rounded-sm border-opacity-50 px-4 py-1"
          >
            Log in
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex w-max gap-4 items-center">
          <div className="h-8 w-8 text-burnt hover:text-ivory cursor-pointer flex justify-center items-center">
            <IoSearchOutline />
          </div>
          <Link
            to={"/cart"}
            className="relative h-8 w-8 text-burnt hover:text-ivory cursor-pointer flex items-center justify-center"
          >
            <BiSolidCart />
            <div className="absolute -top-0.5 -right-0.5 h-4 w-4 flex justify-center items-center text-burnt bg-ivory rounded-full text-sm">{cart.length}
            </div>
          </Link>
          <div className="h-8 w-8 text-burnt hover:text-ivory cursor-pointer flex items-center justify-center">
            <FaRegUserCircle />
          </div>
        </div>
      </div>
    </header>
  );
}
