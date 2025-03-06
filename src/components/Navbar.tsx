
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t('home'), href: '#hero' },
    { name: t('about'), href: '#about' },
    { name: t('solutions'), href: '#services' },
    { name: t('industries'), href: '#industries' },
    { name: t('whyUs'), href: '#features' },
    { name: t('contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-braindark-900/80 backdrop-blur-md border-b border-braindark-800/50 py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-brainblue-600 to-neon-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold text-white">Brain Army AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="ml-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-braindark-800/80 hover:bg-braindark-700/80 border border-braindark-700 text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t('changeLanguage')}</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              
              {/* Mobile Language Toggle */}
              <li>
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-braindark-800/80 hover:bg-braindark-700/80 border border-braindark-700 text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t('changeLanguage')}</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
