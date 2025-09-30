import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      name: 'Dizams',
      url: 'https://dizams.com',
      description: 'A modern e-commerce platform featuring responsive design, seamless user experience, and advanced product showcase functionality.',
      category: 'E-commerce',
      year: '2024',
      features: ['Responsive Design', 'Payment Integration', 'Product Catalog', 'User Dashboard']
    },
    {
      name: 'AKS Clothings',
      url: 'https://www.aksclothings.com',
      description: 'Fashion retail website with stunning visual design, product filtering, and smooth shopping experience for modern consumers.',
      category: 'Fashion & Retail',
      year: '2024',
      features: ['Visual Design', 'Product Filters', 'Shopping Cart', 'Mobile Optimized']
    },
    {
      name: 'Prime Settings',
      url: 'https://primesettings.com',
      description: 'Professional tech solutions platform with clean interface, service showcases, and lead generation optimization.',
      category: 'Technology',
      year: '2023',
      features: ['Service Showcase', 'Lead Generation', 'Professional Design', 'SEO Optimized']
    },
    {
      name: 'All Grind',
      url: 'https://allgrind.com.au',
      description: 'Dynamic fitness community website with member features, class booking system, and engaging community platform.',
      category: 'Health & Fitness',
      year: '2023',
      features: ['Community Platform', 'Booking System', 'Member Portal', 'Mobile App']
    },
    {
      name: 'White & Guard',
      url: 'https://www.whiteandguard.com/',
      description: 'A sophisticated website showcasing premium branding and creative direction for a modern design-first business.',
      category: 'Creative & Branding',
      year: '2024',
      features: ['Premium Design', 'Brand Strategy', 'Interactive Layouts', 'Responsive Experience']
    },
    {
      name: 'Chromatix',
      url: 'https://www.chromatix.com.au/',
      description: 'Award-winning web design and development agency with a strong focus on bespoke experiences and client-driven results.',
      category: 'Agency',
      year: '2024',
      features: ['Award-Winning Design', 'Custom Development', 'Client Collaboration', 'High Conversion Focus']
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-dark-neutral mb-6 animate-fade-in">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Explore our collection of successful projects that showcase our expertise in creating 
            digital solutions that drive business growth and user engagement.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner mx-4 sm:mx-8 lg:mx-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ✅ Updated grid line here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-poppins font-bold text-2xl text-dark-neutral">{project.name}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-all duration-200 group"
                    >
                      <ExternalLink className="h-5 w-5 text-primary group-hover:text-white" />
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <span className="font-inter">{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-inter">{project.year}</span>
                    </div>
                  </div>
                  
                  <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-poppins font-semibold text-dark-neutral mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-white/70 backdrop-blur-sm text-primary text-sm font-inter font-medium rounded-full border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Call Button */}
          <div className="text-center mt-16">
            <a
              href="https://calendly.com/growthgendigital/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-inter font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Book a Quick Call
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner mx-4 sm:mx-8 lg:mx-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-4">
              What We Can Build For You
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              From simple websites to complex applications, we have the expertise to bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'E-commerce Platforms',
              'Corporate Websites',
              'Mobile Applications',
              'SaaS Platforms',
              'Portfolio Websites',
              'Booking Systems',
              'Community Platforms',
              'Learning Management Systems',
              'Custom Web Applications'
            ].map((capability, index) => (
              <div 
                key={index} 
                className="bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-poppins font-semibold text-dark-neutral">{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="py-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner mx-4 sm:mx-8 lg:mx-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-4">
            Your Project Could Be Next
          </h2>
          <p className="font-inter text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We're always excited to take on new challenges and help businesses achieve their digital goals. 
            Let's discuss how we can create something amazing together.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-inter font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;