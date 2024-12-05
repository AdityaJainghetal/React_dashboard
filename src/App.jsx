// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Display from './pages/Display';
import Insert from './pages/Insert';
import Delete from './pages/Delete';
import Search from './pages/Search';
import Logout from './pages/Logout';







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
        <Route path="display" element={<Display/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="delete" element={<Delete/>}/>
        <Route path= "search" element={<Search/>}/>
        <Route path = "Logout" element={<Logout/>}/>


      </Routes>
      
      </BrowserRouter>


    




    </>
  )
}

export default App