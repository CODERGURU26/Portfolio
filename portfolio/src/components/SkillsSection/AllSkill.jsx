import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { SiCss3, SiTailwindcss, SiMysql } from 'react-icons/si';
import { FaJsSquare, FaReact } from 'react-icons/fa';
import SingleSkill from './SingleSkill';
import { motion } from 'framer-motion';
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
  { skill : 'NodeJS' , icon: IoLogoNodejs },
  { skill : 'ExpressJS', icon : SiExpress},
  { skill : 'MongoDB' , icon : SiMongodb} , 
  { skill: 'MySQL', icon: SiMysql },
];

const AllSkill = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkill;
