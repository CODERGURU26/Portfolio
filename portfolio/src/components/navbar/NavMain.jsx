import React, { useState } from 'react'
import NavBtn from './NavBtn'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import { GiHamburgerMenu } from "react-icons/gi"

const NavMain = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full z-20 mt-4">
      <div className="flex items-center justify-between bg-black rounded-[10px] border border-orange-200 px-6 py-3">
        <NavLogo />

        <div className="flex items-center gap-6">
          {/* Desktop Links */}
          <div className="hidden lg:flex">
            <NavLinks />
          </div>

          {/* Always-visible Hire Me */}
          <NavBtn />

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl text-white p-2 border border-orange-300 rounded"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile NavLinks in column with transparent cyan */}
      {openMenu && (
        <div className="lg:hidden flex flex-col items-center text-center bg-cyan-500/20 border border-cyan-300 mt-2 rounded-[10px] py-4 gap-4 backdrop-blur-sm">
          <NavLinks />
        </div>
      )}
    </nav>
  )
}

export default NavMain
