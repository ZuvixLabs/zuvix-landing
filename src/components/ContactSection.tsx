
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-braindark-900">
      <div className="absolute inset-0 bg-blue-gradient opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-title">{t('getInTouch')}</p>
          <h2 className="section-heading">
            {t('startYourAI')} <span className="heading-gradient">{t('aiJourney')}</span> {t('today')}
          </h2>
          <p className="section-description mx-auto">
            {t('contactDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="glass-card p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">{t('contactInfo')}</h3>
              <p className="text-gray-400 mb-8">
                {t('contactInfoDesc')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-braindark-800 border border-braindark-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brainblue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">{t('emailUs')}</h4>
                    <a href="mailto:info@brainarmy.ai" className="text-brainblue-400 hover:text-brainblue-300 transition-colors">
                      info@brainarmy.ai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-braindark-800 border border-braindark-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brainblue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">{t('callUs')}</h4>
                    <a href="tel:+18005555555" className="text-brainblue-400 hover:text-brainblue-300 transition-colors">
                      +1 (800) 555-5555
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-braindark-800 border border-braindark-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brainblue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">{t('visitUs')}</h4>
                    <p className="text-gray-400">
                      101 Innovation Boulevard<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-gray-200 font-medium mb-4">{t('followUs')}</h4>
                <div className="flex gap-4">
                  {['twitter', 'linkedin', 'facebook', 'github'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-10 h-10 rounded-lg bg-braindark-800 border border-braindark-700 hover:border-brainblue-700 flex items-center justify-center transition-colors"
                    >
                      <div className="w-5 h-5 rounded-sm bg-gradient-to-r from-gray-700/30 to-gray-600/20 shimmer"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">{t('sendMessage')}</h3>
              
              {isSubmitted ? (
                <div className="bg-brainblue-900/30 border border-brainblue-700/30 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-brainblue-900/50 border border-brainblue-700/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-brainblue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('messageSent')}</h4>
                  <p className="text-gray-300">
                    {t('thankYou')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-sm text-gray-300 block mb-2">{t('yourName')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-braindark-800 border border-braindark-700 text-white focus:border-brainblue-600 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm text-gray-300 block mb-2">{t('emailAddress')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-braindark-800 border border-braindark-700 text-white focus:border-brainblue-600 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="text-sm text-gray-300 block mb-2">{t('company')}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-braindark-800 border border-braindark-700 text-white focus:border-brainblue-600 transition-colors"
                      placeholder={t('companyPlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm text-gray-300 block mb-2">{t('message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-braindark-800 border border-braindark-700 text-white focus:border-brainblue-600 transition-colors resize-none"
                      placeholder={t('messagePlaceholder')}
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('sending')}
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          {t('sendMessage')}
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
