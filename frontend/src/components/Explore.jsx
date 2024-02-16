import React from 'react'

function Explore() {
  return (
    <div>
      <div
          className="ml-4 flex items-center justify-between focus:outline-none tracking-wide px-4 rounded shadow-md text-center text-white text-sm cursor-pointer"
          style={{
            background:
              "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)",
          }}
        >
          <div className=' font-bold text-md'>Explore</div>
          <div className="pt-3 pl-4 block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 50 50"
              style={{ fill: "white" }}
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path>
            </svg>
          </div>
        </div>
    </div>
  )
}

export default Explore
