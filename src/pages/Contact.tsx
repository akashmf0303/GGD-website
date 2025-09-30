import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Updated handleSubmit for Web3Forms with Thank You logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        access_key: "049e7f25-88e4-432e-ac75-3756cfa8311d", // your Web3Forms Access Key
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: "New contact form submission - Growth Gen Digital",
        from_name: "Growth Gen Digital Website",
        page: typeof window !== "undefined" ? window.location.href : "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Web3Forms success:", result);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Web3Forms error:", result);
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Web3Forms network error:", err);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Updated social links
  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/share/1BEY3tan8o/", label: "Facebook", color: "hover:text-blue-600" },
    { Icon: Instagram, href: "https://www.instagram.com/growth_gen_digital_/", label: "Instagram", color: "hover:text-pink-600" },
    { Icon: Linkedin, href: "https://in.linkedin.com/company/growth-gen-digital", label: "LinkedIn", color: "hover:text-blue-700" },
    { Icon: Twitter, href: "https://x.com/Akash773575", label: "Twitter", color: "hover:text-blue-400" },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-dark-neutral mb-6 animate-fade-in">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Ready to transform your digital presence? We'd love to hear about your project and 
            discuss how we can help you achieve your business goals.
          </p>
        </div>
      </section>

      {/* ✅ Show Thank You Section after Submit */}
      {isSubmitted ? (
        <section className="py-40 text-center bg-white/70 backdrop-blur-md rounded-2xl shadow-xl mx-4 sm:mx-8 lg:mx-16">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="font-poppins text-3xl font-bold text-dark-neutral mb-4">
            Thank You!
          </h2>
          <p className="font-inter text-lg text-gray-600 mb-6">
            Your message has been received. We’ll get back to you shortly.
          </p>
          <a
            href="/"
            className="bg-primary text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Back to Home
          </a>
        </section>
      ) : (
        <>
          {/* Contact Section */}
          <section className="py-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner mx-4 sm:mx-8 lg:mx-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div className="animate-fade-in">
                  <h2 className="font-poppins font-bold text-3xl text-dark-neutral mb-8">
                    Let's Start a Conversation
                  </h2>
                  <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                    Whether you have a specific project in mind or just want to explore possibilities, 
                    we're here to help. Get in touch and let's discuss how we can bring your vision to life.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-dark-neutral">Email</h3>
                        <a href="mailto:growthgendigital@gmail.com" className="font-inter text-gray-600 hover:text-primary transition-colors">
                          growthgendigital@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-dark-neutral">Location</h3>
                        <p className="font-inter text-gray-600">Bathinda, Punjab, India</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="font-poppins font-semibold text-dark-neutral mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map(({ Icon, href, label, color }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className={`p-3 bg-white/50 backdrop-blur-md rounded-lg hover:bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-gray-600 ${color}`}
                        >
                          <Icon className="h-6 w-6" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="animate-scale-in">
                  <div className="bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg">
                    <h3 className="font-poppins font-bold text-2xl text-dark-neutral mb-6">
                      Send Us a Message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot field (spam protection) */}
                      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                      <div>
                        <label htmlFor="name" className="block font-inter font-medium text-dark-neutral mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-inter bg-white/70 backdrop-blur-sm"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block font-inter font-medium text-dark-neutral mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-inter bg-white/70 backdrop-blur-sm"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block font-inter font-medium text-dark-neutral mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-inter bg-white/70 backdrop-blur-sm"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block font-inter font-medium text-dark-neutral mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-inter resize-none bg-white/70 backdrop-blur-sm"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white px-8 py-4 rounded-xl font-inter font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>

                    <p className="mt-4 text-sm font-inter text-gray-500 text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Map Section */}
      <section className="py-20 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner mx-4 sm:mx-8 lg:mx-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-dark-neutral mb-4">
              Our Location
            </h2>
            <p className="font-inter text-gray-600 text-lg">
              Based in Bathinda, Punjab, we serve clients globally with our digital solutions.
            </p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-fade-in">
            <div className="w-full h-96 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55167.83718285442!2d74.91748730805222!3d30.20883788522746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39173297173abbcd%3A0xa00033c0a58a5ac8!2sBathinda%2C%20Punjab!5e0!3m2!1sen!2sin!4v1759266116927!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 rounded-2xl mx-4 sm:mx-8 lg:mx-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-inter text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't let your competitors get ahead. Contact us today for a free consultation 
            and let's discuss how we can accelerate your business growth.
          </p>
          <a
            href="mailto:growthgendigital@gmail.com"
            className="bg-white text-primary px-8 py-4 rounded-full font-inter font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
