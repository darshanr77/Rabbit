import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import Searchbar from "./Searchbar";
import Cart from "./Cart";
import { HiBars3BottomRight, HiOutlineUser } from "react-icons/hi2";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toastCount, setToastCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavMobile = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleToastCountHome = () => {
    if (toastCount < 2) {
      toast.success("You are in Homepage");
      setToastCount((prev) => prev + 1);
    }
  };

  const handleToastCountLogout = () => {
    if (toastCount < 1) {
      toast.success("Logged out");
      setToastCount((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left: Logo */}
        <div
          onClick={handleToastCountHome}
          className="text-2xl font-bold font-mono text-black"
        >
          <Link to="/">Rabbit</Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 uppercase">
          <a href="#" className="hover:text-black">
            Men
          </a>
          <a href="#" className="hover:text-black">
            Women
          </a>
          <a href="#" className="hover:text-black">
            Top Wear
          </a>
          <a href="#" className="hover:text-black">
            Bottom Wear
          </a>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Link onClick={handleToastCountLogout}>
            <button className="relative cursor-pointer hover:text-black">
              <TbLogout
                size={30}
                className="text-xl h-6 w-6 text-gray-700 hover:text-black"
              />
            </button>
          </Link>

          <Link to="/profile">
            <button className="relative cursor-pointer hover:text-black">
              <HiOutlineUser
                size={34}
                className="text-xl font-bold h-6 w-6 text-[#121212eb] hover:text-black"
              />
            </button>
          </Link>

          <Link>
            <button
              onClick={toggleCart}
              className="relative cursor-pointer hover:text-black"
            >
              <RiShoppingBag4Line
                size={30}
                className="text-xl h-6 w-6 text-gray-700 hover:text-black"
              />
              <span className="absolute top-[-3px] right-[-2px] bg-[#ea2e2e] text-white text-xs rounded-full px-[3px] py-[0.5px]">
                4
              </span>
            </button>
          </Link>

          {/* Search bar */}
          <Searchbar />

          {/* Hamburger Menu (Visible only on Mobile) */}
          <button
            onClick={toggleNavMobile}
            className="text-gray-700 hover:text-black mb-1 cursor-pointer md:hidden"
          >
            <HiBars3BottomRight size={24} />
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <Cart cartOpen={cartOpen} toggleCart={toggleCart} />

      {/* Mobile Navigation */}
     <div
  className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
    navDrawerOpen ? "translate-x-0" : "-translate-x-full"
  } md:hidden`} // hides drawer on larger screens
>
  {/* Close button */}
  <div className="flex justify-end p-4">
    <button onClick={toggleNavMobile}>
      <IoMdClose className="h-6 w-6  cursor-pointer hover:text-black text-gray-600" />
    </button>
  </div>

  {/* Mobile Nav Links */}
  <div className="flex flex-col items-start space-y-6 p-6 text-lg font-medium text-gray-800 uppercase">
    <button onClick={toggleNavMobile} className="hover:text-black">
      Men
    </button>
    <button onClick={toggleNavMobile} className="hover:text-black">
      Women
    </button>
    <button onClick={toggleNavMobile} className="hover:text-black">
      Top Wear
    </button>
    <button onClick={toggleNavMobile} className="hover:text-black">
      Bottom Wear
    </button>
  </div>
</div>

    </div>
  );
};

export default Navbar;
