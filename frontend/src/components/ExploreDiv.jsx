import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import {optionsData} from "./optionsData"
import {useNavigate} from "react-router-dom"

function ExploreDiv() {
    const navigate = useNavigate()
  const [active, setActive] = useState('');

  const handleSetActive = (type) => {
    setActive(type);
  };

  const renderOptions = (options) => {
    return options.map((option, index) => (
      <p
        key={index}
        className="w-full py-3 bg-white px-4 shadow-md rounded-md text-lg font-semibold"
      >
        {option}
      </p>
    ));
  };

  const handleCard = ()=>{
    navigate("/allCard")
  }

  return (
    <div className="p-10 rounded-[20px] mx-auto flex cursor-pointer gap-20 bg-gray-100">
      {/* left */}
      <div className="w-[20%] flex flex-col gap-5 justify-center">
        {Object.keys(optionsData).map((optionType) => (
          <div
            key={optionType}
            onClick={() => handleSetActive(optionType)}
            className={`w-[80%] py-3 px-4 shadow-md rounded-md ${
              active === optionType ? 'bg-gray-300' : 'bg-white'
            } flex items-center justify-between`}
          >
            <p className="text-lg font-semibold">{optionType}</p>
            <IoIosArrowForward />
          </div>
        ))}
      </div>

      {/* right */}
      <div className="w-[50%] mx-auto flex flex-col gap-2" onClick={handleCard}>
        <div>
          {active && (
            <div className="flex flex-col gap-5">
              {renderOptions(optionsData[active])}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExploreDiv;
