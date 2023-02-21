import Project from '../components/Project'
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';


const Projects = (index) => {
  // make request to backend
  const { loading, data } = useQuery(QUERY_PROJECTS);

  const projects = data?.projects || [];
  console.log(projects)
  
  return(
    <section>
      {loading ? (
        <div>loading...</div>
      ):(
        <div>
          <div className='mb-12'></div>
          <div>
            <Project key={index} projects={projects} />
          </div>
        </div>
        
      )}
      
    </section>
  )
}

export default Projects;