
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  activeSection?: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', section: 'hero', label: t('home') },
    { path: '/about', section: 'about', label: t('about') },
    { path: '/startup-pr-kit', section: 'startup-kit', label: 'Startup PR Kit' },
    { path: '/services', section: 'services', label: t('services') },
    { path: '/blog', section: 'blog', label: t('blog') },
    { path: '/contact', section: 'contact', label: t('contact') }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (isHomePage && section !== 'blog') {
      e.preventDefault();
      const element = document.getElementById(section);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-matcha-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/f0fd2259-250f-4163-bcb0-852f05d5061c.png" 
              alt="CosmoComms PR" 
              className="h-12 w-auto max-w-[180px] object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => {
              const isActive = isHomePage 
                ? activeSection === item.section 
                : location.pathname === item.path;
              
              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.section)}
                  className={`text-gray-700 hover:text-matcha-600 transition-all duration-300 font-medium relative group ${
                    isActive ? 'text-matcha-600' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-matcha-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            <Link to="/contact" className="bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium">
              {t('letsTalk')}
            </Link>
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
            {navItems.map((item) => {
              const isActive = isHomePage 
                ? activeSection === item.section 
                : location.pathname === item.path;
              
              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    handleNavClick(e, item.section);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-gray-700 hover:text-matcha-600 transition-colors font-medium ${
                    isActive ? 'text-matcha-600' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link to="/contact" className="block w-full bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-center">
              {t('letsTalk')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
