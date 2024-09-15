"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import PushPinIcon from '@mui/icons-material/PushPin';
import projects from './projects';
const Project = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* pinned */}
      <section className="container font-sans mx-auto py-4 md:py-12 px-8 sm:px-10 lg:px-8" >
        <div className="max-w-6xl mx-auto">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute text-2xl font-bold md:text-5xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Projects</span>
            </div>
            <div className="relative text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Projects</span>
            </div>
          </div>
          <h1 className="text-lg mb-8 font-sans text-gray-700 dark:text-white">
            The list of my all projects.
          </h1>
          <hr />
          <div className="flex justify-center items-center mt-6 mb-4">
            <input
              type="text"
              placeholder="Search projects name"
              className="px-2 py-2 w-full bg-transparent text-black dark:text-white  rounded-md border focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project