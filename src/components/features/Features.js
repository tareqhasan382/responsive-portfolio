import React from 'react'
import Title from '../layouts/Title';
import Card from './Card';
import { AiFillAppstore } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { FaGg } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black items-center'>
    <div className='sm:text-center'>
    <Title title="Features" des="What I Do" />
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-10 gap:6'>
        <Card 
            title="Busses Stratagy"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            icon={<FaBars/>}
        />
        <Card
        title="App Development"
        des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        icon={<AiFillAppstore/>}
        />
        <Card
            title="SEO Optimization"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            icon={<FaArtstation/>}
        />
        <Card
            title="Mobile Development"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            icon={<FaGg/>}
        />
        <Card
            title="Web Development"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            icon={<FaCode/>}
        />
        <Card
            title="Graphics Design"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            icon={<TfiAndroid/>}
        />
        
    </div>
  </section>
  )
}

export default Features;

/*
w-1/3 h-80 bg-red-200


w-1/2 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100

*/