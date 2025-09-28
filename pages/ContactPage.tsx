
import React from 'react';
import { useContent } from '../context/ContentContext';

const ContactPage: React.FC = () => {
    const { content } = useContent();
    const { address, email, phone } = content.contact;
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="bg-white py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
                        Have a project in mind? We'd love to hear from you. Let's build something great together.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <div className="mt-1">
                                    <input type="text" name="name" id="name" required className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" placeholder="Your Name" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" placeholder="you@example.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows={6} required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" placeholder="How can we help?"></textarea>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-black text-white rounded-md">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-black">Our Address</h3>
                                <p className="mt-1 text-gray-600" dangerouslySetInnerHTML={{ __html: address }} />
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-black text-white rounded-md">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-black">Email Us</h3>
                                <p className="mt-1 text-gray-600">{email}</p>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-black text-white rounded-md">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-black">Call Us</h3>
                                <p className="mt-1 text-gray-600">{phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
