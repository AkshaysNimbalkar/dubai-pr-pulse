
import React from 'react';
import { Globe, Smartphone, Star, Lightbulb, Rocket, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Public Relations",
      description: "Press coverage, media relations, and thought leadership that puts you where the world is watching.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Scroll-stopping content, strategy, and management that builds communities and drives engagement.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Star,
      title: "Influencer Marketing",
      description: "From nano to mega, we connect your brand with credible creators who convert.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Brand Development",
      description: "Messaging, identity, and storytelling that captures the essence of your brand and fuels growth.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Rocket,
      title: "Launch Campaigns",
      description: "Whether it's a product, brand, or idea—we design bold launches that make headlines.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Brain,
      title: "Strategic Consulting",
      description: "Big-picture guidance for brands ready to evolve, pivot, or grow fast.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const industries = [
    "Beauty", "Fashion", "Real Estate", "Tech", "Wellness", "Hospitality", "Retail"
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PR. But Make It{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Future-Ready.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't believe in cookie-cutter campaigns. Every brand is unique, and so is our approach. 
              Our suite of services is designed to amplify your voice in a world that's constantly changing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {industries.map((industry, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>
            <p className="text-lg text-gray-600 font-medium">
              No limits. Just possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
