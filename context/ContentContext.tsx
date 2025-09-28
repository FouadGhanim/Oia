
import React, { createContext, useState, useContext } from 'react';

// Interfaces for our content structure
interface HeroContent {
  title: string;
  subtitle: string;
  sliderImages: string[];
}

interface AboutContent {
  title: string;
  content1: string;
  content2: string;
  imageUrl: string;
}

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
}

interface ServicesContent {
  mainHeading: string;
  subHeading: string;
  serviceList: ServiceItem[];
}

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface Client {
  name: string;
  logo: string;
}

interface ClientsContent {
  mainHeading: string;
  subHeading: string;
  clientList: Client[];
  testimonials: Testimonial[];
}

interface ContactContent {
    address: string;
    email: string;
    phone: string;
}

export interface Product {
    id: string;
    icon: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
    benefits: string[];
    imagePlaceholder: string;
}

// Main Content interface
interface Content {
  home: {
    hero: HeroContent;
    about: AboutContent;
  };
  services: ServicesContent;
  clients: ClientsContent;
  contact: ContactContent;
  products: Product[];
}

interface ContentContextType {
  content: Content;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
}

const placeholderLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNFNUU3RUIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOUNBM0FGIj5MT0dNPC90ZXh0Pjwvc3ZnPg==";

const initialContent: Content = {
  home: {
    hero: {
      title: 'Your Vision, <span class="block">Engineered for Excellence.</span>',
      subtitle: 'OIA is a premier software house and marketing agency in Alexandria, Egypt. We transform ideas into powerful digital realities.',
      sliderImages: [
        'https://picsum.photos/seed/slide1/1920/1080?grayscale&blur=2',
        'https://picsum.photos/seed/slide2/1920/1080?grayscale&blur=2',
        'https://picsum.photos/seed/slide3/1920/1080?grayscale&blur=2',
      ]
    },
    about: {
        title: 'Who We Are',
        content1: "Founded in the heart of Alexandria, OIA is driven by a passion for technology and a commitment to our clients' success. We are a collective of expert designers, developers, and marketers dedicated to delivering bespoke solutions that drive growth and create lasting value.",
        content2: "Our approach is collaborative and transparent. We work closely with you to understand your unique challenges and goals, ensuring the final product is not just functional, but exceptional.",
        imageUrl: "https://picsum.photos/800/600?grayscale"
    }
  },
  services: {
    mainHeading: "Everything You Need to Succeed Online",
    subHeading: "From initial concept to final launch and beyond, we provide the expertise to make your project a success.",
    serviceList: [
       { id: 'web', icon: 'code', title: 'Custom Web Development', description: 'We build beautiful, scalable, and secure web applications tailored to your specific business needs, from stunning marketing sites to complex enterprise platforms.', items: ['React.js / Next.js', 'Node.js / Express', 'E-commerce Solutions', 'CMS Development'] },
       { id: 'mobile', icon: 'mobile', title: 'Mobile App Development', description: 'Engage your customers on the go. We design and develop native and cross-platform mobile apps that offer seamless performance and an intuitive user experience.', items: ['iOS (Swift)', 'Android (Kotlin)', 'React Native', 'Flutter'] },
       { id: 'design', icon: 'design', title: 'UI/UX Design', description: 'First impressions matter. Our design team creates visually stunning and user-centric interfaces that are not only beautiful but also easy to navigate and a joy to use.', items: ['Wireframing & Prototyping', 'User Research', 'Interaction Design', 'Design Systems'] },
       { id: 'marketing', icon: 'marketing', title: 'Digital Marketing & SEO', description: 'Get seen by the right audience. We develop data-driven marketing strategies to increase your online visibility, attract qualified leads, and boost your bottom line.', items: ['Search Engine Optimization (SEO)', 'Content Marketing', 'Social Media Management', 'PPC Campaigns'] },
       { id: 'cloud', icon: 'cloud', title: 'Cloud & DevOps', description: 'Leverage the power of the cloud. We provide expert services to build, deploy, and manage your applications on robust and scalable cloud infrastructure.', items: ['AWS / Google Cloud', 'CI/CD Pipelines', 'Containerization (Docker)', 'Infrastructure as Code'] },
       { id: 'ai', icon: 'ai', title: 'AI & Machine Learning', description: 'Unlock the potential of your data. We help businesses integrate AI and machine learning models to automate processes, gain insights, and create intelligent products.', items: ['Data Analysis', 'Predictive Modeling', 'Natural Language Processing', 'Computer Vision'] },
    ]
  },
  clients: {
      mainHeading: "Trusted by Industry Leaders",
      subHeading: "We are proud to have collaborated with a diverse range of businesses, helping them achieve their digital ambitions.",
      clientList: [
        { name: 'Innovate Corp', logo: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070012/Tech_Academy_Logo_qhhrmk.png' },
        { name: 'NextGen Solutions', logo: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070009/2_vbnhdq.png' },
        { name: 'Market Movers', logo: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070008/3_ofzgv1.svg' },
        { name: 'Quantum Leap', logo: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070017/1_eq1vvo.png' },
        
      ],
      testimonials: [
        { quote: "OIA transformed our online presence. Their team is professional, creative, and delivered beyond our expectations. A true partner in our growth.", author: "Ahmed Hassan", company: "CEO, Innovate Corp" },
        { quote: "The mobile app they developed for us has been a game-changer. The user feedback is overwhelmingly positive, and it's all thanks to OIA's meticulous work.", author: "Fatima El-Sayed", company: "Marketing Director, NextGen Solutions" },
        { quote: "Working with OIA was seamless. They understood our vision from day one and executed it flawlessly. We highly recommend them.", author: "Youssef Mansour", company: "Founder, Market Movers" },
      ]
  },
  contact: {
      address: 'Egypt, Alexandria<br />Al Mandara, Morotania St. Al Madina Tower. 1st Floor',
      email: 'info@oia-agency.com',
      phone: '+20 115 833 2227'
  },
  products: [
    { id: 'erp-system', icon: 'erp', title: 'Full ERP System', shortDescription: 'An all-in-one solution to manage your entire business on a single integrated platform.', longDescription: 'Our Enterprise Resource Planning (ERP) system is the backbone of your business, integrating all essential functions from finance and HR to supply chain and customer relations. Gain a holistic view of your operations, make data-driven decisions, and improve efficiency across the board with a scalable and modular architecture that grows with you.', features: ['Unified Dashboard & Reporting', 'Real-time Analytics and BI', 'Modular Architecture (Finance, SCM, HR)', 'Scalable Cloud-Based Infrastructure', 'Advanced Security Protocols', 'Process Automation Workflows'], benefits: ['Increase operational efficiency', 'Enhance decision-making with accurate data', 'Improve collaboration between departments', 'Reduce operational costs'], imagePlaceholder: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070691/social-network-connection-avatar-icon-vector_meznq9.jpg' },
    { id: 'e-commerce', icon: 'ecommerce', title: 'e-Commerce Platform', shortDescription: 'Launch and grow your online store with our powerful and flexible e-commerce solution.', longDescription: 'Our e-Commerce platform provides everything you need to build a successful online business. From beautiful, responsive storefronts to secure payment processing and inventory management, we empower you to create exceptional shopping experiences that convert visitors into loyal customers. It\'s built to scale, whether you\'re a startup or an enterprise.', features: ['Customizable Storefront Themes', 'Secure Payment Gateway Integration', 'Advanced Inventory Management', 'Built-in SEO & Marketing Tools', 'Mobile-Responsive Design', 'Order & Fulfillment Management'], benefits: ['Reach a wider customer base', 'Increase sales and revenue', 'Streamline online store management', 'Provide a seamless customer journey'], imagePlaceholder: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759071019/ecommerce-1400x800_aonssr.jpg' },
    { id: 'hrms', icon: 'hrms', title: 'HRMS', shortDescription: 'Streamline your human resources with our comprehensive Human Resource Management System.', longDescription: 'Our Human Resource Management System (HRMS) simplifies and automates your HR processes. From recruitment and onboarding to payroll and performance management, our system reduces administrative burden, improves accuracy, and empowers your employees with self-service capabilities, allowing your HR team to focus on strategic initiatives.', features: ['Employee Self-Service Portal', 'Performance & Appraisal Tracking', 'Leave & Attendance Management', 'Automated Payroll Processing', 'Recruitment & Onboarding Module', 'Compliance Reporting'], benefits: ['Automate repetitive HR tasks', 'Improve employee engagement', 'Ensure compliance with labor laws', 'Centralize all employee data securely'], imagePlaceholder: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070697/invoice-bill-paid-payment-financial-account-concept_johevo.jpg' },
    { id: 'crm', icon: 'crm', title: 'CRM', shortDescription: 'Build lasting customer relationships with our intuitive Customer Relationship Management tool.', longDescription: 'Our Customer Relationship Management (CRM) system helps you manage every interaction with your customers and prospects. Track leads, automate your sales pipeline, and gain deep insights into customer behavior to deliver personalized experiences, improve retention, and drive sales growth. It\'s your central hub for all customer-related data.', features: ['Sales Funnel Visualization', 'Contact & Lead Management', 'Email & Calendar Integration', 'Customizable Reporting & Dashboards', 'Task & Activity Tracking', 'Marketing Automation'], benefits: ['Improve customer satisfaction and loyalty', 'Increase sales team productivity', 'Gain a 360-degree view of your customer', 'Shorten the sales cycle'], imagePlaceholder: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070701/2302_i201_014_s_m004_c13_crm_customer_relationship_management_isometric_qi9bhf.jpg' },
    { id: 'wms', icon: 'wms', title: 'WMS', shortDescription: 'Optimize your warehouse operations, from inventory accuracy to order fulfillment.', longDescription: 'Our Warehouse Management System (WMS) brings precision and efficiency to your supply chain. With real-time inventory tracking, optimized picking and packing routes, and seamless integration with shipping carriers, our WMS reduces errors, lowers operational costs, and ensures faster, more accurate order fulfillment for ultimate customer satisfaction.', features: ['Barcode & RFID Scanning', 'Real-time Stock Level Monitoring', 'Optimized Picking & Packing Paths', 'Shipment Tracking & Carrier Integration', 'Multi-Warehouse Management', 'Automated Replenishment'], benefits: ['Increase inventory accuracy', 'Improve order fulfillment speed', 'Reduce labor costs and errors', 'Maximize warehouse space utilization'], imagePlaceholder: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070713/delivery-robot-futuristic-environment_cux6bj.jpg' },
    { id: 'accounting', icon: 'accounting', title: 'Accounting System', shortDescription: 'Simplify your financial management with our accurate and easy-to-use accounting software.', longDescription: 'Take control of your finances with our robust Accounting System. Designed for businesses of all sizes, it simplifies everything from invoicing and expense tracking to financial reporting and tax compliance. Get a clear picture of your financial health in real-time, automate tedious tasks, and make smarter financial decisions with confidence.', features: ['General Ledger Management', 'Accounts Payable/Receivable', 'Automated Bank Reconciliation', 'In-depth Financial Reporting', 'Expense & Receipt Tracking', 'Tax Preparation Tools'], benefits: ['Ensure financial accuracy and compliance', 'Save time on bookkeeping tasks', 'Gain clear insights into profitability', 'Streamline your invoicing and payments'], imagePlaceholder: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070719/accountant-calculating-profit-with-financial-analysis-graphs_ufmyxs.jpg' },
    { id: 'invoice', icon: 'invoice', title: 'Invoice System', shortDescription: 'Create professional invoices, track payments, and get paid faster with our streamlined solution.', longDescription: 'Our Invoice System is designed to make billing effortless and professional. Create and send customized invoices in seconds, accept online payments directly, and send automated reminders for overdue payments. Stop chasing payments and spend more time growing your business with a system that ensures you get paid on time, every time.', features: ['Customizable Invoice Templates', 'Automated Payment Reminders', 'Online Payment Integration', 'Real-time Payment Tracking', 'Recurring Invoices', 'Client Management'], benefits: ['Get paid faster and improve cash flow', 'Enhance your professional brand image', 'Reduce time spent on administrative tasks', 'Track your income and expenses effortlessly'], imagePlaceholder: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070697/invoice-bill-paid-payment-financial-account-concept_johevo.jpg' },
    { id: 'lms', icon: 'lms', title: 'LMS', shortDescription: 'Deliver engaging learning experiences with our intuitive Learning Management System.', longDescription: 'Our Learning Management System (LMS) is a complete platform for creating, delivering, and tracking online training and educational content. From corporate training to academic courses, our LMS provides the tools for instructors to build engaging content and for learners to succeed with a user-friendly, accessible interface.', features: ['Course Creation & Management', 'Student Enrollment & Tracking', 'Online Quizzes & Assessments', 'Certification & Gamification', 'Mobile Learning Ready', 'Reporting & Analytics'], benefits: ['Centralize all learning materials', 'Improve learner engagement and retention', 'Track progress and measure effectiveness', 'Reduce training and development costs'], imagePlaceholder: 'https://res.cloudinary.com/deo7z8ogn/image/upload/v1759070676/2176_rxbx7k.jpg' },
  ]
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<Content>(initialContent);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
