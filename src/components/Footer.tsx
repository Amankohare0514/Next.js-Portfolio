import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhone from '@mui/icons-material/LocalPhone';
const Footer = () => {
    return (
        <footer className="bg-gradient-to-l from-[#E44AA1] to-[#A755F7]  text-gray-900 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Top section: Logo and Subscription */}
                <div className="flex flex-wrap justify-between items-center mb-6">
                    {/* Company Logo */}
                    <div className="w-full md:w-auto flex justify-center md:justify-start items-center">
                        <img
                            src={'/logo.png'}
                            alt="Company Logo"
                            className="h-16 mb-4 md:mb-0 mr-4 bg-white p-2 rounded-md shadow-lg"
                        />
                    </div>

                    <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="flex items-center w-full md:w-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 bg-transparent border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 w-full md:w-64"
                                />
                                <button className="bg-[#FFB200]  text-black px-4 py-2 ml-2 rounded-md focus:outline-none">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="w-full border-gray-600 my-6" />

                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-wrap w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="md:w-1/1 w-1/2 mb-4">
                            <h4 className="text-xl mb-3 font-bold">Pages</h4>
                            <ul className="text-lg">
                                <li className='mb-1'><a href="/" >- Home</a></li>
                                <li className='mb-1'><a href="/about ">- About us</a></li>
                                <li className='mb-1'><a href="portfolio">- Portfolio</a></li>
                                <li className='mb-1'><a href="/contact">- Contact us</a></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/1 mb-4">
                            <h4 className="text-xl mb-3 font-bold">Developers</h4>
                            <ul className="text-lg">
                                <li className='mb-1'><a href="/technologies">- Technologies</a></li>
                                <li className='mb-1'><a href="/services">- Services</a></li>
                                <li><a href="https://nextjs.org/docs">- Documentation</a></li>
                                <li><a href="https://nextjs.org/">- Resources</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="w-1/2 md:w-1/2">
                        <h4 className="text-xl mb-3 font-bold">Location </h4>
                        <p className="md:text-lg text-sm">
                            <LocationOnIcon />  F-15, Second Floor ,<br />
                            Vastsalya Chambers ,<br />
                            Indore 452001 , India
                        </p>
                        <p className="md:text-lg text-sm">
                            <LocalPhone /> +91 93017 83518<br />
                        </p>
                        <p className="md:text-lg text-sm">
                            <EmailIcon />  info@dhakadsoft.com<br />
                        </p>
                    </div>
                </div>


                <div className="mt-8 flex flex-wrap justify-between items-center border-t border-gray-600 pt-4">
                    <p className="text-sm text-center md:text-left">&copy; Copyright 2017 Dhakad Technosoft Pvt. ltd. All rights reserved.</p>
                    <div className="flex justify-center md:justify-end space-x-1 mt-4 md:mt-0">
                        <a href="https://www.facebook.com/DhakadTechnosoft" className="text-gray-300 hover:text-white"><FacebookIcon /></a>
                        <a href="https://www.linkedin.com/company/dhakad-technosoft-private-limited/mycompany/" className="text-gray-300 hover:text-white"><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;