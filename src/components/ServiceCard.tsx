import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  link: string;
  image: string;
  delay: string;
}

const ServiceCard = ({ icon: Icon, title, description, gradient, link, image, delay }: ServiceCardProps) => {
  const { t } = useLanguage();
  return (
    <Link 
      to={link}
      className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-amber-100/50 relative opacity-0 animate-[fade-in_1s_ease-out_forwards]"
      style={{animationDelay: delay}}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-500`}></div>
        <div className="absolute top-4 right-4 p-4 bg-white/90 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform duration-500">
          <Icon className={`w-6 h-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent'}} />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          {description}
        </p>
        <div className="flex items-center text-amber-600 group-hover:text-amber-700 font-semibold">
          {t('learnMore')} 
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
