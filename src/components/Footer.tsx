
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-stone-900 to-gray-800 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-stone-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <img 
                src="/lovable-uploads/f0fd2259-250f-4163-bcb0-852f05d5061c.png" 
                alt="CosmoComms PR" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              New Generation Communications. Global Vision. Dubai Roots.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-lg font-bold">C</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-300 mb-6">{t('services')}</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/services/public-relations" className="hover:text-amber-400 transition-colors duration-300">
                  Public Relations
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing" className="hover:text-amber-400 transition-colors duration-300">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/influencer-marketing" className="hover:text-amber-400 transition-colors duration-300">
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/brand-development" className="hover:text-amber-400 transition-colors duration-300">
                  Brand Development
                </Link>
              </li>
              <li>
                <Link to="/services/launch-campaigns" className="hover:text-amber-400 transition-colors duration-300">
                  Launch Campaigns
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-consulting" className="hover:text-amber-400 transition-colors duration-300">
                  Strategic Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-300 mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center group hover:text-amber-400 transition-colors duration-300">
                <div className="p-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">hello@cosmocommspr.com</span>
              </div>
              <div className="flex items-center group hover:text-amber-400 transition-colors duration-300">
                <div className="p-2 bg-gradient-to-r from-stone-500 to-stone-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
