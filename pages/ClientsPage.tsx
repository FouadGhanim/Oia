
import React from 'react';
import { useContent } from '../context/ContentContext';

const ClientLogo: React.FC<{ name: string, logo: string }> = ({ name, logo }) => (
    <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 h-40">
        <img src={logo} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
    </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string; company: string }> = ({ quote, author, company }) => (
    <div className="bg-black text-white p-8 rounded-lg flex flex-col">
        <blockquote className="text-lg flex-grow">
            <p>"{quote}"</p>
        </blockquote>
        <footer className="mt-6">
            <p className="font-bold">{author}</p>
            <p className="text-gray-400">{company}</p>
        </footer>
    </div>
);

const ClientsPage: React.FC = () => {
    const { content } = useContent();
    const { mainHeading, subHeading, clientList, testimonials } = content.clients;

    return (
        <>
            {/* Our Clients Section */}
            <div className="py-16 md:py-24 bg-white">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl">
                            {mainHeading}
                        </h2>
                        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
                            {subHeading}
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
                        {clientList.map((client, index) => <ClientLogo key={index} name={client.name} logo={client.logo} />)}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl">
                            What Our Clients Say
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientsPage;