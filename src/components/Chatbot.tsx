
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, Bot, User, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
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

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
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

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputMessage),
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
            <Bot className="w-6 h-6" />
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
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.sender === 'bot' && <Bot className="w-4 h-4 mt-1 text-matcha-600" />}
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
