import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import {ToastContainer} from 'react-toastify'
import Profile from './pages/Profile'

const App = () => {
  return (
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<UserLayout />} />
          <Route path='/profile' element={<Profile /> } />
        
       </Routes>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar
          closeButton={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable={false}
          theme="light"
          toastClassName={() => "flex items-center justify-start bg-[#ffffff] gap-2 px-6 py-3 text-gray-800 rounded-lg shadow-md" } />



    </BrowserRouter>
    
  )
}

export default App
