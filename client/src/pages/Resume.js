import { FaExternalLinkAlt } from 'react-icons/fa'
import { AiOutlineGithub,  } from 'react-icons/ai'
// AiOutlineDownload

const Resume = () => {
  return (
    <div
        className="max-w-3xl mb-4 p-3 mx-auto my-auto lg:h-letter md:max-w-letter md:h-letter sm:p-9 md:p-16 lg:mt-6 rounded opacity-[50%]">
        {/* Name */}
        {/* DOES NOT WORK */}
        {/* <a href="../../assets/Ashley_Hodge_Resume.pdf" download={"Ashley_Hodge_Resume.pdf"} className='flex justify-end'><AiOutlineDownload size={30}/> </a> */}
        {/*  */}
        <header className="w-full mb-3 align-top">
          <div className="block text-center sm:text-left">
            <h1 className="text-4xl font-bold ">
              Ashley Annette Hodge
            </h1>
            {/* Job Title */}
            <h2 className="ml-2 text-2xl font-semibold">
              Software Developer
            </h2>
            {/* Location */}
            <h3
              className="mt-2 ml-2 text-md">
              Knoxville, TN (willing to relocate)
            </h3>
          </div>
        </header>
        <div className='border-2 border-[#31A727] rounded'></div>
        {/* Column */}
        <div className="col-gap-16 md:col-count-2 md:h-letter-col-full col-fill-balance">
          {/* Contact Information */}
          <section className="mt-4 first:mt-0">
            {/*  To keep in the same column */}
            <div className="break-inside-avoid">
              <section className="pb-2 mb-2 break-inside-avoid">
                <ul className="pr-7">
                  <li className="mt-1 leading-normal text-sm">
                    <a href="https://www.ashleyhodge.me" target="_blank" rel="noreferrer" className='flex items-center font-light'>
                      <span className="mr-2 text-md font-semibold">
                        Portfolio:
                      </span>
                      www.ashleyhodge.me
                      <span>
                        <FaExternalLinkAlt className="mx-2" />
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal text-sm">
                    <a href="https://github.com/ashleyhodge" target="_blank" rel="noreferrer" className='flex items-center font-light'>
                      <span
                        className="mr-5 text-md font-semibold">
                        Github:
                      </span>
                      ashleyhodge
                      <span>
                        <FaExternalLinkAlt className="mx-2" />
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal text-sm">
                    <a href="mailto:ashhodge@comcast.net" className="group flex items-center font-light">
                      <span className="mr-7 text-md font-semibold">
                        Email:
                      </span>
                      ashhodge@comcast.net
                      <span>
                        <FaExternalLinkAlt className="mx-2" />
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 leading-normal text-sm font-light">
                    <a href="tel:+18657654952">
                      <span
                        className="mr-5 text-md font-semibold">
                        Phone:
                      </span>
                      +1(865)765-4952
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
          <div className='border-2 border-[#302DE0] rounded'></div>
          {/* Summary */}
          <section className="pb-2 pb-4 mt-4 first:mt-0">
            {/* <!-- To keep in the same column --> */}
            <div className="break-inside-avoid">
              <h2
                className="mb-2 text-md font-bold tracking-widest text-center sm:text-left">
                SUMMARY
              </h2>
              <section className="mb-2 break-inside-avoid">
                <p className="mt-2 leading-normal text-sm text-center sm:text-left">
                Creative and technically minded professional with ability to coordinate development and implementation of software programs / applications. Enthusiastic full-stack software engineer; talent for outperforming in fast-paced environment and building scalable and high-performance applications. Aptitude for collaborating with designer and engineer teams for developing innovative solutions to improve user experience. Capacity to resolve queries of customers and provide excellent technical support. Capable of testing and evaluating new programs, while identifying areas of modification / improvement in existing programs. Refined communicator and problem-solver with strong interpersonal, analytical, quick-learning, and attention to detail skills.
                </p>
              </section>
            </div>
          </section>
          <div className='border-2 border-[#0688FF] rounded'></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
          {/* Experience */}
          <section className="border-b-4 sm:border-r-4 sm:border-b-0 my-6 border-[#31A727] pb-4 sm:pb-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
              <h2 className="text-center sm:text-left mb-2 text-lg font-bold tracking-widest">
                EXPERIENCE
              </h2>
              {/* <!--Job 1--> */}
              <section className="mb-2 mt-4 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold text-center sm:text-left">
                    Youth Substance Abuse Prevention Specialist 
                  </h3>
                  <p className="leading-normal font-light pr-2 text-sm text-center sm:text-left">
                    August 2021 &ndash; August 2022 | Sidney, MT
                  </p>
                </header>
                <div className='text-sm pt-2  pr-2'>
                  <li>
                    Served as program coordinator for ensuring drug-free communities. 
                  </li>
                  <li>
                    Planned and coordinated strategic county-wide youth substance abuse prevention coalition programs.
                  </li>
                  <li>
                    Arranged and led in-person and online coalition meetings with law enforcement, healthcare, public school, local media, and mental health representatives to enforce policies and regulations. 
                  </li>
                  <li>
                    Leveraged technical skills to prepare original content and execute all social media platforms for The Dry Society.
                  </li>
                  <li>
                    provided commentary to improve maintainability
                  </li>
                  <li>
                    Played key role in establishing Drug-Free Communities by developing and implementing robust strategic / action plans.
                  </li>
                  <li>
                    Scheduled and executed prevention events for over 300 students.
                  </li>
                </div>
              </section>
            </div>
          </section>
          {/* Education */}
          <section className="pb-4 sm:mt-6 sm:ml-3 text-center sm:text-left">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-lg font-bold tracking-widest">
                EDUCATION
              </h2>
              {/* school 1 */}
              <section className="pb-4 mt-4 mb-4 border-b-2 border-blue-50 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold">
                    Vanderbilt University
                  </h3>
                  <p className="leading-normal text-sm font-light">
                    2021 &ndash; 2022 | Certificate
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm">
                  <span
                    className="font-semibold mr-2 text-md">
                    Subject: 
                  </span>
                  Full Stack Web Development
                </p>
              </section>
              {/* school 2 */}
              <section className="pb-4 mt-4 mb-4 border-b-2 border-blue-50 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold">
                    University of Tennessee
                  </h3>
                  <p className="leading-normal text-sm font-light">
                    2016 &ndash; 2020 | Bachelor of Arts
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm">
                  <span className="font-semibold mr-2 text-md">
                    Major:
                  </span>
                  Psychology
                </p>
                <p className="leading-normal text-sm">
                  <span className="font-semibold mr-2 text-sm">
                    Minor:
                  </span>
                  Business Administration
                </p>
              </section>
              {/* school 3 */}
              <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-md font-semibold">
                    Pellissippi State Community College
                  </h3>
                  <p className="leading-normal text-sm font-light">
                    2014 &ndash; 2016 | Associates of Science
                  </p>
                </header>
                <p className="mt-1 leading-normal text-sm">
                  <span className="font-semibold mr-2 text-md">
                    Subject:
                  </span>
                  Science
                </p>
              </section>
            </div>
          </section>
          </div>
          <div className='border-2 border-[#D44416] rounded'></div>
          {/* Projects */}
          <section className="pb-2 pb-4 mt-4">
            <div className="break-inside-avoid">
              {/* <!-- To keep in the same column --> */}
              <h2 className="mb-2 text-lg font-bold tracking-widest text-center sm:text-left">
                PROJECTS
              </h2>
              {/* Project 1 */}
              <section className="pb-4 mb-4 break-inside-avoid">
                <header>
                  <h3 className="text-md font-semibold flex items-center">
                    Portfolio Website
                    <a href="https://ashleyhodge.github.io/ashley-portfolio/" target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt className="mx-2"/>
                    </a>
                    <a href="https://github.com/ashleyhodge/ashley-portfolio" target="_blank" rel="noreferrer">
                      <AiOutlineGithub size={20}/>
                    </a>
                  </h3>
                  <p className="leading-normal text-sm font-light">
                    Since 2022
                  </p>
                  <p className="leading-normal text-sm">
                    Front:
                    <span>
                      <button className='mt-2 text-white text-xs rounded-full px-[7px] bg-[#0688FF] m-2'>React</button>
                    </span>
                  </p>
                  <p className="leading-normal text-sm">
                    Back:
                    <span>
                      <button className='mt-2 text-white text-xs rounded-full px-[7px] bg-[#0688FF] m-2'>React</button>
                    </span>
                  </p>
                </header>
                <p className="mt-2.1 text-sm leading-normal">
                  A unique and streamlined developer portfolio site that
                  combines the useful aspect of development portfolios with a
                  blog using Next.js. Interface is clean and features graphics
                  designed personally for use within the site.
                </p>
              </section>
            </div>
          </section>
          <div className='border-2 border-[#302DE0] rounded'></div>
          {/* Skills */}
          <section className="pb-4 mt-4">
            {/* <!-- To keep in the same column --> */}
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-lg font-bold tracking-widest text-center sm:text-left">
                SKILLS
              </h2>
              <section className="mb-2 break-inside-avoid">

                <div className="my-1 last:pb-1">
                  <ul className="flex flex-wrap text-sm justify-center sm:justify-start leading-relaxed -mr-1.6-mb-1">
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 leading-relaxed text-[#31A727] border-[#31A727] border-[1px] rounded-full">
                      HTML5
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      CSS3
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Tailwind.css
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      animate.css
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Bootstrap
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Javascript
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Node.js
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      JSX
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      React
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      React-Router
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      MySQL
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Sequelize
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Express.js
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      NoSQL
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      MongoDB
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Mongoose
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Apollo
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      GraphQL
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      RestAPIs
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Git
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
                      Version Control
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1 mr-2 text-[#31A727] leading-relaxed border-[#31A727] border-[1px] rounded-full">
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