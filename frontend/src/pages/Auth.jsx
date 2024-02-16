import React, { useState } from 'react';
import SVG3 from '../components/SVG3';
import Signup from '../components/Signup';
import Login from '../components/Login';

function Auth() {
  const [active, setActive] = useState(false)
  

  return (
    <div className=' flex gap-10 bg-gray-100 p-5 rounded-md'>
      {/* Left */}
      <div className='w-1/2 h-full'>
        <SVG3/>
      </div>

      {/* Right */}
      <div className='flex flex-col gap-10 rounded-md mt-10'>
        <div className='flex text-2xl font-semibold text-yellow-700 gap-20 underline cursor-pointer'>
          <p onClick={()=> setActive(true)} >Login</p>
          <p onClick={()=> setActive(false)}>Signup</p>
        </div>

        <div>
          {
            active === false ? (<Signup/>) : (<Login></Login>)
          }
        </div>
        
        
      </div>
    </div>
  );
}

export default Auth;
