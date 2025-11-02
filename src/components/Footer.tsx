import { Mail, MapPin, Instagram } from 'lucide-react';
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
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <img src="/lovable-uploads/f0fd2259-250f-4163-bcb0-852f05d5061c.png" alt="CosmoComms PR" className="h-12 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              New Generation Communications. Global Vision. Dubai Roots.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-300 mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors duration-300 block">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors duration-300 block">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors duration-300 block">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/startup-pr-kit" className="hover:text-amber-400 transition-colors duration-300 block">
                  Startup PR Kit
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition-colors duration-300 block">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors duration-300 block">
                  {t('contact')}
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
                <a href="mailto:pranjali@cosmocommspr.com" className="text-lg hover:text-amber-300 transition-colors">pranjali@cosmocommspr.com</a>
              </div>
              <div className="flex items-center group hover:text-amber-400 transition-colors duration-300">
                <div className="p-2 bg-gradient-to-r from-stone-500 to-stone-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Dubai, UAE</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-pink-300 mb-6">{t('followUs')}</h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/cosmocomms_pr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group hover:text-pink-400 transition-colors duration-300 text-gray-300"
              >
                <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">@cosmocomms_pr</span>
              </a>
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
