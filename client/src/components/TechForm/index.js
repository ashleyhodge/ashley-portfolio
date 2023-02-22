import { useMutation} from "@apollo/client";
import { useState } from "react";

import { ADD_TECH } from "../../utils/mutations";



const TechForm = () => {
  const [frontTech, setFrontTech] = useState('');

  const [addTech] = useMutation(ADD_TECH);

  const handleFrontTech = event => {
    setFrontTech(event.target.value)
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
    await addTech({
      variables: { frontTech }
    })
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col justify-center items-center">
        <input 
          className="w-2/4 border rounded"
          placeholder="Description"
          value={frontTech}
          onChange={handleFrontTech}
        />
        <button className="border rounded-full bg-blue-100 px-2 py-1 w-full hover:bg-blue-200 w-1/2">
        Post Article
      </button>
        </div>
      
    </form>
  )
}

export default TechForm;