import React from "react";



function ProjectItem(item) {
  const {
    image,
    name,
  } = item;
  
  return(
    <div class="flex flex-col max-w-sm bg-egg-50 rounded-lg border border-blue-50 shadow-md"> 
        <img className="rounded-lg" src={`/images/${image}.jpg`} alt={name} />
    </div>
  )
}

export default ProjectItem;