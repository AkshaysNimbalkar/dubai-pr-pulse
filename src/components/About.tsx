
import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-amber-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-stone-100/40 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {t('aboutTitle').split(' ').slice(0, 2).join(' ')}{' '}
              <span className="bg-gradient-to-r from-amber-600 to-stone-600 bg-clip-text text-transparent">
                CosmoComms
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-light">
              {t('aboutSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('aboutText1')}
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('aboutText2')}
              </p>
              
              <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-stone-600 text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <p className="text-xl font-medium leading-relaxed">
                  {t('aboutQuote')}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-amber-100/50">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('strategicFocus')}</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('strategicFocusText')}
                </p>
              </div>

              <div className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-amber-100/50">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-stone-500 to-stone-600 rounded-2xl mr-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('creativeInnovation')}</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('creativeInnovationText')}
                </p>
              </div>

              <div className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-amber-100/50">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-amber-600 to-stone-500 rounded-2xl mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('culturalIntuition')}</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('culturalIntuitionText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
