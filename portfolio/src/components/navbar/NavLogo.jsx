import React from 'react'

const NavLogo = () => {
  return (
    <div>
      {/* Full name on md and up */}
      <h1 className="hidden md:block text-white text-2xl font-bold">
        Gururaj Sharma
      </h1>

      {/* Initials on small screens */}
      <h1 className="block md:hidden text-white text-4xl font-extrabold font-special">
        GS
      </h1>
    </div>
  )
}

export default NavLogo
