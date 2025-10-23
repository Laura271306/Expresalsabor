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
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Cocina 3 platos perfectos hoy mismo:
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Sin curva de ensayo-error. Solo sigue los tiempos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {detailedRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} details={recipe.details} />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <CtaButton className="w-full sm:w-auto">
          Quiero tiempos exactos (US$ 5,50)
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default RecipeShowcaseSection;