import React from "react";
import { AiFillCloseSquare } from 'react-icons/ai'



function ProjectItem(item) {
  const {
    image,
    name,
    description,
    github,
    link
  } = item;

  const [showModal, setShowModal] = React.useState(false);

  return(
    <div class="flex flex-col max-w-sm bg-egg-50 rounded-lg shadow-lg"> 
        <img className="rounded-lg" src={`/images/${image}.jpg`} onClick={() => setShowModal(true)} alt={name} />
    
    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {name}
                </h3>
                  <AiFillCloseSquare onClick={() => setShowModal(false)} className="fill-blue-200 mr-4 cursor-pointer hover:fill-blue-100" size={30}/>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-blue-100 text-white hover:bg-blue-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <a href={github} target="_blank">Github</a>
                </button>
                <button
                  className="bg-blue-100 text-white hover:bg-blue-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <a href={link} target="_blank">Check it out!</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
    </div>
  )
}

export default ProjectItem;