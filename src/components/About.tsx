
import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Are{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CosmoComms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A PR agency for the now.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In a world where attention is currency, we help brands break through the noise. 
                CosmoComms PR was founded with one mission: to empower brands to be seen, heard, 
                and remembered in today's ever-evolving landscape.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Headquartered in Dubai, we work across industries—from beauty to tech, real estate 
                to retail—delivering tailored communication strategies that spark conversation and drive impact.
              </p>
              
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl">
                <p className="text-lg font-medium">
                  We're the team you call when you're ready to be noticed. 
                  Not just for what you do, but for who you are.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Strategic Focus</h3>
                </div>
                <p className="text-gray-700">
                  Every campaign is built on deep strategic thinking and cultural insight.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Creative Innovation</h3>
                </div>
                <p className="text-gray-700">
                  We blend digital innovation with unapologetic creativity to break through.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Cultural Intuition</h3>
                </div>
                <p className="text-gray-700">
                  Dubai roots give us unique cultural perspective for global communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
