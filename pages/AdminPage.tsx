
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { produce } from 'immer';

type AdminTabs = 'home' | 'services' | 'clients' | 'contact' | 'products';

// Helper function to convert file to Base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

const placeholderLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNFNUU3RUIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOUNBM0FGIj5MT0dNPC90ZXh0Pjwvc3ZnPg==";


const AdminPage: React.FC = () => {
    const { content, setContent } = useContent();
    const { logout } = useAuth();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState(content);
    const [activeTab, setActiveTab] = useState<AdminTabs>('home');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        
        setFormData(produce(draft => {
            let current: any = draft;
            keys.forEach((key, index) => {
                if (index === keys.length - 1) {
                    current[key] = value;
                } else {
                    current = current[key];
                }
            });
        }));
    };

    const handleObjectListChange = (path: string, index: number, field: string, value: string) => {
         const keys = path.split('.');
         setFormData(produce(draft => {
            let current: any = draft;
            keys.forEach(key => {
                current = current[key];
            });
            current[index][field] = value;
        }));
    };

    const handleAddSliderImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            try {
                const file = e.target.files[0];
                const base64 = await fileToBase64(file);
                setFormData(produce(draft => {
                    draft.home.hero.sliderImages.push(base64);
                }));
            } catch (error) {
                console.error("Error converting file to base64", error);
            }
            e.target.value = ''; // Reset file input
        }
    };

    const handleUpdateSliderImage = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.files && e.target.files[0]) {
            try {
                const file = e.target.files[0];
                const base64 = await fileToBase64(file);
                setFormData(produce(draft => {
                    draft.home.hero.sliderImages[index] = base64;
                }));
            } catch (error) {
                console.error("Error converting file to base64", error);
            }
            e.target.value = ''; // Reset file input
        }
    };
    
    const removeSliderImage = (index: number) => {
        setFormData(produce(draft => {
            draft.home.hero.sliderImages.splice(index, 1);
        }));
    };

    const handleAboutImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            try {
                const file = e.target.files[0];
                const base64 = await fileToBase64(file);
                setFormData(produce(draft => {
                    draft.home.about.imageUrl = base64;
                }));
            } catch (error) {
                console.error("Error converting file to base64", error);
            }
        }
    };

    const handleProductImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.files && e.target.files[0]) {
            try {
                const file = e.target.files[0];
                const base64 = await fileToBase64(file);
                setFormData(produce(draft => {
                    draft.products[index].imagePlaceholder = base64;
                }));
            } catch (error) {
                console.error("Error converting file to base64", error);
            }
            e.target.value = ''; // Reset file input
        }
    };

    const handleClientLogoChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.files && e.target.files[0]) {
            try {
                const file = e.target.files[0];
                const base64 = await fileToBase64(file);
                setFormData(produce(draft => {
                    draft.clients.clientList[index].logo = base64;
                }));
            } catch (error) {
                console.error("Error converting file to base64", error);
            }
            e.target.value = '';
        }
    };

    const addNewClient = () => {
        setFormData(produce(draft => {
            draft.clients.clientList.push({ name: 'New Client', logo: placeholderLogo });
        }));
    };

    const removeClient = (index: number) => {
        setFormData(produce(draft => {
            draft.clients.clientList.splice(index, 1);
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setContent(formData);
        setSuccessMessage('Content updated successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Homepage</h3>
                        <div className="space-y-6 p-6 border rounded-md">
                            <h4 className="font-semibold">Hero Section</h4>
                            <div>
                                <label htmlFor="home.hero.title" className="block text-sm font-medium text-gray-700">Main Title (HTML allowed)</label>
                                <textarea id="home.hero.title" name="home.hero.title" rows={3} value={formData.home.hero.title} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="home.hero.subtitle" className="block text-sm font-medium text-gray-700">Subtitle</label>
                                <textarea id="home.hero.subtitle" name="home.hero.subtitle" rows={4} value={formData.home.hero.subtitle} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                            </div>
                            <h4 className="font-semibold pt-4 border-t">Hero Slider Images</h4>
                             <div className="space-y-4">
                                {formData.home.hero.sliderImages.map((src, index) => (
                                    <div key={index} className="flex items-center gap-4 p-2 border rounded-md">
                                        <img src={src} alt={`Slider preview ${index + 1}`} className="w-24 h-16 object-cover rounded-md bg-gray-100" />
                                        <div className="flex-grow">
                                            <input
                                                type="file"
                                                id={`slider-update-${index}`}
                                                className="hidden"
                                                accept="image/png, image/jpeg, image/webp"
                                                onChange={(e) => handleUpdateSliderImage(e, index)}
                                            />
                                            <label htmlFor={`slider-update-${index}`} className="cursor-pointer px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
                                                Change Image
                                            </label>
                                        </div>
                                        <button type="button" onClick={() => removeSliderImage(index)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">Remove</button>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <input
                                    type="file"
                                    id="add-new-slider-image"
                                    className="hidden"
                                    accept="image/png, image/jpeg, image/webp"
                                    onChange={handleAddSliderImage}
                                />
                                <label htmlFor="add-new-slider-image" className="cursor-pointer mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-sm">
                                    + Add New Image
                                </label>
                            </div>
                        </div>
                        <div className="space-y-6 p-6 border rounded-md mt-6">
                            <h4 className="font-semibold">About Section</h4>
                            <div>
                                <label htmlFor="home.about.title" className="block text-sm font-medium text-gray-700">Section Title</label>
                                <input id="home.about.title" name="home.about.title" type="text" value={formData.home.about.title} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">About Us Image</label>
                                <div className="mt-2 flex items-center gap-4 p-2 border rounded-md">
                                    <img src={formData.home.about.imageUrl} alt="About Us preview" className="w-24 h-16 object-cover rounded-md bg-gray-100" />
                                    <div className="flex-grow">
                                        <input
                                            type="file"
                                            id="about-image-upload"
                                            className="hidden"
                                            accept="image/png, image/jpeg, image/webp"
                                            onChange={handleAboutImageChange}
                                        />
                                        <label htmlFor="about-image-upload" className="cursor-pointer px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
                                            Change Image
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="home.about.content1" className="block text-sm font-medium text-gray-700">Paragraph 1</label>
                                <textarea id="home.about.content1" name="home.about.content1" rows={4} value={formData.home.about.content1} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="home.about.content2" className="block text-sm font-medium text-gray-700">Paragraph 2</label>
                                <textarea id="home.about.content2" name="home.about.content2" rows={4} value={formData.home.about.content2} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                            </div>
                        </div>
                    </div>
                );
            case 'services':
                return (
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Services Page</h3>
                        <div className="space-y-6">
                            {formData.services.serviceList.map((service, index) => (
                                <div key={service.id} className="p-4 border rounded-md">
                                    <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                                     <input type="text" value={service.title} onChange={e => handleObjectListChange('services.serviceList', index, 'title', e.target.value)} className="w-full p-1 border rounded mb-2" />
                                     <textarea value={service.description} onChange={e => handleObjectListChange('services.serviceList', index, 'description', e.target.value)} className="w-full p-1 border rounded mb-2" rows={3}/>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'clients':
                 return (
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Clients Page</h3>
                        <div className="space-y-6">
                            <h4 className="font-semibold">Client Logos</h4>
                            <div className="space-y-4">
                                {formData.clients.clientList.map((client, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 border rounded-md">
                                        <img src={client.logo} alt={`${client.name} logo preview`} className="w-24 h-16 object-contain rounded-md bg-gray-100" />
                                        <div className="flex-grow space-y-2">
                                            <input
                                                type="text"
                                                value={client.name}
                                                onChange={(e) => handleObjectListChange('clients.clientList', index, 'name', e.target.value)}
                                                placeholder="Client Name"
                                                className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
                                            />
                                             <div>
                                                <input
                                                    type="file"
                                                    id={`client-logo-update-${index}`}
                                                    className="hidden"
                                                    accept="image/png, image/jpeg, image/svg+xml, image/webp"
                                                    onChange={(e) => handleClientLogoChange(e, index)}
                                                />
                                                <label htmlFor={`client-logo-update-${index}`} className="cursor-pointer px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
                                                    Change Logo
                                                </label>
                                            </div>
                                        </div>
                                        <button type="button" onClick={() => removeClient(index)} className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">Remove</button>
                                    </div>
                                ))}
                            </div>
                            <button type="button" onClick={addNewClient} className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-sm">
                                + Add Client
                            </button>
                            
                            <h4 className="font-semibold pt-4 border-t">Testimonials</h4>
                             {formData.clients.testimonials.map((testimonial, index) => (
                                <div key={index} className="p-4 border rounded-md space-y-2">
                                    <textarea value={testimonial.quote} onChange={e => handleObjectListChange('clients.testimonials', index, 'quote', e.target.value)} className="w-full p-1 border rounded" rows={3} placeholder="Quote"/>
                                    <input type="text" value={testimonial.author} onChange={e => handleObjectListChange('clients.testimonials', index, 'author', e.target.value)} className="w-full p-1 border rounded" placeholder="Author"/>
                                    <input type="text" value={testimonial.company} onChange={e => handleObjectListChange('clients.testimonials', index, 'company', e.target.value)} className="w-full p-1 border rounded" placeholder="Company"/>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'contact':
                 return (
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Page</h3>
                        <div className="space-y-6 p-6 border rounded-md">
                            <div>
                                <label htmlFor="contact.address" className="block text-sm font-medium text-gray-700">Address (HTML allowed)</label>
                                <textarea id="contact.address" name="contact.address" rows={3} value={formData.contact.address} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="contact.email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input id="contact.email" name="contact.email" type="email" value={formData.contact.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                            </div>
                             <div>
                                <label htmlFor="contact.phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input id="contact.phone" name="contact.phone" type="text" value={formData.contact.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                            </div>
                        </div>
                    </div>
                );
            case 'products':
                return (
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Products</h3>
                        <div className="space-y-6">
                            {formData.products.map((product, index) => (
                                <div key={product.id} className="p-4 border rounded-md space-y-4">
                                    <h4 className="font-semibold text-lg">{product.title}</h4>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Title</label>
                                        <input type="text" value={product.title} onChange={e => handleObjectListChange('products', index, 'title', e.target.value)} className="w-full p-2 border rounded mt-1" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Short Description</label>
                                        <textarea value={product.shortDescription} onChange={e => handleObjectListChange('products', index, 'shortDescription', e.target.value)} className="w-full p-2 border rounded mt-1" rows={2} />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Long Description</label>
                                        <textarea value={product.longDescription} onChange={e => handleObjectListChange('products', index, 'longDescription', e.target.value)} className="w-full p-2 border rounded mt-1" rows={4} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Product Image</label>
                                        <div className="mt-2 flex items-center gap-4 p-2 border rounded-md">
                                            <img src={product.imagePlaceholder} alt={`${product.title} preview`} className="w-24 h-16 object-cover rounded-md bg-gray-100" />
                                            <div className="flex-grow">
                                                <input
                                                    type="file"
                                                    id={`product-image-upload-${index}`}
                                                    className="hidden"
                                                    accept="image/png, image/jpeg, image/webp"
                                                    onChange={(e) => handleProductImageChange(e, index)}
                                                />
                                                <label htmlFor={`product-image-upload-${index}`} className="cursor-pointer px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
                                                    Change Image
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    
    const TabButton: React.FC<{ tabName: AdminTabs; label: string }> = ({ tabName, label }) => (
        <button
            type="button"
            onClick={() => setActiveTab(tabName)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === tabName ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative mb-12">
                     <h2 className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl text-center">
                        Admin Control Panel
                    </h2>
                     <button 
                        type="button"
                        onClick={handleLogout} 
                        className="absolute top-0 right-0 bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                        Logout
                    </button>
                </div>
                
                <div className="flex justify-center flex-wrap gap-2 mb-8 border-b pb-4">
                    <TabButton tabName="home" label="Homepage" />
                    <TabButton tabName="services" label="Services" />
                    <TabButton tabName="products" label="Products" />
                    <TabButton tabName="clients" label="Clients" />
                    <TabButton tabName="contact" label="Contact" />
                </div>

                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
                            {renderTabContent()}
                        </div>
                         <div className="mt-8">
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300">
                                Save All Changes
                            </button>
                        </div>
                         {successMessage && (
                            <p className="text-green-600 text-center font-medium mt-4">{successMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
