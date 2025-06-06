
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, ArrowLeft, Users, TrendingUp, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfluencerMarketing = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: "Creator Matching",
      description: "From nano to mega influencers, we connect you with authentic voices that resonate with your target audience."
    },
    {
      icon: TrendingUp,
      title: "Campaign Strategy",
      description: "Data-driven influencer strategies that maximize reach, engagement, and conversion rates across all platforms."
    },
    {
      icon: Heart,
      title: "Relationship Management",
      description: "Long-term creator partnerships that build authentic brand advocacy and sustainable growth."
    },
    {
      icon: Zap,
      title: "Performance Tracking",
      description: "Real-time analytics and ROI measurement to ensure every collaboration delivers measurable results."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-gradient-to-br from-pink-50 via-white to-matcha-50/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-matcha-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8 group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>

            <div className="text-center mb-16">
              <div className="p-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl w-fit mx-auto mb-8">
                <Star className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-pink-600 to-matcha-600 bg-clip-text text-transparent">
                  Influencer Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                In the age of authentic connections, influencer marketing isn't just about follower counts—it's about finding voices that truly resonate. We match your brand with creators who don't just promote; they advocate, inspire, and convert their communities into your customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-matcha-500 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-matcha-100 rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Amplify Your Voice?</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                From micro-moments to viral campaigns, we create influencer partnerships that drive real business results.
              </p>
              <Link to="/contact" className="bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block">
                Find Your Voices
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InfluencerMarketing;
