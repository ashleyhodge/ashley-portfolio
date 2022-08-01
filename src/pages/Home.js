import React from "react";
import { Link } from 'react-router-dom';
import { FaBriefcase, FaTwitter } from 'react-icons/fa'
import { MdOutlineMyLocation } from 'react-icons/md'
import { AiFillFacebook, AiOutlineGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'

const Home = () => {

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
	{/* <!--Main Col--> */}
	<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0">
	

		<div className="p-4 md:p-8 text-center lg:text-left">
			{/* <!-- Image for mobile view--> */}
			<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-auto bg-center">
				<img src={require("./images/mobile-profile.png")} className="rounded-full shadow-xl w-48 h-48 object-contain"></img>
			</div>
			
			<h1 className="text-3xl font-bold pt-8 lg:pt-0">Ashley Hodge</h1>
			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-200 "></div>
			<p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><FaBriefcase className="mr-4 fill-blue-200"/> Full Stack Software Developer</p>
			<p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><MdOutlineMyLocation className="mr-4 fill-blue-200"/> Knoxville, TN (willing to relocate) </p>
			<p className="pt-8 text-sm">Hi there! Welcome to my website! My name is Ashley (she/her) and I'm a Full Stack Developer from Knoxville, TN. I graduated from Vanderbilt University Coding Boot Camp in May 2022 and since then I've been working as a freelance developer tob build my portfolio and increase my skill level. Fill free to have a look around and let me know if you would like to discuss my experience, projects, or any job opportunities!</p>

			<div className="pt-12 pb-8">
				<button className="bg-blue-200 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full">
					<Link to="/contact">Get In Touch</Link>
				</button> 
			</div>

			<div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
				<a className="link" href="#" data-tippy-content="@facebook_handle"><AiFillFacebook className="fill-blue-200 hover:fill-blue-100" size={30}/></a>
				<a className="link" href="#" data-tippy-content="@twitter_handle"><FaTwitter className="fill-blue-200 hover:fill-blue-100" size={30}/></a>
				<a className="link" href="#" data-tippy-content="@github_handle"><AiOutlineGithub className="fill-blue-200 hover:fill-blue-100" size={30}/></a>
				<a className="link" href="#" data-tippy-content="@instagram_handle"><AiOutlineInstagram className="fill-blue-200 hover:fill-blue-100" size={30}/></a>
				<a className="link" href="#" data-tippy-content="@instagram_handle"><AiFillLinkedin className="fill-blue-200 hover:fill-blue-100" size={30}/></a>
			</div>
		</div>

	</div>
	
	{/* <!--Img Col--> */}
	<div className="w-full lg:w-2/5">
		{/* <!-- Big profile image for side bar (desktop) --> */}
		<img src={require("./images/profile-pic.JPG")} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
		
	</div>
	

</div>
  )
}

export default Home;