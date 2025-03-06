
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-title">Success Stories</p>
          <h2 className="section-heading">
            What Our <span className="heading-gradient">Clients Say</span>
          </h2>
          <p className="section-description mx-auto">
            Discover how Brain Army AI has helped organizations achieve their goals and transform their operations.
          </p>
        </div>
        
        <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden animate-fade-in">
          <div className="absolute top-0 left-0 w-32 h-32 bg-brainblue-700/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="mb-8 flex justify-center">
              <Quote className="w-16 h-16 text-brainblue-700/30" />
            </div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-200 italic mb-8">
                {testimonials[activeIndex].quote}
              </p>
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-braindark-800 to-braindark-900 border border-braindark-700 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700/30 to-gray-600/20 shimmer"></div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white">{testimonials[activeIndex].name}</h4>
                <p className="text-brainblue-400">{testimonials[activeIndex].title}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-braindark-700 flex items-center justify-center hover:bg-braindark-800 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2.5 h-2.5 rounded-full ${
                        index === activeIndex ? 'bg-brainblue-500' : 'bg-braindark-700'
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-braindark-700 flex items-center justify-center hover:bg-braindark-800 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Case Studies Preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div 
              key={study.company}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brainblue-900/40 to-braindark-900/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-braindark-900 to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-braindark-800 to-braindark-900 border border-braindark-700 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-r from-gray-700/30 to-gray-600/20 shimmer"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                  <p className="text-brainblue-400 text-sm">{study.industry}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4">{study.summary}</p>
                <div className="flex justify-between items-center">
                  <div className="text-brainblue-400 text-sm font-medium">Read case study</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-400">Results:</span>
                    <span className="text-sm text-brainblue-400">+{study.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "Brain Army AI transformed our approach to customer insights. Their predictive analytics solution has allowed us to anticipate market trends with remarkable accuracy, giving us a significant competitive advantage.",
    name: "Sarah Johnson",
    title: "CTO, Global Retail Corp"
  },
  {
    quote: "Implementing Brain Army's automation solution reduced our operational costs by 42% while simultaneously improving our service quality. Their team's expertise and support throughout the integration process was exceptional.",
    name: "Michael Chen",
    title: "Operations Director, FinTech Innovations"
  },
  {
    quote: "The conversational AI platform developed by Brain Army has revolutionized our customer support. Response times decreased by 78%, and customer satisfaction scores have reached an all-time high of 96%.",
    name: "Alicia Rodriguez",
    title: "Head of Customer Experience, TechSolutions Inc."
  }
];

const caseStudies = [
  {
    company: "Global Financial Services",
    industry: "Banking & Finance",
    summary: "Implemented an AI-driven fraud detection system that improved fraud identification by 89% while reducing false positives.",
    result: "89% improvement"
  },
  {
    company: "MediTech Solutions",
    industry: "Healthcare",
    summary: "Developed a predictive analytics platform that helped optimize hospital resource allocation and improved patient outcomes.",
    result: "35% efficiency"
  },
  {
    company: "EcoRetail",
    industry: "E-commerce",
    summary: "Created a personalized recommendation engine that increased average order value and customer engagement metrics.",
    result: "47% sales"
  }
];

export default TestimonialsSection;
