import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import {ToastContainer} from 'react-toastify'
import Profile from './pages/Profile'
import Cart from './pages/Cart'

const App = () => {
  return (
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<UserLayout />} />
          <Route path='/profile' element={<Profile /> } />
          <Route path='/cart' element={<Cart /> } />
        
       </Routes>
        <ToastContainer
  position="top-center"
  autoClose={1300}
  hideProgressBar={true}
  closeButton={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable={false}
  theme="light"
  toastClassName={() =>
    "text-gray-900 text-center font-medium bg-white px-6 py-3 rounded-lg shadow-md"
  }
/>


    </BrowserRouter>
    
  )
}

export default App
