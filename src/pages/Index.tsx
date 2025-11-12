import { useEffect, lazy, Suspense, useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import TaglineSection from "@/components/TaglineSection";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";

// Aggressive lazy loading - load only when visible
const ProblemSolutionSection = lazy(() => import("@/components/ProblemSolutionSection"));
const RecipeShowcaseSection = lazy(() => import("@/components/RecipeShowcaseSection"));
const SavingsSection = lazy(() => import("@/components/SavingsSection"));
const ProductContentSection = lazy(() => import("@/components/ProductContentSection"));
const UniversalApplicationSection = lazy(() => import("@/components/UniversalApplicationSection"));
const ValueStackSection = lazy(() => import("@/components/ValueStackSection"));
const FinalCtaCardSection = lazy(() => import("@/components/FinalCtaCardSection"));
const RiskFreeGuaranteeSection = lazy(() => import("@/components/RiskFreeGuaranteeSection"));
const NoRegretSection = lazy(() => import("@/components/NoRegretSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const CtaFooterSection = lazy(() => import("@/components/CtaFooterSection"));

const LazySection = ({ children, threshold = 0.1 }: { children: React.ReactNode; threshold?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px', threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return <div ref={ref}>{isVisible ? children : <SkeletonLoader />}</div>;
};

const Index = () => {
  useEffect(() => {
    // Delay Facebook Pixel to not block initial render
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
      <TopBanner />
      <main className="flex-grow">
        <HeroSection />
        <ResultsSection />
        <TaglineSection />
        
        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <ProblemSolutionSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <RecipeShowcaseSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <SavingsSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <ProductContentSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <UniversalApplicationSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <ValueStackSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <FinalCtaCardSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <RiskFreeGuaranteeSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <NoRegretSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <FaqSection />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SkeletonLoader />}>
            <CtaFooterSection />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;