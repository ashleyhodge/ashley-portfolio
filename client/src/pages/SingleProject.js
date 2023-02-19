import project from '../assets/images/project.png'


const SingleProject = () => {
  return (
    <section>
      
        <div className='box mdplus:flex items-stretch sm:mx-3 sm:mt-[50px] lg:mx-6 '>
          <div className='mdplus:flex md:justify-evenly my-5 sm:flex sm:flex-col sm:justify-center sm:items-center lg:grid lg:grid-cols-4'>

            <div className='sm:w-[88%] lg:w-full sm:m-3 lg:col-span-2'>
              <img 
                  className="rounded-[20px] border-[3px] border-[#302DE0] border-opacity-[50%] "
                  src={project}
                  alt="Logo"
                />
            </div>

            <div className='sm:w-full sm:h-full sm:mb-5 lg:col-span-2 lg:justify-self-end lg:flex flex-col justify-evenly'>

              <div className='mt-5 sm:m-3 lg:m-0 lg:col-span-2 lg:text-center'>
                <h1 className='text-center font-bold text-[28px] lg:text-[34px] 2xl:text-[40px] opacity-[50%] m-2'>Access Tennessee</h1>
              </div>

              <div className='sm:max-lg:flex sm:justify-evenly'>

                <div className='lg:flex lg:flex-col lg:items-center'>
                  <div className='bg-[#31A727] bg-opacity-[50%] rounded-[20px] p-4'>
                    <h1 className='text-white text-[28px] lg:text-[32px] 2xl:text-[38px]  drop-shadow-md'>Technologies</h1>
                    <div>
                      <button className='mt-2 bg-white rounded-full px-[7px] text-[18px] lg:text-[20px] text-[#31A727] text-opacity-[50%] m-2'>React</button>
                    </div>
                  </div>
                </div>

                <div className='flex justify-evenly sm:grid sm:grid-cols-2 sm:gap-2 sm:items-center my-5 lg:flex lg:mt-20'>
                  <a href='http://www.example.com'>
                    <button className='bg-[#302DE0] border-[#302DE0] border-2 opacity-[50%] text-white rounded-[10px] px-5 text-[24px] lg:text-[30px] 2xl:text-[36px] '>GitHub</button>
                  </a>
                  <a href='http://www.example.com'>
                    <button className='border-[#302DE0] border-2 opacity-[50%] text-[#302DE0] rounded-[10px] px-5 text-[24px] lg:text-[30px] 2xl:text-[36px]'>Website</button>
                  </a>
                </div>

              </div>

            </div>
            
            <div className='my-5 sm:mt-0 bg-[#0688FF] bg-opacity-[50%] rounded-[20px] p-5 text-white text-center text-[18px] sm:text-[22px] lg:text-[26px] 2xl:text-[26px] col-span-5'>
              <p>
                This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.
              </p>
            </div>

          </div>

          

        </div>
        
    </section>
    
  )
}

export default SingleProject;