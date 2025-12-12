import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import {motion} from 'framer-motion'
import { fadeIn } from '../FramerMotion/variant';
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

const skills = [
  { skill: 'HTML', icon: FaHtml5 },
  { skill: 'CSS', icon: SiCss3 },
  { skill: 'JavaScript', icon: FaJsSquare },
  { skill: 'TailWindCSS', icon: SiTailwindcss },
  { skill: 'ReactJS', icon: FaReact },
  { skill : 'NextJS' , icon : RiNextjsLine},
  { skill : 'NodeJS' , icon: IoLogoNodejs},
  { skill : 'ExpressJS', icon : SiExpress},
  { skill : 'MongoDB' , icon : SiMongodb} ,
  { skill: 'MySQL', icon: SiMysql },
];

const AllSkillSM = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center'>
      {skills.map((item, index) => (
        <motion.div 
        variants={fadeIn('up' , '0.2')}
        initial='hidden'
        whileInView='show'
        viewport={{once:false , amount:0.7}}
        key={index} className='flex flex-col items-center text-white'>
          <item.icon className='text-6xl text-amber-500' />
          <p className='mt-3 font-semibold'>{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillSM;
