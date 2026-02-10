import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Smartphone, Star, Target, Rocket, Brain } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
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

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-gradient-to-br from-white via-matcha-50/20 to-amber-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-matcha-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-amber-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                {t('servicesTitle')}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('servicesDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-lg text-gray-600 mb-4">
                <strong>{t('industriesWeServe')}:</strong> {t('beauty')}, {t('fashion')}, {t('realEstate')}, {t('tech')}, {t('wellness')}, {t('hospitality')}, {t('retail')}.
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-matcha-600 to-amber-600 bg-clip-text text-transparent">
                {t('noLimits')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
