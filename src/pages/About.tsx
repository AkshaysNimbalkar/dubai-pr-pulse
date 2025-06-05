
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-gradient-to-br from-matcha-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-matcha-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-1/4 w-56 h-56 bg-amber-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight text-center">
              <span className="bg-gradient-to-r from-matcha-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">
                {t('aboutTitle')}
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-16 font-light leading-relaxed text-center">
              {t('aboutSubtitle')}
            </p>
            
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p className="opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]">
                {t('aboutText1')}
              </p>
              <p className="opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                {t('aboutText2')}
              </p>
              <blockquote className="text-2xl font-medium text-center py-8 px-6 bg-gradient-to-r from-matcha-100/50 to-amber-100/50 rounded-2xl border-l-4 border-matcha-500 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
                "{t('aboutQuote')}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
