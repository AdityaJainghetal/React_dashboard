import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Home from './pages/Home';
import Insert from './pages/Insert';
import Display from './pages/Display';
import Delete from './pages/Delete';






const App = () => {
  const [sidebarToggle, setSidebarToggle] =useState(false);

  return (
    <>
    <div className='flex'>
      <Sidebar/>
      <Dashboard
    sidebarToggle={sidebarToggle}
  
    setSidebarToggle={setSidebarToggle}/>
    
    
    </div>



    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/> 
        <Route path="insert" element={<Insert/>}/>
      
    
        <Route path="display" element={<Display/>}/>
        <Route path="delete" element={<Delete/>}/>
        
      </Route>
    </Routes>
    </BrowserRouter>    




    </>
  )
}

export default App