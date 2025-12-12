import React from 'react'
import { Link } from 'react-scroll'
const Links = [
  { link: 'AboutMe', section: 'about' },
  { link: 'Skills', section: 'skills' },
  { link: 'Certifications', section: 'certificates' },
  { link: 'Projects', section: 'projects' },
  { link: 'Contact', section: 'contact' }
]

const NavLinks = () => {
  return (
    <ul className="flex flex-col  lg:flex-row items-center gap-4 lg:gap-6 py-4 text-white font-bold text-xl">
      {Links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="text-white cursor-pointer transition-all duration-500 hover:text-cyan-300"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan-300 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
