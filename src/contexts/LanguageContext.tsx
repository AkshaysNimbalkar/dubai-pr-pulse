import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  tr: (path: string) => any; // returns structured translations (arrays/objects)
}

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    blog: 'Blog',
    letsTalk: "Let's Talk",
    
    // Hero
    tagline: 'New Generation Communications',
    heroLine1: 'We Create',
    heroLine3: 'That Matter',
    title: 'Welcome to CosmoComms PR',
    subtitle: 'Global Vision. Dubai Roots.',
    heroDescription: "We're rewriting the rules of public relations. Born in Dubai and built for the bold, we're a new-generation communications agency that blends strategic thinking with cultural intuition, digital innovation, and unapologetic creativity.",
    ourWork: 'Our Work',
    globalReach: 'Global Reach',
    dubaiBased: 'Dubai Based',
    futureReady: 'Future Ready',
    
    // About
    aboutTitle: 'We Are CosmoComms',
    aboutSubtitle: 'A PR agency for the now.',
    aboutText1: 'In a world where attention is currency, we help brands break through the noise. CosmoComms PR was founded with one mission: to empower brands to be seen, heard, and remembered in today\'s ever-evolving landscape.',
    aboutText2: 'Headquartered in Dubai, we work across industries—from beauty to tech, real estate to retail—delivering tailored communication strategies that spark conversation and drive impact.',
    aboutQuote: 'We\'re the team you call when you\'re ready to be noticed. Not just for what you do, but for who you are.',
    strategicFocus: 'Strategic Focus',
    strategicFocusText: 'Every campaign is built on deep strategic thinking and cultural insight.',
    creativeInnovation: 'Creative Innovation',
    creativeInnovationText: 'We blend digital innovation with unapologetic creativity to break through.',
    culturalIntuition: 'Cultural Intuition',
    culturalIntuitionText: 'Dubai roots give us unique cultural perspective for global communications.',
    
    // Services
    servicesTitle: 'PR. But Make It Future-Ready.',
    servicesDescription: 'We don\'t believe in cookie-cutter campaigns. Every brand is unique, and so is our approach. Our suite of services is designed to amplify your voice in a world that\'s constantly changing.',
    publicRelations: 'Public Relations',
    publicRelationsDesc: 'Press coverage, media relations, and thought leadership that puts you where the world is watching.',
    socialMediaMarketing: 'Social Media Marketing',
    socialMediaMarketingDesc: 'Scroll-stopping content, strategy, and management that builds communities and drives engagement.',
    influencerMarketing: 'Influencer Marketing',
    influencerMarketingDesc: 'From nano to mega, we connect your brand with credible creators who convert.',
    brandDevelopment: 'Brand Development',
    brandDevelopmentDesc: 'Messaging, identity, and storytelling that captures the essence of your brand and fuels growth.',
    launchCampaigns: 'Launch Campaigns',
    launchCampaignsDesc: 'Whether it\'s a product, brand, or idea—we design bold launches that make headlines.',
    strategicConsulting: 'Strategic Consulting',
    strategicConsultingDesc: 'Big-picture guidance for brands ready to evolve, pivot, or grow fast.',
    industriesWeServe: 'Industries We Serve',
    noLimits: 'No limits. Just possibilities.',
    learnMore: 'Learn More',
    backToServices: 'Back to Services',
    
    // Industries
    beauty: 'Beauty',
    fashion: 'Fashion',
    realEstate: 'Real Estate',
    tech: 'Tech',
    wellness: 'Wellness',
    hospitality: 'Hospitality',
    retail: 'Retail',
    
    // Why Us
    whyUsTitle: 'Why CosmoComms?',
    whyUsSubtitle: 'Because the world doesn\'t need more noise. It needs more meaning.',
    industryKnowledge: 'Industry Knowledge & Blog Content',
    industryKnowledgeText: 'Stay ahead of the curve with insights from our PR experts. Our blog covers the latest trends, strategies, and insider tips across industries.',
    reason1: 'Dubai-based, globally minded',
    reason2: 'Industry-agnostic & impact-driven',
    reason3: 'Rooted in culture, powered by innovation',
    reason4: 'Led by next-gen PR thinkers',
    reason5: 'Agile, bold, and always ahead of the curve',
    
    // Instagram
    followOurJourney: 'Follow Our Journey',
    behindTheScenes: 'Behind the',
    scenes: 'Scenes',
    instagramDescription: 'Get PR tips, industry insights, and a peek into our creative process on Instagram',
    followUs: 'Follow Us',
    
    // Contact
    contactInfo: 'Contact Info',
    contactTitle: 'Let\'s Work Together',
    contactDescription: 'Whether you\'re a visionary founder, a growing business, or an established brand looking for a fresh perspective, CosmoComms PR is here to help you elevate.',
    getStarted: 'Get Started Today',
    emailUs: 'Email Us',
    callUs: 'Call Us',
    basedIn: 'Based in',
    basedInDubai: 'Based in Dubai',
    whereInnovation: 'Where innovation meets tradition',
    openToWorld: 'Open to the World',
    globalInsight: 'Global reach, local insight',
    startYourStory: 'Start Your Story',
    letsCreateNext: 'Let\'s create what\'s next',
    startYourStoryWithUs: 'Start Your Story With Us',
    globalReachTitle: 'Global Reach',
    worldwideServices: 'Worldwide Services',
    
    // Blog
    industryInsights: 'Industry Knowledge & Insights',
    prInsights: 'PR Insights &',
    industryTrends: 'Industry Trends',
    blogDescription: 'Stay ahead of the curve with insights from our PR experts. Latest trends, strategies, and insider tips across industries.',
    readMore: 'Read More',
    wantToContribute: 'Want to contribute or suggest a topic?',
    getInTouch: 'Get in Touch',
    
    // Footer
    copyright: '© 2026 CosmoComms PR. All rights reserved. Built for the bold.',
    quickLinks: 'Quick Links',
    startup: {
      hero: {
        label: 'The PR Playbook',
        h1: 'Your Brand Deserves\nthe Spotlight.',
        subtitle: 'Strategic PR Packages for Every Stage of Growth',
        introText: "Whether you're launching, scaling, or dominating your market—we have a PR package built for you. No cookie-cutter campaigns. Just results-driven strategy.",
        ctaPrimary: 'VIEW OUR PACKAGES',
        ctaSecondary: 'TALK TO US'
      },
      solution: {
        title: 'The CosmoComms PR Playbook',
        subtitle: 'Tailored packages to match your brand\'s stage and ambitions'
      },
      pricingPlans: [
        {
          id: 'kickstarter',
          name: 'THE KICKSTARTER',
          subtitle: 'One-Off Project',
          description: 'Make a splash with a single news-worthy event to generate immediate visibility and buzz in Tier A and Tier B media.',
          features: ['Press Release', 'Targeted Distribution', 'Media Relations', 'Monitoring & Intelligence', 'Reporting'],
          ideal: 'Startups, product launches, or brands making a single major announcement',
          cta: 'GET STARTED'
        },
        {
          id: 'momentum',
          name: 'THE MOMENTUM',
          subtitle: 'Mid-Tier Package',
          popular: true,
          description: 'Steady growth with consistent visibility—perfect for SMEs not ready for a full corporate newsroom operation.',
          features: ['Everything from Kickstarter Package', 'Steady News Flow', 'Reactive Media Relations', 'Essential Content', 'Performance Tracking', 'Account Management'],
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
      ],
      faqs: [
        {
          question: 'Who is this for?',
          answer: 'Startup founders, SMEs, growing businesses, and established brands who want strategic PR and media coverage tailored to their stage and goals.'
        },
        {
          question: 'I have zero PR experience. Can you still help?',
          answer: "Absolutely. That's exactly why we exist. We handle everything from strategy to execution, so you can focus on running your business."
        },
        {
          question: 'How is this different from hiring a traditional PR agency?',
          answer: "We offer flexible, stage-appropriate packages instead of one-size-fits-all retainers. You get exactly what you need—whether it's a single launch or full-service PR partnership."
        },
        {
          question: 'How quickly will I see results?',
          answer: "Most clients see their first media mention within 30 days. Timelines vary based on your industry, story angle, and the package you choose."
        },
        {
          question: 'Can I upgrade my package later?',
          answer: "Of course! Many clients start with The Kickstarter and move to The Momentum or The Authority as their brand grows. We make transitions seamless."
        },
        {
          question: 'Is this specific to Dubai/UAE?',
          answer: "While we're headquartered in Dubai and have deep regional media relationships, our strategies and network extend globally."
        }
      ],
      ctas: {
        finalCta: 'Ready to Make Headlines?',
        exploreCta: 'EXPLORE PACKAGES',
        bookCall: 'Book a free 15-minute consultation call',
        email: 'pranjali@cosmocommspr.com'
      }
    },

    // Service Subpages
    prPageDesc: "In today's hyper-connected world, your reputation is your currency. Our public relations expertise transforms brands into industry leaders through strategic storytelling, media mastery, and authentic relationship building. We don't just manage perceptions—we shape them.",
    prMediaRelations: 'Media Relations',
    prMediaRelationsDesc: 'Strategic media outreach that gets your story in front of the right journalists at the right time.',
    prCrisisManagement: 'Crisis Management',
    prCrisisManagementDesc: "Swift, strategic response to protect and restore your brand's reputation when it matters most.",
    prThoughtLeadership: 'Thought Leadership',
    prThoughtLeadershipDesc: 'Position your executives as industry experts through strategic content and speaking opportunities.',
    prBrandStorytelling: 'Brand Storytelling',
    prBrandStorytellingDesc: 'Craft compelling narratives that resonate with your audience and differentiate your brand.',
    prCtaTitle: 'Ready to Make Headlines?',
    prCtaDesc: "From startup launches to Fortune 500 reputation management, we've got the expertise to amplify your voice in the global conversation.",
    prCtaButton: "Let's Talk Strategy",

    smmPageDesc: "Social media isn't just about posting—it's about creating movements. We craft digital experiences that turn passive scrollers into passionate brand advocates. From viral content to community building, we make your brand the conversation starter.",
    smmContentCreation: 'Content Creation',
    smmContentCreationDesc: 'Visually stunning, scroll-stopping content that captures attention and drives engagement across all platforms.',
    smmStrategyAnalytics: 'Strategy & Analytics',
    smmStrategyAnalyticsDesc: 'Data-driven strategies that maximize ROI and turn followers into loyal customers with measurable results.',
    smmCommunityMgmt: 'Community Management',
    smmCommunityMgmtDesc: 'Build authentic relationships with your audience through meaningful conversations and community building.',
    smmPaidSocial: 'Paid Social Campaigns',
    smmPaidSocialDesc: 'Targeted advertising campaigns that reach the right audience at the right moment with precision.',
    smmCtaTitle: 'Ready to Go Viral?',
    smmCtaDesc: 'From Instagram stories to TikTok trends, we know what makes content shareable and brands unforgettable.',
    smmCtaButton: "Let's Create Together",

    imPageDesc: "In the age of authentic connections, influencer marketing isn't just about follower counts—it's about finding voices that truly resonate. We match your brand with creators who don't just promote; they advocate, inspire, and convert their communities into your customers.",
    imCreatorMatching: 'Creator Matching',
    imCreatorMatchingDesc: 'From nano to mega influencers, we connect you with authentic voices that resonate with your target audience.',
    imCampaignStrategy: 'Campaign Strategy',
    imCampaignStrategyDesc: 'Data-driven influencer strategies that maximize reach, engagement, and conversion rates across all platforms.',
    imRelationshipMgmt: 'Relationship Management',
    imRelationshipMgmtDesc: 'Long-term creator partnerships that build authentic brand advocacy and sustainable growth.',
    imPerformanceTracking: 'Performance Tracking',
    imPerformanceTrackingDesc: 'Real-time analytics and ROI measurement to ensure every collaboration delivers measurable results.',
    imCtaTitle: 'Ready to Amplify Your Voice?',
    imCtaDesc: 'From micro-moments to viral campaigns, we create influencer partnerships that drive real business results.',
    imCtaButton: 'Find Your Voices',

    bdPageDesc: "Your brand is more than a logo—it's a living, breathing entity that connects with hearts and minds. We craft compelling brand identities that don't just look good, but feel right, resonate deeply, and drive sustainable growth in competitive markets.",
    bdVisualIdentity: 'Visual Identity',
    bdVisualIdentityDesc: "Stunning visual systems that capture your brand's essence and create instant recognition across all touchpoints.",
    bdBrandMessaging: 'Brand Messaging',
    bdBrandMessagingDesc: 'Compelling narratives and tone of voice that connect emotionally with your audience and differentiate you from competitors.',
    bdBrandPositioning: 'Brand Positioning',
    bdBrandPositioningDesc: 'Strategic positioning that places your brand exactly where it needs to be in the minds of your target market.',
    bdBrandStrategy: 'Brand Strategy',
    bdBrandStrategyDesc: 'Comprehensive roadmaps that guide every brand decision and ensure consistent growth and evolution.',
    bdCtaTitle: 'Ready to Build Something Remarkable?',
    bdCtaDesc: 'From startups finding their voice to established brands evolving for the future—we create identities that last.',
    bdCtaButton: 'Build Your Brand',

    lcPageDesc: "First impressions are everything. Whether you're launching a product, service, or entire brand, we create bold, strategic campaigns that don't just announce—they disrupt, captivate, and convert. We turn launches into movements that people can't ignore.",
    lcPreLaunch: 'Pre-Launch Strategy',
    lcPreLaunchDesc: 'Build anticipation and buzz before your launch with strategic teasers, influencer partnerships, and media outreach.',
    lcOrchestration: 'Launch Orchestration',
    lcOrchestrationDesc: 'Perfectly timed, multi-channel campaigns that maximize impact and ensure your launch makes headlines.',
    lcAudienceTargeting: 'Audience Targeting',
    lcAudienceTargetingDesc: 'Precision targeting that reaches your ideal customers at exactly the right moment with the perfect message.',
    lcPostLaunch: 'Post-Launch Momentum',
    lcPostLaunchDesc: 'Sustain the excitement with ongoing campaigns that turn initial buzz into lasting brand loyalty and growth.',
    lcCtaTitle: 'Ready to Launch Into Success?',
    lcCtaDesc: 'From stealth mode to worldwide attention—we make sure your launch creates the impact it deserves.',
    lcCtaButton: 'Launch with Impact',

    scPageDesc: "Sometimes you need to step back to move forward. Our strategic consulting provides the big-picture thinking and tactical guidance to navigate complex challenges, seize emerging opportunities, and position your brand for sustainable growth in an ever-evolving marketplace.",
    scDirection: 'Strategic Direction',
    scDirectionDesc: 'Clear roadmaps and actionable strategies that align your communications with your business objectives and market opportunities.',
    scMarketAnalysis: 'Market Analysis',
    scMarketAnalysisDesc: 'Deep market insights and competitive intelligence that inform smarter decisions and reveal untapped opportunities.',
    scStakeholder: 'Stakeholder Mapping',
    scStakeholderDesc: 'Comprehensive stakeholder analysis to identify key relationships and optimize your communication approach.',
    scInnovation: 'Innovation Strategy',
    scInnovationDesc: 'Forward-thinking approaches that position your brand at the forefront of industry trends and emerging markets.',
    scCtaTitle: 'Ready to Think Bigger?',
    scCtaDesc: 'From startup pivots to corporate transformations—we provide the strategic clarity you need to win.',
    scCtaButton: 'Chart Your Course',

    // NotFound
    pageNotFound: 'Oops! Page not found',
    returnToHome: 'Return to Home',

    // Chatbot
    chatbotGreeting: "Hi! I'm Ask Comms, your CosmoComms PR assistant. I'm here to help you with questions about our services, expertise, and how we can help your brand shine. What would you like to know?",
    askComms: 'Ask Comms',
    chatbotTitle: 'Ask Comms - Your PR Assistant',
    chatbotPlaceholder: 'Ask about our services...',
  },
  ar: {
    // Header
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    contact: 'تواصل معنا',
    blog: 'المدونة',
    letsTalk: 'لنتحدث',
    
    // Hero
    tagline: 'اتصالات الجيل الجديد',
    heroLine1: 'نصنع',
    heroLine3: 'ذات معنى',
    title: 'مرحباً بكم في كوزمو كومز للعلاقات العامة',
    subtitle: 'رؤية عالمية. جذور دبي.',
    heroDescription: 'نحن نعيد كتابة قواعد العلاقات العامة. وُلدنا في دبي وبُنينا للجريئين، نحن وكالة اتصالات من الجيل الجديد تمزج بين التفكير الاستراتيجي والحدس الثقافي والابتكار الرقمي والإبداع الجريء.',
    ourWork: 'أعمالنا',
    globalReach: 'انتشار عالمي',
    dubaiBased: 'مقرها دبي',
    futureReady: 'جاهز للمستقبل',
    
    // About
    aboutTitle: 'نحن كوزمو كومز',
    aboutSubtitle: 'وكالة علاقات عامة للحاضر.',
    aboutText1: 'في عالم يعتبر فيه الانتباه عملة، نساعد العلامات التجارية على اختراق الضوضاء. تأسست كوزمو كومز للعلاقات العامة بمهمة واحدة: تمكين العلامات التجارية من أن تُرى وتُسمع وتُذكر في المشهد المتطور باستمرار اليوم.',
    aboutText2: 'مقرنا الرئيسي في دبي، نعمل عبر الصناعات - من الجمال إلى التكنولوجيا، العقارات إلى التجزئة - نقدم استراتيجيات اتصال مخصصة تثير المحادثة وتحقق التأثير.',
    aboutQuote: 'نحن الفريق الذي تتصل به عندما تكون مستعداً لأن تُلاحظ. ليس فقط لما تفعله، ولكن لمن أنت.',
    strategicFocus: 'تركيز استراتيجي',
    strategicFocusText: 'كل حملة مبنية على تفكير استراتيجي عميق وبصيرة ثقافية.',
    creativeInnovation: 'ابتكار إبداعي',
    creativeInnovationText: 'نمزج الابتكار الرقمي مع الإبداع الجريء لاختراق الحواجز.',
    culturalIntuition: 'حدس ثقافي',
    culturalIntuitionText: 'جذور دبي تمنحنا منظوراً ثقافياً فريداً للاتصالات العالمية.',
    
    // Services
    servicesTitle: 'علاقات عامة. لكن اجعلها جاهزة للمستقبل.',
    servicesDescription: 'لا نؤمن بالحملات المقولبة. كل علامة تجارية فريدة، وكذلك نهجنا. تم تصميم مجموعة خدماتنا لتضخيم صوتك في عالم يتغير باستمرار.',
    publicRelations: 'العلاقات العامة',
    publicRelationsDesc: 'تغطية صحفية وعلاقات إعلامية وقيادة فكرية تضعك حيث يراقب العالم.',
    socialMediaMarketing: 'التسويق عبر وسائل التواصل الاجتماعي',
    socialMediaMarketingDesc: 'محتوى يوقف التمرير، واستراتيجية وإدارة تبني المجتمعات وتعزز التفاعل.',
    influencerMarketing: 'التسويق عبر المؤثرين',
    influencerMarketingDesc: 'من النانو إلى الميجا، نربط علامتك التجارية بمبدعين موثوقين يحققون التحويلات.',
    brandDevelopment: 'تطوير العلامة التجارية',
    brandDevelopmentDesc: 'رسائل وهوية وسرد قصصي يلتقط جوهر علامتك التجارية ويغذي النمو.',
    launchCampaigns: 'حملات الإطلاق',
    launchCampaignsDesc: 'سواء كان منتجاً أو علامة تجارية أو فكرة — نصمم إطلاقات جريئة تتصدر العناوين.',
    strategicConsulting: 'الاستشارات الاستراتيجية',
    strategicConsultingDesc: 'توجيه شامل للعلامات التجارية المستعدة للتطور أو التحول أو النمو السريع.',
    industriesWeServe: 'الصناعات التي نخدمها',
    noLimits: 'لا حدود. فقط إمكانيات.',
    learnMore: 'اعرف المزيد',
    backToServices: 'العودة إلى الخدمات',
    
    // Industries
    beauty: 'الجمال',
    fashion: 'الأزياء',
    realEstate: 'العقارات',
    tech: 'التكنولوجيا',
    wellness: 'العافية',
    hospitality: 'الضيافة',
    retail: 'التجزئة',
    
    // Why Us
    whyUsTitle: 'لماذا كوزمو كومز؟',
    whyUsSubtitle: 'لأن العالم لا يحتاج إلى المزيد من الضجيج. إنه يحتاج إلى المزيد من المعنى.',
    industryKnowledge: 'معرفة الصناعة ومحتوى المدونة',
    industryKnowledgeText: 'ابق في صدارة المنحنى مع رؤى من خبراء العلاقات العامة لدينا. تغطي مدونتنا أحدث الاتجاهات والاستراتيجيات والنصائح الداخلية عبر الصناعات.',
    reason1: 'مقرنا دبي، ورؤيتنا عالمية',
    reason2: 'نخدم جميع الصناعات ونركز على التأثير',
    reason3: 'متجذرون في الثقافة، مدعومون بالابتكار',
    reason4: 'بقيادة مفكري علاقات عامة من الجيل الجديد',
    reason5: 'رشيقون، جريئون، ودائماً في المقدمة',
    
    // Instagram
    followOurJourney: 'تابع رحلتنا',
    behindTheScenes: 'وراء',
    scenes: 'الكواليس',
    instagramDescription: 'احصل على نصائح في العلاقات العامة ورؤى صناعية ونظرة خاطفة على عمليتنا الإبداعية على إنستغرام',
    followUs: 'تابعنا',
    
    // Contact
    contactInfo: 'معلومات الاتصال',
    contactTitle: 'لنعمل معاً',
    contactDescription: 'سواء كنت مؤسساً ذا رؤية، أو شركة نامية، أو علامة تجارية راسخة تبحث عن منظور جديد، فإن كوزمو كومز للعلاقات العامة هنا لمساعدتك على الارتقاء.',
    getStarted: 'ابدأ اليوم',
    emailUs: 'راسلنا',
    callUs: 'اتصل بنا',
    basedIn: 'مقرنا في',
    basedInDubai: 'مقرنا في دبي',
    whereInnovation: 'حيث يلتقي الابتكار بالتقاليد',
    openToWorld: 'منفتحون على العالم',
    globalInsight: 'انتشار عالمي، رؤية محلية',
    startYourStory: 'ابدأ قصتك',
    letsCreateNext: 'لنصنع ما هو قادم',
    startYourStoryWithUs: 'ابدأ قصتك معنا',
    globalReachTitle: 'انتشار عالمي',
    worldwideServices: 'خدمات عالمية',
    
    // Blog
    industryInsights: 'معرفة الصناعة والرؤى',
    prInsights: 'رؤى العلاقات العامة و',
    industryTrends: 'اتجاهات الصناعة',
    blogDescription: 'ابق في صدارة المنحنى مع رؤى من خبراء العلاقات العامة لدينا. أحدث الاتجاهات والاستراتيجيات والنصائح الداخلية عبر الصناعات.',
    readMore: 'اقرأ المزيد',
    wantToContribute: 'هل تريد المساهمة أو اقتراح موضوع؟',
    getInTouch: 'تواصل معنا',
    
    // Footer
    copyright: '© ٢٠٢٦ كوزمو كومز للعلاقات العامة. جميع الحقوق محفوظة. مبني للجريئين.',
    quickLinks: 'روابط سريعة',
    
    // Startup PR Kit (structured translations)
    startup: {
      hero: {
        label: 'دليل العلاقات العامة',
        h1: 'علامتك التجارية تستحق\nالأضواء.',
        subtitle: 'باقات علاقات عامة استراتيجية لكل مرحلة من مراحل النمو',
        introText: 'سواء كنت تُطلق مشروعك أو تتوسع أو تسيطر على سوقك — لدينا باقة علاقات عامة مصممة لك. لا حملات نمطية. فقط استراتيجية تركز على النتائج.',
        ctaPrimary: 'اعرض باقاتنا',
        ctaSecondary: 'تحدث معنا'
      },
      solution: {
        title: 'دليل كوزمو كومز للعلاقات العامة',
        subtitle: 'باقات مصممة لتناسب مرحلة وطموحات علامتك التجارية'
      },
      pricingPlans: [
        {
          id: 'kickstarter',
          name: 'البداية السريعة',
          subtitle: 'مشروع لمرة واحدة',
          description: 'اجعل حضورك مؤثراً من خلال حدث إخباري واحد لتوليد رؤية فورية وضجة في وسائل الإعلام.',
          features: ['بيان صحفي', 'توزيع مستهدف', 'علاقات إعلامية', 'المراقبة والاستخبارات', 'تقارير'],
          ideal: 'الشركات الناشئة، إطلاق المنتجات، أو العلامات التجارية التي تقدم إعلاناً رئيسياً واحداً',
          cta: 'ابدأ الآن'
        },
        {
          id: 'momentum',
          name: 'الزخم',
          subtitle: 'الباقة المتوسطة',
          popular: true,
          description: 'نمو مستمر مع رؤية متسقة - مثالي للشركات الصغيرة والمتوسطة غير المستعدة لعملية غرفة أخبار مؤسسية كاملة.',
          features: ['كل شيء من باقة البداية السريعة', 'تدفق أخبار مستمر', 'علاقات إعلامية تفاعلية', 'محتوى أساسي', 'تتبع الأداء', 'إدارة الحساب'],
          ideal: 'الشركات الصغيرة والمتوسطة أو العلامات التجارية النامية التي تحتاج إلى رؤية متسقة',
          cta: 'ابنِ الزخم'
        },
        {
          id: 'authority',
          name: 'السلطة',
          subtitle: 'اشتراك شامل',
          description: 'شراكتنا الرائدة والشاملة. نعمل كمكتبك الصحفي الداخلي، وندير أخبارك وسمعتك ورسائلك وملفك التنفيذي.',
          features: [
            'كل شيء من باقة الزخم',
            'بيان صحفي شهري وتوزيع',
            'قيادة فكرية (مقابلة/مقال رأي)',
            'تعليق صناعي وعروض',
            'فرص شراكات استراتيجية',
            'تقديم طلبات الجوائز',
            'مكالمات حالة أسبوعية واستشارات',
            'مراقبة إعلامية يومية وتقارير',
            'تواصل عضوي استباقي',
            'بيت الرسائل والتقويم التحريري',
            'أدوات مؤسسية (سير ذاتية، خلفيات، أسئلة شائعة)',
            'دعم إعلامي تنفيذي وإحاطات',
            'محتوى طويل (خطابات، مقالات رأي)'
          ],
          ideal: 'العلامات التجارية الراسخة التي تسعى للهيمنة على السوق والقيادة الفكرية (عقد 3 أو 6 أشهر)',
          cta: 'قدّم طلب'
        }
      ],
      faqs: [
        {
          question: 'لمن هذا موجه؟',
          answer: 'مؤسسو الشركات الناشئة، الشركات الصغيرة والمتوسطة، الأعمال النامية، والعلامات التجارية الراسخة التي تريد علاقات عامة استراتيجية وتغطية إعلامية مصممة لمرحلتها وأهدافها.'
        },
        {
          question: 'ليس لدي خبرة في العلاقات العامة. هل يمكنكم المساعدة؟',
          answer: 'بالتأكيد. هذا بالضبط سبب وجودنا. نتولى كل شيء من الاستراتيجية إلى التنفيذ، حتى تتمكن من التركيز على إدارة عملك.'
        },
        {
          question: 'ما الفرق بين هذا وتوظيف وكالة علاقات عامة تقليدية؟',
          answer: 'نقدم باقات مرنة ومناسبة لكل مرحلة بدلاً من عقود موحدة. تحصل على ما تحتاجه بالضبط — سواء كان إطلاقاً واحداً أو شراكة علاقات عامة كاملة.'
        },
        {
          question: 'كم من الوقت سأرى النتائج؟',
          answer: 'يحصل معظم العملاء على أول ذكر إعلامي خلال 30 يوماً. تختلف الجداول الزمنية حسب صناعتك وزاوية القصة والباقة التي تختارها.'
        },
        {
          question: 'هل يمكنني ترقية باقتي لاحقاً؟',
          answer: 'بالطبع! يبدأ كثير من العملاء بباقة البداية السريعة ثم ينتقلون إلى الزخم أو السلطة مع نمو علامتهم التجارية. نجعل الانتقالات سلسة.'
        },
        {
          question: 'هل هذا مخصص لدبي/الإمارات؟',
          answer: 'بينما مقرنا في دبي ولدينا علاقات إعلامية إقليمية عميقة، تمتد استراتيجياتنا وشبكتنا عالمياً.'
        }
      ],
      ctas: {
        finalCta: 'هل أنت مستعد لتتصدر العناوين؟',
        exploreCta: 'استكشف الباقات',
        bookCall: 'احجز مكالمة استشارية مجانية لمدة 15 دقيقة',
        email: 'pranjali@cosmocommspr.com'
      }
    },

    // Service Subpages
    prPageDesc: 'في عالم اليوم شديد الترابط، سمعتك هي عملتك. تحول خبرتنا في العلاقات العامة العلامات التجارية إلى رواد صناعة من خلال السرد الاستراتيجي وإتقان الإعلام وبناء العلاقات الأصيلة. نحن لا ندير التصورات فحسب — بل نشكّلها.',
    prMediaRelations: 'العلاقات الإعلامية',
    prMediaRelationsDesc: 'تواصل إعلامي استراتيجي يضع قصتك أمام الصحفيين المناسبين في الوقت المناسب.',
    prCrisisManagement: 'إدارة الأزمات',
    prCrisisManagementDesc: 'استجابة سريعة واستراتيجية لحماية واستعادة سمعة علامتك التجارية عندما يهم الأمر أكثر.',
    prThoughtLeadership: 'القيادة الفكرية',
    prThoughtLeadershipDesc: 'ضع مديريك التنفيذيين كخبراء في الصناعة من خلال المحتوى الاستراتيجي وفرص التحدث.',
    prBrandStorytelling: 'سرد قصة العلامة التجارية',
    prBrandStorytellingDesc: 'صياغة روايات مقنعة تلقى صدى لدى جمهورك وتميز علامتك التجارية.',
    prCtaTitle: 'هل أنت مستعد لتتصدر العناوين؟',
    prCtaDesc: 'من إطلاق الشركات الناشئة إلى إدارة سمعة شركات فورتشن 500، لدينا الخبرة لتضخيم صوتك في المحادثة العالمية.',
    prCtaButton: 'لنتحدث عن الاستراتيجية',

    smmPageDesc: 'وسائل التواصل الاجتماعي ليست مجرد نشر — إنها إنشاء حركات. نصمم تجارب رقمية تحول المتصفحين السلبيين إلى مناصرين متحمسين للعلامة التجارية. من المحتوى الفيروسي إلى بناء المجتمع، نجعل علامتك التجارية بداية المحادثة.',
    smmContentCreation: 'إنشاء المحتوى',
    smmContentCreationDesc: 'محتوى بصري مذهل يوقف التمرير ويجذب الانتباه ويعزز التفاعل عبر جميع المنصات.',
    smmStrategyAnalytics: 'الاستراتيجية والتحليلات',
    smmStrategyAnalyticsDesc: 'استراتيجيات مدفوعة بالبيانات تزيد العائد على الاستثمار وتحول المتابعين إلى عملاء مخلصين بنتائج قابلة للقياس.',
    smmCommunityMgmt: 'إدارة المجتمع',
    smmCommunityMgmtDesc: 'بناء علاقات أصيلة مع جمهورك من خلال محادثات هادفة وبناء المجتمع.',
    smmPaidSocial: 'حملات التواصل المدفوعة',
    smmPaidSocialDesc: 'حملات إعلانية مستهدفة تصل إلى الجمهور المناسب في اللحظة المناسبة بدقة.',
    smmCtaTitle: 'هل أنت مستعد للانتشار؟',
    smmCtaDesc: 'من قصص إنستغرام إلى ترندات تيك توك، نعرف ما يجعل المحتوى قابلاً للمشاركة والعلامات التجارية لا تُنسى.',
    smmCtaButton: 'لنبدع معاً',

    imPageDesc: 'في عصر الروابط الأصيلة، التسويق عبر المؤثرين لا يتعلق فقط بأعداد المتابعين — إنه يتعلق بإيجاد أصوات تلقى صدى حقيقي. نوصل علامتك التجارية بمبدعين لا يروجون فحسب؛ بل يناصرون ويلهمون ويحولون مجتمعاتهم إلى عملائك.',
    imCreatorMatching: 'مطابقة المبدعين',
    imCreatorMatchingDesc: 'من المؤثرين النانو إلى الميجا، نوصلك بأصوات أصيلة تلقى صدى لدى جمهورك المستهدف.',
    imCampaignStrategy: 'استراتيجية الحملات',
    imCampaignStrategyDesc: 'استراتيجيات مؤثرين مدفوعة بالبيانات تزيد الوصول والتفاعل ومعدلات التحويل عبر جميع المنصات.',
    imRelationshipMgmt: 'إدارة العلاقات',
    imRelationshipMgmtDesc: 'شراكات طويلة الأمد مع المبدعين تبني مناصرة أصيلة للعلامة التجارية ونمواً مستداماً.',
    imPerformanceTracking: 'تتبع الأداء',
    imPerformanceTrackingDesc: 'تحليلات فورية وقياس العائد على الاستثمار لضمان أن كل تعاون يحقق نتائج قابلة للقياس.',
    imCtaTitle: 'هل أنت مستعد لتضخيم صوتك؟',
    imCtaDesc: 'من اللحظات الصغيرة إلى الحملات الفيروسية، ننشئ شراكات مع المؤثرين تحقق نتائج تجارية حقيقية.',
    imCtaButton: 'اعثر على أصواتك',

    bdPageDesc: 'علامتك التجارية أكثر من مجرد شعار — إنها كيان حي يتواصل مع القلوب والعقول. نصمم هويات علامات تجارية مقنعة لا تبدو جيدة فحسب، بل تبدو صحيحة وتلقى صدى عميقاً وتقود نمواً مستداماً في الأسواق التنافسية.',
    bdVisualIdentity: 'الهوية البصرية',
    bdVisualIdentityDesc: 'أنظمة بصرية مذهلة تلتقط جوهر علامتك التجارية وتخلق تعرفاً فورياً عبر جميع نقاط التماس.',
    bdBrandMessaging: 'رسائل العلامة التجارية',
    bdBrandMessagingDesc: 'روايات مقنعة ونبرة صوت تتواصل عاطفياً مع جمهورك وتميزك عن المنافسين.',
    bdBrandPositioning: 'تموضع العلامة التجارية',
    bdBrandPositioningDesc: 'تموضع استراتيجي يضع علامتك التجارية بالضبط حيث تحتاج أن تكون في أذهان سوقك المستهدف.',
    bdBrandStrategy: 'استراتيجية العلامة التجارية',
    bdBrandStrategyDesc: 'خرائط طريق شاملة توجه كل قرار للعلامة التجارية وتضمن نمواً متسقاً وتطوراً.',
    bdCtaTitle: 'هل أنت مستعد لبناء شيء استثنائي؟',
    bdCtaDesc: 'من الشركات الناشئة التي تبحث عن صوتها إلى العلامات التجارية الراسخة التي تتطور للمستقبل — ننشئ هويات تدوم.',
    bdCtaButton: 'ابنِ علامتك التجارية',

    lcPageDesc: 'الانطباعات الأولى هي كل شيء. سواء كنت تطلق منتجاً أو خدمة أو علامة تجارية بأكملها، ننشئ حملات جريئة واستراتيجية لا تعلن فحسب — بل تعطل وتأسر وتحول. نحول الإطلاقات إلى حركات لا يمكن للناس تجاهلها.',
    lcPreLaunch: 'استراتيجية ما قبل الإطلاق',
    lcPreLaunchDesc: 'بناء الترقب والضجة قبل إطلاقك من خلال إعلانات تشويقية استراتيجية وشراكات مع المؤثرين وتواصل إعلامي.',
    lcOrchestration: 'تنسيق الإطلاق',
    lcOrchestrationDesc: 'حملات متعددة القنوات بتوقيت مثالي تزيد التأثير وتضمن أن إطلاقك يتصدر العناوين.',
    lcAudienceTargeting: 'استهداف الجمهور',
    lcAudienceTargetingDesc: 'استهداف دقيق يصل إلى عملائك المثاليين في اللحظة المناسبة بالضبط مع الرسالة المثالية.',
    lcPostLaunch: 'زخم ما بعد الإطلاق',
    lcPostLaunchDesc: 'الحفاظ على الحماس بحملات مستمرة تحول الضجة الأولية إلى ولاء دائم للعلامة التجارية ونمو.',
    lcCtaTitle: 'هل أنت مستعد للإطلاق نحو النجاح؟',
    lcCtaDesc: 'من وضع التخفي إلى الاهتمام العالمي — نتأكد من أن إطلاقك يحقق التأثير الذي يستحقه.',
    lcCtaButton: 'أطلق بتأثير',

    scPageDesc: 'أحياناً تحتاج للتراجع خطوة للتقدم. توفر استشاراتنا الاستراتيجية التفكير الشامل والتوجيه التكتيكي للتنقل عبر التحديات المعقدة واغتنام الفرص الناشئة ووضع علامتك التجارية للنمو المستدام في سوق متطور باستمرار.',
    scDirection: 'التوجيه الاستراتيجي',
    scDirectionDesc: 'خرائط طريق واضحة واستراتيجيات قابلة للتنفيذ تتوافق مع اتصالاتك وأهداف عملك وفرص السوق.',
    scMarketAnalysis: 'تحليل السوق',
    scMarketAnalysisDesc: 'رؤى سوقية عميقة واستخبارات تنافسية تُسهم في اتخاذ قرارات أذكى وكشف فرص غير مستغلة.',
    scStakeholder: 'تخطيط أصحاب المصلحة',
    scStakeholderDesc: 'تحليل شامل لأصحاب المصلحة لتحديد العلاقات الرئيسية وتحسين نهج التواصل الخاص بك.',
    scInnovation: 'استراتيجية الابتكار',
    scInnovationDesc: 'نهج استشرافي يضع علامتك التجارية في طليعة اتجاهات الصناعة والأسواق الناشئة.',
    scCtaTitle: 'هل أنت مستعد للتفكير بشكل أكبر؟',
    scCtaDesc: 'من تحولات الشركات الناشئة إلى تحولات الشركات — نوفر الوضوح الاستراتيجي الذي تحتاجه للفوز.',
    scCtaButton: 'ارسم مسارك',

    // NotFound
    pageNotFound: 'عذراً! الصفحة غير موجودة',
    returnToHome: 'العودة إلى الرئيسية',

    // Chatbot
    chatbotGreeting: 'مرحباً! أنا اسأل كومز، مساعد كوزمو كومز للعلاقات العامة. أنا هنا لمساعدتك في الأسئلة حول خدماتنا وخبراتنا وكيف يمكننا مساعدة علامتك التجارية على التألق. ماذا تود أن تعرف؟',
    askComms: 'اسأل كومز',
    chatbotTitle: 'اسأل كومز - مساعدك في العلاقات العامة',
    chatbotPlaceholder: 'اسأل عن خدماتنا...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return (translations as any)[language][key as keyof typeof translations.en] || key;
  };

  const tr = (path: string): any => {
    const parts = path.split('.');
    let cur: any = (translations as any)[language];
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
        cur = cur[p];
      } else {
        return undefined;
      }
    }
    return cur;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tr }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
