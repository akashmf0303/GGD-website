import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-dark-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://raw.githubusercontent.com/akashmf0303/logo/main/logo.png" 
                alt="Growth Gen Digital Logo" 
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-poppins font-bold text-xl">
                Growth Gen <span className="text-primary">Digital</span>
              </span>
            </div>
            <p className="font-inter text-gray-300 mb-6 max-w-md">
              Results-driven digital agency specializing in website design, development, and digital marketing. 
              We combine creativity, technical expertise, and strategy to help brands succeed.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:growthgendigital@gmail.com" className="font-inter text-gray-300 hover:text-white transition-colors">
                growthgendigital@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-inter text-gray-300">Bathinda, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 bg-gray-700 rounded-lg hover:bg-primary transition-colors transform hover:scale-105"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-inter text-gray-300">
            © {new Date().getFullYear()} Growth Gen Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;