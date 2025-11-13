import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3,} from "react-icons/hi2";
 import   {IoMdClose} from "react-icons/io"; 
import { SearchBar } from "./SearchBar";
import { CartDrawer } from "../Layout/CartDrawer";
export const Narbar = () => {

  const [drawerOPen,  setDrawerOpen] = useState(false);
  const [navDrawerOPen,  setnavDrawerOPen] =  useState(false);


const toggNavDrawer  = () => {
setnavDrawerOPen(!navDrawerOPen)
}

  const toggleCartDrawer = ()  => {
    setDrawerOpen(!drawerOPen)
  };


  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        
  <div>
  <Link
    to="/collections/all"
    className="
      relative 
      inline-block 
      text-2xl 
      font-medium 
      uppercase 
      px-10 
      py-4 
      rounded-full 
      text-black 
      bg-white 
      transition-all 
      duration-200 
      hover:-translate-y-1 
      hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] 
      active:translate-y-0.5 
      active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]
      overflow-hidden
    "
  >
    <span
      className="
        absolute 
        inset-0 
        rounded-full 
        bg-white 
        transition-all 
        duration-500 
        scale-100 
        opacity-100 
        group-hover:scale-150 
        group-hover:opacity-0
      "
    ></span>
    <span className="relative z-10">BET HORA</span>
  </Link>
</div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black  text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black  text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black  text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black  text-sm font-medium uppercase"
          >
            BOTTOM Wear
          </Link>
        </div>
        {/* {Right- Icon } */}
        <div className="flex items-center  space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700  " />
          </Link>
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 " />
            <span
              className="absolute -top-1   bg-rabbit-red  text-white text-xs rounded-full 
     px-2 py-0.5"
            >
              4
            </span>
          </button>
          {/* Search } */}
          <div className="overflow-hidden">
          <SearchBar/>
          </div>
        
          <button onClick={toggNavDrawer} className="md:hidden">
            <HiBars3 className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer  drawerOPen={drawerOPen} toggleCartDrawer={toggleCartDrawer}/>

      {/* Mobile Navigation */}
      <div 
      className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform
      transition-transform duration-300 z-50 ${
        navDrawerOPen ? "translate-x-0" : "-translate-x-full"
      }`}
      >

    <div className="flex justify-end  p-4">
      <button onClick={toggNavDrawer}  >
      <IoMdClose className="h-6 w-6  text-gray-600"/>
      </button>
      </div>
      <div className="p-4">
       <h2 className="text-xl font-semibold mb-4"></h2>
      </div>

    <div className="p-4">
  <h2 className="text-xl font-semibold mb-4">Menu</h2>

  <nav className="space-y-4">
    <Link to="#" onClick={toggNavDrawer} className="block text-gray-600 hover:text-black">
    
    Men</Link>
    <Link to="#" onClick={toggNavDrawer} className="block text-gray-600 hover:text-black">
    
    WoMen</Link>
    <Link to="#" onClick={toggNavDrawer} className="block text-gray-600 hover:text-black">
    
    Bottom Wear</Link>
  </nav>
    </div>
      
      </div>
    </>
  );
};
