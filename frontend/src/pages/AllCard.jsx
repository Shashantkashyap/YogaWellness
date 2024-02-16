import React, { useState } from "react";
import SVG1 from "../components/SVG1";
import SVG2 from "../components/SVG2";
import Explore from "../components/Explore";
import { IoSearch } from "react-icons/io5";
import {cardData} from "../components/CardData"
import Card from "../components/Card";
import { Link } from "react-router-dom";

function AllCard() {
  return (
    <div>
      <div className="w-11/12 mx-auto px-5 relative">
        <div
          className={`mb-6 flex items-center justify-between `}
        >
          <div className="flex items-center">
            <div className="mx-2">
              <SVG1 />
            </div>
            <Link to={"/"}>
            <div 
            className="ml-4 flex items-center justify-end focus:outline-none tracking-wide px-5 py-3 rounded shadow-md text-center text-white text-md cursor-pointer"
            style={{
              background:
                "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)",
            }}
            >
              Home
            </div>
            </Link>
          </div>
          
        </div>

        <div
          className={`flex `}
          
        >
          {/* left */}
          <div className="w-[40%] flex-col gap-6">
            <div className="flex flex-col gap-1 text-gray-500 text-xl text-opacity-90">
              <span className=" font-semibold">
              Deepen your yoga practice.
              </span>
              <p className="font-semibold ">Classes designed for intermediate & advanced</p>
              <p className="font-semibold">
              yoga practitioners.
              </p>
            </div>
            <div>
              <div className="mt-10 border-[2px] border-yellow-700 bg-white rounded-full flex gap-3 items-center p-3">
                <IoSearch fontSize={25} color="rgb(202, 138, 4)" />
                <input type="text" placeholder="Explore all of Yoga" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[60%] flex justify-center items-center">
            <SVG2 />
          </div>
        </div>

        <div className="flex flex-wrap gap-5 ml-10  py-10">
          {
            cardData["4am"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["5am"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["6am"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["7am"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["8am"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["9am"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["10am"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["11am"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["12pm"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["4pm"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["6pm"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["8pm"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
          {
            cardData["10pm"].map((card)=>(
              <Card title={card.title} level={card.level} name={card.name} days={card.days} time={card.time} stream={card.streams} price={card.price} img={card.img}/>
            ))
          }
        </div>

        
        
      </div>
    </div>
  )
}

export default AllCard
