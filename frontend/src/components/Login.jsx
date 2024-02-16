import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import {useNavigate} from"react-router-dom"


function Login() {
  const navigate = useNavigate()
  const base = "http://localhost:3000/api";
  const [data, setData] = useState({
    email:"",
    otp:""
  })
  const generateOTP = async () => {
    try {
      console.log(data.email)
      const res = await axios.post(`${base}/otp`,{ email: data.email });
      console.log(res);
      toast.success("OTP generated successfully");
    } catch (err) {
      toast.error("Unable to send OTP");
    }
  };
  const handleSubmit = async () => {
    console.log(data);
    try{
      const res = await axios.post(`${base}/login`,{email: data.email, otp:data.otp});
      console.log(res);
      if(res.status === 200){
        localStorage.setItem("token", res.data.token)
        
        toast.success("Logged in successful!");
        
        
  }else if(res.response.status === 400){
    toast.error("User not Registered");
  }
  else{
    toast.error("User not Registered");
  };
  }catch(e){
    console.log(e);
    toast.error("Login failed! Try again later");
  }
      }
  return (
    <div className='flex flex-col gap-10 rounded-md'>
      <Toaster />
        <div>
            <input type="text" placeholder='Enter your Email'className='border-[.5px] rounded-md px-5 py-3 w-full' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
          </div>

          <div className='flex gap-3'>
          <div>
            <input type="text"  placeholder='Enter your OTP'className='border-[.5px] rounded-md px-5 py-3 w-full' value={data.otp} onChange={(e)=>setData({...data, otp:e.target.value})} />
          </div>
          <div>
            <button onClick={generateOTP}
            className="ml-4 flex items-center justify-end focus:outline-none tracking-wide px-4 py-3 rounded shadow-md text-center text-white text-md cursor-pointer"
            style={{
              background:
                "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)",
            }}
            >Send OTP</button>
          </div>
          </div>

          <div onClick={handleSubmit}>
          <button className="ml-4 flex items-center justify-end focus:outline-none tracking-wide px-4 py-3 rounded shadow-md text-center text-white text-lg cursor-pointer"
             style={{
               background:
                 "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)",
             }}>Login</button>
          </div>
          <p className='text-lg font-semibold mb-4'>Already have an account? <span onClick={()=> set} className=' text-yellow-700 font-bold'>Signup</span></p>
        </div>
  )
}

export default Login
