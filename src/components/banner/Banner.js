import React from "react";
import LeftBanner from "./LeftBanner";

import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full lgl:pt-20 pt-10 pb-10 flex flex-col gap-20 lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont"
    >
        <LeftBanner/>
        <RightBanner/>
      
    </section>
  );
};

export default Banner;
