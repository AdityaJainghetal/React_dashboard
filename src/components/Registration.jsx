import { message } from 'antd';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
// import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


const Registration = () => {
      const [input, setInput]= useState({});
        const navigator=useNavigate();


        const handleinput=(e)=>{
          let name= e.target.name;
          let value=e.target.value;
          
          setInput(values=>({...values,[name]:value}))
        }
      
        const handleSubmit=()=>{
          let api="http://localhost:3000/user";
          axios.get(api,input).then((res)=>{
            message.success("data inserted");
            navigator("/Login")
          })
        }



  return (
    <>
    <div style={{paddingLeft:"300px"}}>
    
       <h1></h1> 
       <div className='flex justify-center text-center font-serif  flex-col text-xl bg-slate-500 w-2/4 h-4/5 ml-60'>
       <span className='text-xl text-neutral-300'>Registration</span>
       <br />
        <span>Enter your name</span>
        <input type="text" name='name' value={input.name} onChange={handleinput} className='w-2/4 text-center flex justify-center self-center rounded-md'  />
        <br />

        <span>Enter your email</span>
        <input type="text" name='email' value={input.email} onChange={handleinput} className='w-2/4 text-center flex justify-center self-center rounded-md' />
        <br />

        <span>Enter your password</span>
        <input type="password" name='password' value={input.password} onChange={handleinput} className='w-2/4 text-center flex justify-center self-center rounded-md' />
        <br />
        <span>Enter your re-password</span>
        <input type="password" name='repassword' value={input.repassword} onChange={handleinput} className='w-2/4 text-center flex justify-center self-center rounded-md'  />
        <br />
        
        <button onClick={handleSubmit} className=' rounded-sm bg-slate-400 w-52 ml-52 '>Submit</button>

       </div>






</div>

</>
  )
}

export default Registration;
