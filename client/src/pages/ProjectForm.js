import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import TechForm from "../components/TechForm";
import { Image } from 'cloudinary-react';
import { GrRefresh } from 'react-icons/gr';

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
  const [fileName, setFileName] = useState('')
  const [previewSource, setPreviewSource] = useState()
  const [imageList, setImageList] = useState([]);
  const [images, setImages] = useState([]);

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


  // Add/Remove checked item from list
  const handleImages = (event) => {
    var updatedList = [...images];
    if (event.target.checked) {
      updatedList = [...images, event.target.value];
    } else {
      updatedList.splice(images.indexOf(event.target.value), 1);
    }
    setImages(updatedList);
    console.log(updatedList)
  };

  // display name of file from remote 
  const displayFileName = (file) => {
    setFileName(file.name);
  }
  // convert file to url and set as previewSource
  const previewFile = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }
  // onChange, display the file name and preview the selected file
  const handlePostImage = event => {
    const file = event.target.files[0];
    displayFileName(file);
    previewFile(file);
  }

  // make POST request 
  const uploadImg = async (base64EncodedImage) => {
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: {'Content-type': 'application/json'}
      });
    } catch (error) {
      console.log(error)
    }
  }

  // onSubmit upload the currently selected file to cloudinary
  // reset file name to ' ' & reset previewSource to empty
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return;
    uploadImg(previewSource);
    setFileName('')
    setPreviewSource()
  }
  // make GET request and setImage to the data returned
  const loadImages = async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImageList(data);
    } catch (error) {
      console.log(error);
    }
  }

  // on page load, call loadImages()
  useEffect(() => {
    loadImages()
  }, [])

  const handleFormSubmit = async event => {
    event.preventDefault();
    await addProject({
      variables: { 
        name,
        github,
        website,
        description,
        frontTech,
        backTech,
        images
      }
    })
    setName('')
    setGithub('')
    setWebsite('')
    setDescription('')
    setFrontTech([])
    setBackTech([])
    setImages([])

    event.target.reset()
  }

  return (
    <section>
      {/* Upload images to cloudinary and then display them here so they can be used */}
      <div className="flex flex-col justify-center items-center my-5">
      <h1 className="opacity-[50%]">Upload images that will be used in this project:</h1>
        <form className="flex flex-col justify-center items-center mt-1" onSubmit={handleSubmitFile}>
          <div className="flex justify-center items-center">
            <label htmlFor='file'>
              <div className="border-[#ACBA73] cursor-pointer rounded-full px-2 py-1 bg-[#31A727] hover:opacity-[30%] text-white m-1 opacity-[50%]">
                Select Image
              </div>
              <input
              id="file"
              type='file'
              accepts='.png, .jpg, jpeg'
              name='postImage'
              onChange={handlePostImage}
              className='hidden'
              />
            </label>
            {fileName && (
              <div>{fileName}</div>
            )}
            <button className="border rounded-full bg-[#0688FF] text-white opacity-[50%] hover:opacity-[30%] m-1 px-3 py-1" type='submit'>Upload</button>
          </div>
            {previewSource && (
              <img alt="alt" className="w-[20%] rounded"  src={previewSource}></img>
            )}
        </form>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col items-center">
          <h1 className="text-center opacity-[50%]">Check image to add to project:</h1>
          <div className="flex">
            {imageList && imageList.map((images, index) => (
              <div className='cursor-pointer hover:opacity-[70%]' key={index}>
                <label>
                  <input value={images.url} onChange={handleImages} type='checkbox' />
                  <span>
                  <Image
                  cloudName='decfxx7f2'
                  publicId={images.public_id}
                  height='100'
                  crop='fit'
                  className='m-2 rounded active:ring-2 active:ring-blue-100'
                  onClick={() => {navigator.clipboard.writeText(images.url)}}
                  />
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-2 cursor-pointer">
            <GrRefresh onClick={() => loadImages()} />
          </div>
        </div>
      
        {/*  Project Name*/}
        <div className="flex justify-center p-2">
          <input
            className="w-1/4 border text-center rounded"
            placeholder="Project Name"
            value={name}
            onChange={handleName}
          />
        </div>
        {/* GitHub */}
        <div className="flex justify-center p-2">
          <input 
            className="w-1/4 border text-center rounded"
            placeholder="Github"
            value={github}
            onChange={handleGithub}
          />
        </div>
        {/* Website */}
        <div className="flex justify-center p-2">
          <input 
            className="w-1/4 border text-center rounded"
            placeholder="Website"
            value={website}
            onChange={handleWebsite}
          />
        </div>
        {/* Description */}
        <div className="flex justify-center p-2">
          <textarea 
            className="w-2/4 border rounded"
            placeholder="Description"
            rows={4}
            value={description}
            onChange={handleDescription}
          />
        </div>
        {/* Technologies */}
        <div className="p-2">
          {tech && tech.map(function(tech) {
            return(
              <div key={tech._id} className='flex justify-center'>
                <div className="pr-10">
                  <h3 className="pb-5">What technologies did you use on the frontend?</h3>
                  <div className="grid grid-cols-2">
                    {tech.frontTech.map((frontTech, index) => {
                    return (
                      <div key={index}>
                        <input value={frontTech} onChange={handleFrontCheck} type='checkbox' 
                        className="accent-[#302DE0] w-[15px] opacity-[70%]"
                        />
                        <span className="pl-2 opacity-[50%]"> {frontTech}</span>
                      </div>
                    )})}
                  </div>
                  
                </div>
                <div className="pr-5">
                <h3 className="pb-5">What technologies did you use on the backend?</h3>
                <div className="grid grid-cols-2">
                  {tech.backTech.map((backTech, index) => {
                    return (
                      <div key={index} className='flex mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]'>
                        <input value={backTech} onChange={handleBackCheck} defaultChecked={false} type='checkbox'
                        className="accent-[#302DE0] w-[15px] opacity-[70%]"
                        />
                        <span className="pl-2 opacity-[50%]"> {backTech}</span>
                      </div>
                    )})}
                </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center m-5">
          <button type="submit" className="border rounded-full bg-blue-100 px-2 py-1 w-1/2 hover:bg-blue-200">
            Make Project
          </button>
        </div>
        
      </form>
      {/* Add new tech */}
      <TechForm />
      
    </section>
  )
}

export default ProjectForm;