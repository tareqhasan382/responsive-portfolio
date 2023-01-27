import React, { useState } from 'react';
import Title from '../layouts/Title';
import Achievements from './Achievements';
import Education from './Education';
import Experience from './Experience';
import ProfessionalSkills from './ProfessionalSkills';
//border-b-[1px] border-b-black
const Resume = () => {
    const [educationData, setEducationDta] = useState(false);
    const [professionalData, setProfessionalDta] = useState(false);
    const [experienceData, setExperienceDta] = useState(false);
    const [achievementsData, setAchievementsDta] = useState(false);
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black sm:px-4'>  
        <div className='flex justify-center items-center text-center'>
      <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
            <li onClick={()=>
                setEducationDta(true) & 
                setProfessionalDta(false)&
                setExperienceDta(false)&
                setAchievementsDta(false)
                  } className={`${educationData?"border-designColor rounded-lg":"border-transparent"} resumiLi`}>Education</li>
            <li onClick={()=>
                setEducationDta(false) & 
                setProfessionalDta(true)&
                setExperienceDta(false)&
                setAchievementsDta(false)

                } className={`${professionalData?"border-designColor rounded-lg":"border-transparent"} resumiLi`}>Professional Skills</li>
            <li onClick={()=>
                setEducationDta(false) & 
                setProfessionalDta(false)&
                setExperienceDta(true)&
                setAchievementsDta(false)
                } className={`${experienceData?"border-designColor rounded-lg":"border-transparent"} resumiLi`}>Experience</li> 
            <li onClick={()=>
                setEducationDta(false) & 
                setProfessionalDta(false)&
                setExperienceDta(false)&
                setAchievementsDta(true)
                } className={`${achievementsData?"border-designColor rounded-lg":"border-transparent"} resumiLi`}>Achievements</li>
        </ul>
      </div>

        {
            educationData && <Education/>
        }
        {
            professionalData && <ProfessionalSkills/>
        }
        {
            experienceData && <Experience/>
        }
        {
            achievementsData && <Achievements/>
        }

      
      {/*   <Education/> 
            <ProfessionalSkills/>
            <Experience/>
            <Achievements/>
      */}
      
      
    </section>
  );
}

export default Resume;
/*
        <ResumeCard/>
        <ResumeCard/>
        <ResumeCard/>
        <ResumeCard/>



*/