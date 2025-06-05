
import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-xl mb-12 text-purple-100">
            Whether you're a visionary founder, a growing business, or an established brand 
            looking for a fresh perspective, CosmoComms PR is here to help you elevate.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Based in Dubai</h3>
              <p className="text-purple-200">Where innovation meets tradition</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Open to the World</h3>
              <p className="text-blue-200">Global reach, local insight</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-indigo-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Start Your Story</h3>
              <p className="text-indigo-200">Let's create what's next</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Start Your Story With Us</h3>
            <a 
              href="mailto:hello@cosmocommspr.com" 
              className="text-xl text-yellow-300 hover:text-yellow-200 transition-colors"
            >
              hello@cosmocommspr.com
            </a>
          </div>
          
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
