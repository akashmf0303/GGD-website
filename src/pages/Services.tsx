import React from 'react';
import { Code, Smartphone, ShoppingCart, Search, Megaphone, Palette, Cloud, Bot, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Design & Development',
      description: 'Custom, responsive websites that convert visitors into customers with modern design and seamless functionality.'
    },
    {
      icon: Settings,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and streamline operations.'
    },
    {
      icon: Cloud,
      title: 'SaaS Development',
      description: 'Scalable Software-as-a-Service platforms that grow with your business and provide reliable recurring revenue.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps that deliver exceptional user experiences and drive mobile engagement.'
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce Development',
      description: 'Complete online stores with payment integration, inventory management, and conversion optimization.'
    },
    {
      icon: Search,
      title: 'SEO (Search Engine Optimization)',
      description: 'Improve your search rankings and drive organic traffic with proven SEO strategies and technical optimization.'
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing & Paid Ads',
      description: 'Strategic social campaigns and targeted advertising to increase brand awareness and generate leads.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive interfaces and exceptional digital experiences for your customers.'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment processes for reliable, high-performance applications.'
    },
    {
      icon: Bot,
      title: 'AI-Powered Solutions',
      description: 'Intelligent chatbots, automation tools, and AI integrations to enhance efficiency and customer service.'
    },
    {
      icon: Settings,
      title: 'Web Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your digital assets running smoothly.'
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-dark-neutral mb-6 animate-fade-in">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Comprehensive digital and development services to scale your business. We provide end-to-end solutions 
            that help you establish a strong online presence and achieve your business objectives.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-base p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-dark-neutral mb-4">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-4">
              Our Development Process
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', description: 'We understand your business goals and create a detailed project roadmap.' },
              { step: '02', title: 'Design & Prototyping', description: 'Create wireframes and designs that align with your brand and user needs.' },
              { step: '03', title: 'Development & Testing', description: 'Build your solution using best practices and rigorous quality assurance.' },
              { step: '04', title: 'Launch & Support', description: 'Deploy your project and provide ongoing maintenance and optimization.' },
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-poppins font-bold text-white text-lg">{process.step}</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-dark-neutral mb-3">{process.title}</h3>
                <p className="font-inter text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-inter text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives results for your business.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-full font-inter font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;