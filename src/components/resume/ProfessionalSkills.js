import React from 'react';
import {motion} from "framer-motion";

const ProfessionalSkills = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex sm:flex-col xl:flex-row gap-20'>   
    {/*--------- right sight----------- */}
      <div className='xl:w-1/2 sm:w-full'>
      <div className='py-8 font-titleFont'>
      <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
      <h2 className='text-4xl font-bold'>Design Skills</h2>
    </div>
    <div className='mt-13 w-full flex flex-col gap-4'>
    <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Adobe Illustrator</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span 
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}

             className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>100%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>figma</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>90%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>PhotoShop</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>70%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>logo</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>60%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Adove Xd</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>50%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>design</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>90%</span>
            </motion.span>
        </span>
      </div>
    </div>
      </div>
    {/* ---------left Sight ----------------------------*/}
    <div className='xl:w-1/2 sm:w-full'>
    <div className='py-8 font-titleFont'>
      <p className='text-sm text-designColor tracking-[4px] uppercase'>Fretures</p>
      <h2 className='text-4xl font-bold'>Development Skills</h2>
    </div>
    <div className='mt-13 w-full flex flex-col gap-2'>
    <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>React</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span 
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}

             className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>100%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Redux</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>90%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>JavaScript</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>75%</span>
            </motion.span>
        </span>
      </div>
      
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>OOP</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>70%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>C++</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>75%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>html</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>95%</span>
            </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Css</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2 '>
            <motion.span
            initial={{x:"-100%", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
             className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
              <span className='absolute -top-7 right-0'>90%</span>
            </motion.span>
        </span>
      </div>
    </div>
    </div>
    </motion.div>
  )
}

export default ProfessionalSkills;

// h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10
//NodeJS 