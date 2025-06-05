
import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    "Dubai-based, globally minded",
    "Industry-agnostic & impact-driven",
    "Rooted in culture, powered by innovation",
    "Led by next-gen PR thinkers",
    "Agile, bold, and always ahead of the curve"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              CosmoComms?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Because the world doesn't need more noise. It needs more meaning.
          </p>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center justify-center text-left">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-lg text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
