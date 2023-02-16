import School from '../assets/images/school.png'
import Americorp from '../assets/images/americorp.png'
import Vandy from '../assets/images/vandy.png'
import Learning from '../assets/images/learning.png'

const About = () => {
  return(
    <section>

      <div className='text-white'>
        {/* School */}
        <div className='school-container'>
          <div className='mobile-school'>
            <img 
              className="mobile-school-img"
              src={School}
              alt="Logo"
            />
          </div>
        <div className='mt-[70px] sm:mt-[50px]'>
          <div className="school-info">
            <h1 className='job-done'>
            Graduated from the University of Tennessee with a B.A. in Psychology
            </h1>
            <h3 className='date-abt'>May 2020</h3>
            <p className='job-info'>
            After 4 years, I graduated as a psychology major with a business administration minor. While enrolled, I took part in alternative spring break programs as a way to serve communities in need. Although I've changed career paths since graduation, I value my time here and still use the skills that I learned during my time here.
            </p>
          </div>
        </div>
        <div className='desktop-school'>
            <img 
              className="desktop-school-img"
              src={School}
              alt="Logo"
            />
          </div>
        </div>
        {/*  Americorp */}
        <div className='americorp-container'>
          <div className='americorp'>
            <img 
              className="americorp-img"
              src={Americorp}
              alt="Logo"
            />
          </div>
          <div className='mt-5 sm:flex sm:justify-end'>
            <div className="americorp-info">
              <h1 className='job-done'>
              Served as an AmeriCorps member in Montana
              </h1>
              <h3 className='date-abt'>August 2020</h3>
              <p className='job-info'>
              While I love my hometown, I felt like it was the perfect time to find out who I could be in a new environment. I served as a youth substance abuse prevention specialist in a small town called Sidney, Montana. While I was there, I led coalition meeting, helped with grant writing, and met with youth in the community about ways to prevent teens from turning towards drugs and alcohol. This small town will always have a place in my heart!
              </p>
            </div>
          </div>
        </div>
         {/* Boot camp */}
        <div className='bootcamp-container'>
          <div className='mobile-bootcamp'>
            <img 
              className="mobile-bootcamp-img"
              src={Vandy}
              alt="Logo"
            />
          </div>
          <div className='mt-5'>
            <div className="bootcamp-info">
              <h1 className='job-done'>
              Attended Vanderbilt Coding Boot Camp
              </h1>
              <h3 className='date-abt'>December 2021</h3>
              <p className='job-info'>
              After spending years working toward being a full time healthcare worker, I decided that it wasn't my passion. I've always had an interest in computer science, but never the confidence to pursue a career in it. After my time in AmeriCorps, I decided to find my true passion, which led me to Vanderbilt Coding Boot Camp. This was the perfect jumping off point for a career as a Software Developer. I'm so grateful to have learned here and I know that this has helped set me on the right path.
              </p>
            </div>
          </div>
          <div className='desktop-bootcamp'>
            <img 
              className="desktop-bootcamp-img"
              src={Vandy}
              alt="Logo"
            />
          </div>
        </div>
        {/* Learning */}
        <div  className='learning-container'>
          <div className='learning'>
            <img 
              className="learning-img"
              src={Learning}
              alt="Logo"
            />
          </div>
          <div className='mt-5 sm:flex sm:justify-end'>
            <div className="learning-info">
              <h1 className='job-done'>
              Continuing Education
              </h1>
              <h3 className='date-abt'>May 2022</h3>
              <p className='job-info'>
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