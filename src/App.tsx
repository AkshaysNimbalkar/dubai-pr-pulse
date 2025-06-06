
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PublicRelations from "./pages/services/PublicRelations";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import BrandDevelopment from "./pages/services/BrandDevelopment";
import LaunchCampaigns from "./pages/services/LaunchCampaigns";
import StrategicConsulting from "./pages/services/StrategicConsulting";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/public-relations" element={<PublicRelations />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/services/brand-development" element={<BrandDevelopment />} />
            <Route path="/services/launch-campaigns" element={<LaunchCampaigns />} />
            <Route path="/services/strategic-consulting" element={<StrategicConsulting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
