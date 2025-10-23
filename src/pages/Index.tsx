import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import RecipeShowcaseSection from "@/components/RecipeShowcaseSection";
import SavingsSection from "@/components/SavingsSection";
import ProductContentSection from "@/components/ProductContentSection";
import UniversalApplicationSection from "@/components/UniversalApplicationSection";
import ValueStackSection from "@/components/ValueStackSection";
import FinalCtaCardSection from "@/components/FinalCtaCardSection";
import RiskFreeGuaranteeSection from "@/components/RiskFreeGuaranteeSection";
import FaqSection from "@/components/FaqSection";
import CtaFooterSection from "@/components/CtaFooterSection"; // Importar novo componente
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <main className="flex-grow">
        <HeroSection />
        <ResultsSection />
        <ProblemSolutionSection />
        <RecipeShowcaseSection />
        <SavingsSection />
        <ProductContentSection />
        <UniversalApplicationSection />
        <ValueStackSection />
        <FinalCtaCardSection />
        <RiskFreeGuaranteeSection />
        <FaqSection />
        <CtaFooterSection /> {/* Adicionar o novo CTA */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;