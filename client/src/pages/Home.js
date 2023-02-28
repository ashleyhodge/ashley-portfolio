import { MdBusinessCenter } from 'react-icons/md'
import { BiCurrentLocation } from 'react-icons/bi'
import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import Profile from '../assets/images/profile.png'

const Home = () => {
  return(
    <div className='home-container'>
      
      <div className="home-grid">
        {/* Title Info */}
        <div className="profile-div">
          <div className='flex justify-center sm:hidden'>
        <img 
          className="mobile-profile"
          src={Profile}
          alt="Logo"
        />
      </div>
          <div className='profile-section'>
            <div>
              <h1 className="name">
                Ashley Hodge
              </h1>
              <div className='job-div'>
                <MdBusinessCenter size={28} className='mr-2' />
                <p className="job">
                  Software Developer
                </p>
              </div>
              <div className='location-div'>
                <BiCurrentLocation size={28} className='mr-2' />
                <p className="location">
                  Knoxville, TN
                </p>
              </div>
              <div className='sm-profile'>
                <img 
                  className="sm-img"
                  src={Profile}
                  alt="Logo"
                />
              </div>
              <div className='social'>
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
            </div>
          </div>
        </div>
        <div className='xl-profile'>
          <img 
            className="xl-img"
            src={Profile}
            alt="Logo"
          />
        </div>
        {/* Description */}
        <div className="description">
          <p className='drop-shadow-md'>
            Hi there! Welcome to my website! My name is Ashley (she/her) and I'm a Full Stack Developer from Knoxville, TN. I graduated from Vanderbilt University Coding Boot Camp in May 2022 and since then I've been working as a freelance developer to build my portfolio and increase my skill level. Feel free to have a look around and let me know if you would like to discuss my experience, projects, or any job opportunities!
          </p>
        </div>
        {/* Skills */}
        <div className="skills-container">
          Skills
          <p className='react'>React</p>
          <div className="progress">
            <div className="bar" style={{width: '80%'}}>
              <p className='ml-2'>80%</p>
            </div>
          </div>
          <p className='label'>JavaScript</p>
          <div className="progress">
            <div className="bar" style={{width: '80%'}}>
              <p className='ml-2'>80%</p>
            </div>
          </div>
          <p className='label'>MongoDB </p>
          <div className="progress">
            <div className="bar" style={{width: '65%'}}>
              <p className='ml-2'>65%</p>
            </div>
          </div>
          <p className='label'>Tailwind.css</p>
          <div className="progress">
            <div className="bar" style={{width: '70%'}}>
              <p className='ml-2'>70%</p>
            </div>
          </div>
          <p className='label'>TypeScript</p>
          <div className="progress">
            <div className="bar" style={{width: '10%'}}>
              <p className='ml-2'>10%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;