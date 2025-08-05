import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import RecruitmentModelsPage from '@/pages/RecruitmentModelsPage';
import HiringProcessPage from '@/pages/HiringProcessPage';
import TrainingsPage from '@/pages/TrainingsPage';
import OrganizationalDevelopmentPage from '@/pages/OrganizationalDevelopmentPage';
import ResumeTipsPage from '@/pages/ResumeTipsPage';
import ContactPage from '@/pages/ContactPage';
import SubmitResumePage from '@/pages/SubmitResumePage';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recruitment-models" element={<RecruitmentModelsPage />} />
              <Route path="/hiring-process" element={<HiringProcessPage />} />
              <Route path="/trainings" element={<TrainingsPage />} />
              <Route path="/organizational-development" element={<OrganizationalDevelopmentPage />} />
              <Route path="/resume-tips" element={<ResumeTipsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/submit-resume" element={<SubmitResumePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
