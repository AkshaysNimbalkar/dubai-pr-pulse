
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-amber-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src="/lovable-uploads/f0fd2259-250f-4163-bcb0-852f05d5061c.png" 
              alt="CosmoComms PR" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group">
              {t('home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group">
              {t('about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group">
              {t('services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group">
              {t('contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium">
              {t('letsTalk')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            <button 
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-amber-100 pt-4">
            <a href="#home" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
              {t('home')}
            </a>
            <a href="#about" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
              {t('about')}
            </a>
            <a href="#services" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
              {t('services')}
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
              {t('contact')}
            </a>
            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              {t('letsTalk')}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
