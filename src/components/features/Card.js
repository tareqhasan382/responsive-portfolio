import React from 'react';
import { TfiArrowRight } from "react-icons/tfi";

const Card = ({title, des, icon}) => {
  return (
    <div className='lgl:w-full sml-w-[98%] px-12 lgl:h-80 h-85 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r mx-5 sm:my-5 lgl:mx-0
     from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
      <div className='h-100 overflow-hidden'>
       <div className='w-full flex flex-col lgl:h-full sml:h-[200px translate-y-8 
       group-hover:translate-y-0 transition-transform duration-500'>
       <div>
        <span className='text-3xl text-designColor'>{icon}</span>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='xl:text-xl sm:text-lg  md:font-titleFont font-bold text-gray-300'>{title}</h2>
        <p className='base'>{des}</p>
        <span className='text-2xl text-designColor'>
            <TfiArrowRight/>
        </span>
      </div>
       </div>
      </div>
    </div>
  );
}

export default Card;
