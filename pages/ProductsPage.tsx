
import React from 'react';
import { Link } from 'react-router-dom';
import { useContent, Product } from '../context/ContentContext';
import Icon from '../components/Icon';

const ProductCard: React.FC<{ icon: string; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Icon name={icon} />
            </div>
            <h3 className="mt-6 text-2xl font-bold">{title}</h3>
            <p className="mt-4 text-base text-gray-600 flex-grow">{description}</p>
        </div>
         <div className="mt-6 border-t border-gray-100 pt-6">
            <span className="font-semibold text-black group-hover:underline">
                View Details &rarr;
            </span>
        </div>
    </div>
);

const ProductsPage: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-base font-semibold text-black tracking-wide uppercase">Our Products</h2>
          <p className="mt-2 text-3xl font-extrabold text-black tracking-tight sm:text-4xl">
            Software Built for Growth
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
            Explore our suite of powerful, ready-to-deploy software products designed to streamline your operations and drive business success.
          </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.products.map((product: Product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="block">
                <ProductCard 
                    title={product.title} 
                    description={product.shortDescription}
                    icon={product.icon}
                />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
