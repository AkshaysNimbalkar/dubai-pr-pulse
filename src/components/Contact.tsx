
import React from 'react';
import { Mail, MapPin, Globe, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-stone-900 to-amber-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-stone-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            {t('contactTitle')}
          </h2>
          
          <p className="text-xl mb-16 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 border border-amber-500/20">
              <div className="p-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-300">Based in Dubai</h3>
              <p className="text-gray-300 text-center">Where innovation meets tradition</p>
            </div>
            
            <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 border border-stone-400/20">
              <div className="p-4 bg-gradient-to-r from-stone-500 to-stone-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-300">Open to the World</h3>
              <p className="text-gray-300 text-center">Global reach, local insight</p>
            </div>
            
            <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 border border-amber-600/20">
              <div className="p-4 bg-gradient-to-r from-amber-600 to-stone-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-200">Start Your Story</h3>
              <p className="text-gray-300 text-center">Let's create what's next</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-amber-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-stone-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-amber-300">Start Your Story With Us</h3>
              <a 
                href="mailto:hello@cosmocommspr.com" 
                className="group text-2xl text-amber-400 hover:text-amber-300 transition-all duration-300 font-semibold inline-flex items-center"
              >
                hello@cosmocommspr.com
                <Mail className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          <button className="group bg-gradient-to-r from-amber-500 via-amber-600 to-stone-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              {t('getStarted')}
              <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-stone-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
