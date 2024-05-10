import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/images/logo2.png';

const Footer = () => {
    return (
        <footer className="pt-10 bg-primary text-white">
            <div className='px-4 lg:px-28 lg:py-10'>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <aside className="text-center lg:text-left">
                        <img className="w-40 h-24 lg:w-44 lg:h-28 mx-auto lg:-mt-4" src={logo} alt="Harvest Hub Logo" />
                        <p className='w-full lg:w-80 mx-auto lg:ml-0 mt-4 lg:mt-0 lg:text-center lg:text-base md:text-lg'>Empowering communities, minimizing waste, and promoting sustainability through surplus food redistribution and community engagement.</p>
                    </aside>
                    <div className="mt-8 lg:mt-0 mb-8 lg:mb-0 text-center lg:text-center">
                        <h3 className="text-lg font-semibold mb-4 md:text-lg lg:text-base">Contact Us</h3>
                        <div className="flex items-center mb-2 justify-center lg:text-base md:text-lg">
                            <FiPhone className="mr-2 text-text" />
                            <p>+88018-28011277</p>
                        </div>
                        <div className="flex items-center mb-2 justify-center lg:text-base md:text-lg">
                            <FiMail className="mr-2 text-text" />
                            <p>naimatushin21@gmail.com</p>
                        </div>
                        <div className="flex items-center justify-center lg:text-base md:text-lg">
                            <FiMapPin className="mr-2 text-text" />
                            <p>Main Street, Chittagong, Bangladesh</p>
                        </div>
                        <div className="flex justify-center gap-6 mt-4">
                            <a href="#"><FaFacebook className="w-6 h-6 hover:text-text" /></a>
                            <a href="#"><FaInstagram className="w-6 h-6 hover:text-text" /></a>
                            <a href="#"><FaLinkedin className="w-6 h-6 hover:text-text" /></a>
                            <a href="#"><FaGithub className="w-6 h-6 hover:text-text" /></a>
                            <a href="#"><FaWhatsapp className="w-6 h-6 hover:text-text" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-secondary text-black p-4 text-xs lg:text-base md:text-lg'>
                <p className="text-center">Copyright © 2024 Harvest Hub - All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
