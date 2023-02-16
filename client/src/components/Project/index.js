import { Link } from 'react-router-dom'
import project from '../../assets/images/project.png'

const Project = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 '>
      <Link to={`/projects/singleproject`}>
        <div className='sm:m-5'>
          <img 
            className="rounded-[20px] border-[3px] border-[#302DE0] border-opacity-[50%] mb-5 sm:mb-0"
            src={project}
            alt="Logo"
          />
        </div>
      </Link>
      
    </div>
  )
}

export default Project;