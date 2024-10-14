import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='font-bold text-center bg-black text-white mb-12 flex flex-col justify-center py-8'>
            <div className="mb-4">
                <h2 className="text-2xl md:text-3xl">Kubera Welding Works</h2>
                <p className="text-sm md:text-base">© {new Date().getFullYear()} Kubera and Company. All rights reserved.</p>
                <p className="text-sm md:text-base">Contact: <span className="font-normal">9164924117</span></p>
            </div>
            <div className="flex justify-center space-x-6 mb-4 flex-wrap">
                <a href="#" className="hover:text-gray-400" aria-label="Facebook">
                    <BsFacebook size={24} />
                </a>
                <a href="#" className="hover:text-gray-400" aria-label="Instagram">
                    <BsInstagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-400" aria-label="Twitter">
                    <BsTwitter size={24} />
                </a>
                <a href="#" className="hover:text-gray-400" aria-label="GitHub">
                    <BsGithub size={24} />
                </a>
                <a href="#" className="hover:text-gray-400" aria-label="Dribbble">
                    <BsDribbble size={24} />
                </a>
            </div>
            <div className="text-sm md:text-base">
                <a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a> | 
                <a href="#" className="text-gray-400 hover:text-gray-300"> Terms & Conditions</a>
            </div>
        </div>
    );
}

export default Footer;
