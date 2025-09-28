import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img className="h-12 w-auto filter invert" src="https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070008/OIA_Main_Logo_grtidy.png" alt="OIA Agency Logo" />
                        <p className="mt-2 text-gray-400">
                            Crafting Digital Excellence.
                            <br />
                            Alexandria, Egypt.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/#/services" className="text-gray-400 hover:text-white hover:underline transition-colors">Services</a></li>
                            <li><a href="/#/products" className="text-gray-400 hover:text-white hover:underline transition-colors">Products</a></li>
                            <li><a href="/#/clients" className="text-gray-400 hover:text-white hover:underline transition-colors">Clients</a></li>
                            <li><a href="/#/contact" className="text-gray-400 hover:text-white hover:underline transition-colors">Contact Us</a></li>
                            <li><Link to="/admin" className="text-gray-400 hover:text-white hover:underline transition-colors">Admin Panel</Link></li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="font-semibold tracking-wider uppercase">Connect</h4>
                         <div className="mt-4 flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                         </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>© 2025 OIA. All rights reserved. C.R 11816</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;