import React from "react";
import { FaExternalLinkAlt } from 'react-icons/fa'
import { AiOutlineGithub, AiOutlineDownload } from 'react-icons/ai'


const Resume = () => {
  return (
    <div
        className="max-w-3xl mb-4 p-3 mx-auto my-auto bg-gray-100 shadow-lg page lg:h-letter md:max-w-letter md:h-letter sm:p-9 md:p-16 lg:mt-6 rounded">
        {/* <!-- Name ----------------------------------------------------------------------------------------------------> */}
        <a href="/Ashley_Hodge_Resume.pdf" download={"ashley_hodge_resume.pdf"}><AiOutlineDownload className="fill-blue-200" size={30}/> </a>
        <header
          className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-4 border-blue-50">
          <div className="block">
            <h1 className="mb-0 text-4xl font-bold text-blue-200">
              Ashley Annette Hodge
            </h1>
            {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
            <h2
              className="m-0 ml-2 text-2xl font-semibold text-blue-100 leading-snugish">
              Full Stack Software Developer
            </h2>
            {/* <!--Location ---------------------------------------------------------------------------------------------------------> */}
            <h3
              className="m-0 mt-2 ml-2 font-semibold text-md text-blue-200 leading-snugish">
              Knoxville, TN (willing to relocate)
            </h3>
          </div>
          {/* <!--   Initials Block         --> */}
          <div
            className="justify-between px-3 mt-0 mb-5 text-3xl font-bold leading-none text-blue-50 initials-container py-6">
            <div className="text-center initial">A</div>
            <div className="text-center initial">A</div>
            <div className="text-center initial">H</div>
          </div>
        </header>
        {/* <!-- Column --------------------------------------------------------------------------------------------------> */}
        <div
          className="col-gap-16 md:col-count-2 md:h-letter-col-full col-fill-balance">
          {/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
          <section className="mt-4 first:mt-0">
            {/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
            <div className="break-inside-avoid">
              <section className="pb-2 mb-2 border-b-4 border-blue-50 break-inside-avoid">
                <ul className="list-inside pr-7">
                  <li className="mt-1 leading-normal text-sm hover:text-blue-50">
                    <a href="https://ashleyhodge.me" target="_blank">
                      <span className="mr-2 text-md font-semibold text-blue-100 leading-snugish">
                        Portfolio:
                      </span>
                      ashleyhodge.me
                      <span className="inline-block">
                        <FaExternalLinkAlt className="mx-2 fill-blue-100" />
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal text-sm hover:text-blue-50">
                    <a href="https://github.com/ashleyhodge" target="_blank">
                      <span
                        className="mr-5 text-md font-semibold text-blue-100 leading-snugish">
                        Github:
                      </span>
                      ashleyhodge
                      <span
                        className="inline-block">
                        <FaExternalLinkAlt className="mx-2 fill-blue-100" />
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal text-sm hover:text-blue-50">
                    <a href="mailto:ashhodge@comcast.net" className="group">
                      <span
                        className="mr-7 text-md font-semibold text-blue-100 leading-snugish">
                        Email:
                      </span>
                      ashhodge@comcast.net
                      <span
                        className="inline-block font-normal">
                        <FaExternalLinkAlt className="mx-2 fill-blue-100" />
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal text-sm hover:text-blue-50">
                    <a href="tel:+18657654952">
                      <span
                        className="mr-5 text-md font-semibold text-blue-100 leading-snugish">
                        Phone:
                      </span>
                      +1(865)765-4952
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
          {/* <!--Summary ----------------------------------------------------------------------------------------------------------> */}
          <section className="pb-2 pb-4 mt-4 border-b-4 border-blue-50 first:mt-0">
            {/* <!-- To keep in the same column --> */}
            <div className="break-inside-avoid">
              <h2
                className="mb-2 text-md font-bold tracking-widest text-blue-200">
                SUMMARY
              </h2>
              <section className="mb-2 break-inside-avoid">
                <p className="mt-2 leading-normal text-gray-700 text-sm">
                Creative and technically minded professional with ability to coordinate development and implementation of software programs / applications. Enthusiastic full-stack software engineer; talent for outperforming in fast-paced environment and building scalable and high-performance applications. Aptitude for collaborating with designer and engineer teams for developing innovative solutions to improve user experience. Capacity to resolve queries of customers and provide excellent technical support. Capable of testing and evaluating new programs, while identifying areas of modification / improvement in existing programs. Refined communicator and problem-solver with strong interpersonal, analytical, quick-learning, and attention to detail skills.
                </p>
              </section>
            </div>
          </section>
          
          <div className="grid grid-cols-2">
          {/* <!--Experience ------------------------------------------------------------------------------------------------------> */}
          <section className=" border-b-4 border-blue-50 first:mt-0">
            {/* <!-- To keep in the same column -------------------------------------------------------------------------> */}
            <div className="break-inside-avoid">
              <h2 className="mb-2 mt-4 text-md font-bold tracking-widest text-blue-200">
                EXPERIENCE
              </h2>
              {/* <!--Job 1--> */}
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3
                    className="text-md font-semibold text-blue-100 leading-snugish">
                    Youth Substance Abuse Prevention Specialist 
                  </h3>
                  <p className="leading-normal text-sm text-blue-200">
                    August 2021 &ndash; August 2022 | Sidney, MT
                  </p>
                </header>
                <ul className="mt-2.1 text-sm text-gray-700 leading-normal pr-2">
                  <li>
                    <span className="mr-2 text-gray-500">
                      &#x029EB; 
                    </span>
                    Served as program coordinator for ensuring drug-free communities. 
                  </li>
                  <li>
                    <span className="mr-2 text-gray-500">
                      &#x029EB;
                    </span>
                    Planned and coordinated strategic county-wide youth substance abuse prevention coalition programs.
                  </li>
                  <li>
                    <span className="mr-2 text-gray-500">
                      &#x029EB;
                    </span>
                    Arranged and led in-person and online coalition meetings with law enforcement, healthcare, public school, local media, and mental health representatives to enforce policies and regulations. 
                  </li>
                  <li>
                    <span className="mr-2 text-gray-500">
                      &#x029EB;
                    </span>
                    Leveraged technical skills to prepare original content and execute all social media platforms for The Dry Society.
                  </li>
                  <li>
                    <span className="mr-2 text-gray-500">
                    &#x029EB;
                    </span>
                    provided commentary to improve maintainability
                  </li>
                  <li>
                    <span className="mr-2 text-gray-500">
                      &#x029EB;
                    </span>
                    Played key role in establishing Drug-Free Communities by developing and implementing robust strategic / action plans.
                  </li>
                  <li>
                    <span className="mr-2 text-gray-500">
                      &#x029EB;
                    </span>
                    Scheduled and executed prevention events for over 300 students.
                  </li>
                </ul>
              </section>
            </div>
          </section>
          
          {/* <!--Education --------------------------------------------------------------------------------------------------------> */}
          <section className=" pb-4 mt-4 border-b-4 border-blue-50 ml-3 first:mt-0">
            {/* <!-- To keep in the same column --> */}
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-md font-bold tracking-widest text-blue-200">
                EDUCATION
              </h2>
              {/* <!-- school ---------------------------------------------------------------------------> */}
              <section className="pb-4 mt-4 mb-4 border-b-2 border-blue-50 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold text-blue-100 leading-snugish">
                    Vanderbilt University
                  </h3>
                  <p className="leading-normal text-sm text-gray-700">
                    2021 &ndash; 2022 | Certificate
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm text-blue-200">
                  <span
                    className="font-semibold text-blue-100 mr-2 text-md leading-snugish">
                    Subject: 
                  </span>
                  Full Stack Web Development
                </p>
              </section>
              {/* <!--school 2---------------------------------------------------------------------------------------------> */}
              <section className="pb-4 mt-4 mb-4 border-b-2 border-blue-50 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold text-blue-100 leading-snugish">
                    University of Tennessee
                  </h3>
                  <p className="leading-normal text-sm text-gray-700">
                    2016 &ndash; 2020 | Bachelor of Arts
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm text-blue-200">
                  <span className="font-semibold text-blue-100 mr-2 text-md leading-snugish">
                    Major:
                  </span>
                  Psychology
                </p>
                <p className="leading-normal text-blue-200 text-sm">
                  <span className="font-semibold text-blue-100 mr-2 text-sm leading-snugish">
                    Minor:
                  </span>
                  Business Administration
                </p>
              </section>
              {/* <!--school 3 ---------------------------------------------------------------------------------> */}
              <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold text-blue-100 leading-snugish">
                    Pellissippi State Community College
                  </h3>
                  <p className="leading-normal text-sm text-gray-700">
                    2014 &ndash; 2016 | Associates of Science
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm text-blue-200">
                  <span className="font-semibold text-blue-100 mr-2 text-md leading-snugish">
                    Subject:
                  </span>
                  Biology
                </p>
              </section>
            </div>
          </section>
          </div>
          {/* <!--Projects ----------------------------------------------------------------------------------------------------------> */}
          <section className="pb-2 pb-4 mt-4 border-b-4 border-blue-50 first:mt-0">
            <div className="break-inside-avoid">
              {/* <!-- To keep in the same column --> */}
              <h2 className="mb-2 text-md font-bold tracking-widest text-blue-200">
                PROJECTS
              </h2>
              {/* <!--Project 1 ---------------------------------------------------------------------------------------------------------> */}
              <section className="pb-4 mb-4 border-b-2 border-blue-50 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold text-blue-100 leading-snugish">
                    <a href="https://github.com/WebPraktikos/universal-resume" target="_blank">
                      Portfolio Website
                      <span className="inline-block mr-3">
                        <FaExternalLinkAlt className="mx-2 fill-blue-100 hover:fill-blue-50"/>
                      </span>
                    </a>
                    <span className="inline-block">
                      <a href="https://github.com/Thomashighbaugh/ThomasLeonHighbaugh-Personal-Site" target="_blank">
                        <AiOutlineGithub className="fill-blue-100 hover:fill-blue-50"/>
                      </a>
                    </span>
                  </h3>
                  <p className="leading-normal text-sm text-blue-200">
                    Since 2022 | JSX, React, Node.js, Tailwind.css
                  </p>
                </header>
                <p className="mt-2.1 text-sm text-gray-600 leading-normal">
                  A unique and streamlined developer portfolio site that
                  combines the useful aspect of development portfolios with a
                  blog using Next.js. Interface is clean and features graphics
                  designed personally for use within the site.
                </p>
              </section>
              {/* <!--Project 2--> */}
              <section className="pb-4 mb-4 border-b-2 border-blue-50 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold text-blue-100 leading-snugish">
                    <a href='https://hanzai-watchers.herokuapp.com/' target="_blank">
                      Hanzai Watchers (Crime Watchers)
                      <span className="inline-block mr-3">
                      <FaExternalLinkAlt className="mx-2 fill-blue-100 hover:fill-blue-50"/>
                      </span>
                    </a>
                    <span className="inline-block">
                      <a href='https://github.com/ashleyhodge/anime_crime-watchers' target="_blank">
                      <AiOutlineGithub className="fill-blue-100 hover:fill-blue-50"/>
                      </a>
                    </span>
                  </h3>
                  <p className="leading-normal text-sm text-blue-200">
                    Completed 2022 | MERN Stack
                  </p>
                </header>
                <ul className="mt-2.1 text-sm text-gray-600 leading-normal pr-2">
                  <li>
                    <span className="transform -translate-y-px select-none pr-2 text-gray-550">
                      &#x029EB; 
                    </span>
                    Developed an application designed to allow users for submitting crime tips as well as meet others who feel passionately about serving their community and stopping crime.
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none pr-2 text-gray-550">
                      &#x029EB; 
                    </span>
                    Utilized tools such as React, React-Bootstrap, Redux, JavaScript, animate.css, tailwind.css, Node, Express, MongoDB, Mongoose, GraphQL, Apollo, and deployed with Heroku.
                  </li>
                </ul>
              </section>
              {/* <!--Project 3----------------------------------------------------------> */}
              <section className="pb-4 mb-4 border-b-2 border-blue-50 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold text-blue-100 leading-snugish">
                    <a href='https://access-tennesee.herokuapp.com/' target="_blank">
                      Access Tennessee
                      <span className="inline-block mr-3">
                      <FaExternalLinkAlt className="mx-2 fill-blue-100 hover:fill-blue-50"/>
                      </span>
                    </a>
                    <span className="inline-block">
                      <a href='https://github.com/ashleyhodge/Access-Tennessee' target="_blank">
                      <AiOutlineGithub className="fill-blue-100 hover:fill-blue-50"/>
                      </a>
                    </span>
                  </h3>
                  <p className="leading-normal text-sm text-blue-200">
                    Completed 2022 | JavaScript, Node.js, HTML5, CSS, Bootstrap, Express.js
                  </p>
                </header>
                <ul className="mt-2.1 text-sm text-gray-600 leading-normal pr-2">
                  <li>
                    <span className="transform -translate-y-px select-none pr-2 text-gray-550">
                      &#x029EB; 
                    </span>
                    Facilitated individuals by providing chance to rate and directly interact with businesses in community for explaining specific types of impairments/ disabilities needs.
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none pr-2 text-gray-550">
                      &#x029EB; 
                    </span>
                    Utilized jQuery, basic JavaScript, and Backend with Handlebars and Node dependencies like Animate.css. to implement UI/UX design for Access Tennessee.
                  </li>
                </ul>
              </section>
              {/* <!--Project 4----------------------------------------------------------> */}
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold text-blue-100 leading-snugish">
                    <a href='https://d1sl.github.io/symmetrical-robot/' target="_blank">
                      Sour Screens
                      <span className="inline-block mr-3">
                      <FaExternalLinkAlt className="mx-2 fill-blue-100 hover:fill-blue-50"/>
                      </span>
                    </a>
                    <span className="inline-block">
                      <a href='https://github.com/ashleyhodge/symmetrical-robot' target="_blank">
                        <AiOutlineGithub className="fill-blue-100 hover:fill-blue-50" />
                      </a>
                    </span>
                  </h3>
                  <p className="leading-normal text-sm text-blue-200">
                    Completed 2021 | HTML5, CSS, JavaScript, RestAPI
                  </p>
                </header>
                <ul className="mt-2.1 text-sm text-gray-600 leading-normal pr-2">
                  <li>
                    <span className="transform -translate-y-px select-none pr-2 text-gray-550">
                      &#x029EB; 
                    </span>
                    Designed website allows to search for an actor / actress and present list of movies with most poorly rated.
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none pr-2 text-gray-550">
                      &#x029EB; 
                    </span>
                    Implemented UI/UX design for this project; Utilized Movie Database API for data of actors and movie ratings.
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none pr-2 text-gray-550">
                      &#x029EB; 
                    </span>
                    Utilized JavaScript, jQuery, IMDb API, HTML, CSS, and Bootstrap during project.
                  </li>
                </ul>
              </section>
            </div>
          </section>
          {/* <!--Begin Skills -----------------------------------------------------------------------------------------------------> */}
          <section className="pb-4 mt-4 first:mt-0">
            {/* <!-- To keep in the same column --> */}
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-md font-bold tracking-widest text-blue-200">
                SKILLS
              </h2>
              <section className="mb-2 break-inside-avoid">

                <div className="my-1 last:pb-1">
                  <ul className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6-mb-1">
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      HTML5
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      CSS3
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Tailwind.css
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      animate.css
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Bootstrap
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Javascript
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Node.js
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      JSX
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      React
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      React-Router
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      MySQL
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Sequelize
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Express.js
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      NoSQL
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      MongoDB
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Mongoose
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Apollo
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      GraphQL
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      RestAPIs
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Git
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      Version Control
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-gray-200 leading-relaxed bg-blue-200 rounded">
                      UI/ UX Design
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </section>
        </div>
        </div>
  )
}
export default Resume;