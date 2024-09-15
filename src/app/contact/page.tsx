import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-4 md:py-12 px-8 sm:px-10 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute text-2xl font-bold md:text-5xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Get in Touch</span>
          </div>
          <div className="relative text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Get in Touch</span>
          </div>
        </div>
        <h1 className="text-lg mb-8 font-sans  text-gray-700 dark:text-white">
          I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
        </h1>
        <hr />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-800 p-6 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-950 dark:text-gray-50" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-md text-gray-700 dark:text-gray-300 focus:ring focus:ring-purple-300 focus:border-purple-500 dark:focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-950 dark:text-gray-50" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-md text-gray-700 dark:text-gray-300 focus:ring focus:ring-purple-300 focus:border-purple-500 dark:focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-950 dark:text-gray-50" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-md text-gray-700 dark:text-gray-300 focus:ring focus:ring-purple-300 focus:border-purple-500 dark:focus:border-purple-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact Info</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You can reach me via email or follow me on social media:
            </p>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 dark:text-white">Email:</h3>
              <p className="text-gray-600 dark:text-gray-300">amankohare@gmail.com</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 dark:text-white">Address:</h3>
              <p className="text-gray-600 dark:text-gray-300">Khargone, India</p>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 dark:text-white mb-2">Follow me:</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/aman.kohare.7" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aman-kohare-3a0678235/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.instagram.com/aman__0514/" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400">
                  <FaInstagram size={24} />
                </a>
                <a href="https://github.com/Amankohare0514" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
