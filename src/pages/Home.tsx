import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = [
    { name: 'Dizams', url: 'https://dizams.com', description: 'Modern e-commerce platform' },
    { name: 'AKS Clothings', url: 'https://www.aksclothings.com', description: 'Fashion retail website' },
    { name: 'Prime Settings', url: 'https://primesettings.com', description: 'Tech solutions platform' },
    { name: 'All Grind', url: 'https://allgrind.com.au', description: 'Fitness community site' },
  ];

  const features = [
    'Affordable pricing for all business sizes',
    'Experienced team with proven results',
    'Innovative solutions using latest technology',
    'Results-driven approach with measurable outcomes'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-dark-neutral mb-6 leading-tight">
              Accelerate Your Business Growth with{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>
            <p className="font-inter text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tailored solutions in web development, design, and digital marketing to help your brand stand out in today's competitive digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/portfolio"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-inter font-semibold hover:bg-primary hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-4">
              Why Choose Growth Gen Digital?
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              We combine creativity, technical expertise, and strategy to deliver exceptional results for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-base rounded-xl hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <span className="font-inter font-medium text-dark-neutral">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-20 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-4">
              Featured Projects
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              Discover some of our recent work that helped businesses achieve their digital goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-poppins font-semibold text-lg text-dark-neutral">{project.name}</h3>
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="font-inter text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary font-inter font-medium hover:text-primary/80 transition-colors"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 bg-secondary text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-secondary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="font-inter text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help accelerate your business growth with innovative digital solutions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-4 rounded-full font-inter font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;