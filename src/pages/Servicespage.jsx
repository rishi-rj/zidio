import React from 'react';
import { 
  Cloud, 
  Settings, 
  RefreshCw, 
  Brain,
  Monitor,
  Globe,
  Shield,
  BarChart3
} from 'lucide-react';

// Service Card Component with enhanced hover effects
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-xl group cursor-pointer">
    <div className="mb-4">
      <Icon 
        className="text-blue-600 transition-transform duration-300 group-hover:scale-110" 
        size={32} 
      />
    </div>
    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
      {description}
    </p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 text-sm flex items-center space-x-1 hover:bg-blue-700 group-hover:translate-x-2">
      <span>Learn More</span>
      <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
    </button>
  </div>
);

// Newsletter Component with hover effect on button
const Newsletter = () => (
  <div className="bg-blue-600 py-16 mt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          Get Latest Update from ZIDIO
        </h2>
        <h3 className="text-2xl text-white mb-8">
          Stay Connect with Us
        </h3>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your Email"
            className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          />
          <button className="bg-blue-700 text-white px-6 py-2 rounded-r-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg transform hover:-translate-y-0.5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Deliver scalable cloud solutions to enhance your business's flexibility and operational efficiency"
    },
    {
      icon: Settings,
      title: "IT Management",
      description: "Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations"
    },
    {
      icon: RefreshCw,
      title: "Software Renew",
      description: "Manage and streamline software renewals, ensuring your systems are always up-to-date and secure"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Develop and implement machine learning models to automate processes and drive intelligent decision-making"
    },
    {
      icon: Monitor,
      title: "Digital Marketing",
      description: "Boost your online presence with tailored digital marketing strategies that drive engagement and growth"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Design and build responsive, high-performance websites using the latest web technologies"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats"
    },
    {
      icon: BarChart3,
      title: "Data Analytic",
      description: "Transform raw data into valuable insights, enabling informed and strategic business decisions"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[black] font-medium mb-2">What We Provides?</p>
          <h1 className="text-3xl text-black font-bold mb-2">
            Provide Interactive IT Solution &
          </h1>
          <h2 className="text-3xl text-black font-bold">
            Business Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}