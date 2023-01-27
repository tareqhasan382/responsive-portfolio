import React from 'react';
import logo from "../../assets/images/logo.png";
import {FaFacebookF, FaLinkedinIn,} from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black ">
      <div className='flex flex-col gap-8 items-center'>
      <div className='flex items-center gap-2'>
        <img className='t-logo' src={logo} alt="logo" />
        <p className='logo-text'>Tareq</p>
      </div>
      <div className='flex gap-4'>
            <span className='bannerIcon'><FaFacebookF/></span>
            <span className='bannerIcon'><FaLinkedinIn/></span>
            <span className='bannerIcon'><GoMarkGithub/></span>
        </div>
        <div>
            <h3>© 2023 All rights reserved by | Tareq Hasan</h3>
        </div>
      </div>
    </section>
  );
}

export default Footer;
/*
<div className='w-full h-full flex flex-col gap-8 px-1'>
      <div className='flex items-center gap-2'>
        <img className='t-logo' src={logo} alt="logo" />
        <p className='logo-text'>Tareq</p>
      </div>
        <div className='flex gap-4'>
            <span className='bannerIcon'><FaFacebookF/></span>
            <span className='bannerIcon'><FaLinkedinIn/></span>
            <span className='bannerIcon'><GoMarkGithub/></span>
        </div>
      </div>
      <div className='w-full h-full bg-blue-500'></div>
      <div className='w-full h-full bg-blue-500'></div>
      <div className='w-full h-full bg-blue-500'></div>
*/