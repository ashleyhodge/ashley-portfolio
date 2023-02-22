import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import TechForm from "../components/TechForm";

import { ADD_PROJECT } from "../utils/mutations";
import { QUERY_TECH } from "../utils/queries";

const ProjectForm = () => {
  const [addProject] = useMutation(ADD_PROJECT);

  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('')

  const [frontTech, setFrontTech] = useState([])
  const [backTech, setBackTech] = useState([])

  const { data } = useQuery(QUERY_TECH);

  const tech = data?.tech || [];


  const handleName = event => {
    setName(event.target.value)
  }
  const handleGithub = event => {
    setGithub(event.target.value)
  }
  const handleWebsite = event => {
    setWebsite(event.target.value)
  }
  const handleDescription = event => {
    setDescription(event.target.value)
  }

  // Add/Remove checked item from list
  const handleFrontCheck = (event) => {
    var updatedList = [...frontTech];
    if (event.target.checked) {
      updatedList = [...frontTech, event.target.value];
    } else {
      updatedList.splice(frontTech.indexOf(event.target.value), 1);
    }
    setFrontTech(updatedList);
    console.log(updatedList)
  };

  // Add/Remove checked item from list
  const handleBackCheck = (event) => {
    var updatedList = [...backTech];
    if (event.target.checked) {
      updatedList = [...backTech, event.target.value];
    } else {
      updatedList.splice(backTech.indexOf(event.target.value), 1);
    }
    setBackTech(updatedList);
    console.log(updatedList)
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    await addProject({
      variables: { 
        name,
        github,
        website,
        description,
        frontTech,
        backTech
      }
    })
    setName('')
    setGithub('')
    setWebsite('')
    setDescription('')
    setFrontTech([])
    setBackTech([])
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        {/*  Project Name*/}
        <div className="flex justify-center">
          <input
            className="w-1/4 border text-center rounded"
            placeholder="Project Name"
            value={name}
            onChange={handleName}
          />
        </div>
        {/* GitHub */}
        <div className="flex justify-center">
          <input 
            className="w-1/4 border text-center rounded"
            placeholder="Github"
            value={github}
            onChange={handleGithub}
          />
        </div>
        {/* Website */}
        <div className="flex justify-center">
          <input 
            className="w-1/4 border text-center rounded"
            placeholder="Website"
            value={website}
            onChange={handleWebsite}
          />
        </div>
        {/* Description */}
        <div className="flex justify-center">
          <textarea 
            className="w-2/4 border rounded"
            placeholder="Description"
            rows={4}
            value={description}
            onChange={handleDescription}
          />
        </div>
        {/* Technologies */}
        <div>
`          {tech && tech.map(function(tech) {
            return(
              <div key={tech._id} className='flex justify-center'>
                <div>
                  {tech.frontTech.map((frontTech, index) => {
                    return (
                      <div key={index} className='flex'>
                        <input value={frontTech} onChange={handleFrontCheck} type='checkbox' />
                        <span>{frontTech}</span>
                      </div>
                    )})}
                </div>
                <div>
                  {tech.backTech.map((backTech, index) => {
                    return (
                      <label key={index} className='flex'>
                        <input value={backTech} onChange={handleBackCheck} type='checkbox' />
                        <span>{backTech}</span>
                      </label>
                    )})}
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center m-5">
          <button className="border rounded-full bg-blue-100 px-2 py-1 w-full hover:bg-blue-200">
            Post Article
          </button>
        </div>
      </form>
      {/* Add new tech */}
      <TechForm />
    </section>
  )
}

export default ProjectForm;