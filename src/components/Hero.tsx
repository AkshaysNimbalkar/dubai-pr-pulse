
import React from 'react';
import { ArrowRight, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-purple-200">
            <Zap className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-600 font-medium">New Generation Communications</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              CosmoComms PR
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Global Vision. Dubai Roots.
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're rewriting the rules of public relations. Born in Dubai and built for the bold, 
            we're a new-generation communications agency that blends strategic thinking with cultural intuition, 
            digital innovation, and unapologetic creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
              Let's Talk
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
              Our Work
            </button>
          </div>
          
          <div className="mt-16 flex items-center justify-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <span>Global Reach</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <span>🏢 Dubai Based</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <span>🚀 Future Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
