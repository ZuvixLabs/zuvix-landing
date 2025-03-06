
import React, { useState } from 'react';
import { Landmark, HeartPulse, ShoppingBag, Factory, BarChart3 } from 'lucide-react';

const IndustriesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Get the current industry icon component
  const ActiveIndustryIcon = industries[activeIndustry].icon;

  return (
    <section id="industries" className="py-20 bg-braindark-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-brainblue-400 font-medium mb-2">Industries We Serve</p>
          <h2 className="text-4xl font-bold mb-4 text-white">
            AI Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brainblue-400 to-neon-purple">Every Industry</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our tailored AI technologies drive transformation across diverse sectors, addressing industry-specific challenges with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Industry Selector */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 animate-fade-in">
            {industries.map((industry, index) => {
              const IndustryIcon = industry.icon;
              return (
                <button
                  key={industry.name}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    activeIndustry === index
                      ? 'bg-brainblue-900/30 border border-brainblue-700/50 text-white'
                      : 'bg-braindark-900/50 backdrop-blur-sm border border-transparent hover:border-braindark-700 text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveIndustry(index)}
                >
                  <IndustryIcon className={`w-5 h-5 ${activeIndustry === index ? 'text-brainblue-400' : 'text-gray-500'}`} />
                  <span>{industry.name}</span>
                </button>
              );
            })}
          </div>
          
          {/* Industry Content */}
          <div className="lg:col-span-9 bg-braindark-900/50 backdrop-blur-sm p-8 rounded-xl border border-braindark-800 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <ActiveIndustryIcon className="w-6 h-6 text-brainblue-400" />
                  <h3 className="text-2xl font-bold text-white">{industries[activeIndustry].name}</h3>
                </div>
                <p className="text-gray-400 mb-6">{industries[activeIndustry].description}</p>
                
                <h4 className="text-lg font-medium mb-3 text-white">Key Applications:</h4>
                <ul className="space-y-3">
                  {industries[activeIndustry].applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brainblue-900/50 border border-brainblue-700/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-brainblue-400 text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-64 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brainblue-800/20 to-neon-purple/10 animate-pulse-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <ActiveIndustryIcon className="w-24 h-24 text-brainblue-300/30" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-braindark-900 to-transparent"></div>
                  <div className="absolute inset-0 border border-braindark-700 rounded-xl"></div>
                  <div className="absolute bottom-6 inset-x-0 text-center">
                    <span className="text-sm text-gray-400">Transforming {industries[activeIndustry].name} with AI</span>
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

const industries = [
  {
    icon: Landmark,
    name: "Finance",
    description: "Revolutionize financial services with AI solutions that enhance security, improve customer experiences, and optimize operations.",
    applications: [
      "Fraud detection and prevention",
      "Risk assessment and management",
      "Automated trading and investment analysis",
      "Personalized banking experiences"
    ]
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "Transform patient care and medical research with AI technologies that improve diagnosis, treatment, and operational efficiency.",
    applications: [
      "Medical imaging analysis and diagnostics",
      "Patient data insights and predictive analytics",
      "Drug discovery and development",
      "Virtual health assistants and monitoring"
    ]
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description: "Enhance the shopping experience with AI-powered personalization, inventory management, and customer engagement solutions.",
    applications: [
      "Personalized shopping recommendations",
      "Inventory optimization and demand forecasting",
      "Visual search and product recognition",
      "Customer sentiment analysis"
    ]
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Optimize production processes, ensure quality control, and predict maintenance needs with our industrial AI solutions.",
    applications: [
      "Predictive maintenance to reduce downtime",
      "Quality control and defect detection",
      "Supply chain optimization",
      "Process automation and efficiency"
    ]
  },
  {
    icon: BarChart3,
    name: "Marketing & Sales",
    description: "Drive revenue growth with AI-powered marketing automation, customer insights, and sales optimization strategies.",
    applications: [
      "Customer segmentation and targeting",
      "Lead scoring and prioritization",
      "Content optimization and personalization",
      "Campaign performance analysis"
    ]
  }
];

export default IndustriesSection;
