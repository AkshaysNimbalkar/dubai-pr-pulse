
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Globe, Phone } from 'lucide-react';

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-matcha-500 to-matcha-600 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('emailUs')}</h3>
                <a href="mailto:pranjali@cosmocommspr.com" className="text-matcha-600 font-medium hover:text-matcha-700 transition-colors">pranjali@cosmocommspr.com</a>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-matcha-600 to-amber-500 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('callUs')}</h3>
                <a href="tel:+971543338611" className="text-matcha-600 font-medium hover:text-matcha-700 transition-colors">+971 54 333 8611</a>
              </div>
              
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('basedIn')}</h3>
                <p className="text-amber-600 font-medium">Dubai, UAE</p>
              </div>
              
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('globalReachTitle')}</h3>
                <p className="text-pink-600 font-medium">{t('worldwideServices')}</p>
              </div>
            </div>
            
            <a href="mailto:pranjali@cosmocommspr.com?subject=Let's Get Started&body=Hi CosmoComms Team,%0D%0A%0D%0AI'm interested in working together. Let's discuss how you can help my brand.%0D%0A%0D%0AThank you!" className="group bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-12 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 text-xl inline-flex items-center">
              {t('getStarted')}
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
