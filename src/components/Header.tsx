
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/services', label: t('services') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-matcha-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/f0fd2259-250f-4163-bcb0-852f05d5061c.png" 
              alt="CosmoComms PR" 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`text-gray-700 hover:text-matcha-600 transition-all duration-300 font-medium relative group ${
                  location.pathname === item.path ? 'text-matcha-600' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-matcha-600 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            <button className="bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium">
              {t('letsTalk')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            <button 
              className="text-gray-700 hover:text-matcha-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-matcha-100 pt-4">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`block text-gray-700 hover:text-matcha-600 transition-colors font-medium ${
                  location.pathname === item.path ? 'text-matcha-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              {t('letsTalk')}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
