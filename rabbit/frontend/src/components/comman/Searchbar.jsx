import React, { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';


const Searchbar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchbar = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchItem);
  };

  return (
    <div
      className={`flex items-center justify-center w-[10vh] transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-white h-24 z-50"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className="bg-grey-200 text-gray-800 px-10 py-2 rounded-lg focus:outline-none w-full placeholder:text-gray-600 shadow-md focus:ring-1 focus:ring-grey-400 transition"
              autoFocus
            />
            <button type='submit' className='cursor-pointer absolute left-3 top-5 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
              <HiMagnifyingGlass
              size={20}
                className=""
              />
            </button>
            <button
              type="button"
              onClick={handleSearchbar}
              className="absolute right-3 top-[9px] text-gray-800 hover:text-black transition"
            >
              <HiMiniXMark onClick={() => setIsOpen(false)} className='cursor-pointer' size={23} />
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={handleSearchbar}
          className="p-2 rounded-full cursor-pointer hover:bg-gray-300 transition shadow-sm"
          aria-label="Open search"
        >
          <HiMagnifyingGlass size={22} />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
