import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECT } from '../utils/queries';
import ReactMarkdown from 'react-markdown'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <div className=' mx-1 sm:mx-3 sm:mt-[50px] lg:mx-6'>
          <div className='my-5 sm:flex sm:flex-col sm:justify-center sm:items-center'>
            <div className='sm:w-[88%] lg:w-[60%] xl:w-[40%] sm:m-3 drop-shadow'>
              <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
              {project.images.map((image, index) => {
                return (
                  <div key={index}>
                    <img 
                      className="rounded-[20px]"
                      src={image}
                      alt="Logo"
                    />
                  </div>
                )})}
              </Carousel>
            </div>
            <div className='sm:w-full sm:mb-5 flex flex-col justify-evenly'>
              <div className='mt-5 sm:m-3 lg:m-0 lg:text-center'>
                <h1 className='text-center font-bold text-[28px] lg:text-[34px] 2xl:text-[40px] opacity-[50%] m-2'>{project.name}</h1>
              </div>
              <div className=' gap-5'>
                <div className='lg:flex lg:flex-col lg:items-center'>
                  <div className='bg-[#31A727] bg-opacity-[50%] rounded-[20px] p-4 text-center'>
                    <h1 className='text-white text-[28px] lg:text-[32px] 2xl:text-[38px]  drop-shadow-md'>
                      Technologies
                    </h1>
                    {project.frontTech.map((tech, index) => {
                      return (
                          <button key={index} className='mt-2 bg-white rounded-full px-[7px] text-[18px] lg:text-[20px] text-[#31A727] text-opacity-[50%] m-2'>{tech}</button>
                      )})}
                      <br className='hidden' />
                    {project.backTech.map((tech, index) => {
                      return (
                        <button key={index} className='mt-2 bg-white rounded-full px-[7px] text-[18px] lg:text-[20px] text-[#31A727] text-opacity-[50%] m-2'>{tech}</button>
                      )})}
                  </div>
                </div>
                <div className='flex justify-evenly my-5 lg:mt-20'>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button className='bg-[#302DE0] border-[#302DE0] border-2 opacity-[50%] text-white rounded-[10px] px-5 text-[24px] lg:text-[30px] 2xl:text-[36px] '>
                      GitHub
                    </button>
                  </a>
                  {/* if website is null don't render the website button */}
                  {project.website && <a href={project.website} target="_blank" rel="noreferrer">
                    <button className='border-[#302DE0] border-2 opacity-[50%] text-[#302DE0] rounded-[10px] px-5 text-[24px] lg:text-[30px] 2xl:text-[36px]'>
                      Website
                    </button>
                  </a>}
                  
                </div>
              </div>
            </div>
            <div className='my-5 sm:mt-0 bg-[#0688FF] bg-opacity-[50%] rounded-[20px] p-5 text-white text-center text-[18px] sm:text-[22px] lg:text-[26px] 2xl:text-[26px] col-span-5'>
              <ReactMarkdown>
                {project.description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SingleProject;