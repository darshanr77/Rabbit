import React, { useState } from "react";
import {toast} from "react-toastify";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import {Link} from 'react-router-dom'
import { TbLogout } from "react-icons/tb";
import Searchbar from "./Searchbar";
import Cart from "./Cart";

const Navbar = () => {

    const[toastCount,setToastCount] = useState(0);

     const [cartOpen,setCartOpen] = useState(false);

        const toggleCart = () => {
            setCartOpen(!cartOpen);
        }


    const handleToastCountHome = () =>{
        if(toastCount < 2){
            toast.success("You are in Homepage");
            setToastCount(prev => prev+1);
        }
    };

    const handleToastCountLogout = () => {
      if(toastCount < 1){
        toast.success("Logged out");
        setToastCount(prev => prev+1);
      }
    };

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Left: Logo */}
        <div onClick={handleToastCountHome} className="text-xl font-bold text-black">
          <Link  to='/'>
            Rabbit
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 uppercase">
          <a href="#" className="hover:text-black">Men</a>
          <a href="#" className="hover:text-black">Women</a>
          <a href="#" className="hover:text-black">Top Wear</a>
          <a href="#" className="hover:text-black">Bottom Wear</a>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Link onClick={handleToastCountLogout}>
            <button className="relative cursor-pointer hover:text-black">
                <TbLogout className="text-xl h-6 w-6 text-gray-700  hover:text-black" />
            </button>
          </Link>
          <Link to='/profile'>
            <button className="relative cursor-pointer hover:text-black">
                <HiUser className="text-xl h-6 w-6 text-gray-700  hover:text-black" />
            </button>
          </Link>
          <Link >
           <button onClick={toggleCart} className="relative cursor-pointer hover:text-black">
               <HiShoppingBag className="text-xl  h-6 w-6 text-gray-700 hover:text-black" />
               <span className="absolute top-[-3px] right-[-2px] bg-[#ea2e2e] text-white text-xs rounded-full px-[3px] py-[0.5px]">4</span>
           </button>
          </Link>

          {/* Search bar */}
            {/* <button className="relative cursor-pointer hover:text-black">
                <HiMagnifyingGlass className="text-xl h-6 w-6 text-gray-700  hover:text-black" />
            </button> */}
            <Searchbar />
        </div>
      </div>

      {/* Cart Items */}
      <Cart cartOpen={cartOpen} toggleCart={toggleCart}  />
    </div>
  );
};

export default Navbar;
