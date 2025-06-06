
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, Bot, User, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isSearching?: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Ask Comms, your CosmoComms PR assistant. I'm here to help you with questions about our services, expertise, and how we can help your brand shine. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const performGoogleSearch = async (query: string): Promise<string> => {
    try {
      // This is a mock implementation. In a real scenario, you'd need a backend service
      // or use a search API like Google Custom Search API or Perplexity API
      const searchQuery = `${query} CosmoComms PR Dubai communications services`;
      
      // Simulated search results based on common service queries
      const serviceKeywords = {
        'public relations': 'CosmoComms PR provides comprehensive public relations services including media relations, crisis management, thought leadership positioning, and strategic brand storytelling. Based in Dubai with global reach, we help brands build credibility and visibility through strategic media coverage and reputation management.',
        'social media': 'Our social media marketing services include content creation, community management, paid social campaigns, and influencer partnerships. We create scroll-stopping content that builds engaged communities and drives measurable results across Instagram, LinkedIn, TikTok, and other platforms.',
        'influencer marketing': 'CosmoComms connects brands with authentic creators from nano to mega influencers. Our influencer marketing services include creator matching, campaign strategy, relationship management, and performance tracking to ensure maximum ROI and authentic brand advocacy.',
        'brand development': 'Our brand development services encompass visual identity design, messaging strategy, brand positioning, and comprehensive brand guidelines. We help brands find their unique voice and create compelling narratives that resonate with target audiences.',
        'launch campaigns': 'We design bold launch campaigns for products, services, and brands that generate buzz and drive results. Our launch strategies include pre-launch anticipation building, coordinated multi-channel campaigns, and post-launch momentum sustainment.',
        'strategic consulting': 'Our strategic consulting provides big-picture guidance for brands navigating complex challenges. We offer market analysis, competitive intelligence, stakeholder mapping, and innovation strategies to position brands for sustainable growth.'
      };

      // Find relevant information based on keywords
      for (const [keyword, info] of Object.entries(serviceKeywords)) {
        if (query.toLowerCase().includes(keyword)) {
          return info;
        }
      }

      return "Based on my research, CosmoComms PR is a Dubai-based communications agency offering comprehensive PR and marketing services. We specialize in helping brands create meaningful connections through strategic storytelling, media relations, and innovative marketing approaches.";
    } catch (error) {
      return "I'm having trouble accessing search results right now, but I can help you with information about our services directly.";
    }
  };

  const getBotResponse = async (userMessage: string): Promise<string> => {
    const message = userMessage.toLowerCase();
    
    // Check if this is a service-related query that needs research
    const serviceQueries = ['how does', 'what is the process', 'best practices', 'latest trends', 'industry insights', 'market research'];
    const serviceTopics = ['public relations', 'social media', 'influencer marketing', 'brand development', 'launch campaigns', 'strategic consulting', 'pr', 'marketing', 'communications'];
    
    const needsResearch = serviceQueries.some(query => message.includes(query)) && 
                         serviceTopics.some(topic => message.includes(topic));

    if (needsResearch) {
      // Add a searching message
      const searchingMessage: Message = {
        id: Date.now().toString(),
        content: "🔍 Searching for the latest insights...",
        sender: 'bot',
        timestamp: new Date(),
        isSearching: true
      };
      setMessages(prev => [...prev, searchingMessage]);

      // Perform search and get enhanced response
      const searchResults = await performGoogleSearch(userMessage);
      
      // Remove searching message and add real response
      setTimeout(() => {
        setMessages(prev => prev.filter(msg => !msg.isSearching));
      }, 1500);

      return `Based on current industry research and our expertise: ${searchResults}`;
    }
    
    // Service-related responses
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive PR and communications services including Public Relations, Social Media Marketing, Influencer Marketing, Brand Development, Launch Campaigns, and Strategic Consulting. Each service is tailored to help your brand break through the noise and create meaningful connections.";
    }
    
    if (message.includes('public relations') || message.includes('pr')) {
      return "Our Public Relations service includes media relations, crisis management, thought leadership, and brand storytelling. We help you get featured in top publications and build credibility that drives business growth.";
    }
    
    if (message.includes('social media')) {
      return "Our Social Media Marketing creates scroll-stopping content and builds engaged communities. We handle strategy, content creation, community management, and paid social campaigns across all major platforms.";
    }
    
    if (message.includes('influencer')) {
      return "Our Influencer Marketing connects you with authentic creators who truly resonate with your audience. From nano-influencers to mega-celebrities, we match you with voices that convert followers into customers.";
    }
    
    if (message.includes('brand development') || message.includes('branding')) {
      return "Brand Development is where your story comes alive. We craft messaging, visual identity, and storytelling strategies that capture your brand's essence and fuel sustainable growth.";
    }
    
    if (message.includes('launch') || message.includes('campaign')) {
      return "Our Launch Campaigns are designed to make headlines. Whether it's a product, service, or entire brand launch, we create bold, strategic campaigns that generate buzz and drive results.";
    }
    
    if (message.includes('consulting') || message.includes('strategy')) {
      return "Strategic Consulting offers big-picture guidance for brands ready to evolve. We provide actionable insights for pivoting, scaling, or entering new markets with confidence.";
    }
    
    if (message.includes('dubai') || message.includes('location') || message.includes('where')) {
      return "We're proudly based in Dubai, UAE, but we work with clients globally. Our Dubai roots give us unique insights into Middle Eastern markets while our global perspective helps brands succeed worldwide.";
    }
    
    if (message.includes('industry') || message.includes('sector')) {
      return "We work across multiple industries including Beauty, Fashion, Real Estate, Tech, Wellness, Hospitality, and Retail. Our approach is industry-agnostic because great storytelling transcends sectors.";
    }
    
    if (message.includes('contact') || message.includes('reach out') || message.includes('get in touch')) {
      return "You can reach us at hello@cosmocommspr.com or visit our Contact page to start a conversation about your brand's potential. We'd love to hear your story!";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return "Our pricing is customized based on your specific needs, goals, and scope of work. Each brand is unique, so we create tailored proposals. Contact us for a personalized quote that fits your objectives.";
    }
    
    // Non-service related responses
    if (message.includes('weather') || message.includes('news') || message.includes('sports') || 
        message.includes('food') || message.includes('travel') || message.includes('movie') ||
        message.includes('music') || message.includes('game')) {
      return "I'm specialized in helping with CosmoComms PR services and communications strategies. For other topics, I'd recommend reaching out to our team directly at hello@cosmocommspr.com who can better assist you!";
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! Could you tell me more about how this relates to your communications or PR needs?",
      "I'd love to help you with that! Are you looking for information about our specific services or how we can help your brand?",
      "Great question! Let me know if you'd like to learn more about our PR services, social media expertise, or brand development capabilities."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');

    // Get bot response (which may include search)
    const response = await getBotResponse(currentMessage);
    
    // Add final bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Creative robot SVG component
  const RobotAvatar = () => (
    <div className="w-8 h-8 bg-gradient-to-r from-matcha-500 to-amber-500 rounded-full flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
        <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
        <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"/>
        <path d="M9 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 12v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="fixed bottom-6 right-6 bg-gradient-to-r from-matcha-500 to-amber-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 group">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-2 -left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Ask Comms
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-[600px] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-matcha-500 to-amber-500 text-white">
          <DialogTitle className="flex items-center gap-3">
            <RobotAvatar />
            Ask Comms - Your PR Assistant
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-matcha-500 to-amber-500 text-white'
                    : message.isSearching
                    ? 'bg-blue-100 text-blue-800 animate-pulse'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.sender === 'bot' && !message.isSearching && <RobotAvatar />}
                  {message.sender === 'bot' && message.isSearching && <Search className="w-4 h-4 mt-1 text-blue-600 animate-spin" />}
                  {message.sender === 'user' && <User className="w-4 h-4 mt-1 text-white" />}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t bg-gray-50">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our services..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
            />
            <Button
              onClick={sendMessage}
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-matcha-500 to-amber-500 hover:from-matcha-600 hover:to-amber-600 text-white rounded-full px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Chatbot;
