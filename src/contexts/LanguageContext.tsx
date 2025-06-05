
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    letsTalk: "Let's Talk",
    
    // Hero
    tagline: 'New Generation Communications',
    title: 'Welcome to CosmoComms PR',
    subtitle: 'Global Vision. Dubai Roots.',
    heroDescription: "We're rewriting the rules of public relations. Born in Dubai and built for the bold, we're a new-generation communications agency that blends strategic thinking with cultural intuition, digital innovation, and unapologetic creativity.",
    ourWork: 'Our Work',
    
    // About
    aboutTitle: 'We Are CosmoComms',
    aboutSubtitle: 'A PR agency for the now.',
    aboutText1: 'In a world where attention is currency, we help brands break through the noise. CosmoComms PR was founded with one mission: to empower brands to be seen, heard, and remembered in today\'s ever-evolving landscape.',
    aboutText2: 'Headquartered in Dubai, we work across industries—from beauty to tech, real estate to retail—delivering tailored communication strategies that spark conversation and drive impact.',
    aboutQuote: 'We\'re the team you call when you\'re ready to be noticed. Not just for what you do, but for who you are.',
    
    // Services
    servicesTitle: 'PR. But Make It Future-Ready.',
    servicesDescription: 'We don\'t believe in cookie-cutter campaigns. Every brand is unique, and so is our approach. Our suite of services is designed to amplify your voice in a world that\'s constantly changing.',
    
    // Contact
    contactTitle: 'Let\'s Work Together',
    contactDescription: 'Whether you\'re a visionary founder, a growing business, or an established brand looking for a fresh perspective, CosmoComms PR is here to help you elevate.',
    getStarted: 'Get Started Today',
    
    // Footer
    copyright: '© 2025 CosmoComms PR. All rights reserved. Built for the bold.',
  },
  ar: {
    // Header
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    contact: 'تواصل معنا',
    letsTalk: 'لنتحدث',
    
    // Hero
    tagline: 'اتصالات الجيل الجديد',
    title: 'مرحباً بكم في كوزمو كومز للعلاقات العامة',
    subtitle: 'رؤية عالمية. جذور دبي.',
    heroDescription: 'نحن نعيد كتابة قواعد العلاقات العامة. وُلدنا في دبي وبُنينا للجريئين، نحن وكالة اتصالات من الجيل الجديد تمزج بين التفكير الاستراتيجي والحدس الثقافي والابتكار الرقمي والإبداع الجريء.',
    ourWork: 'أعمالنا',
    
    // About
    aboutTitle: 'نحن كوزمو كومز',
    aboutSubtitle: 'وكالة علاقات عامة للحاضر.',
    aboutText1: 'في عالم يعتبر فيه الانتباه عملة، نساعد العلامات التجارية على اختراق الضوضاء. تأسست كوزمو كومز للعلاقات العامة بمهمة واحدة: تمكين العلامات التجارية من أن تُرى وتُسمع وتُذكر في المشهد المتطور باستمرار اليوم.',
    aboutText2: 'مقرنا الرئيسي في دبي، نعمل عبر الصناعات - من الجمال إلى التكنولوجيا، العقارات إلى التجزئة - نقدم استراتيجيات اتصال مخصصة تثير المحادثة وتحقق التأثير.',
    aboutQuote: 'نحن الفريق الذي تتصل به عندما تكون مستعداً لأن تُلاحظ. ليس فقط لما تفعله، ولكن لمن أنت.',
    
    // Services
    servicesTitle: 'علاقات عامة. لكن اجعلها جاهزة للمستقبل.',
    servicesDescription: 'لا نؤمن بالحملات المقولبة. كل علامة تجارية فريدة، وكذلك نهجنا. تم تصميم مجموعة خدماتنا لتضخيم صوتك في عالم يتغير باستمرار.',
    
    // Contact
    contactTitle: 'لنعمل معاً',
    contactDescription: 'سواء كنت مؤسساً ذا رؤية، أو شركة نامية، أو علامة تجارية راسخة تبحث عن منظور جديد، فإن كوزمو كومز للعلاقات العامة هنا لمساعدتك على الارتقاء.',
    getStarted: 'ابدأ اليوم',
    
    // Footer
    copyright: '© ٢٠٢٥ كوزمو كومز للعلاقات العامة. جميع الحقوق محفوظة. مبني للجريئين.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
