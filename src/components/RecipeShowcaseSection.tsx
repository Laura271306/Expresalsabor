import React from 'react';
import SectionWrapper from './SectionWrapper';
import RecipeCard from './RecipeCard';
import CtaButton from './CtaButton';

const detailedRecipes = [
  {
    title: "Pollo parmesano",
    time: "12 min",
    temperature: "190°C",
    details: "voltear a mitad",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Camarones al ajo",
    time: "8 min",
    temperature: "180°C",
    details: "listo en una sola vez",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Chips de batata",
    time: "10–12 min",
    temperature: "200°C",
    details: "agitar a mitad",
    imageSrc: "/placeholder.svg",
  },
];

const RecipeShowcaseSection: React.FC = () => {
  const ctaLink = "https://pay.kiwify.com/0h3yyq8";

  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-12"> {/* Padronizando mb-12 */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"> {/* Usando font-bold para consistência */}
          Cocina 3 platos perfectos hoy mismo:
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"> {/* Padronizando subtítulo e mb-8 */}
          Sin curva de ensayo-error. Solo sigue los tiempos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> {/* Padronizando mb-12 antes do CTA */}
        {detailedRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} details={recipe.details} />
        ))}
      </div>
      
      <div className="text-center">
        <CtaButton href={ctaLink}>
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default RecipeShowcaseSection;