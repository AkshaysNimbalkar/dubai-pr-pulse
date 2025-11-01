import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-pink-50/20 to-matcha-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-matcha-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-amber-100 rounded-full px-6 py-3 mb-6">
            <Instagram className="w-5 h-5 text-pink-600 mr-3" />
            <span className="text-pink-700 font-semibold">Follow Our Journey</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Behind the{' '}
            <span className="bg-gradient-to-r from-pink-600 via-matcha-600 to-amber-600 bg-clip-text text-transparent">
              Scenes
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Get PR tips, industry insights, and a peek into our creative process on Instagram
          </p>

          <a 
            href="https://www.instagram.com/cosmocomms_pr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gradient-to-r from-pink-500 via-matcha-500 to-amber-500 text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 text-lg"
          >
            <Instagram className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Follow @cosmocomms_pr
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          {/* Instagram Grid Preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <a
                key={item}
                href="https://www.instagram.com/cosmocomms_pr/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-gradient-to-br from-pink-100 to-matcha-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-matcha-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
