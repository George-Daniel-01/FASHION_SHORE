import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { SearchBar } from "./SearchBar";
import { CartDrawer } from "../Layout/CartDrawer";

export const Narbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* MAIN NAV */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">

          {/* LOGO */}
          <Link
            to="/collections/all"
            className="text-2xl font-bold uppercase tracking-wide"
          >
            BET HORA
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8">
            <Link to="#" className="text-gray-700 hover:text-black uppercase text-sm">
              Men
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black uppercase text-sm">
              Women
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black uppercase text-sm">
              Top Wear
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black uppercase text-sm">
              Bottom Wear
            </Link>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center space-x-4">
            {/* Profile */}
            <Link to="/profile" className="hover:text-black">
              <HiOutlineUser className="h-6 w-6 text-gray-700" />
            </Link>

            {/* Cart */}
            <button onClick={toggleCartDrawer} className="relative hover:text-black">
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                4
              </span>
            </button>

            {/* Search */}
            <div className="hidden sm:block w-32 md:w-48">
              <SearchBar />
            </div>

            {/* Mobile menu icon */}
            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3 className="h-7 w-7 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* CART DRAWER */}
      <CartDrawer drawerOPen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* MOBILE NAV DRAWER */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-7 w-7 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-6">Menu</h2>

          <nav className="space-y-5 text-lg">
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">
              Men
            </Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">
              Women
            </Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">
              Top Wear
            </Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black">
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
