
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUs = () => {
  const { t } = useLanguage();
  
  const reasons = [
    t('reason1'),
    t('reason2'),
    t('reason3'),
    t('reason4'),
    t('reason5')
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-amber-50/20 to-stone-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-56 h-56 bg-stone-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            {t('whyUsTitle')}
          </h2>
          
          <p className="text-2xl text-gray-600 mb-8 font-light leading-relaxed">
            {t('whyUsSubtitle')}
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-16 max-w-3xl mx-auto border border-amber-100/50">
            <h3 className="text-2xl font-bold text-amber-700 mb-4">{t('industryKnowledge')}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('industryKnowledgeText')}
            </p>
          </div>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-center text-left bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-amber-100/50"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="p-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mr-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <span className="text-xl text-gray-700 font-medium group-hover:text-amber-700 transition-colors duration-300">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
