import React from 'react';

const SkillPic = () => {
  return (
    <div className="relative w-full h-[50px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/SkillPic.jpg" // adjust path if needed
        alt="Skill Section Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SkillPic;
