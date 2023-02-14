import { useState } from "react"
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


const Nav = () => {
const [showNav, setShowNav] = useState(false);
const navToggle = () => setShowNav(!showNav);

  return(
    <header>
      <nav>
        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <ul className="flex m-[20px] justify-around">
              <li className="nav">
                home
              </li>
              <li className="nav">
              about
              </li>
              <li className="nav">
                projects
              </li>
              <li className=" nav">
              resume
            </li>
              <li className=" nav">
              contact
            </li>
          </ul>
        </div>
        {/* Mobile Navigation */}
        <div>
              
            <div className="m-3">
                <AiOutlineMenu
                onClick={navToggle}
                className="sm:hidden bg-[#D44416] p-3 rounded-full opacity-[50%] text-white"
                size={60}
              />
              <ul className={
                (showNav ? "top-0" : "-top-[110%]") +
                " absolute transition-all duration-[1.0s] ease-in-out w-full h-full z-10 bg-white right-0  sm:hidden"
              }>
              <AiOutlineClose
              onClick={navToggle}
              size={60}
              className="bg-[#D44416] p-3 rounded-full opacity-[50%] text-white m-3"
              />
              <div className="flex flex-col items-center pt-14">
                <li className="nav-mobile">
                  home
                </li>
                <li className="nav-mobile">
                about
                </li>
                <li className="nav-mobile">
                  projects
                </li>
                <li className="nav-mobile">
                resume
                </li>
                <li className="nav-mobile">
                contact
                </li>
              </div>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  )
}

export default Nav;