import React from "react";
import { FaExternalLinkAlt } from 'react-icons/fa'

const Resume = () => {
  return (
    <div
        className="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
        {/* <!-- Name ----------------------------------------------------------------------------------------------------> */}
        <header
          className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8">
          <div className="block">
            <h1 className="mb-0 text-4xl font-bold text-gray-750">
              Ashley Annette Hodge
            </h1>
            {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
            <h2
              className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
              Full Stack Software Developer
            </h2>
            {/* <!--Location ---------------------------------------------------------------------------------------------------------> */}
            <h3
              className="m-0 mt-2 ml-2 font-semibold text-md text-gray-550 leading-snugish">
              Knoxville, TN (willing to relocate)
            </h3>
          </div>
          {/* <!--   Initials Block         --> */}
          <div
            className="justify-between px-3 mt-0 mb-5 text-3xl font-bold leading-none text-gray-200 initials-container print:bg-black py-6">
            <div className="text-center initial">A</div>
            <div className="text-center initial">A</div>
            <div className="text-center initial">H</div>
          </div>
        </header>
        {/* <!-- Column --------------------------------------------------------------------------------------------------> */}
        <div
          className="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance">
          {/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
          <section className="mt-4 first:mt-0">
            {/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
            <div className="break-inside-avoid">
              <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
                <ul className="list-inside pr-7">
                  <li
                    className="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-550 text-sm hover:text-gray-700 print:">
                    <a href="https://ashleyhodge.me" className="group">
                      <span
                        className="mr-2 text-md font-semibold text-gray-700 leading-snugish">
                        Portfolio:
                      </span>
                      ashleyhodge.me
                      <span
                        className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:">
                        <FaExternalLinkAlt className="mx-2" />
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-sm hover:text-gray-700">
                    <a href="https://github.com/ashleyhodge" className="group">
                      <span
                        className="mr-5 text-md font-semibold text-gray-700 leading-snugish">
                        Github:
                      </span>
                      ashleyhodge
                      <span
                        className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:">
                        <FaExternalLinkAlt className="mx-2" />
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-sm hover:text-gray-700">
                    <a href="mailto:ashhodge@comcast.net" className="group">
                      <span
                        className="mr-8 text-md font-semibold text-gray-700 leading-snugish">
                        Email:
                      </span>
                      ashhodge@comcast.net
                      <span
                        className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
                        <FaExternalLinkAlt className="mx-2" />
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-sm hover:text-gray-700">
                    <a href="tel:+18657654952">
                      <span
                        className="mr-5 text-md font-semibold text-gray-700 leading-snugish">
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
          <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
            {/* <!-- To keep in the same column --> */}
            <div className="break-inside-avoid">
              <h2
                className="mb-2 text-md font-bold tracking-widest text-gray-700 print:font-normal">
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
          <section className=" mt-2 border-b-4 first:mt-0">
            {/* <!-- To keep in the same column -------------------------------------------------------------------------> */}
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-md font-bold tracking-widest text-gray-700 print:font-normal">
                EXPERIENCE
              </h2>
              {/* <!--Job 1--> */}
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3
                    className="text-md font-semibold text-gray-650 leading-snugish">
                    Youth Substance Abuse Prevention Specialist 
                  </h3>
                  <p className="leading-normal text-sm text-gray-550">
                    August 2021 &ndash; August 2022 | Sidney, MT
                  </p>
                </header>
                <ul className="mt-2.1 text-sm text-gray-700 leading-normal pr-2">
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550">
                      &#x029EB; 
                    </span>
                    Served as program coordinator for ensuring drug-free communities. 
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550">
                      &#x029EB;
                    </span>
                    Planned and coordinated strategic county-wide youth substance abuse prevention coalition programs.
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550">
                      &#x029EB;
                    </span>
                    Arranged and led in-person and online coalition meetings with law enforcement, healthcare, public school, local media, and mental health representatives to enforce policies and regulations. 
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550">
                      &#x029EB;
                    </span>
                    Leveraged technical skills to prepare original content and execute all social media platforms for The Dry Society.
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550">
                    &#x029EB;
                    </span>
                    provided commentary to improve maintainability
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550">
                      &#x029EB;
                    </span>
                    Played key role in establishing Drug-Free Communities by developing and implementing robust strategic / action plans.
                  </li>
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550">
                      &#x029EB;
                    </span>
                    Scheduled and executed prevention events for over 300 students.
                  </li>
                </ul>
              </section>
              {/* <!--                Additional Jobs Would Go Here--> */}
            </div>
          </section>
          
          {/* <!--Education --------------------------------------------------------------------------------------------------------> */}
          <section className=" pb-4 mt-1 border-b-4 ml-3 first:mt-0">
            {/* <!-- To keep in the same column --> */}
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-md font-bold tracking-widest text-gray-700 print:font-normal">
                EDUCATION
              </h2>
              {/* <!-- school ---------------------------------------------------------------------------> */}
              <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold text-gray-700 leading-snugish">
                    Vanderbilt University
                  </h3>
                  <p className="leading-normal text-sm text-gray-550">
                    2021 &ndash; 2022 | Certificate
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm text-gray-650">
                  <span
                    className="font-semibold text-gray-700 text-md leading-snugish">
                    Subject: 
                  </span>
                  Full Stack Web Development
                </p>
              </section>
              {/* <!--school 2---------------------------------------------------------------------------------------------> */}
              <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold text-gray-700 leading-snugish">
                    University of Tennessee
                  </h3>
                  <p className="leading-normal text-sm text-gray-550">
                    2016 &ndash; 2020 | Bachelor of Arts
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm text-gray-650">
                  <span className="font-semibold text-gray-700 text-md leading-snugish">
                    Major:
                  </span>
                  Psychology
                </p>
                <p className="leading-normal text-gray-700 text-sm">
                  <span className="font-semibold text-gray-700 text-sm leading-snugish">
                    Minor:
                  </span>
                  Business Administration
                </p>
              </section>
              {/* <!--school 3 ---------------------------------------------------------------------------------> */}
              <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold text-gray-700 leading-snugish">
                    Pellissippi State Community College
                  </h3>
                  <p className="leading-normal text-sm text-gray-550">
                    2014 &ndash; 2016 | Associates of Science
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm text-gray-650">
                  <span className="font-semibold text-gray-700 text-md leading-snugish">
                    Subject:
                  </span>
                  Biology
                </p>
              </section>
            </div>
          </section>
          </div>
          {/* <!--Projects ----------------------------------------------------------------------------------------------------------> */}
          <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
            <div className="break-inside-avoid">
              {/* <!-- To keep in the same column --> */}
              <h2 className="mb-2 text-md font-bold tracking-widest text-gray-700 print:font-normal">
                PROJECTS
              </h2>
              {/* <!--Project 1 ---------------------------------------------------------------------------------------------------------> */}
              <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    <a
                      href="https://github.com/WebPraktikos/universal-resume"
                      className="group"
                    >
                      Portfolio Website
                      <span
                        className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                      >
                        ↗
                      </span>
                    </a>
                    <span
                      className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                    >
                      <a
                        href="https://github.com/Thomashighbaugh/ThomasLeonHighbaugh-Personal-Site"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </span>
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    Since 2019 | JSX, React, Next.js, SCSS
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  A unique and streamlined developer portfolio site that
                  combines the useful aspect of development portfolios with a
                  blog using Next.js. Interface is clean and features graphics
                  designed personally for use within the site.
                </p>
              </section>
              {/* <!--Project 2--> */}
              <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
                <header>
                  <h3
                    className="text-lg font-semibold text-gray-700 leading-snugish"
                  >
                    <a
                      href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
                      className="group"
                    >
                      Keeper CRM
                      <span
                        className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                      >
                        ↗
                      </span>
                    </a>
                    <span
                      className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                    >
                      <a
                        href="https://github.com/Thomashighbaugh/mern-contact-keeper"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </span>
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    2021 | MERN
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Written as part of the process of learning the MERN stack,
                  this application stores contacts for registered users and
                  saves the information they input between sessions.
                </p>
              </section>
              {/* <!--Project 3----------------------------------------------------------> */}
              <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
                <header>
                  <h3
                    className="text-lg font-semibold text-gray-700 leading-snugish"
                  >
                    <a href="https://g5-blog-ccl-ife.vercel.app/" className="group">
                      Crazy-Wise Gatsby Starter
                      <span
                        className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                      >
                        ↗
                      </span>
                    </a>
                    <span
                      className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                    >
                      <a
                        href="https://github.com/Thomashighbaugh/crazy-wise-gatsby-starter"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </span>
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    2020 | React, Styled Components, Gatsby.js
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  A starter blog for Gatsby.js that has tinaCMS integrated into
                  development server to ease the production of content and a
                  very distinct appearance that is both modern and functional.
                  All graphics used in the page heroes are custom pieces made
                  for the site.
                </p>
              </section>
              {/* <!--Project 4----------------------------------------------------------> */}
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3
                    className="text-lg font-semibold text-gray-700 leading-snugish"
                  >
                    <a
                      href="https://github.com/Thomashighbaugh/Opitx/releases"
                      className="group"
                    >
                      Opitx Markdown Editor
                      <span
                        className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                      >
                        ↗
                      </span>
                    </a>
                    <span
                      className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                    >
                      <a
                        href="https://github.com/Thomashighbaugh/Opitx/releases"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </span>
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    2019 | Electron, React, SCSS
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  An answer to a personal problem with Markdown editors avalable
                  on Linux which provided a less than transparent process of
                  saving in user defined locations that evolved into a Markdown
                  editor written using electron and packaged for all major Linux
                  distributions.
                </p>
              </section>
            </div>
          </section>
          {/* <!--Begin Skills -----------------------------------------------------------------------------------------------------> */}
          <section className="pb-4 mt-4 first:mt-0">
            {/* <!-- To keep in the same column --> */}
            <div className="break-inside-avoid">
              <h2
                className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
              >
                SKILLS
              </h2>
              {/* <!--Full Stack Development -------------------------------------------------------------------------------------------> */}
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3
                    className="text-lg font-semibold text-gray-700 leading-snugish"
                  >
                    Full Stack Web Development
                  </h3>
                </header>

                <div className="my-1 last:pb-1">
                  <ul
                    className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1"
                  >
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      HTML5
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      CSS3
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      SCSS
                    </li>

                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Tailwind.css
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      LESS
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Javascript
                    </li>

                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Typescript
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Node.js
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      JSX
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      React
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      React-Router
                    </li>

                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Next.js
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Redux
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Vue
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Express.js
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      NoSQL
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      MongoDB
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      MERN
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      PHP
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      LAMP
                    </li>
                  </ul>
                </div>
              </section>

              {/* <!--DevOps ------------------------ -------------------------------------------------------------------------------------------> */}

              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3
                    className="font-semibold text-gray-700 text-m leading-snugish"
                  >
                    DevOps
                  </h3>
                </header>
                <div className="my-1 last:pb-1">
                  <ul
                    className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1"
                  >
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Docker
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Docker-Compose
                    </li>

                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Version Control
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Git
                    </li>

                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      CI/CD
                    </li>

                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      GitLab Pipelines
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Github Actions
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Jenkins
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      AWS
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Google Cloud
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Firebase
                    </li>
                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Serverless Hosting
                    </li>

                    <li
                      className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                    >
                      Linux
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