import React from 'react';
import { Rocket, Target, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StartupPRKit = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Target,
      title: "Media Visibility",
      description: "Get featured in top publications and podcasts"
    },
    {
      icon: TrendingUp,
      title: "Brand Credibility",
      description: "Build trust and authority in your industry"
    },
    {
      icon: Users,
      title: "Influencer Buzz",
      description: "Connect with the right voices for your brand"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-matcha-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-matcha-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-matcha-100 rounded-full px-6 py-3 mb-6">
              <Rocket className="w-5 h-5 text-pink-600 mr-3" />
              <span className="text-pink-700 font-semibold">{t('startupKitTitle')}</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {t('startupKitSubtitle')}
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('startupKitText')}
            </p>

            <div className="bg-gradient-to-r from-pink-500 via-matcha-500 to-amber-500 text-white p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto">
              <p className="text-lg font-medium leading-relaxed italic">
                "{t('founderMessage')}"
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-pink-100/50"
              >
                <div className="p-4 bg-gradient-to-r from-pink-500 to-matcha-500 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupPRKit;
