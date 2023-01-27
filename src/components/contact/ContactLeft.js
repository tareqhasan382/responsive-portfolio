import React from 'react';
import {FaFacebookF, FaLinkedinIn,} from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import contact from "../../assets/images/contact2.jpg";

const ContactLeft = () => {
  return (
    <div className="xl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-4 justify-center">
    <img className='w-full h-64 object-cover rounded-lg mb-4' src={contact} alt="contact" />
    <div className='flex flex-col gap-3'>
        <h3 className='text-3xl font-bold text-white'>Tareq Hasan</h3>
        <p className='text-lg font-normal text-gray-400'>Full-Stack web developer</p>
        <p className='text-base text-gray-400 tracking-wide text-justify'>I am a passionate programmer and full-stack web developer. I like to solve various problems while implementing my ideas and always try to learn new technology. I always try to do my work professionally.</p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
           Phone: <span className='text-lightText'>+8801989342794</span>
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
           Email: <span className='text-lightText'>tareqhasan21100@gmail.com</span>
           
        </p>
    </div>
    <div className='flex flex-col gap-2'>
        <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
        <div className='flex gap-4'>
            <span className='bannerIcon'><FaFacebookF/></span>
            <span className='bannerIcon'><FaLinkedinIn/></span>
            <span className='bannerIcon'><GoMarkGithub/></span>
        </div>
    </div>
  </div>
  )
}

export default ContactLeft;