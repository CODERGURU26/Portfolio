import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const ContactMeRight = () => {
    return (
        <div className="w-full max-w-md mx-auto flex flex-col items-start gap-8 text-white">

            {/* Top Image */}
            <div className="w-70 h-70">
                <img
                    src="/email-icon.png"
                    alt="Email Icon"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
                <TfiEmail className="text-2xl text-orange-400" />
                <p className="text-lg">gs6029907@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
                <MdOutlinePhone className="text-2xl text-orange-400" />
                <p className="text-lg">9372036702</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
                <SlLocationPin className="text-2xl text-orange-400" />
                <p className="text-lg">Mumbai, Maharashtra</p>
            </div>

            <div className="flex gap-6 mt-6">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/gururaj-sharma-bb0a70322/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-4xl hover:scale-110 transition-transform duration-300"
                    title="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/CODERGURU26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-4xl hover:scale-110 transition-transform duration-300"
                    title="GitHub"
                >
                    <FaGithub />
                </a>
            </div>

        </div>
    );
};

export default ContactMeRight;
