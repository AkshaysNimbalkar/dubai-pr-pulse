import { Check, Rocket } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StartupPRKit = () => {

  const pricingPlans = [
    {
      id: 'kickstarter',
      name: 'THE KICKSTARTER',
      subtitle: 'One-Off Project',
      description: 'Make a splash with a single news-worthy event to generate immediate visibility and buzz in Tier A and Tier B media.',
      features: [
        'Press Release',
        'Targeted Distribution',
        'Media Relations',
        'Monitoring & Intelligence',
        'Reporting'
      ],
      ideal: 'Startups, product launches, or brands making a single major announcement',
      cta: 'GET STARTED'
    },
    {
      id: 'momentum',
      name: 'THE MOMENTUM',
      subtitle: 'Mid-Tier Package',
      popular: true,
      description: 'Steady growth with consistent visibility—perfect for SMEs not ready for a full corporate newsroom operation.',
      features: [
        'Everything from Kickstarter Package',
        'Steady News Flow',
        'Reactive Media Relations',
        'Essential Content',
        'Performance Tracking',
        'Account Management'
      ],
      ideal: 'SMEs or growing brands that need consistent visibility',
      cta: 'BUILD MOMENTUM'
    },
    {
      id: 'authority',
      name: 'THE AUTHORITY',
      subtitle: 'Comprehensive Retainer',
      description: 'Our flagship, full-service partnership. We act as your internal press office, managing your news, reputation, messaging, and executive profile.',
      features: [
        'Everything from Momentum Package',
        'Monthly Press Release & Distribution',
        'Thought Leadership (Interview/Op-Ed)',
        'Industry Commentary & Pitching',
        'Strategic Partnership Opportunities',
        'Awards Entry Submission',
        'Weekly Status Calls & Counsel',
        'Daily Media Monitoring & Reports',
        'Proactive Organic Outreach',
        'Messaging House & Editorial Calendar',
        'Corporate Toolkit (Bios, Backgrounders, FAQs)',
        'Executive Media Support & Briefings',
        'Long-Form Content (Speeches, Op-Eds)'
      ],
      ideal: 'Established brands seeking market dominance and thought leadership (3 or 6-month contract)',
      cta: 'APPLY NOW'
    }
  ];

 

  const faqs = [
    {
      question: 'Who is this for?',
      answer: 'Startup founders, SMEs, growing businesses, and established brands who want strategic PR and media coverage tailored to their stage and goals.'
    },
    {
      question: 'I have zero PR experience. Can you still help?',
      answer: 'Absolutely. That\'s exactly why we exist. We handle everything from strategy to execution, so you can focus on running your business.'
    },
    {
      question: 'How is this different from hiring a traditional PR agency?',
      answer: 'We offer flexible, stage-appropriate packages instead of one-size-fits-all retainers. You get exactly what you need—whether it\'s a single launch or full-service PR partnership.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see their first media mention within 30 days. Timelines vary based on your industry, story angle, and the package you choose.'
    },
    {
      question: 'Can I upgrade my package later?',
      answer: 'Of course! Many clients start with The Kickstarter and move to The Momentum or The Authority as their brand grows. We make transitions seamless.'
    },
    {
      question: 'Is this specific to Dubai/UAE?',
      answer: 'While we\'re headquartered in Dubai and have deep regional media relationships, our strategies and network extend globally.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-pink-50 via-white to-matcha-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-matcha-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-matcha-100 rounded-full px-6 py-3 mb-6">
              <Rocket className="w-5 h-5 text-pink-600 mr-3" />
              <span className="text-pink-700 font-semibold">The PR Playbook</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Your Brand Deserves<br />the Spotlight.
            </h1>
            <p className="text-2xl text-gray-600 mb-4">Strategic PR Packages for Every Stage of Growth</p>

            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you're launching, scaling, or dominating your market—we have a PR package built for you. No cookie-cutter campaigns. Just results-driven strategy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#packages" className="group bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                VIEW OUR PACKAGES
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </a>
              <a href="mailto:pranjali@cosmocommspr.com?subject=PR Enquiry&body=Hi Team,%0D%0A%0D%0AI'd like to learn more about your PR packages.%0D%0A%0D%0AThank you!" className="bg-white text-gray-900 border-2 border-gray-300 px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-500 transform hover:scale-110">
                TALK TO US
              </a>
              <a href="tel:+971543338611" className="bg-white text-gray-900 border-2 border-gray-300 px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-500 transform hover:scale-110 inline-flex items-center">
                📞 +971 54 333 8611
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-gradient-to-br from-gray-900 to-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-6">The CosmoComms PR Playbook</h2>
            <p className="text-xl text-center text-gray-300 mb-16">Tailored packages to match your brand's stage and ambitions</p>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 flex flex-col ${
                    plan.popular ? 'border-amber-500 shadow-2xl shadow-amber-500/50' : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-amber-400 font-semibold text-lg mb-2">{plan.subtitle}</p>
                  </div>

                  <p className="text-center text-gray-300 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-matcha-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white/10 rounded-2xl p-4 mb-6">
                    <p className="text-sm text-gray-300 mb-1">Best for:</p>
                    <p className="text-sm font-semibold">{plan.ideal}</p>
                  </div>

                  <a
                    href={`mailto:pranjali@cosmocommspr.com?subject=Interest in ${plan.name} Package&body=Hi Team,%0D%0A%0D%0AI am interested in the ${plan.name} package (${plan.subtitle}).%0D%0A%0D%0ACould we schedule a brief call to discuss how this package can help my brand?%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards`}
                    className="block w-full bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-500 text-center"
                  >
                    {plan.cta} →
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 mt-8">Contact us to discuss custom packages tailored to your specific needs.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Questions? We've Got Answers</h2>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gradient-to-br from-matcha-50 to-pink-50 p-8 rounded-3xl border-2 border-matcha-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Make Headlines?</h2>
            <p className="text-2xl mb-4">Stop watching your competitors get all the coverage.</p>
            <p className="text-2xl mb-12">Your story deserves to be heard.</p>

            <a href="#packages" className="inline-block group bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-16 py-6 rounded-full font-bold text-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 mb-8">
              EXPLORE PACKAGES
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>

            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-xl mb-4">Still on the fence?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4">
                <a href="mailto:pranjali@cosmocommspr.com?subject=PR Consultation Request&body=Hi Team,%0D%0A%0D%0AI'd like to book a quick call to discuss my PR needs.%0D%0A%0D%0AThank you!" className="text-amber-400 hover:text-amber-300 font-semibold text-lg underline">
                  Book a free 15-minute consultation call
                </a>
                <span className="hidden sm:inline text-gray-500">|</span>
                <a href="tel:+971543338611" className="text-amber-400 hover:text-amber-300 font-semibold text-lg underline">
                  Call us: +971 54 333 8611
                </a>
              </div>
              <p className="text-gray-400 mt-2">No sales pressure. Just honest advice about your PR needs.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartupPRKit;