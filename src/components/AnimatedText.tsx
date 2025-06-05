
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedText = () => {
  const { language } = useLanguage();
  
  const words = {
    en: ['Stories', 'Impact', 'Connections', 'Movements'],
    ar: ['قصص', 'تأثير', 'روابط', 'حركات']
  };
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words[language].length);
        setIsVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <span 
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } bg-gradient-to-r from-matcha-600 via-amber-600 to-pink-600 bg-clip-text text-transparent font-bold`}
    >
      {words[language][currentWordIndex]}
    </span>
  );
};

export default AnimatedText;
