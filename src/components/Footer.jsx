import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='font-bold text-center bg-black h-[30vh] text-white mb-12 flex flex-col justify-center'>
            <div className="mb-4">
                <h2 className="text-2xl">Kubera Welding Works</h2>
                <p className="text-sm">© {new Date().getFullYear()} Kubera and Company. All rights reserved.</p>
                <p className="text-sm">Contact: <span className="font-normal">9164924117</span></p>
            </div>
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="hover:text-gray-400">
                    <BsFacebook size={24} />
                </a>
                <a href="#" className="hover:text-gray-400">
                    <BsInstagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-400">
                    <BsTwitter size={24} />
                </a>
                <a href="#" className="hover:text-gray-400">
                    <BsGithub size={24} />
                </a>
                <a href="#" className="hover:text-gray-400">
                    <BsDribbble size={24} />
                </a>
            </div>
            <div>
                <a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a> | 
                <a href="#" className="text-gray-400 hover:text-gray-300"> Terms & Conditions</a>
            </div>
        </div>
    );
}

export default Footer;
