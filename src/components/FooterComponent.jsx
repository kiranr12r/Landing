import React from "react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent() {
    return (
        <footer className="bg-gray-800 text-white mb-8">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col justify-between sm:flex-row">
                    <div className="mb-6 sm:mb-0">
                        <a href="https://flowbite.com" className="flex items-center">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt="Flowbite Logo"
                                className="h-8 mr-2"
                            />
                            <span className="text-xl font-semibold">Flowbite</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <h3 className="font-semibold">About</h3>
                            <ul>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Flowbite</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Follow Us</h3>
                            <ul>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Github</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Legal</h3>
                            <ul>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 my-6" />
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Flowbite™. All rights reserved.
                    </p>
                    <div className="mt-4 flex space-x-6 sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <BsFacebook />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <BsInstagram />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <BsTwitter />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <BsGithub />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <BsDribbble />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
