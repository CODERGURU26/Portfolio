import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../FramerMotion/variant'

const HeroText = () => {
  return (
    <div className='flex flex-col h-full gap-4 justify-center md:text-left sm:text-center'>
        <motion.h2 
        variants={fadeIn('down', '0.2')}
        initial= 'hidden'
        whileInView='show'
        viewport={{once:false , amount:0}}
        className='lg:text-2xl sm:text-xl uppercase text-cyan-300'>A Full Stack Developer</motion.h2>

        <motion.h1
        variants={fadeIn('right', '0.4')}
        initial= 'hidden'
        whileInView='show'
        viewport={{once:false , amount:0}}
        className='md:text[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-yellow-400'>Gururaj Sharma</motion.h1>

        <motion.p 
        variants={fadeIn('up', '0.6')}
        initial= 'hidden'
        whileInView='show'
        viewport={{once:false , amount:0}}
        className='text-lg text-white mt-4'>
                A passionate <strong>Full-Stack Developer</strong> and student
                <br/> building modern and scalable web apps
                using technologies like 
                <br/> <strong>JavaScript , Reactjs ,
                NextJS , NodeJS , ExpressJS , MongoDB</strong> and more.
        </motion.p>
    </div>
  )
}

export default HeroText