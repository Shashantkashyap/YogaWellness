import React, { useState } from "react";
import SVG1 from "../components/SVG1";
import SVG2 from "../components/SVG2";
import Explore from "../components/Explore";
import { IoSearch } from "react-icons/io5";
import Timediv from "../components/Timediv";
import { FaArrowRightLong } from "react-icons/fa6";
import Auth from "./Auth";
import ExploreDiv from "../components/ExploreDiv";
import Additional from "../components/Additional";

function Home() {
  const token = localStorage.getItem("token");
  const [showAuth, setShowAuth] = useState(false);
  const [showExplore, setShowExplore] = useState(false);

  const handleAuthClick = (e) => {
    e.stopPropagation();
  };

  const handleLogout = () => {
    setShowAuth(true);
    localStorage.removeItem("token");
  };
  return (
    <div
      className={`w-[90%] flex justify-center items-center overflow-hidden `}
    >
      <div className="w-10/12 mx-auto px-5 relative z-10">
        <div
          className={`mb-6 flex items-center justify-between ${
            showAuth || showExplore ? "blur-lg" : ""
          }`}
        >
          <div className="flex items-center">
            <div className="mx-2" onClick={() => setShowAuth(false) & setShowExplore(false)}>
              <SVG1 />
            </div>
            <div onClick={() => setShowExplore(true)}>
              <Explore />
            </div>
          </div>
          {token ? (
            <div className="flex gap-10 items-center">
              <div className="text-yellow-600 font-semibold text-[1.1rem]">
                <button onClick={handleLogout}>LOGOUT</button>
              </div>

              <div className=" w-10 h-10 rounded-full bg-contain">
                <img
                  src="https://img.freepik.com/premium-photo/boy-doing-yoga-nature-high-hd-wallpaper_594776-831.jpg"
                  className="rounded-full"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className="text-yellow-600 font-semibold text-[1.1rem]">
              <button onClick={() => setShowAuth(true)}>Login</button>
            </div>
          )}
        </div>

        <div
          className={`flex ${showAuth || showExplore ? "blur-lg" : ""}`}
          onClick={(e) => setShowAuth(false) & setShowExplore(false)} 
        >
          {/* left */}
          <div className="w-[40%] flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-yellow-600 font-bold text-[1.3rem]">
                Do Yoga. Be Healthy.
              </span>
              <p className="font-bold text-md">100+ online yoga classes.</p>
              <p className="font-bold text-md">
                Book a trial class at just Rs.50
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

        <div
          className={`mt-10 mb-5 ${showAuth || showExplore ? "blur-lg" : ""}`}
          onClick={() => setShowAuth(false) & setShowExplore(false)}
        >
          <Timediv />
        </div>

        <div
          className={`flex items-center justify-center p-2 gap-3 ${
            showAuth || showExplore ? "blur-lg" : ""
          }`}
          onClick={() => setShowAuth(false) & setShowExplore(false)}
        >
          <p className="text-lg font-bold text-yellow-700"> View All</p>
          <FaArrowRightLong color="rgb(202, 138, 4)" fontSize={20} />
        </div>

        <div className={` mt-10 ${
            showAuth || showExplore ? "blur-lg" : ""
          }` }onClick={() => setShowAuth(false) & setShowExplore(false)}>
          <Additional/>
        </div>

      </div>

      {/* Auth overlay */}
      {showAuth & !token && (
        <div
          className="absolute  z-50 rounded-[100px]"
          onClick={handleAuthClick}
        >
          <Auth />
        </div>
      )}

      {showExplore && (
        <div
          className="absolute w-[50%]  z-50 rounded-[100px]"
          onClick={handleAuthClick}
        >
          <ExploreDiv />
        </div>
      )}

      
    </div>
  );
}

export default Home;
