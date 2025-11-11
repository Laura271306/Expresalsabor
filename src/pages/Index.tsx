import { useEffect, lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import TaglineSection from "@/components/TaglineSection";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";

// Lazy load components below the fold with aggressive prefetching
const ProblemSolutionSection = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "problem" */ "@/components/ProblemSolutionSection"));
const RecipeShowcaseSection = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "recipes" */ "@/components/RecipeShowcaseSection"));
const SavingsSection = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "savings" */ "@/components/SavingsSection"));
const ProductContentSection = lazy(() => import(/* webpackPreload: true, webpackChunkName: "product" */ "@/components/ProductContentSection"));
const UniversalApplicationSection = lazy(() => import(/* webpackChunkName: "universal" */ "@/components/UniversalApplicationSection"));
const ValueStackSection = lazy(() => import(/* webpackChunkName: "value" */ "@/components/ValueStackSection"));
const FinalCtaCardSection = lazy(() => import(/* webpackChunkName: "cta-final" */ "@/components/FinalCtaCardSection"));
const RiskFreeGuaranteeSection = lazy(() => import(/* webpackChunkName: "guarantee" */ "@/components/RiskFreeGuaranteeSection"));
const NoRegretSection = lazy(() => import(/* webpackChunkName: "regret" */ "@/components/NoRegretSection"));
const FaqSection = lazy(() => import(/* webpackChunkName: "faq" */ "@/components/FaqSection"));
const CtaFooterSection = lazy(() => import(/* webpackChunkName: "cta-footer" */ "@/components/CtaFooterSection"));

const Index = () => {
  useEffect(() => {
    // Track ViewContent after a slight delay to not block initial render
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'ViewContent', {
          content_name: 'Kit Maestro de Recetas AirFryer',
          content_category: 'Recipe Book',
          content_type: 'product',
          value: 5.50,
          currency: 'USD'
        });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-to-main">Saltar al contenido principal</a>
      <TopBanner />
      <main id="main-content" className="flex-grow" role="main">
        <HeroSection />
        <ResultsSection />
        <TaglineSection />
        <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center" aria-busy="true" aria-live="polite" />}>
          <ProblemSolutionSection />
          <RecipeShowcaseSection />
          <SavingsSection />
          <ProductContentSection />
          <UniversalApplicationSection />
          <ValueStackSection />
          <FinalCtaCardSection />
          <RiskFreeGuaranteeSection />
          <NoRegretSection />
          <FaqSection />
          <CtaFooterSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;