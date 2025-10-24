import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-r from-red-50 to-red-100 text-red-500 py-8 px-[5vw] md:px-[10vw]'>
      {/* Top main content div */}
      <div className='flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 mb-8'>
        {/* Newsletter div */}
        <div className='flex flex-col w-full md:w-1/4 items-start justify-center gap-4'>
          <h1 className='text-xl font-semibold text-red-500'>Newsletter</h1>
          <p className='text-sm text-red-500'>Be the first to hear about new products, exclusive events, and online offers.</p>
          {/* Input email div */}
          <div className='flex flex-row w-full rounded-lg overflow-hidden shadow-md'>
            <input
              placeholder='Enter Your Email'
              className='flex-1 px-4 py-3 text-sm text-red-500 placeholder-red-300 border border-red-200 focus:outline-none bg-white transition-all duration-200'
              type="text"
            />
            <button className='bg-black text-white cursor-pointer px-6 py-3 text-sm font-medium hover:bg-red-600 active:bg-red-700 transition-all duration-200 transform hover:scale-105'>
              Submit
            </button>
          </div>
        </div>
        {/* Shop */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-semibold text-red-500'>Shop</h1>
          <a href="#" className='text-sm text-red-500 hover:text-red-600 transition-colors duration-200'>Men's Top Wear</a>
          <a href="#" className='text-sm text-red-500 hover:text-red-600 transition-colors duration-200'>Women's Bottom Wear</a>
          <a href="#" className='text-sm text-red-500 hover:text-red-600 transition-colors duration-200'>Men's Bottom Wear</a>
          <a href="#" className='text-sm text-red-500 hover:text-red-600 transition-colors duration-200'>Women's Top Wear</a>
        </div>
        {/* Support */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-semibold text-red-500'>Support</h1>
          <a href="#" className='text-sm text-red-500 hover:text-red-600 transition-colors duration-200'>Contact</a>
          <a href="#" className='text-sm text-red-500 hover:text-red-600 transition-colors duration-200'>About</a>
          <a href="#" className='text-sm text-red-500 hover:text-red-600 transition-colors duration-200'>FAQ's</a>
          <a href="#" className='text-sm text-red-500 hover:text-red-600 transition-colors duration-200'>Features</a>
        </div>
        {/* Follow Us */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-semibold text-red-500'>Follow Us</h1>
          <div className='flex gap-3'>
            <a href="#" className='text-red-500 hover:text-red-600 transition-colors duration-200'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.58 8.07 8.24 8.88v-6.28H7.54v-2.6h2.74V9.67c0-2.7 1.64-4.17 4.04-4.17 1.15 0 2.14.08 2.43.12v2.82h-1.67c-1.31 0-1.56.62-1.56 1.53v2.01h3.12l-.41 2.6h-2.71v6.28c4.66-.81 8.24-4.47 8.24-8.88 0-5.5-4.46-9.96-9.96-9.96z"/>
              </svg>
            </a>
            <a href="#" className='text-red-500 hover:text-red-600 transition-colors duration-200'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d="M23.95 4.83c-.88.39-1.83.65-2.82.77 1.01-.61 1.79-1.57 2.16-2.71-.95.56-2 .97-3.12 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.13 1.13-4.1-.21-7.74-2.17-10.18-5.15-.43.74-.67 1.6-.67 2.52 0 1.74.88 3.27 2.22 4.17-.82-.03-1.59-.25-2.27-.62v.06c0 2.43 1.73 4.46 4.02 4.92-.42.11-.86.17-1.31.17-.32 0-.63-.03-.94-.09.63 1.97 2.46 3.41 4.63 3.45-1.7 1.33-3.83 2.12-6.15 2.12-.4 0-.79-.02-1.18-.07 2.19 1.4 4.78 2.22 7.56 2.22 9.07 0 14.02-7.51 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55l-.01-.01z"/>
              </svg>
            </a>
            <a href="#" className='text-red-500 hover:text-red-600 transition-colors duration-200'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d="M12 2.16c-5.46 0-9.84 4.38-9.84 9.84 0 4.92 3.62 8.98 8.34 9.74v-6.89h-2.51v-2.85h2.51v-2.17c0-2.48 1.51-3.83 3.71-3.83 1.05 0 1.96.08 2.22.11v2.58h-1.52c-1.2 0-1.43.57-1.43 1.41v1.85h2.86l-.37 2.85h-2.49v6.89c4.72-.76 8.34-4.82 8.34-9.74 0-5.46-4.38-9.84-9.84-9.84z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright div */}
      <div className='flex items-center justify-center border-t border-red-200 pt-4'>
        <p className='text-sm text-red-500'>© 2025, CompileTab. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer