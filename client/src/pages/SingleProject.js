import project from '../assets/images/project.png'

const SingleProject = () => {
  return (
    <div>
      <div className='my-10'>
        <img 
          className="rounded-[20px] border-[3px] border-[#302DE0] border-opacity-[50%] "
          src={project}
          alt="Logo"
        />
      </div>
      
        

      
      <div className='bg-[#31A727] bg-opacity-[50%] rounded-[20px] p-4'>
        <h1 className='text-white text-[28px] drop-shadow-md'>Technologies</h1>
        <button className='mt-2 bg-white rounded-full px-[7px] py-[2px] text-[18px] text-[#31A727] text-opacity-[50%]'>React</button>
      </div>
      <div className='my-10 bg-[#0688FF] bg-opacity-[50%] rounded-[20px] p-5 text-white text-center text-[20px]'>
        <p>
        This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.
        </p>
      </div>
    </div>
  )
}

export default SingleProject;