import Image from 'next/image';
import { Github, Instagram, Linkedin, Mail, Briefcase, MapPin, Calendar } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-4 md:py-12 px-8 sm:px-10 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute text-2xl font-bold md:text-5xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">About Me</span>
          </div>
          <div className="relative text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">About Me</span>
          </div>
        </div>
        <h1 className="text-lg mb-8 font-sans  text-gray-700 dark:text-white">
        Hi there! I am Aman.
        </h1>
        <hr />
        <div className="bg-white dark:bg-black mt-6  overflow-hidden">
          <div className="flex flex-col item-center">
            {/* Image Section */}
            <div className="relative w-full md:w-auto flex justify-center">
              <Image
                className="w-full object-cover max-w-xs md:max-w-xl"
                src="https://heyaman.vercel.app/static/media/aman.842c793b15d3d928b477.jpg"
                alt="Profile picture"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
            </div>

            {/* Content Section */}
            <div className="w-full text-start mt-6">
              <p className="mt-2 text-xl text-gray-600 dark:text-gray-200 font-medium">
                Frontend Developer & Designer
              </p>
              <div className="flex flex-wrap  gap-4 text-sm text-gray-400 dark:text-gray-200">
                <div className="flex items-start ">
                  <Briefcase className="h-5 w-5 mr-2 text-indigo-500" />
                  1+ Years Experience
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
                  Indore, India
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 text-indigo-500" />
                  Available for Freelance
                </div>
              </div>
              <p className="mt-6 text-gray-600 dark:text-gray-200 leading-relaxed">
                Hello! I'm Aman, a passionate web developer and designer with over 1 year of experience in creating beautiful, functional websites. I specialize in React, Next.js, and Tailwind CSS, and I love bringing ideas to life through code.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-200 leading-relaxed">
                I completed my Bachelor of Technology (B.Tech) in Information Technology from Barkatullah University, Bhopal. Programming Journey: I'm a self-taught programmer on a quest to explore the exciting world of technology.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-200 leading-relaxed">
                When not coding, I enjoy watching TV shows and movies, playing games with friends, or hanging out. I'm also constantly listening to music. According to Spotify Wrapped, I listened to 989 minutes of music in 2023 and 3047 in 2022. I also have a keen interest in playing cricket.
              </p>
              <div className="mt-8 flex  space-x-4">
                <a href="https://github.com/Amankohare0514" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/aman-kohare-3a0678235/" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/aman__0514/" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:amankohare@gmail.com" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
