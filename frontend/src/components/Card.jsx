import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";

function Card({title, level, name, days, time, stream, price,img}) {
  return (
    <div className='w-[400px] h-[250px] flex flex-col gap-3 p-4 shadow-md rounded-md bg-white'>
      <div>

        <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-5'>
           <div className=' text-lg font-semibold'> {title}</div>
           <div>
            <p className=' text-md text-gray-500 opacity-70'>for{level} </p>
            <p className=' text-md text-gray-500 opacity-70'>{name}</p>
             </div>
        </div>
        <div className='w-[130px] h-[130px] bg-contain'>
            <img src={img} alt="" className=' rounded-md'/>
        </div>
        </div>

        <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center text-sm text-gray-500 opacity-70'>
                <IoCalendarClearOutline fontSize={15}/>
                <div>{days}</div>
            </div>
            <div>
                {stream}
            </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-3 '>
          <div className='flex gap-2 items-center'>
           <div>{time}</div>
            <div><CiClock2 /></div>
            <div>60 min</div>
           </div>
           <div className='flex gap-1 items-center'>
            <BiRupee/>
            <div>{price}</div>
            <div>/ month</div>
           </div>
          </div>

           <div >
            <button
             className="ml-4 flex items-center justify-between focus:outline-none tracking-wide py-2 px-9 rounded shadow-md text-center text-white text-lg cursor-pointer"
             style={{
               background:
                 "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)",
             }}>
                Join
             </button>
           </div>

        </div>


      </div>
    </div>
  )
}

export default Card
