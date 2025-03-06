
import React from 'react';
import { Brain, TrendingUp, ShieldCheck, Code } from 'lucide-react';
import AnimatedGradient from './ui/AnimatedGradient';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="relative py-20">
      {/* Background Accent */}
      <div className="absolute left-0 top-1/4 h-32 w-32 rounded-full bg-brainblue-800/20 filter blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 h-32 w-32 rounded-full bg-neon-purple/10 filter blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-title">{t('aboutUs')}</p>
          <h2 className="section-heading">
            {t('intelligenceEvolution')} <span className="heading-gradient">{t('intelligenceEvolutionGradient')}</span>
          </h2>
          <p className="section-description mx-auto">
            {t('aboutDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <div 
              key={card.title} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedGradient>
                <div className="flex flex-col h-full">
                  <div className="p-2 mb-4 rounded-md w-fit bg-gradient-to-br from-braindark-800 to-braindark-900 border border-braindark-700">
                    <card.icon className="w-6 h-6 text-brainblue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t(card.titleKey)}</h3>
                  <p className="text-gray-400 text-sm flex-grow">{t(card.descKey)}</p>
                </div>
              </AnimatedGradient>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.valueKey} 
              className="glass-card p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold mb-1 text-gradient">{t(stat.valueKey)}</div>
              <div className="text-sm text-gray-400">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const aboutCards = [
  {
    icon: Brain,
    title: "Machine Learning",
    titleKey: "machineLearningTitle",
    description: "Develop custom AI models that continuously learn and adapt to your business needs and data patterns.",
    descKey: "machineLearningDesc"
  },
  {
    icon: Code,
    title: "AI Automation",
    titleKey: "aiAutomationTitle",
    description: "Automate complex tasks and workflows with intelligent systems that boost efficiency and reduce errors.",
    descKey: "aiAutomationDesc"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    titleKey: "predictiveAnalyticsTitle",
    description: "Harness the power of data to forecast trends, identify opportunities, and make proactive business decisions.",
    descKey: "predictiveAnalyticsDesc"
  },
  {
    icon: ShieldCheck,
    title: "AI Ethics",
    titleKey: "aiEthicsTitle",
    description: "Implement responsible AI systems with built-in fairness, accountability, transparency, and data privacy.",
    descKey: "aiEthicsDesc"
  }
];

const stats = [
  { value: "95%", valueKey: "accuracyStat", label: "Accuracy in Predictions", labelKey: "accuracyLabel" },
  { value: "58%", valueKey: "costReductionStat", label: "Average Cost Reduction", labelKey: "costReductionLabel" },
  { value: "124+", valueKey: "clientsStat", label: "Enterprise Clients", labelKey: "clientsLabel" },
  { value: "10M+", valueKey: "dataPointsStat", label: "Data Points Processed Daily", labelKey: "dataPointsLabel" }
];

export default AboutSection;
