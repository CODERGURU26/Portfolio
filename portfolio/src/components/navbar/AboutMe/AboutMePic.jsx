import React from 'react'

const AboutMePic = () => {
  return (
    <div className="h-[500px] w-[300px] relative group">
  {/* Image container */}
  <div className="h-full w-full rounded-[50px] absolute overflow-hidden z-10">
    <img
      src="../../AboutMePic.jpg"
      alt="About Me Image"
      className="h-full w-auto object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  {/* Offset background shape */}
  <div className="h-[500px] w-[300px] absolute -z-10 bottom-[-30px] left-[-30px]
    rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px]
    bg-gradient-to-tr from-rose-400 via-pink-400 to-orange-300 blur-sm">
  </div>
</div>
  )
}

export default AboutMePic