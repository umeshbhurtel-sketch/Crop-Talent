import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

// Eager-load the home and contact pages (critical path)
import CorpTalentsHome from "./pages/CorpTalentsHome";
import CorpTalentsContact from "./pages/CorpTalentsContact";

// Lazy-load everything else
const ServicesPage     = lazy(() => import("./pages/CorpTalentsServicesPage"));
const AboutPage        = lazy(() => import("./pages/CorpTalentsAboutPage"));
const HowItWorksPage   = lazy(() => import("./pages/HowItWorks"));
const HireTalentIntake = lazy(() => import("./pages/HireTalentIntake"));
const HiringStrategy   = lazy(() => import("./pages/HiringStrategy"));
const HiringPlans      = lazy(() => import("./pages/HiringPlans"));
const HireTalentMulti  = lazy(() => import("./pages/HireTalentMulti"));
const WorkWithUs       = lazy(() => import("./pages/WorkWithUs"));
const EOR              = lazy(() => import("./pages/services/EOR"));
const TaaS             = lazy(() => import("./pages/services/TaaS"));
const GlobalSourcing   = lazy(() => import("./pages/services/GlobalSourcing"));
const TalentManagement = lazy(() => import("./pages/services/TalentManagement"));
const Blog             = lazy(() => import("./pages/Blog"));
const TermsPage        = lazy(() => import("./pages/CorpTalentsTerms"));
const PrivacyPage      = lazy(() => import("./pages/CorpTalentsPrivacy"));
const InfoSecurityPage = lazy(() => import("./pages/CorpTalentsInfoSecurity"));
const NotFound         = lazy(() => import("./pages/NotFound"));

function PageSkeleton() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(20 100% 97%) 100%)" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl animate-pulse"
          style={{ background: "linear-gradient(135deg, hsl(20 96% 54%), hsl(20 90% 45%))" }}
        />
        <div className="space-y-2 text-center">
          <div className="h-2 w-32 rounded-full animate-pulse" style={{ backgroundColor: "hsl(20 96% 54% / 0.3)" }} />
          <div className="h-2 w-24 rounded-full animate-pulse" style={{ backgroundColor: "hsl(20 96% 54% / 0.2)" }} />
        </div>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          <Suspense fallback={<PageSkeleton />}>
            <Routes location={location}>
              <Route path="/"                       element={<CorpTalentsHome />} />
              <Route path="/contact"                element={<CorpTalentsContact />} />
              <Route path="/services"               element={<ServicesPage />} />
              <Route path="/about"                  element={<AboutPage />} />
              <Route path="/how-it-works"           element={<HowItWorksPage />} />
              <Route path="/hire-talent-intake"     element={<HireTalentIntake />} />
              <Route path="/hiring-strategy"        element={<HiringStrategy />} />
              <Route path="/hiring-plans"           element={<HiringPlans />} />
              <Route path="/hire-talent"            element={<HireTalentMulti />} />
              <Route path="/work-with-us"           element={<WorkWithUs />} />
              <Route path="/services/eor"           element={<EOR />} />
              <Route path="/services/taas"          element={<TaaS />} />
              <Route path="/services/global-sourcing"    element={<GlobalSourcing />} />
              <Route path="/services/talent-management"  element={<TalentManagement />} />
              <Route path="/blog"                   element={<Blog />} />
              <Route path="/terms"                  element={<TermsPage />} />
              <Route path="/privacy"                element={<PrivacyPage />} />
              <Route path="/information-security"   element={<InfoSecurityPage />} />
              <Route path="*"                       element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
