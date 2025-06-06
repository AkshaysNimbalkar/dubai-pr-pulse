import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, ArrowLeft, Palette, MessageSquare, Eye, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandDevelopment = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Palette,
      title: "Visual Identity",
      description: "Stunning visual systems that capture your brand's essence and create instant recognition across all touchpoints."
    },
    {
      icon: MessageSquare,
      title: "Brand Messaging",
      description: "Compelling narratives and tone of voice that connect emotionally with your audience and differentiate you from competitors."
    },
    {
      icon: Eye,
      title: "Brand Positioning",
      description: "Strategic positioning that places your brand exactly where it needs to be in the minds of your target market."
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description: "Comprehensive roadmaps that guide every brand decision and ensure consistent growth and evolution."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-gradient-to-br from-matcha-50 via-white to-amber-50/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-matcha-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-amber-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-matcha-600 hover:text-matcha-700 mb-8 group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>

            <div className="text-center mb-16">
              <div className="p-6 bg-gradient-to-r from-matcha-600 to-amber-600 rounded-3xl w-fit mx-auto mb-8">
                <Target className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-matcha-600 to-amber-600 bg-clip-text text-transparent">
                  Brand Development
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Your brand is more than a logo—it's a living, breathing entity that connects with hearts and minds. We craft compelling brand identities that don't just look good, but feel right, resonate deeply, and drive sustainable growth in competitive markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group">
                  <div className="p-3 bg-gradient-to-r from-matcha-500 to-amber-500 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-matcha-100 to-amber-100 rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Something Remarkable?</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                From startups finding their voice to established brands evolving for the future—we create identities that last.
              </p>
              <Link to="/contact" className="bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block">
                Build Your Brand
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BrandDevelopment;
