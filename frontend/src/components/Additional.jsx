import React from 'react'

function Additional() {
  return (
    <div className=' flex flex-col gap-7 pb-10 ml-5'>
      <div className=' flex flex-col gap-3 font-bold '>
      <p className=' text-yellow-600 text-xl '>Tell us your details and book your first yoga session with us.</p>
      <p className=' text-md'>Our yoga counselor will reach you to understand your needs and assign the best yoga class for you.</p>
      </div>
      <div className='flex flex-col gap-10'>
        <div className=' relative  w-[40%]'>
            <p className=' absolute left-[2%] px-2 bottom-[70%] bg-white font-semibold  p-1 rounded-md '>Name <span>*</span></p>
            <input type="text" className='w-full rounded-md shadow-md p-4 border-[.5px]'/>
        </div>
        <div className=' relative  w-[40%]'>
        <p className=' absolute left-[2%] px-2 bottom-[70%] bg-white font-semibold  p-1 rounded-md '>Phone <span>*</span></p>
            <input type="text" className='w-full rounded-md shadow-md p-4' />
        </div>
      </div>
      <div>
        <button
        className="ml-4 flex items-center justify-end focus:outline-none tracking-wide px-8 py-3 rounded shadow-md text-center text-white text-md cursor-pointer"
        style={{
          background:
            "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)",
        }}
        >
            Submit & Book Trial
        </button>
      </div>
    </div>
  )
}

export default Additional
