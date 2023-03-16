import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className="mt-auto">
    <div className="mx-5 my-[50px]">
      <div className='border-2 border-[#302DE0] opacity-[50%] rounded'></div>
      <div className="hidden sm:block">
          <ul className="grid grid-cols-5 text-center m-[20px] opacity-[30%] justify-around">
            <Link to='/'>
              <li>
                home
              </li>
            </Link> 
            <Link to='/about'>
              <li>
                about
              </li>
            </Link>
            <Link to='/projects'>
              <li>
                projects
              </li>
            </Link>  
            <Link to='/resume'>
              <li>
                resume
              </li>
            </Link> 
            <Link to='/contact'>
              <li>
                contact
              </li>
            </Link>  
          </ul>
          <div className='border border-[#302DE0] opacity-[50%] mx-20 rounded'></div>
        </div>
        <div className="flex justify-center items-center my-[20px] opacity-[30%]">
          <article className="max-w-2xl">
            <p className="text-center ">This is a professional portfolio designed and built by me, Ashley Hodge. Starting my development journey in January 2022, this has become a place for me to display the skills I've learned and the <Link className="hover:text-gray-600" to='/projects'>projects</Link> I've made during my development career.</p> 
          </article>
        </div>
        <div className='border border-[#302DE0] opacity-[10%] mx-20 rounded'></div>
        <div className='flex justify-evenly mt-[20px] opacity-[30%]'>
          <a href='https://www.facebook.com/ashley.hodge.7165/' target="_blank" rel="noreferrer">
            <BsFacebook size={28} className='mr-2' />
          </a>
          <a href='https://twitter.com/Ashley__Hodge' target="_blank" rel="noreferrer">
            <BsTwitter size={28} className='mr-2' />
          </a>
          <a href='https://www.instagram.com/ashley__hodge/' target="_blank" rel="noreferrer">
            <BsInstagram size={28} className='mr-2'/>
          </a>
          <a href='https://github.com/ashleyhodge' target="_blank" rel="noreferrer">
            <BsGithub size={28} className='mr-2'/>
          </a>
          <a href='https://www.linkedin.com/in/ashley-hodge/' target="_blank" rel="noreferrer">
            <BsLinkedin size={28}/>
          </a>
        </div>
        <div className="text-center my-[20px] opacity-[30%]">
          <p>Copyright © 2023 Ashley Hodge</p>
          <p>All Rights Reserved</p>
        </div>
    </div>
    </footer>
  )
}

export default Footer;