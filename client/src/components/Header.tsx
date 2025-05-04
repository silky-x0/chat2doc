import React from 'react'
import gDocIcon from '../assets/gDoc.png'

function Header() {

  const handleSignIn = () => {
    console.log("worked");
  };

  return (
    <div className="w-full h-20 relative px-4 md:px-6 bg-zinc-100">
      <div className="flex items-center h-full">
        <img 
          className="w-10 h-10 md:w-14 md:h-12" 
          src={gDocIcon} 
          alt="gDoc logo"
        />
        <div className="ml-4 text-2xl md:text-3xl font-normal font-['Albert_Sans']">
          Chat2Doc
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex items-center space-x-3">
        <button className="px-4 py-2 text-sm md:text-xl bg-teal-500 rounded-full border border-black"
                onClick={handleSignIn}
        >
          Sign in
        </button>
        <button className="px-4 py-2 text-sm md:text-xl bg-white rounded-full border border-black">
          Sign up
        </button>
      </div>
    </div>
  )
}

export default Header