
import React from 'react';
import { Globe, Smartphone, Star, Lightbulb, Rocket, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: "Public Relations",
      description: "Press coverage, media relations, and thought leadership that puts you where the world is watching.",
      color: "from-amber-500 to-amber-600",
      delay: "0ms"
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Scroll-stopping content, strategy, and management that builds communities and drives engagement.",
      color: "from-stone-500 to-stone-600",
      delay: "200ms"
    },
    {
      icon: Star,
      title: "Influencer Marketing",
      description: "From nano to mega, we connect your brand with credible creators who convert.",
      color: "from-amber-600 to-stone-500",
      delay: "400ms"
    },
    {
      icon: Lightbulb,
      title: "Brand Development",
      description: "Messaging, identity, and storytelling that captures the essence of your brand and fuels growth.",
      color: "from-stone-600 to-amber-500",
      delay: "600ms"
    },
    {
      icon: Rocket,
      title: "Launch Campaigns",
      description: "Whether it's a product, brand, or idea—we design bold launches that make headlines.",
      color: "from-amber-500 to-stone-600",
      delay: "800ms"
    },
    {
      icon: Brain,
      title: "Strategic Consulting",
      description: "Big-picture guidance for brands ready to evolve, pivot, or grow fast.",
      color: "from-stone-500 to-amber-600",
      delay: "1000ms"
    }
  ];

  const industries = [
    "Beauty", "Fashion", "Real Estate", "Tech", "Wellness", "Hospitality", "Retail"
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
              PR. But Make It{' '}
              <span className="bg-gradient-to-r from-amber-600 to-stone-600 bg-clip-text text-transparent">
                Future-Ready.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('servicesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-amber-100/50 relative overflow-hidden"
                style={{animationDelay: service.delay}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-stone-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-amber-100/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 to-stone-50/30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h3>
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
                No limits. Just possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
