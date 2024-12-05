// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';







const App = () => {
  const [sidebarToggle, setSidebarToggle] =useState(false);

  return (
    <>

<BrowserRouter>
    <div className='flex'>
      <Sidebar/>
      <Dashboard
    sidebarToggle={sidebarToggle}
  
    setSidebarToggle={setSidebarToggle}/>
    
    
    </div>


      
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
      
      </BrowserRouter>


    




    </>
  )
}

export default App