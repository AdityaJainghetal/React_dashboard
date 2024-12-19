import { message } from 'antd';
import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const [input,setinput] = useState({})
  const navigate= useNavigate()

  const handleinput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setinput(values=>({...values,[name]:value}))
  }

  const handleSubmit=()=>{
    let api=`http://localhost:3000/user/?email=${input.email}&password=${input.password}`;
    axios.get(api).then((res)=>{
        if(res.data.length===0){
            message.error("Invalid Email or Password !!!");
        }
        else{
            message.success("Login Successfull");
            localStorage.setItem("name",res.data[0].name);
           navigate("/home")
        }
    })

}


  return (
    <>
    <div style={{paddingLeft:"300px"}}>
    
       <h1></h1> 
       <div className='flex justify-center text-center font-serif  flex-col text-xl bg-slate-500 w-2/4 h-96 ml-60'>
       <span className='text-xl text-neutral-300'>Login</span>
       <br />
        <span>Enter your email</span>
        <input type="text" onChange={handleinput} name='email' value={input.email} className='w-2/4 text-center flex justify-center self-center rounded-md' />
        <br />
        <span>Enter your password</span>
        <input type="password" onChange={handleinput} name='password' value={input.password} className='w-2/4 text-center flex justify-center self-center rounded-md'  />
        <br />
        <a href="" className='text-base' onClick={()=>{Registartion()}}>Forget password</a>
        <button className=' rounded-sm bg-slate-400 w-52 ml-52 '
                  onClick={()=>{handleSubmit}}
        // onClick={()=>{myHome}}
        >Submit</button>

       </div>

</div>

</>
  )
}

export default Logout
