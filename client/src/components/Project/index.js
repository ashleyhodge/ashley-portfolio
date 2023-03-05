import { Link } from 'react-router-dom'


const Project = ({ projects }) => {
  // if no projects
  if(!projects.length) {
    return (
      <p> No projects at the time!</p>
    )
  }

  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 mx-1 '>
      {projects && projects.map((project) => (
        <div key={project._id}>
          <Link to={`/projects/${project._id}`}>
            <div className='sm:m-5'>
              <img 
                className="rounded-[20px] border-[3px] border-[#302DE0] border-opacity-[50%]  sm:mb-0"
                src={project.images[0]}
                alt="Logo"
              />
              <h1 className='text-center font-black opacity-[50%] text-[25px] mb-5'>{project.name}</h1>
            </div>
          </Link>
        </div>
      ))}
      
      
    </div>
  )
}

export default Project;