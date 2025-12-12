import React from 'react';
import { Link } from 'react-scroll';

const Links = [
  { link: 'AboutMe', section: 'about' },
  { link: 'Skills', section: 'skills' },
  { link: 'Certifications', section: 'certificates' },
  { link: 'Projects', section: 'projects' },
  { link: 'Contact', section: 'contact' }
];

const FooterMain = () => {
  return (
    <div className="px-4">
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-200 mt-24"></div>

      {/* Main Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 max-w-[1200px] mx-auto gap-4 sm:gap-0">
        {/* Name */}
        <p className="text-2xl font-semibold text-amber-50">Gururaj Sharma</p>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-base text-amber-50">
          {Links.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-100}
                className="cursor-pointer hover:text-cyan-300 transition-all duration-300"
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <p className="text-amber-50 font-bold text-sm text-center sm:text-right max-w-[1200px] mx-auto mt-4 mb-12">
        © 2025 Gururaj Sharma | All Rights Reserved
      </p>
    </div>
  );
};

export default FooterMain;
