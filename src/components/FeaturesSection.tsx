
import React from 'react';
import { Shield, Scale, Award, Workflow } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="features" className="py-20 relative bg-braindark-900">
      <div className="absolute inset-0 bg-blue-gradient opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-title">{t('whyChooseUs')}</p>
          <h2 className="section-heading">
            {t('ourUnique')} <span className="heading-gradient">{t('uniqueAdvantage')}</span>
          </h2>
          <p className="section-description mx-auto">
            {t('featuresDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.titleKey}
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brainblue-600 to-neon-blue rounded-t-xl"></div>
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6 w-16 h-16 rounded-lg bg-gradient-to-br from-braindark-800 to-braindark-900 border border-braindark-700 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-brainblue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{t(feature.titleKey)}</h3>
                  <p className="text-gray-400 mb-6">{t(feature.descKey)}</p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-brainblue-900/50 border border-brainblue-700/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-brainblue-400 text-xs">✓</span>
                          </div>
                          <span className="text-gray-300 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Clients Logos Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-200">{t('trustedBy')}</h3>
          </div>
          
          <div className="py-6 px-4 glass-card rounded-xl">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-20 h-16 flex items-center justify-center">
                  <div className="w-full h-8 rounded-md bg-gradient-to-r from-gray-700/30 to-gray-600/20 shimmer"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Shield,
    titleKey: "ethicalIntegrity",
    descKey: "ethicalDesc",
    points: [
      "Transparent AI systems with explainable outcomes",
      "Regular bias detection and mitigation",
      "Privacy-preserving data handling practices",
      "Compliance with global AI ethics standards"
    ]
  },
  {
    icon: Scale,
    titleKey: "scalableCustomizable",
    descKey: "scalableDesc",
    points: [
      "Flexible architecture that scales with your demands",
      "Customizable models tailored to your industry",
      "Modular approach for incremental implementation",
      "Cloud-native solutions for optimal performance"
    ]
  },
  {
    icon: Award,
    titleKey: "provenExpertise",
    descKey: "expertiseDesc",
    points: [
      "Multidisciplinary team with specialized knowledge",
      "Experience across diverse industry verticals",
      "Continuous research and development focus",
      "Combined decades of AI implementation expertise"
    ]
  },
  {
    icon: Workflow,
    titleKey: "seamlessIntegration",
    descKey: "integrationDesc",
    points: [
      "API-first approach for flexible integration",
      "Compatible with major technology stacks",
      "Minimal disruption to existing operations",
      "Comprehensive onboarding and support"
    ]
  }
];

export default FeaturesSection;
