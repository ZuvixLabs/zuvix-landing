
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-brainblue-800/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-neon-purple/10 rounded-full translate-x-1/2 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 border border-braindark-800 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('readyToRevolutionize')} <span className="heading-gradient">{t('revolutionize')}</span> {t('yourBusiness')}
              </h2>
              <p className="text-gray-300 mb-8">
                {t('ctaDescription')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary group">
                  {t('requestDemo')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="btn-outline">
                  {t('talkToExpert')}
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brainblue-700/10 to-neon-purple/10 rounded-full filter blur-3xl"></div>
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-sm aspect-square relative">
                  {/* Circular Stats */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full rotate-90">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#1c3ced20" strokeWidth="2" />
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" 
                        stroke="#1c3ced" 
                        strokeWidth="2" 
                        strokeDasharray="283" 
                        strokeDashoffset="70" 
                        className="transition-all duration-1000" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-5xl font-bold text-gradient">75%</span>
                      <span className="text-sm text-gray-400">{t('averageROI')}</span>
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-5 left-0 animate-floating" style={{ animationDelay: '0.5s' }}>
                    <div className="glass-card rounded-lg p-3 border border-braindark-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-blue"></div>
                        <span className="text-sm font-medium text-white">{t('efficiency')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-10 right-0 animate-floating" style={{ animationDelay: '1s' }}>
                    <div className="glass-card rounded-lg p-3 border border-braindark-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-green"></div>
                        <span className="text-sm font-medium text-white">{t('costReduction')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-5 left-1/4 animate-floating" style={{ animationDelay: '1.5s' }}>
                    <div className="glass-card rounded-lg p-3 border border-braindark-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                        <span className="text-sm font-medium text-white">{t('accuracy')}</span>
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

export default CTASection;
