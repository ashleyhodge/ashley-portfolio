import School from '../assets/images/school.png'
import Americorp from '../assets/images/americorp.png'
import Vandy from '../assets/images/vandy.png'
import Learning from '../assets/images/learning.png'

const About = () => {
  return(
    <section>

      <div className='text-white'>
        {/* School */}
        <div className='sm:flex sm:items-center sm:ml-5 md:ml-10'>
          <div className='flex justify-end sm:hidden'>
            <img 
              className="absolute w-[150px] sm:w-[200px] rounded-full border-[10px] border-white"
              src={School}
              alt="Logo"
            />
          </div>
        <div className='mt-[70px] sm:mt-[50px]'>
          <div className="bg-[#31A727] bg-opacity-[50%] rounded-[20px] py-[90px] sm:py-[60px] md:py-[30px] px-5 sm:pr-11 md:pr-12 lg:pr-24 text-center sm:text-left sm:w-3/4 lg:w-10/12">
            <h1 className='font-bold drop-shadow-md text-[24px] xl:text-[30px]'>
            Graduated from the University of Tennessee with a B.A. in Psychology
            </h1>
            <h3 className='font-light drop-shadow-md text-[21px] xl:text-[27px]'>May 2020</h3>
            <p className='font-medium drop-shadow-md text-[18px] xl:text-[25px] pt-3'>
            After 4 years, I graduated as a psychology major with a business administration minor. While enrolled, I took part in alternative spring break programs as a way to serve communities in need. Although I've changed career paths since graduation, I value my time here and still use the skills that I learned during my time here.
            </p>
          </div>
        </div>
        <div className='hidden sm:flex sm:justify-end sm:items-center'>
            <img 
              className="absolute w-[150px] sm:w-[200px] md:w-[220px] mdplus:w-[250px] lg:w-[220px] xl:w-[250px] md:mr-5 mdplus:mr-10 lg:mr-5 xl:mr-16 rounded-full border-[10px] border-white"
              src={School}
              alt="Logo"
            />
          </div>
        </div>
        {/*  Americorp */}
        <div  className='sm:flex sm:items-center sm:mr-5 md:mr-10'>
          <div className='flex justify-start items-center'>
            <img 
              className="absolute w-[150px] sm:w-[200px] md:w-[220px] mdplus:w-[250px] lg:w-[220px] xl:w-[250px] md:ml-5 mdplus:ml-10 lg:ml-5 xl:ml-16 rounded-full border-[10px] border-white"
              src={Americorp}
              alt="Logo"
            />
          </div>
          <div className='mt-5 sm:flex sm:justify-end'>
            <div className="bg-[#0688FF] bg-opacity-[50%] rounded-[20px] pb-[90px] pt-[70px] sm:py-[60px] md:py-[30px] px-5 sm:pl-11 md:pl-12 lg:pl-24 xl:pl-28 text-center sm:text-right sm:w-3/4 lg:w-10/12">
              <h1 className='font-bold drop-shadow-md text-[24px] xl:text-[30px]'>
              Served as an AmeriCorps member in Montana
              </h1>
              <h3 className='font-light drop-shadow-md text-[21px] xl:text-[27px]'>August 2020</h3>
              <p className='font-medium drop-shadow-md text-[18px] xl:text-[25px] pt-3'>
              While I love my hometown, I felt like it was the perfect time to find out who I could be in a new environment. I served as a youth substance abuse prevention specialist in a small town called Sidney, Montana. While I was there, I led coalition meeting, helped with grant writing, and met with youth in the community about ways to prevent teens from turning towards drugs and alcohol. This small town will always have a place in my heart!
              </p>
            </div>
          </div>
        </div>
         {/* Boot camp */}
        <div className='sm:flex sm:items-center sm:ml-5 md:ml-10'>
          <div className='flex justify-end items-center sm:hidden'>
            <img 
              className="absolute w-[150px] sm:w-[200px] rounded-full border-[10px] border-white"
              src={Vandy}
              alt="Logo"
            />
          </div>
          <div className='mt-5 '>
            <div className="bg-[#302DE0] bg-opacity-[50%] rounded-[20px] py-[90px] sm:py-[60px] md:py-[30px] px-5 sm:pr-11 md:pr-12 lg:pr-24 xl:pr-28 text-center sm:text-left sm:w-3/4 lg:w-10/12">
              <h1 className='font-bold drop-shadow-md text-[24px] xl:text-[30px]'>
              Attended Vanderbilt Coding Boot Camp
              </h1>
              <h3 className='font-light drop-shadow-md text-[21px] xl:text-[27px]'>December 2021</h3>
              <p className='font-medium drop-shadow-md text-[18px] xl:text-[25px] pt-3'>
              After spending years working toward being a full time healthcare worker, I decided that it wasn't my passion. I've always had an interest in computer science, but never the confidence to pursue a career in it. After my time in AmeriCorps, I decided to find my true passion, which led me to Vanderbilt Coding Boot Camp. This was the perfect jumping off point for a career as a Software Developer. I'm so grateful to have learned here and I know that this has helped set me on the right path.
              </p>
            </div>
          </div>
          <div className='hidden sm:flex sm:justify-end sm:items-center'>
            <img 
              className="absolute w-[150px] sm:w-[200px] md:w-[220px] mdplus:w-[250px] lg:w-[220px] xl:w-[250px] md:mr-5 mdplus:mr-10 lg:mr-5 xl:mr-16 rounded-full border-[10px] border-white"
              src={Vandy}
              alt="Logo"
            />
          </div>
        </div>
        {/* Learning */}
        <div  className='sm:flex sm:items-center sm:mr-5 md:mr-10 mb-10'>
          <div className='flex justify-start items-center'>
            <img 
              className="absolute w-[150px] sm:w-[200px] md:w-[220px] mdplus:w-[250px] lg:w-[220px] xl:w-[250px] md:ml-5 mdplus:ml-10 lg:ml-5 xl:ml-16 rounded-full border-[10px] border-white"
              src={Learning}
              alt="Logo"
            />
          </div>
          <div className='mt-5 sm:flex sm:justify-end'>
            <div className="bg-[#31A727] bg-opacity-[50%] rounded-[20px] pb-[90px] pt-[70px] sm:py-[60px] md:py-[30px] px-5 sm:pl-11 md:pl-12 lg:pl-24 xl:pl-28 text-center sm:text-right sm:w-3/4 lg:w-10/12">
              <h1 className='font-bold drop-shadow-md text-[24px] xl:text-[30px]'>
              Continuing Education
              </h1>
              <h3 className='font-light drop-shadow-md text-[21px] xl:text-[27px]'>May 2022</h3>
              <p className='font-medium drop-shadow-md text-[18px] xl:text-[25px] pt-3'>
              After my time attending Vanderbilt Coding Boot Camp, I've been focusing on building my portfolio. I'm currently building an e-commerce website to sell handcrafted goods. While I know this is an important step in helping me find a job, I've also been focusing on other things. I'm currently learning Java and I've dedicated time each week to studying the fundamentals of computer science like data structure and algorithms. I'm confident that these steps will not only help me reach the next step in my career, but also help me become a better developer all around!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;