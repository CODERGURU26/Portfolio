import React from 'react';
import AllSkill from './AllSkill';
import AllSkillSM from './AllSkillSM';
import SkillText from './SkillText';
import SkillPic from './SkillPic';
import {motion} from 'framer-motion'
import { fadeIn } from '../FramerMotion/variant';

const SkillMain = () => {
  return (
    <section id="skills" className="bg-[#0d1321] py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Skill Heading */}
        <motion.div
        variants={fadeIn('down' , '0.2')}
        initial='hidden'
        whileInView='show'
        viewport={{once:false , amount:0
        }}
        >
             <SkillText/>
        </motion.div>
       
        {/* Skill Grid for Desktop */}
        <div className="mt-12 hidden lg:block">
          <AllSkill />
        </div>

        {/* Skill Grid for Mobile */}
        <div className="mt-12 block lg:hidden">
          <AllSkillSM />
        </div>

        <div>
            <SkillPic/>
        </div>
      </div>
    </section>
  );
};

export default SkillMain;
