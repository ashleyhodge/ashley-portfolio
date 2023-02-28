import { useMutation} from "@apollo/client";
import { useState } from "react";

import { ADD_TECH } from "../../utils/mutations";
import { QUERY_TECH } from "../../utils/queries";

const TechForm = () => {
  const [frontTech, setFrontTech] = useState('');
  const [backTech, setBackTech] = useState('');

  // add new tech to database, then refetch the array to include the new data
  const [addTech] = useMutation(ADD_TECH, {
    refetchQueries: [{ query: QUERY_TECH }]
  });



  const handleFrontTech = event => {
    setFrontTech(event.target.value)
  }
  const handleBackTech = event => {
    setBackTech(event.target.value)
  }

  const handleFrontForm = async event => {
    event.preventDefault();
    await addTech({
      variables: { frontTech }
    })
    setFrontTech('')
  }
  const handleBackForm = async event => {
    event.preventDefault();
    await addTech({
      variables: { backTech }
    })
    setBackTech('')
  }
  return (
    <section className='flex justify-center pb-28'>
      <form onSubmit={handleFrontForm} >
        <div className="flex">
          <input 
            className="border rounded"
            placeholder="Frontend"
            value={frontTech}
            onChange={handleFrontTech}
          />
          <button className="border rounded-full bg-blue-100 mx-2 px-2 py-1 hover:bg-blue-200 ">
            Add Tech
          </button>
        </div>
      </form>
      <form onSubmit={handleBackForm} className='px-5'>
        <div className="flex">
          <input 
            className="border rounded"
            placeholder="Backend"
            value={backTech}
            onChange={handleBackTech}
          />
          <button className="border rounded-full bg-blue-100 mx-2 px-2 py-1 hover:bg-blue-200">
            Add Tech
          </button>
        </div>
      </form>
    </section>
    
  )
}

export default TechForm;