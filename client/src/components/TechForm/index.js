import { useMutation} from "@apollo/client";
import { useState } from "react";

import { ADD_TECH } from "../../utils/mutations";



const TechForm = () => {
  const [frontTech, setFrontTech] = useState('');
  const [backTech, setBackTech] = useState('');

  const [addTech] = useMutation(ADD_TECH);

  const handleFrontTech = event => {
    setFrontTech(event.target.value)
  }
  const handleBackTech = event => {
    setBackTech(event.target.value)
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
    await addTech({
      variables: { frontTech, backTech }
    })
    setFrontTech('')
    setBackTech('')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col justify-center items-center">
        <input 
          className="w-2/4 border rounded"
          placeholder="Description"
          value={frontTech}
          onChange={handleFrontTech}
        />
        <button className="border rounded-full bg-blue-100 px-2 py-1 w-full hover:bg-blue-200 w-1/2">
        Add new front tech
      </button>
        </div>
    </form>
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col justify-center items-center">
        <input 
          className="w-2/4 border rounded"
          placeholder="Description"
          value={backTech}
          onChange={handleBackTech}
        />
        <button className="border rounded-full bg-blue-100 px-2 py-1 w-full hover:bg-blue-200 w-1/2">
        Add new back tech
      </button>
        </div>
    </form>
    </section>
    
  )
}

export default TechForm;