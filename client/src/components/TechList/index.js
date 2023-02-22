

const TechList = ({ tech }) => {

  if(!tech.length){
    return (
      <h3>Add new tech</h3>
    )
  }
  return (
    <div>
      {tech && tech.map(function(tech) {
        return(
          <div key={tech._id} className='flex justify-center'>
            <div>
              {tech.frontTech.map((tech, index) => {
                return (
                  <label key={index}>
                    <input type='checkbox' />
                    {tech}
                  </label>
                )})}
            </div>
            <div>
              {tech.backTech.map((tech, index) => {
                return (
                  <label key={index}>
                    <input type='checkbox' />
                    {tech}
                  </label>
                )})}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TechList