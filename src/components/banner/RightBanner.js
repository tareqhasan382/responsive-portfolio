import React from 'react';
import { logo } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img className="lgl:w-[400px] w-[200px] lgl:h-[400px] h-[200px] z-10" src={logo} alt="logo" />
        <div className="absolute lgl:w-[450px] w-[240px] lgl:h-[450px] h-[240px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne 
        flex justify-center items-center rounded-full border-4 border-whiteborder-white "
        >
        </div>
      </div>
  )
}

export default RightBanner;

//border-whiteborder-white 