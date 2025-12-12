import React from 'react'
import HeroPic from './HeroPic'
import HeroText from './HeroText'
import SubHero from './SubHero'

const HeroMain = () => {
  return (
    <div className="relative pt-40 pb-16 max-w-[1300px] mx-auto px-4">
      
      {/* Gradient Glow Background */}
      <div className="absolute -top-10 -left-10 w-[90%] h-[120%] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 blur-3xl rounded-full z-0"></div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <HeroPic />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2">
          <HeroText />
        </div>

        
      </div>
      <div className='mt-10'>
            <SubHero/>
        </div>
    </div>
  )
}

export default HeroMain
