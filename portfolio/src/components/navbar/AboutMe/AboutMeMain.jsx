import React from 'react';
import AboutMeText from './AboutMeText';
import AboutMePic from './AboutMePic';
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variant';

const AboutMeMain = () => {
  return (
    <section id='about' className="py-20 relative px-4 bg-[#0d1321]">
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="flex flex-col lg:flex-row items-center gap-12 max-w-[1200px] mx-auto"
      >
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <AboutMeText />
        </div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <AboutMePic />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMeMain;
