
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import StartupPRKit from '../components/StartupPRKit';
import InstagramFeed from '../components/InstagramFeed';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <StartupPRKit />
      <InstagramFeed />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
