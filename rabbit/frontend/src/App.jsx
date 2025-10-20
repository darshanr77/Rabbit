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
          position="top-center"   // ✅ This is the key
          autoClose={1300}        
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light" />
    </BrowserRouter>
    
  )
}

export default App
