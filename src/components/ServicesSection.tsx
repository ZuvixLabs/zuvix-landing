
import React from 'react';
import { ArrowRight, Zap, TrendingUp, MessageSquare, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="relative py-20 bg-braindark-900">
      <div className="absolute inset-0 bg-gradient-to-br from-zuvixBlue-900/20 to-zuvixGreen-900/20 opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-zuvixBlue-400 mb-3 text-sm uppercase tracking-wider">{t('ourSolutions')}</p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('transformativeAI')} <span className="bg-gradient-to-r from-zuvixBlue-500 to-zuvixGreen-500 bg-clip-text text-transparent">{t('transformativeAIGradient')}</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            {t('servicesDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card p-8 rounded-xl border border-braindark-800 transition-all duration-300 hover:border-zuvixGreen-700 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-braindark-800 to-braindark-900 border border-braindark-700 group-hover:border-zuvixGreen-700 transition-all duration-300">
                <service.icon className="w-8 h-8 text-zuvixGreen-500 group-hover:text-zuvixGreen-400 transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{t(service.title)}</h3>
              <p className="text-gray-400 mb-6">{t(service.description)}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {service.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 rounded-full text-xs bg-braindark-800 text-gray-300 border border-braindark-700">
                    {feature}
                  </span>
                ))}
              </div>
              
              <a href="#contact" className="inline-flex items-center text-zuvixGreen-500 hover:text-zuvixGreen-400 transition-colors duration-300 group/link">
                {t('learnMore')} 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: Zap,
    title: "aiPoweredAutomation",
    description: "automationDesc",
    features: ["Workflow Optimization", "Document Processing", "Quality Control", "Intelligent Scheduling"]
  },
  {
    icon: TrendingUp,
    title: "predAnalyticsTitle",
    description: "predAnalyticsDesc",
    features: ["Market Forecasting", "Risk Assessment", "Customer Behavior", "Performance Metrics"]
  },
  {
    icon: MessageSquare,
    title: "conversationalAI",
    description: "conversationalDesc",
    features: ["Customer Support", "Virtual Assistants", "Multilingual Support", "Sentiment Analysis"]
  },
  {
    icon: Lightbulb,
    title: "aiConsulting",
    description: "consultingDesc",
    features: ["Strategy Development", "Implementation", "Staff Training", "Performance Monitoring"]
  }
];

export default ServicesSection;
