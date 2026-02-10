import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: "The Future of PR: Trends to Watch in 2025",
      excerpt: "Discover the emerging trends shaping the PR industry and how to stay ahead of the curve.",
      category: "Industry Insights",
      date: "March 15, 2025",
      readTime: "5 min read",
      gradient: "from-matcha-500 to-matcha-600"
    },
    {
      title: "Building Brand Credibility: A Startup's Guide",
      excerpt: "Essential strategies for startups to establish trust and authority in their industry.",
      category: "Startup Tips",
      date: "March 10, 2025",
      readTime: "7 min read",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      title: "Social Media Marketing in the Dubai Market",
      excerpt: "Cultural insights and best practices for effective social media campaigns in the UAE.",
      category: "Marketing Strategy",
      date: "March 5, 2025",
      readTime: "6 min read",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      title: "Influencer Marketing: Finding the Right Match",
      excerpt: "How to identify and partner with influencers who align with your brand values.",
      category: "Influencer Marketing",
      date: "February 28, 2025",
      readTime: "8 min read",
      gradient: "from-matcha-600 to-amber-600"
    },
    {
      title: "Press Release Best Practices for Maximum Impact",
      excerpt: "Craft compelling press releases that journalists actually want to read and share.",
      category: "PR Tips",
      date: "February 20, 2025",
      readTime: "4 min read",
      gradient: "from-amber-600 to-pink-600"
    },
    {
      title: "Launch Campaign Success Stories",
      excerpt: "Real-world examples of product launches that made headlines and drove results.",
      category: "Case Studies",
      date: "February 15, 2025",
      readTime: "10 min read",
      gradient: "from-pink-600 to-matcha-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-gradient-to-br from-white via-matcha-50/20 to-amber-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-matcha-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-amber-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <BookOpen className="w-5 h-5 text-matcha-600 mr-3" />
                <span className="text-matcha-700 font-semibold">{t('industryInsights')}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                {t('prInsights')}{' '}
                <span className="bg-gradient-to-r from-matcha-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">
                  {t('industryTrends')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('blogDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100/50 opacity-0 animate-[fade-in_1s_ease-out_forwards]"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-4 py-2 bg-gradient-to-r ${post.gradient} text-white text-sm font-semibold rounded-full`}>
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-matcha-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <button className="flex items-center text-matcha-600 group-hover:text-matcha-700 font-semibold">
                      {t('readMore')} 
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-xl text-gray-600 mb-6">
                {t('wantToContribute')}
              </p>
              <a href="mailto:pranjali@cosmocommspr.com?subject=Blog Contribution&body=Hi CosmoComms Team,%0D%0A%0D%0AI'd like to contribute or suggest a blog topic.%0D%0A%0D%0AThank you!" className="group bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-110 text-lg inline-block">
                {t('getInTouch')}
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
