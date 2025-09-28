
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import Icon from '../components/Icon';

const ServiceHighlight: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-6 border border-gray-100 rounded-lg transition-shadow duration-300 hover:shadow-xl">
    <div className="flex justify-center items-center mb-4 w-12 h-12 mx-auto bg-black text-white rounded-full">
      <Icon name={icon} />
    </div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  const { content } = useContent();
  const { hero, about } = content.home;
  const { serviceList } = content.services;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % hero.sliderImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentSlide, hero.sliderImages.length]);

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative bg-black text-white h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {hero.sliderImages.map((src, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${src})`, opacity: index === currentSlide ? 1 : 0 }}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          />
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="inline-block bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300">
              Our Services
            </Link>
            <Link to="/contact" className="inline-block bg-transparent text-white font-bold py-3 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-black transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={about.imageUrl} alt="OIA Team working" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{about.title}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {about.content1}
            </p>
            <p className="mt-4 text-lg text-gray-600">
              {about.content2}
            </p>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What We Do</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We offer a complete suite of services to bring your digital presence to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceList.slice(0, 3).map(service => (
               <ServiceHighlight 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.items.slice(0,1)[0]}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
