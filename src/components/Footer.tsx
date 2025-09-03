import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={24} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={24} />, href: 'mailto:john.doe@example.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand/Logo */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Aruneshwaran</h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating exceptional digital experiences 
                that make a positive impact.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-400">
                Available for freelance work
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500" />
              <span>by Aruneshwaran</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Aruneshwaran. All rights reserved.
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors duration-200 mt-4 md:mt-0"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;