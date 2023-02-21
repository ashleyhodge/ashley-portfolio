import { Link } from 'react-router-dom'


const Project = ({ projects }) => {
  // if no projects
  if(!projects.length) {
    return (
      <p> No projects at the time!</p>
    )
  }

  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 '>
      {projects && projects.map((project) => (
        <div key={project._id}>
          <Link to={`/projects/singleproject`}>
            <div className='sm:m-5'>
              <img 
                className="rounded-[20px] border-[3px] border-[#302DE0] border-opacity-[50%] mb-5 sm:mb-0"
                src={project.images}
                alt="Logo"
              />
            </div>
          </Link>
        </div>
      ))}
      
      
    </div>
  )
}

export default Project;