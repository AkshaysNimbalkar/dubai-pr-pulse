
import React from 'react';
import { ArrowRight, Globe, Zap, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 via-matcha-50/30 to-amber-50 flex items-center pt-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-matcha-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-200/30 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-pink-300/20 rounded-full blur-md animate-pulse" style={{animationDelay: '1s'}}></div>
        <Star className="absolute top-1/3 right-1/3 w-6 h-6 text-matcha-400/40 animate-spin" style={{animationDuration: '8s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-matcha-200/50 hover:scale-105 transition-transform duration-300">
            <Zap className="w-5 h-5 text-matcha-600 mr-3 animate-pulse" />
            <span className="text-matcha-700 font-semibold text-lg">{t('tagline')}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            <span className="block opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]">
              We Create
            </span>
            <span className="block text-7xl md:text-9xl opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards] my-4">
              <AnimatedText />
            </span>
            <span className="block opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
              That Matter
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light opacity-0 animate-[fade-in_1s_ease-out_1.4s_forwards]">
            {t('subtitle')}
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_1.8s_forwards]">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-[fade-in_1s_ease-out_2.2s_forwards]">
            <button className="group bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 flex items-center text-lg">
              {t('letsTalk')}
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-matcha-600 text-matcha-700 px-8 py-4 rounded-full font-semibold hover:bg-matcha-600 hover:text-white transition-all duration-500 text-lg hover:scale-105">
              {t('ourWork')}
            </button>
          </div>
          
          <div className="mt-20 flex items-center justify-center space-x-12 rtl:space-x-reverse text-gray-500 opacity-0 animate-[fade-in_1s_ease-out_2.6s_forwards]">
            <div className="flex items-center group hover:text-matcha-600 transition-colors duration-300">
              <Globe className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">{t('globalReach')}</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center group hover:text-amber-600 transition-colors duration-300">
              <span className="text-2xl mr-2">🏢</span>
              <span className="font-medium">{t('dubaiBased')}</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center group hover:text-pink-600 transition-colors duration-300">
              <span className="text-2xl mr-2">🚀</span>
              <span className="font-medium">{t('futureReady')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
