import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// 🔥 Keep logo import
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // 🔥 Updated social links with your real URLs
  const socialLinks = [
    { Icon: Facebook, href: 'https://www.facebook.com/share/1BEY3tan8o/', label: 'Facebook' },
    { Icon: Instagram, href: 'https://www.instagram.com/growth_gen_digital_/', label: 'Instagram' },
    { Icon: Linkedin, href: 'https://in.linkedin.com/company/growth-gen-digital', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://x.com/Akash773575', label: 'Twitter' },
  ];

  return (
    // was: bg-dark-neutral; use bg-dark (matches your tailwind.config colors)
    <footer className="relative z-10 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                 src={logo}
                alt="Growth Gen Digital Logo"
                className="h-12 w-12 rounded-lg"
              />
              <span className="font-poppins font-bold text-xl">
                Growth Gen <span className="text-primary">Digital</span>
              </span>
            </div>

            {/* was text-gray-300 -> stronger contrast on dark bg */}
            <p className="font-inter text-white/80 mb-6 max-w-md">
              Results-driven digital agency specializing in website design, development, and digital marketing.
              We combine creativity, technical expertise, and strategy to help brands succeed.
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <Mail className="h-5 w-5 text-primary" />
              {/* was text-gray-300 -> text-white/90 for readability; keep hover */}
              <a
                href="mailto:growthgendigital@gmail.com"
                className="font-inter text-white/90 hover:text-primary transition-colors"
              >
                growthgendigital@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-inter text-white/80">Bathinda, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* was text-gray-300 -> text-white/80; clearer hover */}
                  <Link
                    to={link.href}
                    className="font-inter text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" // 🔥 open in new tab
                  rel="noopener noreferrer" // 🔥 security best practice
                  aria-label={label}
                  // was bg-gray-700; make subtler on dark + ensure icon stays visible
                  className="p-2 bg-white/10 rounded-lg text-white hover:bg-primary hover:text-white transition-colors transform hover:scale-105"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* was border-gray-700 & text-gray-300 -> use white/opacity on dark */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="font-inter text-white/70">
            © {new Date().getFullYear()} Growth Gen Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
