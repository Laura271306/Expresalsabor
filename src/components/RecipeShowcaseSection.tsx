import React from 'react';
import SectionWrapper from './SectionWrapper';
import RecipeCard from './RecipeCard';
import CtaButton from './CtaButton';
import polloParmesanoImg from '@/assets/recipe-pollo-parmesano.jpg';
import camaronesAjoImg from '@/assets/recipe-camarones-ajo.jpg';
import chipsBatataImg from '@/assets/recipe-chips-batata.jpg';

const detailedRecipes = [
  {
    title: "Pollo parmesano",
    time: "12 min",
    temperature: "190°C",
    details: "voltear a mitad",
    imageSrc: polloParmesanoImg,
  },
  {
    title: "Camarones al ajo",
    time: "8 min",
    temperature: "180°C",
    details: "listo en una sola vez",
    imageSrc: camaronesAjoImg,
  },
  {
    title: "Chips de batata",
    time: "10–12 min",
    temperature: "200°C",
    details: "agitar a mitad",
    imageSrc: chipsBatataImg,
  },
];

const RecipeShowcaseSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-12"> {/* Reduzindo mb-16 para mb-12 */}
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          Cocina 3 platos perfectos hoy mismo:
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sin curva de ensayo-error. Solo sigue los tiempos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> {/* Reduzindo mb-12 para mb-10 */}
        {detailedRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} details={recipe.details} />
        ))}
      </div>

      <div className="text-center mb-6">
        <p className="text-lg md:text-xl font-extrabold text-alert-danger mb-4">
          ⚡ Oferta válida por tiempo limitado • Solo hoy: US$ 5,50
        </p>
        <CtaButton> {/* Removendo classes de tamanho, usando o padrão grande */}
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default RecipeShowcaseSection;