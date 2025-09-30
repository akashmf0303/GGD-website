import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Affordable',
      description: 'We believe quality digital solutions should be accessible to businesses of all sizes, offering competitive pricing without compromising on excellence.'
    },
    {
      icon: Users,
      title: 'Experienced',
      description: 'Our team brings years of expertise in web development, design, and digital marketing, with a proven track record of successful projects.'
    },
    {
      icon: Award,
      title: 'Innovative',
      description: 'We stay ahead of technology trends and implement cutting-edge solutions that give your business a competitive advantage.'
    },
    {
      icon: TrendingUp,
      title: 'Results-driven',
      description: 'Every project is measured by its impact on your business goals, ensuring measurable returns on your digital investment.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const services = [
    'Custom Website Development',
    'E-commerce Solutions',
    'Mobile App Development',
    'Digital Marketing Campaigns',
    'SEO & Content Strategy',
    'UI/UX Design',
    'Cloud Integration',
    'Ongoing Support & Maintenance'
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-dark-neutral mb-6 animate-fade-in">
            <span className="text-primary">Who</span> We Are
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Growth Gen Digital is a results-driven agency with a proven track record in website design, development, 
            and digital marketing. We combine creativity, technical expertise, and strategy to help brands succeed 
            in the digital landscape.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner mx-4 sm:mx-8 lg:mx-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-6">
                Our Mission
              </h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                To empower businesses of all sizes with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting competitive advantages in the digital marketplace.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed">
                We believe that every business deserves access to world-class digital solutions, 
                regardless of their size or budget. Our approach combines strategic thinking with 
                technical excellence to deliver results that matter.
              </p>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm shadow-lg">
                <div className="grid grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="font-poppins font-bold text-3xl lg:text-4xl text-primary mb-2">
                        {achievement.number}
                      </div>
                      <div className="font-inter text-gray-600 font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner mx-4 sm:mx-8 lg:mx-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-4">
              Why Choose Us?
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              We're not just another digital agency. Here's what sets us apart and makes us the right choice for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-full inline-block mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-dark-neutral mb-4">
                  {value.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner mx-4 sm:mx-8 lg:mx-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-6">
                Our Expertise
              </h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                With a comprehensive skill set spanning design, development, and digital marketing, 
                we're your one-stop solution for all digital needs. Our expertise includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-inter text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-10"></div>
                <div className="relative bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-xl">
                  <h3 className="font-poppins font-bold text-2xl text-dark-neutral mb-4">
                    Ready to Work With Us?
                  </h3>
                  <p className="font-inter text-gray-600 mb-6">
                    Let's discuss how we can help transform your digital presence and drive your business forward.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="font-inter text-gray-600">Free consultation call</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="font-inter text-gray-600">Custom strategy development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="font-inter text-gray-600">Transparent project timeline</span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-full font-inter font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/90 to-primary/90 rounded-2xl mx-4 sm:mx-8 lg:mx-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="font-inter text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have transformed their digital presence with our expert solutions.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-full font-inter font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
