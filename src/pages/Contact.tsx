
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-gradient-to-br from-matcha-50 via-white to-pink-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/3 w-80 h-80 bg-matcha-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-pink-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              {t('contactTitle')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-16 leading-relaxed">
              {t('contactDescription')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-matcha-500 to-matcha-600 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
                <p className="text-matcha-600 font-medium">hello@cosmocommspr.com</p>
              </div>
              
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Based in</h3>
                <p className="text-amber-600 font-medium">Dubai, UAE</p>
              </div>
              
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-pink-600 font-medium">Worldwide Services</p>
              </div>
            </div>
            
            <button className="group bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-12 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 text-xl">
              {t('getStarted')}
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
