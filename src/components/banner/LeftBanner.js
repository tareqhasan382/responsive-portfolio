import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaFacebookF,FaTwitter, FaLinkedinIn, FaReact} from 'react-icons/fa';
import { SiTailwindcss, SiFigma,SiNextdotjs } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { Link } from 'react-router-dom';
//import "./Banner.css";

const LeftBanner = () => {
    
    const [text] = useTypewriter({
        words: [
          "professional Coder.",
          "Full Stack Developer.",
          "Graphics Designer.",
        ],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className="w-full  lgl:w-1/2 flex flex-col lgl:gap-20 gap-50">
        <div className="flex flex-col gap-5 sm:m-4">
          <h4 className="lgl:text-lg font-normal uppercase">
            Welcome to my portfolio
          </h4>
          <h1 className="lgl:text-6xl text-2xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Tareq Hasan</span>{" "}
          </h1>
          <h2 className="lgl:text-4xl text-xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a passionate programmer and full-stack web developer.I am a determined ambitious who can take any challenge with relish and able to work efficiently in team environment and with a minimal supervision. I take responsible attitude towards my work. I am eager to learn and enthusiastic to succeed.
          </p>
        </div>
        <div className="flex lgl:flex-row flex-col justify-between lgl:gap-20 gap-5 sm:m-4">
          <div>
          <h2 className="text-base uppercase font-bodyFont mb-4">Find me in</h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/tareqhasan211?mibextid=ZbWKwL"><span className="bannerIcon"><FaFacebookF/> </span></a>
            <a href="#"><span className="bannerIcon"><FaTwitter/> </span></a>
            <a href="https://www.linkedin.com/in/tareq-hasan-b5668b217"><span className="bannerIcon"><FaLinkedinIn/> </span></a>
            <a href="https://github.com/tareqhasan382"><span className="bannerIcon"><GoMarkGithub/> </span></a>         
          </div>
          </div>
          <div>
            {/* <h1 className="text-base uppercase font-bodyFont mb-4">Best Skills</h1> */}
                <div className="flex gap-4">
                   <button className='about hover:border-[1px] hover:border-designColor border-transparent'>About Me</button>
                   <button className='about1 hover:border-[1px] hover:border-designColor border-transparent'>Download Resume</button>
                {/* <span className="bannerIcon"><FaReact/> </span>
                <span className="bannerIcon"><SiTailwindcss/> </span>
                <span className="bannerIcon"><SiNextdotjs/> </span>
                <span className="bannerIcon"><SiFigma/> </span> */}
                </div>
            </div>
        </div>
      </div>
  );
}

export default LeftBanner;
