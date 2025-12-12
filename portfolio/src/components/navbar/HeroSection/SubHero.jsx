import React from 'react'

const SubHero = () => {
  return (
    <div className='w-full border-y border-gray-400 text-gray-400 flex justify-around 
    xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4  bg-cyan-500/20
    '>
        <p className='md:block sm:hidden'>FAST LEARNER</p>
        <p className='md:block sm:hidden'>TEAM WORK</p>
        <p className='uppercase'>Attention to Detail</p>
    </div>
  )
}

export default SubHero