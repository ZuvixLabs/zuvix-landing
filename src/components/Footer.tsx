import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-braindark-950 border-t border-braindark-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-brainblue-600 to-neon-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zuvix Labs</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              {t('empoweringBusinesses')}
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
            <h4 className="text-white font-semibold mb-4">{t('solutions')}</h4>
            <ul className="space-y-3">
              {[
                { key: 'aiPoweredAutomation', href: '#services' },
                { key: 'predAnalyticsTitle', href: '#services' },
                { key: 'conversationalAI', href: '#services' },
                { key: 'aiConsulting', href: '#services' }
              ].map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-gray-400 hover:text-brainblue-400 transition-colors">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t('industries')}</h4>
            <ul className="space-y-3">
              {[
                { key: 'finance', href: '#industries' },
                { key: 'healthcare', href: '#industries' },
                { key: 'retail', href: '#industries' },
                { key: 'manufacturing', href: '#industries' },
                { key: 'marketing', href: '#industries' }
              ].map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-gray-400 hover:text-brainblue-400 transition-colors">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t('about')}</h4>
            <ul className="space-y-3">
              {[
                { key: 'aboutUs', href: '#about' },
                { key: 'whyChooseUs', href: '#features' },
                { key: 'getInTouch', href: '#contact' }
              ].map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-gray-400 hover:text-brainblue-400 transition-colors">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-braindark-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Zuvix Labs. {t('allRightsReserved')}
            </p>
            <div className="flex gap-6">
              {[
                { key: 'privacyPolicy', href: '#' },
                { key: 'termsOfService', href: '#' },
                { key: 'cookiePolicy', href: '#' }
              ].map((item) => (
                <a key={item.key} href={item.href} className="text-gray-500 hover:text-brainblue-400 text-sm transition-colors">
                  {t(item.key)}
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
