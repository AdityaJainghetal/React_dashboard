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
import Login from '../src/components/Login';
import Update from './pages/Update';
import Edit from './pages/Edit';
import Registartion from '../src/components/Registration';







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
        <Route path="update" element={<Update/>}/>
        {/* <Route path="edit" element={<Edit/>}/> */}
        <Route path="edit/:id" element={<Edit/>}/>
        {/* <Route path = "Login" element={<Login/>}/> */}


      </Routes>
      
      </BrowserRouter>






      <BrowserRouter>
  
      <Routes>
        <Route index element={<Registartion/>}/>
       
        <Route path = "Login" element={<Login/>}/>


      </Routes>
      
      </BrowserRouter>


    




    </>
  )
}

export default App