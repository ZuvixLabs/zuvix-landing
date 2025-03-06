
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-braindark-950 border-t border-braindark-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-brainblue-600 to-neon-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-white">Brain Army AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering businesses with intelligent solutions that drive transformation and growth through cutting-edge artificial intelligence.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'facebook', 'github'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-lg bg-braindark-900 hover:bg-braindark-800 flex items-center justify-center transition-colors"
                >
                  <div className="w-4 h-4 rounded-sm bg-gradient-to-r from-gray-700/30 to-gray-600/20 shimmer"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {['AI Automation', 'Predictive Analytics', 'Conversational AI', 'AI Consulting'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-brainblue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {['Finance', 'Healthcare', 'Retail', 'Manufacturing', 'Marketing'].map((item) => (
                <li key={item}>
                  <a href="#industries" className="text-gray-400 hover:text-brainblue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={item === 'Contact' ? '#contact' : '#'} className="text-gray-400 hover:text-brainblue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-braindark-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Brain Army AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-gray-500 hover:text-brainblue-400 text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
