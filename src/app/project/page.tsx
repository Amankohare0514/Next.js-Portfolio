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
      <section className="container font-sans mx-auto px-4 py-8 max-w-7xl" >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center mb-4">
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
        <div className="flex justify-center mt-8 items-center">
          <div className="w-full  max-w-7xl  rounded-lg bg-slate-50  dark:bg-gray-900 text-white  p-4 shadow-md mx-4 md:mx-0">
            <div className="flex items-center space-x-2">
              <PushPinIcon className="text-gray-800 dark:text-gray-700" />
              <span className="font-semibold text-gray-700 dark:text-gray-500">Pinned</span>
            </div>
            <p className="mt-2 text-gray-800 dark:text-gray-400">
              Hey there! Hey there! You can check out more projects developed by me by visiting my GitHub profile. Thanks and here is  {" "}
              <a target='_blank' className="text-sky-500 hover:underline" href="https://github.com/amankohare0514">
                github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project