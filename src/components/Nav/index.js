
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom'

function Nav() {
  const [showNav, setShowNav] = useState(false);
  return (
<>
    <nav className="bg-blue-100 border-blue-100 text-egg-50">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 sm:px-6 py-2.5 ">
    <div className="flex items-center w-full sm:block">
            <ul className={
          (showNav ? "left-0" : "-left-full") +
          " sm:justify-center sm:static fixed rounded-xl bottom-15 top-12 sm:flex sm:space-x-7 items-center sm:bg-transparent bg-blue-50  sm:w-full w-full sm:text-purple-100 text-white sm:space-y-0 space-y-5 p-2 transition-left"
        }>
                <li>
                    <Link to="/" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">About</Link>
                </li>
                <li>
                    <Link to="/portfolio" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Portfolio</Link>
                </li>
                <li>
                  <Link to="/resume" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Resume</Link>
                </li>
                <li>
                    <Link to="/contact" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Contact</Link>
                </li>
            </ul>
        </div>
          {showNav ? (
          <AiOutlineMenu
            onClick={() => setShowNav(!showNav)}
            className="sm:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setShowNav(!showNav)}
            className="sm:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}
    </div>
</nav>
</>
  );
}

export default Nav;