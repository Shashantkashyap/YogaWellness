import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Card from './Card';
import {cardData} from "./CardData"

function Timediv() {
    const time = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "4pm", "6pm", "8pm", "10pm"];
    const [active, setActive] = useState("4am");

    
    

    return (
        <div className='flex flex-col gap-16'>
            <div className='flex gap-5 items-center cursor-pointer mx-auto'>
                <IoIosArrowBack />
                <div className='flex cursor-pointer gap-5 text-lg font-semibold text-yellow-700'>
                    {time.map((e) => (
                        <div key={e} onClick={() => setActive(e)}>
                            <div className={`${active === e ? "bg-yellow-400" : "bg-yellow-50"} px-4 py-1 rounded-full shadow-md`}>
                                {e}
                            </div>
                        </div>
                    ))}
                </div>
                <IoIosArrowForward />
            </div>
            <div>
                {active && cardData[active] && (
                    <div className='flex gap-10'>
                        {cardData[active].map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Timediv;
