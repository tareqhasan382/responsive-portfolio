import React from 'react';
import {motion} from "framer-motion";
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex sm:flex-col xl:flex-row gap-20'>   
    {/*--------- right sight----------- */}
      <div >
      <div className='py-12 font-titleFont'>
      <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
      <h2 className='text-4xl font-bold'>Experience Skills</h2>
    </div>
    <div className='mt-13 w-full h-[1200px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
      <ResumeCard 
      title="B.Sc in Computer Science and Engineering"
      subTitle="Green University of Bangladesh"
      result="5.00/5"
      des="Green University of Bangladesh is a private university in Dhaka, Bangladesh. It offers BBA, MBA, Journalism & Media Communication, LLB, English, Sociology, LLM, EEE and BSc in Computer Science, Textile Engineering and IT degrees among others."

       />
      <ResumeCard
      title="B.Sc in Computer Science and Engineering"
      subTitle="Green University of Bangladesh"
      result="5.00/5"
      des="Green University of Bangladesh is a private university in Dhaka, Bangladesh. It offers BBA, MBA, Journalism & Media Communication, LLB, English, Sociology, LLM, EEE and BSc in Computer Science, Textile Engineering and IT degrees among others."
      />
      <ResumeCard
      title="B.Sc in Computer Science and Engineering"
      subTitle="Green University of Bangladesh"
      result="5.00/5"
      des="Green University of Bangladesh is a private university in Dhaka, Bangladesh. It offers BBA, MBA, Journalism & Media Communication, LLB, English, Sociology, LLM, EEE and BSc in Computer Science, Textile Engineering and IT degrees among others."
      />
      <ResumeCard
      title="B.Sc in Computer Science and Engineering"
      subTitle="Green University of Bangladesh"
      result="5.00/5"
      des="Green University of Bangladesh is a private university in Dhaka, Bangladesh. It offers BBA, MBA, Journalism & Media Communication, LLB, English, Sociology, LLM, EEE and BSc in Computer Science, Textile Engineering and IT degrees among others."
      />
    </div>
      </div>
    {/* ---------left Sight ----------------------------*/}
    <div>
    <div className='py-12 font-titleFont'>
      <p className='text-sm text-designColor tracking-[4px] uppercase'>Fretures</p>
      <h2 className='text-4xl font-bold'>Development Skills</h2>
    </div>
    <div className='mt-13 w-full h-[1200px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
      <ResumeCard 
      title="B.Sc in Computer Science and Engineering"
      subTitle="Green University of Bangladesh"
      result="5.00/5"
      des="Green University of Bangladesh is a private university in Dhaka, Bangladesh. It offers BBA, MBA, Journalism & Media Communication, LLB, English, Sociology, LLM, EEE and BSc in Computer Science, Textile Engineering and IT degrees among others."

       />
      <ResumeCard
      title="B.Sc in Computer Science and Engineering"
      subTitle="Green University of Bangladesh"
      result="5.00/5"
      des="Green University of Bangladesh is a private university in Dhaka, Bangladesh. It offers BBA, MBA, Journalism & Media Communication, LLB, English, Sociology, LLM, EEE and BSc in Computer Science, Textile Engineering and IT degrees among others."
      />
      <ResumeCard
      title="B.Sc in Computer Science and Engineering"
      subTitle="Green University of Bangladesh"
      result="5.00/5"
      des="Green University of Bangladesh is a private university in Dhaka, Bangladesh. It offers BBA, MBA, Journalism & Media Communication, LLB, English, Sociology, LLM, EEE and BSc in Computer Science, Textile Engineering and IT degrees among others."
      />
      <ResumeCard
      title="B.Sc in Computer Science and Engineering"
      subTitle="Green University of Bangladesh"
      result="5.00/5"
      des="Green University of Bangladesh is a private university in Dhaka, Bangladesh. It offers BBA, MBA, Journalism & Media Communication, LLB, English, Sociology, LLM, EEE and BSc in Computer Science, Textile Engineering and IT degrees among others."
      />
    </div>
    </div>
    </motion.div>
  );
}

export default Experience;
