
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import Icon from '../components/Icon';

const ProductDetailPage: React.FC = () => {
    const { content } = useContent();
    const { productId } = useParams<{ productId: string }>();
    const product = content.products.find(p => p.id === productId);

    if (!product) {
        return <Navigate to="/products" replace />;
    }

    return (
        <div className="bg-white py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="mb-12">
                     <Link to="/products" className="text-gray-600 hover:text-black hover:underline transition-colors duration-300">
                        &larr; Back to all products
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Image */}
                    <div>
                        <img 
                            src={product.imagePlaceholder} 
                            alt={`${product.title} illustration`} 
                            className="rounded-lg shadow-lg w-full h-auto object-cover border border-gray-100" 
                        />
                    </div>
                    
                    {/* Right Column: Details */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                                <Icon name={product.icon} />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">{product.title}</h1>
                        </div>
                        
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            {product.longDescription}
                        </p>

                        <div className="mt-10">
                            <h2 className="text-xl font-bold text-black">Key Features</h2>
                            <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="flex-shrink-0 h-5 w-5 text-black mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-xl font-bold text-black">Core Benefits</h2>
                             <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
                                {product.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="flex-shrink-0 h-5 w-5 text-black mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-12">
                            <Link to="/contact" className="inline-block w-full text-center bg-black text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
