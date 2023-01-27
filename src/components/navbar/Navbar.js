import React, { useState } from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {FaFacebookF, FaLinkedinIn,} from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div
      className="sticky xl:px-20 sm:px-5 top-0 bg-bodyColor z-50 w-full h-20 mx-auto flex justify-between items-center font-titleFont 
    border-b-[1px] border-b-gray-600"
    >
      <div className="flex items-center gap-2">
        <img
          className="lg:w-[50px] lg:h-[50px] sm:w-[30px] sm:h-[30px]"
          src={logo}
          alt="logo"
        />
        <p className="lg:text-2xl font-bold font-Dosis sm:textsm">Tareq</p>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center lg:gap-10 gap-6">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center 
        justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-4 py-2 relative">
              <div className="pt-2 flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <img
                    className="lg:w-[50px] lg:h-[50px] sm:w-[30px] sm:h-[30px]"
                    src={logo}
                    alt="logo"
                  />
                  <p className="lg:text-2xl pt-1 font-bold font-Dosis sm:textsm">
                    Tareq
                  </p>
                </div>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                  I am a passionate programmer and full-stack web developer.
                </p>
              </div>
              <ul
              className="flex flex-col gap-4"
              >
                {
                  navLinksdata.map((item)=>(
                    <li key={item._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
                     hover:text-designColor duration-300"> 
                     <Link 
                     onClick={()=>setShowMenu(false)}
                     activeClass="active"
                     to={item.link}
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                     >{item.title}</Link></li>
                  ))
                }
              </ul>
              <div className='flex flex-col gap-2'>
        <h2 className='text-base uppercase font-bold font-titleFont mb-4'>Find me in</h2>
        <div className='flex gap-4'>
            <span className='bannerIcon'><FaFacebookF/></span>
            <span className='bannerIcon'><FaLinkedinIn/></span>
            <span className='bannerIcon'><GoMarkGithub/></span>
        </div>
    </div>
              <span
              onClick={() => setShowMenu(false)}
              className="absolute  top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
