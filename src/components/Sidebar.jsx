import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa"; 
import { Link, Outlet } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";




const Sidebar = ({ sidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-white font-bold">Aditya Jain</h1>
      </div>
      <hr className="border-gray-600" />
      <ul className="mt-10 text-white font-bold text-2xl gap-y-20 group-autofill" >
       
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center ">
          <FaHome className="w-6 h-6 mr-2" />
          <Link to="home">
          <a href="#">
         Home </a>
         </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
          <FaDisplay className="w-6 h-6 mr-2" />
          <Link to="display">
          <a href="#">
          Display</a>
          </Link>
        
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
          <MdOutlineBrowserUpdated className="w-6 h-6 mr-2" />
          
          <Link to="insert">
          <a href="#">
          Add passanger</a>
          </Link>
        
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
          <FaTrashAlt className="w-6 h-6 mr-2" />
        
          <Link to="delete">
          <a href="#">
          Deleted </a>
          </Link>
       
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
          <FaSearch className="w-6 h-6 mr-2" />
         <Link to="search">
         <a href="#">
          Search
          </a>
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
          <MdEditDocument  className="w-6 h-6 mr-2" />
         <Link to="Update">
         <a href="#">
          Update
          </a>
          </Link>
        </li>



        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
          <RiLogoutBoxFill className="w-6 h-6 mr-2" />
         <Link to="Login">
         <a href="#">
          Logout
          </a>
          </Link>
        </li>
      </ul>
      <div>
     <Outlet/>
     </div>     
    </div>
     
  );
};

export default Sidebar;

// import React from 'react';
// import { FaHome, FaTrashAlt, FaSearch } from "react-icons/fa";
// import { FaDisplay } from "react-icons/fa6";
// import { MdOutlineBrowserUpdated } from "react-icons/md";
// import { RiLogoutBoxFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const Sidebar = ({ sidebarToggle }) => {
//   return (
//     <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
//       <div className="my-2 mb-4">
//         <h1 className="text-2xl text-white font-bold">Aditya Jain</h1>
//       </div>
//       <hr className="border-gray-600" />
//       <ul className="mt-10 text-white font-bold text-2xl gap-y-20 group-autofill">
//         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
//           <FaHome className="w-6 h-6 mr-2" />
//           <Link to="home">Home</Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
//           <FaDisplay className="w-6 h-6 mr-2" />
//           <Link to="display">Display</Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
//           <MdOutlineBrowserUpdated className="w-6 h-6 mr-2" />
//           <Link to="update">Update</Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
//           <FaTrashAlt className="w-6 h-6 mr-2" />
//           <Link to="deleted">Deleted</Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
//           <FaSearch className="w-6 h-6 mr-2" />
//           <Link to="search">Search</Link>
//         </li>
//         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-5 px-2 flex items-center">
//           <RiLogoutBoxFill className="w-6 h-6 mr-2" />
//           <Link to="logout">Logout</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
