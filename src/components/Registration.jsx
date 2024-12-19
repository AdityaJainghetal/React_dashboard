import React from 'react';
// import { useNavigate } from 'react-router-dom';

const Registration = () => {
  // const navigate= useNavigate("")

  // const myHome=()=>{
  //   navigate(`/home/`)
  // }



  return (
    <>
    <div style={{paddingLeft:"300px"}}>
    
       <h1></h1> 
       <div className='flex justify-center text-center font-serif  flex-col text-xl bg-slate-500 w-2/4 h-4/5 ml-60'>
       <span className='text-xl text-neutral-300'>Registration</span>
       <br />
        <span>Enter your name</span>
        <input type="text" className='w-2/4 text-center flex justify-center self-center rounded-md' />
        <br />

        <span>Enter your email</span>
        <input type="text" className='w-2/4 text-center flex justify-center self-center rounded-md' />
        <br />

        <span>Enter your password</span>
        <input type="password" className='w-2/4 text-center flex justify-center self-center rounded-md' />
        <br />
        <span>Enter your re-password</span>
        <input type="password" className='w-2/4 text-center flex justify-center self-center rounded-md'  />
        <br />
        
        <button className=' rounded-sm bg-slate-400 w-52 ml-52 '
                  
        // onClick={()=>{myHome}}
        >Submit</button>

       </div>






</div>

</>
  )
}

export default Registration;
