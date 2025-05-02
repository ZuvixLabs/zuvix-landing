
import React from 'react';
import { ArrowRight, Zap, Database, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-zuvixBlue-800/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-zuvixGreen-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-braindark-800 border border-braindark-700 text-zuvixBlue-400 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zuvixBlue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zuvixBlue-500"></span>
                </span>
                <span>{t('heroTagline')}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t('heroTitle')} <br/>
                <span className="bg-gradient-to-r from-zuvixBlue-500 to-zuvixGreen-500 bg-clip-text text-transparent">{t('heroTitleGradient')}</span>
              </h1>
              
              <p className="text-lg text-gray-300">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#contact" className="bg-zuvixBlue-600 hover:bg-zuvixBlue-700 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center group">
                  {t('getStarted')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#services" className="border border-zuvixBlue-700 text-zuvixBlue-400 hover:bg-zuvixBlue-900/20 hover:text-zuvixBlue-300 px-6 py-3 rounded-md transition-colors">
                  {t('viewSolutions')}
                </a>
              </div>
              
              {/* Tech Icons */}
              <div className="pt-8 flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-zuvixBlue-400 mb-2">
                    <img src="/lovable-uploads/29141cd3-4b16-42f8-a8db-781f065b6d32.png" alt="Zuvix Logo" className="h-6" />
                  </div>
                  <span className="text-xs text-gray-400">{t('machineLearning')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-zuvixGreen-500 mb-2">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-gray-400">{t('aiAutomation')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-zuvixBlue-500 mb-2">
                    <Database className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-gray-400">{t('predictiveAnalytics')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-zuvixGreen-400 mb-2">
                    <Shield className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-gray-400">{t('aiEthics')}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Graphic */}
          <div className="flex-1 flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-zuvixBlue-700/20 to-zuvixGreen-500/20 rounded-full absolute filter blur-3xl"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-zuvixBlue-600/10 to-zuvixGreen-500/10 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-zuvixBlue-600/15 to-zuvixGreen-500/15 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-8 bg-gradient-to-br from-zuvixBlue-600/20 to-zuvixGreen-500/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-48 h-48 md:w-64 md:h-64 animate-floating" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      fill="#1F4CD5" 
                      d="M67.1,-23.1C76.4,1.8,65.2,36.1,41.4,55.3C17.6,74.4,-18.9,78.4,-41.6,63.5C-64.3,48.5,-73.2,14.4,-63.8,-11.2C-54.5,-36.9,-27.2,-54.2,1.7,-54.8C30.6,-55.4,57.9,-48.1,67.1,-23.1Z" 
                      transform="translate(100 100)"
                      className="animate-pulse-slow"
                      opacity="0.3"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full glass-card border border-zuvixBlue-700/30 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-zuvixBlue-900/80 to-braindark-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src="/lovable-uploads/29141cd3-4b16-42f8-a8db-781f065b6d32.png" alt="Zuvix Logo" className="w-32 h-auto" />
                      </div>
                      
                      {/* Orbiting Elements */}
                      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '15s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-zuvixBlue-600 rounded-full opacity-80"></div>
                      </div>
                      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zuvixGreen-500 rounded-full opacity-80"></div>
                      </div>
                      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '12s' }}>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-zuvixBlue-400 rounded-full opacity-80"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
