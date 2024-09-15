"use client";
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const SkillSection = () => {
  const skills = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React.js', icon: FaReact },
    { name: 'React Native', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: FaNode },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'GitHub', icon: FaGitAlt },
  ];

  return (
    <div className="transition-colors duration-300 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="container md:max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center md:p-4 p-2 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 bg-white dark:bg-black border   "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon
                className="md:w-14 md:h-14 w-10 h-10 md:mb-4 mb-2 text-blue-500 dark:text-white"
                aria-hidden="true"
              />
              <span className=" md:text-lg text-xs font-semibold text-gray-700 dark:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
