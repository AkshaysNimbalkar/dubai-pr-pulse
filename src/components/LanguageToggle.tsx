
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-amber-600' : 'text-gray-400'}`}>
        EN
      </span>
      <Switch
        checked={language === 'ar'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-amber-500"
      />
      <span className={`text-sm font-medium transition-colors ${language === 'ar' ? 'text-amber-600' : 'text-gray-400'}`}>
        العربية
      </span>
    </div>
  );
};

export default LanguageToggle;
