import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECT } from '../utils/queries';
import projectImg from '../assets/images/project.png'


const SingleProject = () => {
  const { id: projectId } = useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { id: projectId }
  });

  const project = data?.project || {};


  return (
    <section>
      {loading ? (
        <div>Loading ... </div>
      ):(
        <div className='box mdplus:flex items-stretch mdplus:justify-center sm:mx-3 sm:mt-[50px] lg:mx-6 '>
          <div className='mdplus:flex md:justify-evenly my-5 sm:flex sm:flex-col sm:justify-center sm:items-center lg:grid lg:grid-cols-4 lg:gap-7'>
            <div className='sm:w-[88%] lg:w-full sm:m-3 lg:col-span-2'>
              <img 
                  className="rounded-[20px] border-[3px] border-[#302DE0] border-opacity-[50%] "
                  src={project.images}
                  alt="Logo"
                />
            </div>
            <div className='sm:w-full sm:mb-5 lg:col-span-2 lg:justify-self-end lg:flex flex-col justify-evenly'>
              <div className='mt-5 sm:m-3 lg:m-0 lg:col-span-2 lg:text-center'>
                <h1 className='text-center font-bold text-[28px] lg:text-[34px] 2xl:text-[40px] opacity-[50%] m-2'>{project.name}</h1>
              </div>
              <div className='sm:max-lg:grid sm:max-lg:grid-cols-2 sm:max-lg:ml-10 gap-5'>
                <div className='lg:flex lg:flex-col lg:items-center'>
                  <div className='bg-[#31A727] bg-opacity-[50%] rounded-[20px] p-4'>
                    <h1 className='text-white text-[28px] lg:text-[32px] 2xl:text-[38px]  drop-shadow-md'>
                      Technologies
                    </h1>
                    {project.frontTech.map((tech, index) => {
                      return (
                          <button key={index} className='mt-2 bg-white rounded-full px-[7px] text-[18px] lg:text-[20px] text-[#31A727] text-opacity-[50%] m-2'>{tech}</button>
                      )})}
                    {project.backTech.map((tech, index) => {
                      return (
                        <button key={index} className='mt-2 bg-white rounded-full px-[7px] text-[18px] lg:text-[20px] text-[#31A727] text-opacity-[50%] m-2'>{tech}</button>
                      )})}
                  </div>
                </div>
                <div className='flex justify-evenly sm:grid sm:grid-cols-2 sm:gap-2 sm:items-center my-5 lg:flex lg:mt-20'>
                  <a href={project.github}>
                    <button className='bg-[#302DE0] border-[#302DE0] border-2 opacity-[50%] text-white rounded-[10px] px-5 text-[24px] lg:text-[30px] 2xl:text-[36px] '>
                      GitHub
                    </button>
                  </a>
                  <a href={project.website}>
                    <button className='border-[#302DE0] border-2 opacity-[50%] text-[#302DE0] rounded-[10px] px-5 text-[24px] lg:text-[30px] 2xl:text-[36px]'>Website</button>
                  </a>
                </div>
              </div>
            </div>
            <div className='my-5 sm:mt-0 bg-[#0688FF] bg-opacity-[50%] rounded-[20px] p-5 text-white text-center text-[18px] sm:text-[22px] lg:text-[26px] 2xl:text-[26px] col-span-5'>
              <p>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SingleProject;