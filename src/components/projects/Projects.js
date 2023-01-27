import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import p1 from "../../assets/images/projects/p1.jpg";
import p2 from "../../assets/images/projects/p2.jpg";
import p3 from "../../assets/images/projects/p3.jpg";
import p4 from "../../assets/images/projects/p4.jpg";
import p5 from "../../assets/images/projects/p5.jpg";
import p6 from "../../assets/images/projects/p6.jpg";

const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
      <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 sm:px-4'>
        <ProjectsCard src={p1} title="Social Media Clone" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <ProjectsCard src={p2} title="E-commerce website" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <ProjectsCard src={p3} title="chatting App" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <ProjectsCard src={p4} title="Social Media Clone" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <ProjectsCard src={p5} title="E-commerce website" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <ProjectsCard src={p6} title="chatting App" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
    </section>
  );
}

export default Projects;
