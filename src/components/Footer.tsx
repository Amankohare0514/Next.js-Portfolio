import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhone from '@mui/icons-material/LocalPhone';
const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black text-gray-700 dark:text-gray-300 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-wrap w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="md:w-1/2 w-1/2 mb-4">
                            <h4 className="text-xl mb-3 font-bold">Pages</h4>
                            <ul className="text-lg">
                                <li className='mb-1'><a href="/" > Home</a></li>
                                <li className='mb-1'><a href="/about "> About us</a></li>
                                <li className='mb-1'><a href="/project"> Projects</a></li>
                                <li className='mb-1'><a href="/contact"> Contact us</a></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/2 mb-4">
                            <h4 className="text-xl mb-3 font-bold">Developers</h4>
                            <ul className="text-lg">
                                <li className='mb-1'><a href="/experience"> Experience</a></li>
                                <li className='mb-1'><a href="/blogs"> Blogs</a></li>
                                <li><a href="https://nextjs.org/docs"> Documentation</a></li>
                                <li><a href="https://nextjs.org/"> Resources</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-xl mb-3 font-bold">Social</h4>
                        <ul className="text-lg">
                            <li><a href="/faq">Instagram</a></li>
                            <li><a href="/terms">Facebook</a></li>
                            <li><a href="/privacy">linkedin</a></li>
                            <li><a href="/careers">Github</a></li>
                        </ul>
                    </div>

                    <div className="w-1/2 md:w-1/4">
                        <h4 className="text-xl mb-3 font-bold">Contact </h4>
                        <p className="md:text-lg text-sm">
                            <LocalPhone /> +91 80856 40735<br />
                        </p>
                        <p className="md:text-lg text-sm">
                            <EmailIcon /> amankohare@gmail.com<br />
                        </p>
                    </div>
                </div>

                <div className="circleposition bg-[#902db4] rounded-[100%] absolute  left-[50%] translate-x-[-80%]  translate-y-[-50%] blur-[130px] h-[50px] md:h-[180px] w-[800px]"></div>
                <div className="circleposition bg-[#ee8340] rounded-[100%] absolute  left-[60%] translate-x-[-40%]  translate-y-[-50%] blur-[130px]  h-[50px]  md:h-[120px] w-[500px]"></div>
                <div className="mt-4 flex flex-wrap justify-between items-center  pt-4">
                    <p className="text-sm text-center md:text-left">&copy; Copyright 2024 aman kohare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;