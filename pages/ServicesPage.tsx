
import React from 'react';
import { useContent } from '../context/ContentContext';
import Icon from '../components/Icon';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, items }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Icon name={icon} />
            </div>
            <h3 className="mt-6 text-2xl font-bold">{title}</h3>
            <p className="mt-4 text-base text-gray-600">{description}</p>
        </div>
        <div className="mt-6 border-t border-gray-100 pt-6">
            <h4 className="font-semibold text-black">Key Offerings:</h4>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    </div>
);

const ServicesPage: React.FC = () => {
  const { content } = useContent();
  const { mainHeading, subHeading, serviceList } = content.services;

  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-base font-semibold text-black tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-black tracking-tight sm:text-4xl">
            {mainHeading}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
            {subHeading}
          </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => <ServiceCard key={service.id} {...service} />)}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
