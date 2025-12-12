import React from 'react';

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div
      className="transition-transform hover:-translate-y-4 duration-300 group"
      title={text}
    >
      <div className="w-[120px] h-[250px] bg-amber-500 rounded-t-full flex flex-col items-center justify-start pt-6 gap-4 shadow-lg group-hover:shadow-cyan-400/50">
        <div className="bg-white text-5xl text-cyan-400 rounded-full p-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-cyan-300">
          {imgSvg}
        </div>
        <p className="text-white font-bold group-hover:text-cyan-300">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
