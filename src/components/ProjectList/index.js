import React from 'react';

import ProjectItem from '../ProjectItem';



function ProjectList({ currentCategory }, i) {
  const projects = [
    {
      name: 'Access Tennessee',
      link: 'https://access-tennesee.herokuapp.com/',
      description: 'This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.',
      github: 'https://github.com/ashleyhodge/Access-Tennessee',
      image: 'access_tn'
    },
    {
      name: 'Sour Screens',
      link: 'https://d1sl.github.io/symmetrical-robot/',
      description: "Sour Screens is a fun application that allows users to search for an actor and receive a list of movies they've starred in starting with the lowest rated. Although this application has no practical use, it can lead to some interesting discoveries.",
      github: 'https://github.com/ashleyhodge/symmetrical-robot',
      image: 'sour-screens'
    },
    {
      name: 'Hanzai Watchers',
      link: 'https://hanzai-watchers.herokuapp.com/',
      description: " Hanzai Watchers or Crime Watchers is an application made with React on the frontend and MongoDB on the backend that allows users to connect with other users around the world about crime information in their area. It also allows users to submit crime tips and search for crime in their zip code. The goal of this app is to make people feel like they have a voice. If you see a crime being committed or feel like you or someone else could be in trouble this is a perfect way to get in touch and figure out the best course of action whether it be turning to other users for guidance or submitting a tip.",
      github: 'https://github.com/ashleyhodge/anime_crime-watchers',
      image: 'crime-report'
    }
  ];



  function filterProducts() {
    if (!currentCategory) {
      return projects;
    }

    return projects.filter(
      (projects) => projects.category._id === currentCategory
    );
  }

  return (
    
    <div className="my-5 px-8" >
      {projects.length ? (
        <div className='container'>
          <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-2  gap-8">
            {filterProducts().map((project) => (
              <ProjectItem
                image={project.image}
                name={project.name}
                description={project.description}
                link={project.link}
                github={project.github}
              />
              
            ))}

          </div>
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>

  );
}

export default ProjectList;