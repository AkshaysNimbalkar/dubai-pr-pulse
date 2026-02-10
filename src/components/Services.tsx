
import React from 'react';
import { Globe, Smartphone, Star, Target, Rocket, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceCard from './ServiceCard';
import publicRelationsImg from '@/assets/public-relations.jpg';
import socialMediaImg from '@/assets/social-media.jpg';
import influencerMarketingImg from '@/assets/influencer-marketing.jpg';
import brandDevelopmentImg from '@/assets/brand-development.jpg';
import launchCampaignsImg from '@/assets/launch-campaigns.jpg';
import strategicConsultingImg from '@/assets/strategic-consulting.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t('publicRelations'),
      description: t('publicRelationsDesc'),
      gradient: "from-matcha-500 to-matcha-600",
      link: "/services/public-relations",
      image: publicRelationsImg,
      delay: "0ms"
    },
    {
      icon: Smartphone,
      title: t('socialMediaMarketing'),
      description: t('socialMediaMarketingDesc'),
      gradient: "from-amber-500 to-amber-600",
      link: "/services/social-media-marketing",
      image: socialMediaImg,
      delay: "200ms"
    },
    {
      icon: Star,
      title: t('influencerMarketing'),
      description: t('influencerMarketingDesc'),
      gradient: "from-pink-500 to-pink-600",
      link: "/services/influencer-marketing",
      image: influencerMarketingImg,
      delay: "400ms"
    },
    {
      icon: Target,
      title: t('brandDevelopment'),
      description: t('brandDevelopmentDesc'),
      gradient: "from-matcha-600 to-amber-600",
      link: "/services/brand-development",
      image: brandDevelopmentImg,
      delay: "600ms"
    },
    {
      icon: Rocket,
      title: t('launchCampaigns'),
      description: t('launchCampaignsDesc'),
      gradient: "from-amber-600 to-pink-600",
      link: "/services/launch-campaigns",
      image: launchCampaignsImg,
      delay: "800ms"
    },
    {
      icon: Brain,
      title: t('strategicConsulting'),
      description: t('strategicConsultingDesc'),
      gradient: "from-pink-600 to-matcha-600",
      link: "/services/strategic-consulting",
      image: strategicConsultingImg,
      delay: "1000ms"
    }
  ];

  const industries = [
    t('beauty'), t('fashion'), t('realEstate'), t('tech'), t('wellness'), t('hospitality'), t('retail')
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-stone-50 to-amber-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-stone-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              {t('servicesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('servicesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-amber-100/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 to-stone-50/30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">{t('industriesWeServe')}</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {industries.map((industry, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-amber-100 to-stone-100 text-amber-700 px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="text-2xl text-gray-600 font-light">
                {t('noLimits')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
