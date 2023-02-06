import React from "react";
import { TbSchool } from 'react-icons/tb'


const About = () => {
  return (
    // <!-- component -->
<div className="container shadow-xl bg-gray-200 mx-auto w-full h-full">
  <div className="wrap overflow-hidden p-10 h-full">
    <h1 className="mb-3 font-bold text-blue-200 text-2xl text-center">My Journey so far...</h1>
    
    {/* <!-- right timeline --> */}
    <div className="mb-8 sm:flex items-center w-full right-timeline">
      <div className="order-1 sm:w-5/12 w-px"></div>

      <img className="z-20 flex items-center order-1 sm:shadow-xl  md:w-1/2 md:h-60  rounded-t-lg md:rounded-l-lg md:rounded-r-none lg:rounded-lg" src={require('./images/school.jpg')} alt="school"></img>
      <div className="order-1 bg-blue-50 rounded-b-lg md:rounded-lg md lg:rounded-l-none shadow-xl px-6 py-4">
        
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Graduated from the University of Tennessee with a B.A. in Psychology</h3>
        <h4 className="mb-3 text-gray-800 text-l">May 2020</h4>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">After 4 years, I graduated as a psychology major with a business administration minor. While enrolled, I took part in alternative spring break programs as a way to serve communities in need. Although I've changed career paths since graduation, I value my time here and still use the skills that I learned during my time here.</p>
      </div>
    </div>

    {/* <!-- left timeline --> */}
    <div className="mb-8 sm:flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>

      <img className="z-20 flex items-center order-1 sm:shadow-xl sm:w-1/2 sm:h-60 rounded-t-lg md:rounded-r-lg md:rounded-l-none lg:rounded-lg" src={require('./images/americorps.JPG')}></img>
      <div className="order-1 bg-blue-200 rounded-b-lg md:rounded-lg lg:rounded-r-none shadow-xl px-6 py-4">

        <h3 className="mb-3 font-bold text-white text-xl">Served as an AmeriCorps member in Montana</h3>
        <h4 className="mb-3 text-white text-l">August 2020</h4>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">While I love my hometown, I felt like it was the perfect time to find out who I could be in a new environment. I served as a youth substance abuse prevention specialist in a small town called Sidney, Montana. While I was there, I led coalition meeting, helped with grant writing, and met with youth in the community about ways to prevent teens from turning towards drugs and alcohol. This small town will always have a place in my heart!</p>
      </div>
    </div>
    
    {/* <!-- right timeline --> */}
    <div className="mb-8 sm:flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>

      <img className="z-20 flex items-center order-1 sm:shadow-xl  md:w-1/2 md:h-60  rounded-t-lg md:rounded-l-lg md:rounded-r-none lg:rounded-lg" src={require('./images/boot_camp.JPG')}></img>
      <div className="order-1 bg-blue-50 rounded-b-lg md:rounded-lg md lg:rounded-l-none shadow-xl px-6 py-4">

        <h3 className="mb-3 font-bold text-gray-800 text-xl">Attended Vanderbilt Coding Boot Camp</h3>
        <h4 className="mb-3 text-gray-800 text-l">December 2021</h4>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">After spending years working toward being a full time healthcare worker, I decided that it wasn't my passion. I've always had an interest in computer science, but never the confidence to pursue a career in it. After my time in AmeriCorps, I decided to find my true passion, which led me to Vanderbilt Coding Boot Camp. This was the perfect jumping off point for a career as a Software Developer. I'm so grateful to have learned here and I know that this has helped set me on the right path.</p>
      </div>
    </div>

    {/* <!-- left timeline --> */}
    <div className="mb-8 sm:flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      
      <img className="z-20 flex items-center order-1 sm:shadow-xl sm:w-1/2 sm:h-60 rounded-t-lg md:rounded-r-lg md:rounded-l-none lg:rounded-lg"  src={require('./images/continuingeducation.JPG')}></img>
      <div className="order-1 bg-blue-200 rounded-b-lg md:rounded-lg lg:rounded-r-none shadow-xl px-6 py-4">

        <h3 className="mb-3 font-bold text-white text-xl">Continuing Education</h3>
        <h4 className="mb-3 text-white text-l">May 2022</h4>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">After my time attending Vanderbilt Coding Boot Camp, I've been focusing on building my portfolio. I'm currently building an e-commerce website to sell handcrafted goods. While I know this is an important step in helping me find a job, I've also been focusing on other things. I'm currently learning Java and I've dedicated time each week to studying the fundamentals of computer science like data structure and algorithms. I'm confident that these steps will not only help me reach the next step in my career, but also help me become a better developer all around!</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default About;
