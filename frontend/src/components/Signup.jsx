import React, { useState } from 'react';
import Select from 'react-select';
import countryCode from "../countrycode";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"

function Signup() {
  const base = "https://yoga-backend-s045.onrender.com/api";
  const [data, setData] = useState({
    phone: "",
    name: "",
    email: "",
    otp: ""
  });

  const [selectedCountry, setSelectedCountry] = useState(countryCode[0]); // Default to the first country

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handlePhoneNumberChange = (e) => {
    setData({ ...data, phone: e.target.value });
  };

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
      const res = await axios.post(`${base}/signUp`,{email: data.email, number: data.phone, name:data.name, otp:data.otp});
      console.log(res);
      if(res.status === 200){
        toast.success("Signup successful!");
        toast.success("Now Login to continue...")
  }else if(res.response.status === 400){
    toast.error("User Already Registered");
  }
  else{
    toast.error("User Already Registered");
  };
  }catch(e){
    console.log(e);
    toast.error("Signup failed! Try again later");
  }
      }
    
    

  return (
    <div className='flex flex-col gap-6 rounded-md '>
      <Toaster />
      <div className='number '>
        <div className='flex gap-1 rounded-md'>
          <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryCode}
            getOptionLabel={(option) => `${option.country} (${option.code})`}
            getOptionValue={(option) => option.code}
            className='code rounded-md '
            styles={{
              control: (provided) => ({
                ...provided,
                width: '100px',
              }),
            }}
          />
          <input type="tel" className='numInput w-full border-[.5px] px-4 rounded-md' placeholder="Enter phone number" value={data.phone} onChange={handlePhoneNumberChange} />
        </div>
      </div>

      <div>
        <input type="text" placeholder='Enter your name' className='border-[.5px] rounded-md px-5 py-3 w-full' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      </div>
      <div>
        <input type="text" placeholder='Enter your Email' className='border-[.5px] rounded-md px-5 py-3 w-full' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      </div>

      <div className='flex gap-3'>
        <div>
          <input type="text" placeholder='Enter your OTP' className='border-[.5px] rounded-md px-5 py-3 w-full' value={data.otp} onChange={(e) => setData({ ...data, otp: e.target.value })} />
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

      <div className='flex gap-3 items-center'>
        <div>
          <input type="checkbox" />

        </div>
        <p className=' text-lg font-semibold text-yellow-700'>Receive Whatsapp Messages...</p>
      </div>

      <div onClick={handleSubmit}>
        <button className="ml-4 flex items-center justify-end focus:outline-none tracking-wide px-4 py-3 rounded shadow-md text-center text-white text-lg cursor-pointer"
          style={{
            background:
              "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)",
          }}>Signup</button>
      </div>
      <div>
        <p className='text-lg font-semibold mb-4'>Already have an account? <span className=' text-yellow-700 font-bold'>Login</span></p>
      </div>

    </div>
  )
}

export default Signup;
