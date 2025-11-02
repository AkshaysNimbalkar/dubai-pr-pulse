import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Rocket, Check, X, Star, Clock, Shield, Zap, Award, Users, TrendingUp, Target, MessageSquare, DollarSign, CheckCircle2 } from 'lucide-react';

const StartupPRKit = () => {
  const [selectedPlan, setSelectedPlan] = useState('guided');

  const modules = [
    {
      title: 'Module 1: The Media Magnet Framework™',
      subtitle: 'Your Story Roadmap to Headlines',
      features: [
        'The Angle Finder: Discover your unique story hook in 20 minutes',
        '5 Press Release Templates: Product launch, funding, milestone, partnership, award',
        "The Founder Story Builder: Create your Wikipedia-worthy bio",
        "One-Liner Generator: Craft your startup's unforgettable tagline",
        'BONUS: 10 real press releases that got coverage'
      ]
    },
    {
      title: 'Module 2: The Journalist Black Book',
      subtitle: 'Skip the Slush Pile',
      features: [
        '100+ Media Contacts: Tech, business, and startup journalists in UAE & globally',
        'The Golden Email Formula: 73% open rate templates',
        'Follow-Up Framework: 3-touch sequence that gets responses',
        'Subject Line Swipe File: 50 proven winners',
        'Timing Guide: Best hours/days for each region'
      ]
    },
    {
      title: 'Module 3: Zero-Budget Buzz Builder',
      subtitle: 'PR Hacks That Cost Nothing',
      features: [
        '15 Free PR Tactics: From newsjacking to trend riding',
        "The Event Hijack Method: Leverage others' spotlight ethically",
        'Product Launch Amplifier: Turn releases into media events',
        'FOMO Creation Kit: Build urgency without being sleazy',
        'Partnership PR Playbook: Double your reach through collaborations'
      ]
    },
    {
      title: 'Module 4: Influencer Activation Playbook',
      subtitle: "When You Can't Afford the Kardashians",
      features: [
        'Micro-Influencer Finder: Identify your perfect ambassadors',
        'The Barter Blueprint: Trade product for promotion',
        "DM Scripts That Work: Get 40% response rates",
        'Collaboration Contracts: Protect yourself legally',
        'ROI Tracking Sheet: Measure impact without expensive tools'
      ]
    },
    {
      title: 'Module 5: Crisis Prevention Plan',
      subtitle: 'Before Things Go Sideways',
      features: [
        '5 Startup Crisis Scripts: Bad reviews, delays, pivots, layoffs, controversies',
        'Emergency Statement Templates: Ready-to-edit responses',
        'The Apology Framework: Say sorry without legal liability',
        'Reputation Recovery Roadmap: Bounce back stronger',
        '24-Hour Response Protocol: Your emergency action plan'
      ]
    },
    {
      title: 'Module 6: Metrics That Matter Dashboard',
      subtitle: 'Prove Your PR Works',
      features: [
        'Free Tracking Tools Setup: Monitor coverage without paid tools',
        'Investor-Ready KPIs: The 5 metrics VCs actually care about',
        'Report Templates: Look professional in minutes',
        'ROI Calculator: Show real business impact',
        'Pitch Deck PR Slide: Template for your investor deck'
      ]
    }
  ];

  const pricingPlans = [
    {
      id: 'diy',
      name: 'DIY STARTER',
      price: 'AED 997',
      period: 'One-time payment',
      description: 'Everything you need to start',
      features: [
        'All 6 modules (lifetime access)',
        '50+ templates & scripts',
        'Video walkthroughs',
        '30-day email support',
        'Quarterly updates'
      ],
      ideal: 'Bootstrapped founders, solopreneurs, pre-seed startups',
      cta: 'START TODAY'
    },
    {
      id: 'guided',
      name: 'GUIDED LAUNCH',
      price: 'AED 2,997',
      period: 'One-time payment',
      popular: true,
      description: 'DIY Starter PLUS hands-on help',
      features: [
        'Everything in DIY Starter',
        '2 x 60-min strategy calls',
        'Custom media list (50 contacts)',
        'Press release review & editing',
        '90-day priority support',
        'Campaign planning session'
      ],
      ideal: 'First-time founders, product launches, seed-stage startups',
      cta: 'LEVEL UP'
    },
    {
      id: 'partner',
      name: 'PR PARTNER',
      price: 'AED 7,997/month',
      period: 'Month-to-month, cancel anytime',
      description: 'We become your PR team',
      features: [
        'Everything in Guided Launch',
        'Weekly 30-min check-ins',
        '20 media pitches/month',
        'Full influencer outreach',
        'Crisis hotline access',
        'Monthly coverage reports',
        'Content creation (2 pieces)'
      ],
      ideal: 'Funded startups, busy founders, aggressive growth mode',
      cta: 'APPLY NOW'
    }
  ];

  const testimonials = [
    {
      quote: 'From unknown to TechCrunch in 30 days',
      text: 'The templates alone saved me 100 hours. Got our Series A announcement picked up by 5 major outlets.',
      author: 'Sarah Chen',
      role: 'Founder @ FinFlow',
      featured: 'TechCrunch, Forbes Middle East, Wamda'
    },
    {
      quote: '50,000 impressions from one press release',
      text: "Couldn't afford an agency. This kit got us more coverage than startups with huge PR budgets.",
      author: 'Ahmed Al Rashid',
      role: 'CEO @ Souq Local',
      featured: 'Arabian Business, Entrepreneur ME, Gulf News'
    },
    {
      quote: 'Closed our seed round after getting featured',
      text: 'Investors started reaching out after our Entrepreneur Middle East feature. Best ROI ever.',
      author: 'Maria Santos',
      role: 'Co-founder @ EdTech Plus',
      raised: 'Raised: AED 3.6M seed round'
    }
  ];

  const bonuses = [
    {
      title: 'Dubai Media Masterlist',
      value: 'AED 497',
      features: ['200+ UAE journalist contacts', 'Regional publication guide', 'Arabic media templates']
    },
    {
      title: 'Startup Event Calendar',
      value: 'AED 297',
      features: ['12-month PR opportunity calendar', 'Key Dubai/UAE tech events', 'Speaking opportunity tracker']
    },
    {
      title: 'Investor Relations Toolkit',
      value: 'AED 397',
      features: ['Funding announcement templates', 'Investor update formats', 'Stakeholder communication guide']
    }
  ];

  const faqs = [
    {
      question: 'Who is this for?',
      answer: "Startup founders, marketing teams, and entrepreneurs who want media coverage without hiring an expensive agency. If you can follow a recipe, you can do PR with our kit."
    },
    {
      question: 'I have zero PR experience. Will this work?',
      answer: "Absolutely. Everything is step-by-step with examples, templates, and video guides. We assume you're starting from scratch."
    },
    {
      question: 'How is this different from hiring a PR agency?',
      answer: "Agencies in Dubai charge AED 20,000-50,000/month and do the work for you. We teach you the system so you can do it yourself (or train someone on your team) for a fraction of the cost."
    },
    {
      question: 'What if my product is boring?',
      answer: "Every product solves a problem. Problems are stories. Stories get coverage. We'll help you find your angle—even if you sell B2B accounting software."
    },
    {
      question: 'How quickly will I see results?',
      answer: "Most users get their first media mention within 30 days of implementing the system. Your timeline depends on your industry and effort level."
    },
    {
      question: 'Is this specific to Dubai/UAE?',
      answer: "While we include specific Dubai/UAE resources, the strategies work globally. You get both regional and international media tactics."
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
              <span className="text-pink-700 font-semibold">Startup PR Kit</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Launch Loud. Get Found.<br />Build Trust.
            </h1>
            <p className="text-2xl text-gray-600 mb-4">(Even on a Ramen Budget)</p>
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">New to PR? No problem.</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We help startups go from invisible to inevitable—building media visibility, brand credibility, and influencer buzz. Whether you're launching from your garage or scaling from Series A, we've got your back.
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-500 via-matcha-500 to-amber-500 text-white p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto mb-8">
              <p className="text-lg font-medium leading-relaxed italic">
                Built by a PR girl who's been there—launching with nothing but WiFi, caffeine, and pure determination.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="group bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                GET INSTANT ACCESS
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </a>
              <a href="#pricing" className="bg-white text-gray-900 border-2 border-gray-300 px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-500 transform hover:scale-110">
                SEE PRICING
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
              The Startup PR Struggle Is Real
            </h2>
            <p className="text-2xl text-center text-gray-700 mb-12">You know the feeling:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              { [
                'Your competitor just got featured in TechCrunch (again)',
                "Journalists ignore your emails like they're spam",
                "You can't afford a AED 50,000/month agency retainer",
                "Your product is amazing but nobody knows you exist",
                "You're too busy building to learn PR from scratch"
              ].map((problem, idx) => (
                <div key={idx} className="flex items-start bg-red-50 p-6 rounded-2xl border-2 border-red-100">
                  <X className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-800">{problem}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-matcha-500 to-pink-500 text-white p-8 rounded-3xl">
               <p className="text-2xl font-bold">What if you could get media coverage without the agency price tag?</p>
             </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-24 bg-gradient-to-br from-matcha-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Introducing the Startup PR Kit</h2>
            <p className="text-3xl font-semibold text-matcha-600 mb-8">Your Complete PR System in a Box</p>
            <p className="text-xl text-gray-700 mb-12">No fluff. No theory. Just battle-tested templates, scripts, and strategies that get results.</p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-matcha-600 mb-2">6</div>
                <p className="text-gray-700 font-semibold">Complete Modules</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
                <p className="text-gray-700 font-semibold">Templates</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-amber-600 mb-2">∞</div>
                <p className="text-gray-700 font-semibold">Lifetime Updates</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-matcha-600 mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Real Examples</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-6">Everything You Need to Get Featured</h2>

            <div className="grid gap-8 mt-16">
              {modules.map((module, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-matcha-50/30 p-8 rounded-3xl border-2 border-matcha-200 hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-xl text-matcha-600 font-semibold mb-6">{module.subtitle}</p>
                  <ul className="space-y-3">
                    {module.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-matcha-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-gray-900 to-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">Choose Your PR Journey</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 ${
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
                    <div className="text-4xl font-bold text-amber-400 mb-2">{plan.price}</div>
                    <p className="text-gray-400">{plan.period}</p>
                  </div>
                  <p className="text-center text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-matcha-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/10 rounded-2xl p-4 mb-6">
                    <p className="text-sm text-gray-300 mb-1">Perfect for:</p>
                    <p className="text-sm font-semibold">{plan.ideal}</p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-500">
                    {plan.cta} →
                  </button>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">All prices in AED. VAT included where applicable.</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Founders Who Made Headlines</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-matcha-50 to-pink-50 p-8 rounded-3xl border-2 border-matcha-200">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">"{testimonial.quote}"</h3>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-matcha-600 mt-2">
                      {testimonial.featured ? `Featured in: ${testimonial.featured}` : testimonial.raised}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-matcha-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-6">Order Today & Get These FREE Bonuses</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {bonuses.map((bonus, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-matcha-200 hover:shadow-2xl transition-all duration-500">
                  <div className="bg-gradient-to-r from-matcha-500 to-pink-500 text-white px-4 py-2 rounded-full inline-block mb-4 font-bold">
                    Bonus #{idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{bonus.title}</h3>
                  <p className="text-xl text-matcha-600 font-semibold mb-4">Value: {bonus.value}</p>
                  <ul className="space-y-2">
                    {bonus.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start">
                        <Check className="w-5 h-5 text-matcha-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-pink-500 text-white p-8 rounded-3xl text-center">
              <p className="text-3xl font-bold">Total Bonus Value: AED 1,191</p>
              <p className="text-xl mt-2">Yours FREE with any package</p>
            </div>
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

      {/* Urgency */}
      <section className="py-24 bg-gradient-to-br from-red-500 via-pink-500 to-amber-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Limited Time Launch Offer</h2>
            <p className="text-3xl font-bold mb-8">Save AED 500 on Any Package</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8">
              <p className="text-2xl font-bold mb-4">Use code LAUNCH500 at checkout</p>
              <div className="flex justify-center gap-4 text-4xl font-bold">
                <div className="bg-white/30 px-6 py-4 rounded-2xl">2 <span className="text-sm">DAYS</span></div>
                <div className="bg-white/30 px-6 py-4 rounded-2xl">14 <span className="text-sm">HRS</span></div>
                <div className="bg-white/30 px-6 py-4 rounded-2xl">32 <span className="text-sm">MIN</span></div>
              </div>
            </div>
            <p className="text-xl mb-2">Plus: Next 20 buyers get a FREE 30-minute PR audit call</p>
            <p className="text-lg">(Value: AED 750) • Spots remaining: 12</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-bold mb-8">Ready to Make Headlines?</h2>
            <p className="text-2xl mb-4">Stop watching your competitors get all the coverage.</p>
            <p className="text-2xl mb-12">Your story deserves to be heard.</p>

            <a href="#pricing" className="inline-block group bg-gradient-to-r from-matcha-500 via-amber-500 to-pink-500 text-white px-16 py-6 rounded-full font-bold text-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 mb-8">
              GET THE STARTUP PR KIT NOW
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>
            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-xl mb-4">Still on the fence?</p>
              <a href="mailto:pranjali@cosmocommspr.com" className="text-amber-400 hover:text-amber-300 font-semibold text-lg underline">
                Book a free 15-minute "Is This Right for Me?" call
              </a>
              <p className="text-gray-400 mt-2">No sales pressure. Just honest advice about your PR needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-12 bg-white border-t-2 border-matcha-200">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
              <div className="flex flex-col items-center">
                <Zap className="w-8 h-8 text-matcha-600 mb-2" />
                <p className="font-semibold text-gray-900">Instant Access</p>
                <p className="text-sm text-gray-600">Start in 5 minutes</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-amber-600 mb-2" />
                <p className="font-semibold text-gray-900">Lifetime Updates</p>
                <p className="text-sm text-gray-600">Kit grows with you</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-pink-600 mb-2" />
                <p className="font-semibold text-gray-900">Secure Checkout</p>
                <p className="text-sm text-gray-600">256-bit SSL encryption</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 text-matcha-600 mb-2" />
                <p className="font-semibold text-gray-900">30-Day Guarantee</p>
                <p className="text-sm text-gray-600">Risk-free investment</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-2">Questions? WhatsApp us: <a href="https://wa.me/971542484775" className="text-matcha-600 font-semibold hover:underline">+971 54 248 4775</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-16 bg-gradient-to-r from-matcha-500 to-pink-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl font-semibold mb-6">
              P.S. — Every day you wait, your competitor gets another headline. The journalists on our media list won't wait for you to be ready. They're writing stories about someone else right now. Don't let it be your competition.
            </p>
            <a href="#pricing" className="inline-block bg-white text-gray-900 px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
              Claim Your Startup PR Kit →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartupPRKit;
