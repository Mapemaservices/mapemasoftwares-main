import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import CountyPage from "./pages/CountyPage";
import SubCountyPage from "./pages/SubCountyPage";
import LocationsIndex from "./pages/LocationsIndex";
import SitemapPage from "./pages/SitemapPage";
import RobotsPage from "./pages/RobotsPage";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage";
import OnboardingPage from "./pages/OnboardingPage";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/Analytics/MicrosoftClarity";
import WebmasterVerification from "@/components/Analytics/WebmasterVerification";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <GoogleAnalytics />
        <MicrosoftClarity />
        <WebmasterVerification />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<LocationsIndex />} />
            <Route path="/locations/:countySlug" element={<CountyPage />} />
            <Route path="/locations/:countySlug/:subcountySlug" element={<SubCountyPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/sitemap.xml" element={<SitemapPage />} />
            <Route path="/robots.txt" element={<RobotsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
