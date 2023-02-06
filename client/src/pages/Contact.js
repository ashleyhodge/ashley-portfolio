import React from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-gray-100">

      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-blue-200 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
        <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <div className="mx-auto max-w-xl flex flex-col space-y-5">
            {/* ::Title Contact Us */}
            <h2 className="text-4xl uppercase">Contact me</h2>
            {/* ::Text */}
            <p className="text-sm text-gray-500">I'm always open to any questions, comments, or opportunities that you might have. Please don't hesitate to reach out if you would like to connect!</p>
            {/* ::Email contact */}
            <a href="#mail" className="inline-flex items-center text-sm text-blue-200 font-semibold hover:text-blue-100">
              <HiOutlineMail className="mr-2 w-5 text-blue-100" />
              ashhodge@comcast.net
            </a>
            
            {/* ::Socials */}
            <div className="flex items-center">
              {/* :Twitter */}
              <a href="#twitter" className="m-1.5 w-8 h-8 inline-flex justify-center items-center text-white filter hover:brightness-125">
                <FaTwitter className="fill-blue-200 hover:fill-blue-100" size={30}/>
              </a>
              {/* :FACEBOOK */}
              <a href="#facebook" className="m-1.5 w-8 h-8 inline-flex justify-center items-center text-white filter hover:brightness-125">
                <AiFillFacebook className="fill-blue-200 hover:fill-blue-100" size={30}/>
              </a>
              {/* :Instagram */}
              <a href="#instagrap" className="m-1.5 w-8 h-8 inline-flex justify-center items-center text-white filter hover:brightness-125">
                <AiOutlineInstagram className="fill-blue-200 hover:fill-blue-100" size={30}/>
              </a>
              <a href="#instagrap" className="m-1.5 w-8 h-8 inline-flex justify-center items-center text-white filter hover:brightness-125">
                <AiFillLinkedin className="fill-blue-200 hover:fill-blue-100" size={30}/>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-blue-200 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;