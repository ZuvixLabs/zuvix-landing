import React from 'react';
import { ArrowRight, Brain, Zap, Database, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brainblue-800/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-purple/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-braindark-800 border border-braindark-700 text-brainblue-400 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brainblue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brainblue-500"></span>
                </span>
                <span>{t('heroTagline')}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t('heroTitle')} <br/>
                <span className="heading-gradient">{t('heroTitleGradient')}</span>
              </h1>
              
              <p className="text-lg text-gray-300">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#contact" className="btn-primary group">
                  {t('getStarted')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#services" className="btn-outline">
                  {t('viewSolutions')}
                </a>
              </div>
              
              {/* Tech Icons */}
              <div className="pt-8 flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-brainblue-400 mb-2">
                    <Brain className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-gray-400">{t('machineLearning')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-neon-blue mb-2">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-gray-400">{t('aiAutomation')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-neon-purple mb-2">
                    <Database className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-gray-400">{t('predictiveAnalytics')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-neon-green mb-2">
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
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-brainblue-700/20 to-neon-purple/20 rounded-full absolute filter blur-3xl"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brainblue-600/10 to-neon-purple/10 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-brainblue-600/15 to-neon-purple/15 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-8 bg-gradient-to-br from-brainblue-600/20 to-neon-purple/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-48 h-48 md:w-64 md:h-64 animate-floating" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      fill="#4e7fff" 
                      d="M67.1,-23.1C76.4,1.8,65.2,36.1,41.4,55.3C17.6,74.4,-18.9,78.4,-41.6,63.5C-64.3,48.5,-73.2,14.4,-63.8,-11.2C-54.5,-36.9,-27.2,-54.2,1.7,-54.8C30.6,-55.4,57.9,-48.1,67.1,-23.1Z" 
                      transform="translate(100 100)"
                      className="animate-pulse-slow"
                      opacity="0.3"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full glass-card border border-brainblue-700/30 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brainblue-900/80 to-braindark-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="w-16 h-16 md:w-20 md:h-20 text-brainblue-400" />
                      </div>
                      
                      {/* Orbiting Elements */}
                      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '15s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-neon-blue rounded-full opacity-80"></div>
                      </div>
                      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-purple rounded-full opacity-80"></div>
                      </div>
                      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '12s' }}>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-neon-green rounded-full opacity-80"></div>
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
