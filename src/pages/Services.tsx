
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Smartphone, Star, Target, Rocket, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Globe,
      title: "Public Relations",
      description: "Press coverage, media relations, and thought leadership that puts you where the world is watching.",
      gradient: "from-matcha-500 to-matcha-600",
      link: "/services/public-relations"
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Scroll-stopping content, strategy, and management that builds communities and drives engagement.",
      gradient: "from-amber-500 to-amber-600",
      link: "/services/social-media-marketing"
    },
    {
      icon: Star,
      title: "Influencer Marketing",
      description: "From nano to mega, we connect your brand with credible creators who convert.",
      gradient: "from-pink-500 to-pink-600",
      link: "/services/influencer-marketing"
    },
    {
      icon: Target,
      title: "Brand Development",
      description: "Messaging, identity, and storytelling that captures the essence of your brand and fuels growth.",
      gradient: "from-matcha-600 to-amber-600",
      link: "/services/brand-development"
    },
    {
      icon: Rocket,
      title: "Launch Campaigns",
      description: "Whether it's a product, brand, or idea—we design bold launches that make headlines.",
      gradient: "from-amber-600 to-pink-600",
      link: "/services/launch-campaigns"
    },
    {
      icon: Brain,
      title: "Strategic Consulting",
      description: "Big-picture guidance for brands ready to evolve, pivot, or grow fast.",
      gradient: "from-pink-600 to-matcha-600",
      link: "/services/strategic-consulting"
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
                PR. But Make It{' '}
                <span className="bg-gradient-to-r from-matcha-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">
                  Future-Ready.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('servicesDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100/50 opacity-0 animate-[fade-in_1s_ease-out_forwards] cursor-pointer"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-matcha-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-matcha-600 group-hover:text-matcha-700 font-semibold">
                    Learn More 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-lg text-gray-600 mb-4">
                <strong>Industries we serve:</strong> Beauty, Fashion, Real Estate, Tech, Wellness, Hospitality, Retail, and more.
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-matcha-600 to-amber-600 bg-clip-text text-transparent">
                No limits. Just possibilities.
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
