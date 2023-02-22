const ProjectForm = () => {
  return (
    <section>
      <form>
        {/*  Project Name*/}
        <div className="flex justify-center">
          <input
            className="w-1/4 border text-center rounded"
            placeholder="Project Name"
          />
        </div>
        {/* GitHub */}
        <div className="flex justify-center">
          <input 
            className="w-1/4 border text-center rounded"
            placeholder="Github"
          />
        </div>
        {/* Website */}
        <div className="flex justify-center">
          <input 
            className="w-1/4 border text-center rounded"
            placeholder="Website"
          />
        </div>
        {/* Description */}
        <div className="flex justify-center">
          <textarea 
            className="w-2/4 border rounded"
            placeholder="Description"
            rows={4}
          />
        </div>
        {/* Technologies */}
        <div>
          <label>
            <input type='checkbox' />
            react
          </label>
        </div>
      </form>
    </section>
  )
}

export default ProjectForm;