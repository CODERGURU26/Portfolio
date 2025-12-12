import React from 'react';
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';
import { motion } from 'framer-motion'
import { fadeIn } from '../FramerMotion/variant';

const ContactMeMain = () => {
  return (
    <section id="contact" className="px-4 py-20 bg-[#0d1321]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <motion.h2
          variants={fadeIn('up', '0.2')}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0 }}
          className="text-5xl sm:text-6xl text-cyan-400 text-center font-bold mb-14">
          Contact Me
        </motion.h2>

        {/* Contact Container */}
        <div className="bg-rose-950 rounded-2xl p-10 flex flex-col lg:flex-row gap-16 items-start justify-between">
          {/* Left: Form - takes remaining space */}
          <motion.div
            variants={fadeIn('left', '0.2')}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }}
            className="flex-grow w-full">
            <ContactMeLeft />
          </motion.div>

          {/* Right: Contact Info - fixed width */}
          <motion.div
            variants={fadeIn('right', '0.2')}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }}
            className="w-full max-w-sm">
            <ContactMeRight />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeMain;
