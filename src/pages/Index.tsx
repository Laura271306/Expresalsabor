import { useEffect, lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import TaglineSection from "@/components/TaglineSection";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";

// Lazy load components below the fold with prefetch hints
const ProblemSolutionSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/ProblemSolutionSection"));
const RecipeShowcaseSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/RecipeShowcaseSection"));
const SavingsSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/SavingsSection"));
const ProductContentSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/ProductContentSection"));
const UniversalApplicationSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/UniversalApplicationSection"));
const ValueStackSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/ValueStackSection"));
const FinalCtaCardSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/FinalCtaCardSection"));
const RiskFreeGuaranteeSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/RiskFreeGuaranteeSection"));
const NoRegretSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/NoRegretSection"));
const FaqSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/FaqSection"));
const CtaFooterSection = lazy(() => import(/* webpackPrefetch: true */ "@/components/CtaFooterSection"));

const Index = () => {
  useEffect(() => {
    // Track ViewContent when page loads
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Kit Maestro de Recetas AirFryer',
        content_category: 'Recipe Book',
        content_type: 'product',
        value: 5.50,
        currency: 'USD'
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <main className="flex-grow">
        <HeroSection />
        <ResultsSection />
        <TaglineSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
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