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
    
    // Services
    servicesTitle: 'PR. But Make It Future-Ready.',
    servicesDescription: 'We don\'t believe in cookie-cutter campaigns. Every brand is unique, and so is our approach. Our suite of services is designed to amplify your voice in a world that\'s constantly changing.',
    
    // Why Us
    whyUsTitle: 'Why CosmoComms?',
    whyUsSubtitle: 'Because the world doesn\'t need more noise. It needs more meaning.',
    industryKnowledge: 'Industry Knowledge & Blog Content',
    industryKnowledgeText: 'Stay ahead of the curve with insights from our PR experts. Our blog covers the latest trends, strategies, and insider tips across industries.',
    
    // Startup PR Kit (structured)
    startup: {
      hero: {
        label: 'Startup PR Kit',
        h1: 'Launch Loud. Get Found.\nBuild Trust.',
        subtitle: '(Even on a Ramen Budget)',
        introHeading: 'New to PR? No problem.',
        introText: "We help startups go from invisible to inevitable—building media visibility, brand credibility, and influencer buzz. Whether you're launching from your garage or scaling from Series A, we've got your back.",
        founderMessage: "Built by a PR girl who's been there—launching with nothing but WiFi, caffeine, and pure determination.",
        ctaPrimary: 'GET INSTANT ACCESS',
        ctaSecondary: 'SEE PRICING'
      },
      problems: [
        'Your competitor just got featured in TechCrunch (again)',
        "Journalists ignore your emails like they're spam",
        "You can't afford a AED 50,000/month agency retainer",
        "Your product is amazing but nobody knows you exist",
        "You're too busy building to learn PR from scratch"
      ],
      solution: {
        title: 'Introducing the Startup PR Kit',
        subtitle: 'Your Complete PR System in a Box',
        description: 'No fluff. No theory. Just battle-tested templates, scripts, and strategies that get results.'
      },
      stats: [
        { value: '6', label: 'Complete Modules' },
        { value: '50+', label: 'Templates' },
        { value: '∞', label: 'Lifetime Updates' },
        { value: '100%', label: 'Real Examples' }
      ],
      modules: [
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
      ],
      pricingPlans: [
        {
          id: 'diy',
          name: 'DIY STARTER',
          price: 'AED 997',
          period: 'One-time payment',
          description: 'Everything you need to start',
          features: ['All 6 modules (lifetime access)', '50+ templates & scripts', 'Video walkthroughs', '30-day email support', 'Quarterly updates'],
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
          features: ['Everything in DIY Starter', '2 x 60-min strategy calls', 'Custom media list (50 contacts)', 'Press release review & editing', '90-day priority support', 'Campaign planning session'],
          ideal: 'First-time founders, product launches, seed-stage startups',
          cta: 'LEVEL UP'
        },
        {
          id: 'partner',
          name: 'PR PARTNER',
          price: 'AED 7,997/month',
          period: 'Month-to-month, cancel anytime',
          description: 'We become your PR team',
          features: ['Everything in Guided Launch', 'Weekly 30-min check-ins', '20 media pitches/month', 'Full influencer outreach', 'Crisis hotline access', 'Monthly coverage reports', 'Content creation (2 pieces)'],
          ideal: 'Funded startups, busy founders, aggressive growth mode',
          cta: 'APPLY NOW'
        }
      ],
      testimonials: [
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
      ],
      bonuses: [
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
      ],
      faqs: [
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
      ],
      ctas: {
        finalCta: 'GET THE STARTUP PR KIT NOW',
        claimCta: 'Claim Your Startup PR Kit →',
        bookCall: 'Book a free 15-minute "Is This Right for Me?" call',
        email: 'pranjali@cosmocommspr.com'
      }
    },
    
    // Contact
    contactTitle: 'Let\'s Work Together',
    contactDescription: 'Whether you\'re a visionary founder, a growing business, or an established brand looking for a fresh perspective, CosmoComms PR is here to help you elevate.',
    getStarted: 'Get Started Today',
    emailUs: 'Email Us',
    basedIn: 'Based in',
    globalReachTitle: 'Global Reach',
    worldwideServices: 'Worldwide Services',
    
    // Footer
    copyright: '© 2025 CosmoComms PR. All rights reserved. Built for the bold.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
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
    
    // Services
    servicesTitle: 'علاقات عامة. لكن اجعلها جاهزة للمستقبل.',
    servicesDescription: 'لا نؤمن بالحملات المقولبة. كل علامة تجارية فريدة، وكذلك نهجنا. تم تصميم مجموعة خدماتنا لتضخيم صوتك في عالم يتغير باستمرار.',
    
    // Why Us
    whyUsTitle: 'لماذا كوزمو كومز؟',
    whyUsSubtitle: 'لأن العالم لا يحتاج إلى المزيد من الضجيج. إنه يحتاج إلى المزيد من المعنى.',
    industryKnowledge: 'معرفة الصناعة ومحتوى المدونة',
    industryKnowledgeText: 'ابق في صدارة المنحنى مع رؤى من خبراء العلاقات العامة لدينا. تغطي مدونتنا أحدث الاتجاهات والاستراتيجيات والنصائح الداخلية عبر الصناعات.',
    
    // Startup PR Kit (structured translations)
    startup: {
      hero: {
        label: 'مجموعة العلاقات العامة للشركات الناشئة',
        h1: 'انطلق بصوتٍ عالٍ. اجعلهم يجدونك.\nاكتسب الثقة.',
        subtitle: '(حتى بميزانية رمين)',
        introHeading: 'جديد في العلاقات العامة؟ لا مشكلة.',
        introText: 'نساعد الشركات الناشئة على الانتقال من غير مرئي إلى حتمي — بناء رؤية إعلامية ومصداقية العلامة التجارية وضجة المؤثرين. سواء كنتم تطلقون من المرآب أو تتوسعون، نحن هنا لمساعدتكم.',
        founderMessage: 'بُنيت بواسطة فتاة علاقات عامة كانت هناك — انطلقت مع واي فاي وقهوة وإصرار.',
        ctaPrimary: 'احصل على الوصول الفوري',
        ctaSecondary: 'عرض الأسعار'
      },
      problems: [
        'حصل منافسك على تغطية في TechCrunch (مرة أخرى)',
        'الصحفيون يتجاهلون رسائلك كما لو كانت سبام',
        'لا يمكنك تحمل أتعاب وكالة بقيمة AED 50,000/شهرياً',
        'منتجك رائع لكن لا أحد يعرفك',
        'أنت مشغول جداً بالبناء لتعلم العلاقات العامة من الصفر'
      ],
      solution: {
        title: 'نقدّم مجموعة العلاقات العامة للشركات الناشئة',
        subtitle: 'نظام العلاقات العامة الكامل في صندوق واحد',
        description: 'لا فلسفة. لا نظرية. فقط قوالب مجربة وسيناريوهات واستراتيجيات تعطي نتائج.'
      },
      stats: [
        { value: '6', label: 'وحدات كاملة' },
        { value: '50+', label: 'قوالب' },
        { value: '∞', label: 'تحديثات مدى الحياة' },
        { value: '100%', label: 'أمثلة حقيقية' }
      ],
      modules: [
        {
          title: 'الوحدة 1: إطار العمل المغناطيسي للإعلام™',
          subtitle: 'خريطة قصتك للعناوين',
          features: [
            'محدد الزاوية: اكتشف زاوية قصتك الفريدة خلال 20 دقيقة',
            '5 قوالب للبيانات الصحفية: إطلاق منتج، تمويل، إنجاز، شراكة، جائزة',
            'منشئ قصة المؤسس: أنشئ سيرة ذاتية تستحق ويكيبيديا',
            'مولد الجملة الواحدة: اصنع شعاراً لا يُنسى',
            'مكافأة: 10 بيانات صحفية حقيقية حصلت على تغطية'
          ]
        },
        {
          title: 'الوحدة 2: كتاب الصحفي الأسود',
          subtitle: 'تخطى صندوق الرسائل الوارد',
          features: [
            'أكثر من 100 جهة اتصال إعلامية: صحفيون في التكنولوجيا والأعمال من الإمارات والعالم',
            'صيغة البريد الإلكتروني الذهبية: قوالب بمعدل فتح 73%',
            'إطار المتابعة: تسلسل 3 لمسات يحصل على ردود',
            'ملف خطوط الموضوع: 50 عنواناً ناجحاً',
            'دليل التوقيت: أفضل الساعات/الأيام لكل منطقة'
          ]
        },
        {
          title: 'الوحدة 3: منشئ الضجة بدون ميزانية',
          subtitle: 'حيل العلاقات العامة التي لا تكلف شيئاً',
          features: [
            '15 تكتيك علاقات عامة مجاني: من انتهاز الأحداث إلى الركوب على الترند',
            'طريقة اقتحام الفعاليات: استغلال أضواء الآخرين بأخلاقية',
            'مضخم إطلاق المنتج: حوّل الإصدارات إلى أحداث إعلامية',
            'عدة خلق FOMO: ابني الإلحاح دون السبيل السيئ',
            'دليل شراكات العلاقات العامة: ضاعف وصولك عبر التعاون'
          ]
        },
        {
          title: 'الوحدة 4: دليل تفعيل المؤثرين',
          subtitle: 'عندما لا تستطيع تحمل الكارداشيانات',
          features: [
            'محدد المؤثرين الصغار: حدد سفراءك المثاليين',
            'مخطط المقايضة: تبادل المنتج مقابل الترويج',
            'نصوص DM التي تعمل: احصل على معدل استجابة 40%',
            'عقود التعاون: احمِ نفسك قانونياً',
            'ورقة تتبع العائد: قِس الأثر بدون أدوات مكلفة'
          ]
        },
        {
          title: 'الوحدة 5: خطة منع الأزمات',
          subtitle: 'قبل أن تنحرف الأمور',
          features: [
            '5 سيناريوهات أزمة للشركات الناشئة: مراجعات سيئة، تأخيرات، تحوّلات، تسريحات، جدالات',
            'قوالب بيانات الطوارئ: جاهزة للتعديل',
            'إطار الاعتذار: اعتذر دون مسؤولية قانونية',
            'خريطة استعادة السمعة: انهض أقوى',
            'بروتوكول الاستجابة 24 ساعة'
          ]
        },
        {
          title: 'الوحدة 6: لوحة القياسات التي تهم',
          subtitle: 'أثبت أن العلاقات العامة تعمل',
          features: [
            'إعداد أدوات تتبع مجانية: راقب التغطية بدون أدوات مدفوعة',
            'مؤشرات جاهزة للمستثمر: 5 مقاييس يهتم بها المستثمرون',
            'قوالب التقارير: أظهر بمظهر احترافي خلال دقائق',
            'حاسبة العائد: أظهر أثر الأعمال الحقيقي',
            'شريحة العلاقات العامة في العرض التقديمي للمستثمر'
          ]
        }
      ],
      pricingPlans: [
        {
          id: 'diy',
          name: 'خطة DIY',
          price: 'AED 997',
          period: 'دفعة واحدة',
          description: 'كل ما تحتاجه للبدء',
          features: ['جميع الوحدات الست (وصول دائم)', 'أكثر من 50 قالباً ونصاً', 'دروس فيديو مفصلة', 'دعم عبر البريد لمدة 30 يوماً', 'تحديثات ربع سنوية'],
          ideal: 'المؤسسون الممولون ذاتياً، الرياديون المنفردون، الشركات قبل التمويل',
          cta: 'ابدأ الآن'
        },
        {
          id: 'guided',
          name: 'إطلاق موجه',
          price: 'AED 2,997',
          period: 'دفعة واحدة',
          popular: true,
          description: 'خطة DIY بالإضافة إلى مساعدة عملية',
          features: ['كل ما في DIY', 'مكالمتان استراتيجيتان لمدة 60 دقيقة', 'قائمة إعلامية مخصصة (50 جهة اتصال)', 'مراجعة وتحرير البيان الصحفي', 'دعم أولوية لمدة 90 يوماً', 'جلسة تخطيط الحملة'],
          ideal: 'المؤسسون الجدد، إطلاق المنتجات، الشركات في مرحلة البذرة',
          cta: 'ارتقِ'
        },
        {
          id: 'partner',
          name: 'شريك العلاقات العامة',
          price: 'AED 7,997/month',
          period: 'شهري، إلغاء في أي وقت',
          description: 'نصبح فريق العلاقات العامة الخاص بك',
          features: ['كل ما في الإطلاق الموجه', 'اجتماعات أسبوعية 30 دقيقة', '20 عرض إعلامي/الشهر', 'التواصل مع المؤثرين الكامل', 'خط أزمة متاح', 'تقارير تغطية شهرية', 'إنشاء محتوى (قطعتان)'],
          ideal: 'الشركات الممولة، المؤسسون المشغولون، وضع نمو عدواني',
          cta: 'قدّم طلب'
        }
      ],
      testimonials: [
        {
          quote: 'من مجهول إلى TechCrunch في 30 يوماً',
          text: 'القوالب وفّرت لي 100 ساعة. تم نقل إعلاننا للسلسلة A إلى 5 منصات رئيسية.',
          author: 'سارة تشن',
          role: 'المؤسس @ FinFlow',
          featured: 'TechCrunch, Forbes Middle East, Wamda'
        },
        {
          quote: '50,000 ظهور من بيان صحفي واحد',
          text: 'لم أستطع تحمل تكلفة وكالة. هذه المجموعة أعطتنا تغطية أكثر من شركات بميزانيات ضخمة.',
          author: 'أحمد الراشد',
          role: 'المدير التنفيذي @ Souq Local',
          featured: 'Arabian Business, Entrepreneur ME, Gulf News'
        },
        {
          quote: 'أغلقنا جولة البذرة بعد الظهور',
          text: 'بدأ المستثمرون بالتواصل بعد ظهورنا في Entrepreneur Middle East. أفضل عائد على الاستثمار.',
          author: 'ماريا سانتوس',
          role: 'المؤسس المشارك @ EdTech Plus',
          raised: 'جمعت: AED 3.6M جولة بذرة'
        }
      ],
      bonuses: [
        {
          title: 'قائمة وسائل الإعلام في دبي',
          value: 'AED 497',
          features: ['أكثر من 200 جهة اتصال صحفية في الإمارات', 'دليل المنشورات الإقليمي', 'قوالب باللغة العربية']
        },
        {
          title: 'تقويم فعاليات الشركات الناشئة',
          value: 'AED 297',
          features: ['تقويم فرص العلاقات العامة لمدة 12 شهراً', 'أهم فعاليات دبي/الإمارات التكنولوجية', 'متعقب فرص التحدث']
        },
        {
          title: 'أدوات علاقات المستثمرين',
          value: 'AED 397',
          features: ['قوالب إعلانات التمويل', 'صيغ تحديث المستثمر', 'دليل تواصل أصحاب المصلحة']
        }
      ],
      faqs: [
        {
          question: 'لمن هذا موجه؟',
          answer: 'مؤسسو الشركات الناشئة، فرق التسويق، والرواد الذين يريدون تغطية إعلامية بدون توظيف وكالة مكلفة. إذا يمكنك اتباع وصفة، يمكنك القيام بالعلاقات العامة باستخدام مجموعتنا.'
        },
        {
          question: 'ليس لدي خبرة في العلاقات العامة. هل سينجح ذلك؟',
          answer: 'بالتأكيد. كل شيء خطوة بخطوة مع أمثلة وقوالب ودروس فيديو. نفترض أنك تبدأ من الصفر.'
        },
        {
          question: 'ما الفرق بين هذا وتوظيف وكالة؟',
          answer: 'الوكالات في دبي تتقاضى AED 20,000-50,000/شهرياً وتقوم بالعمل نيابة عنك. نحن نعلمك النظام حتى تتمكن أنت من القيام به بنفسك أو تدريب شخص في فريقك بتكلفة أقل.'
        },
        {
          question: 'ماذا لو كان منتجي مملًا؟',
          answer: 'كل منتج يحل مشكلة. المشاكل هي قصص. القصص تحصل على تغطية. سنساعدك في العثور على زاويتك — حتى لو كنت تبيع برنامج محاسبة B2B.'
        },
        {
          question: 'كم من الوقت سأرى النتائج؟',
          answer: 'يحصل معظم المستخدمين على أول ذكر إعلامي خلال 30 يوماً من تنفيذ النظام. يعتمد الوقت على صناعتك ومستوى الجهد.'
        },
        {
          question: 'هل هذا مخصص لدبي/الإمارات؟',
          answer: 'بينما ندرج موارد محددة لدبي/الإمارات، تعمل الاستراتيجيات عالمياً. تحصل على تكتيكات إقليمية ودولية.'
        }
      ],
      ctas: {
        finalCta: 'احصل على مجموعة العلاقات العامة للشركات الناشئة الآن',
        claimCta: 'اطلب مجموعتك الآن →',
        bookCall: 'احجز مكالمة مجانية لمدة 15 دقيقة',
        email: 'pranjali@cosmocommspr.com'
      }
    },
    
    // Contact
    contactTitle: 'لنعمل معاً',
    contactDescription: 'سواء كنت مؤسساً ذا رؤية، أو شركة نامية، أو علامة تجارية راسخة تبحث عن منظور جديد، فإن كوزمو كومز للعلاقات العامة هنا لمساعدتك على الارتقاء.',
    getStarted: 'ابدأ اليوم',
    emailUs: 'راسلنا',
    basedIn: 'مقرنا في',
    globalReachTitle: 'انتشار عالمي',
    worldwideServices: 'خدمات عالمية',
    
    // Footer
    copyright: '© ٢٠٢٥ كوزمو كومز للعلاقات العامة. جميع الحقوق محفوظة. مبني للجريئين.',
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
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
