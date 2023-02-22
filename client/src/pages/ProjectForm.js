import { useQuery } from "@apollo/client";
import { useState } from "react";
import TechForm from "../components/TechForm";
import TechList from "../components/TechList";

import { QUERY_TECH } from "../utils/queries";

const ProjectForm = (index) => {
  const { loading, data } = useQuery(QUERY_TECH);

  const tech = data?.tech || [];
  console.log(tech);

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
          {loading ? (
            <div>Loading...</div>
          ):(
            <div>
              <TechList key={index} tech={tech} />
            </div>
          )}

            
      </form>
      {/* Add new tech */}
      <TechForm />
    </section>
  )
}

export default ProjectForm;