import React from "react";
import { Link } from 'react-scroll';
import { LuArrowDownRight } from "react-icons/lu";

const AboutMeText = () => {
  return (
    <div className="flex flex-col  md:items-start sm:items-center md:text-left">
      <h1 className="text-6xl  text-cyan-300 mb-6">About Me</h1>

      <p className="text-white mb-6">
        Hello ! <strong> I'm Self-Motivated Web Developer</strong> and i can
        create 
         <strong> Responsive and User-friendly Websites</strong> , recently i have
        built an
        <br />
        <strong> E-commerce Website</strong> named <strong>SwitKart</strong> with
        the help of
        <strong>ReactJS , Firebase , cloudinary & Razorpay Integration </strong>
      </p>
      <ul className="text-white">
        <li>
          {" "}
          <strong>Location:</strong> Mumbai
        </li>
        <li>
          {" "}
          <strong>email:</strong> gs6029907@gmail.com
        </li>
        <li>
          {" "}
          <strong>Education:</strong> B.E. In Computer Science
        </li>
      </ul>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={-100} // Adjust offset based on your header height
        spy={true}
      >
        <button
          className="border border-orange-400 rounded-full py-2 px-6 
        text-lg flex items-center mt-10 hover:bg-orange-400 text-white hover:text-slate-100
        transition-all duration-500 cursor-pointer group md:self-start sm:self-center"
        >
          View Projects
          <LuArrowDownRight className="ml-2 text-xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
        </button>
      </Link>
    </div>
  );
};

export default AboutMeText;
