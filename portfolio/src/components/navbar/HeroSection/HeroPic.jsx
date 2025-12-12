import React from 'react'
import { BsHexagon } from 'react-icons/bs'
import {motion} from 'framer-motion'
import { fadeIn } from '../../FramerMotion/variant'

const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn('right', '0.2')}
    initial='hidden'
    whileInView='show'
    viewport={{once:false , amount:0}}
    className="relative h-full flex items-center justify-center">
      {/* Spinning hexagon background */}
      <div className="absolute z-0 flex items-center justify-center animate-pulse">
        <BsHexagon className="text-cyan-300 blur-md animate-[spin_20s_linear_infinite] w-[500px] h-[500px]" />
      </div>

      {/* Hero Image */}
      <img
        src="../../HeroPic.png"
        alt="Gururaj Sharma"
        className="z-10 max-h-[450px] w-auto rounded-full border-4 border-cyan-500 shadow-xl"
      />
    </motion.div>
  )
}

export default HeroPic
