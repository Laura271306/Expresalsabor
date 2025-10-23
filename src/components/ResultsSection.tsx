import React from 'react';
import SectionWrapper from './SectionWrapper';
import RecipeCard from './RecipeCard';
import CtaButton from './CtaButton';

const recipes = [
  {
    title: "Alitas de pollo crujientes",
    time: "12 min",
    temperature: "190°C",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Papas fritas perfectas",
    time: "15 min",
    temperature: "200°C",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Salmón con costra dorada",
    time: "10 min",
    temperature: "180°C",
    imageSrc: "/placeholder.svg",
  },
];

const ResultsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Esto es lo que puedes lograr con tu AirFryer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Resultados reales, crocancia perfecta en minutos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <p className="text-orange-600 font-semibold mb-4">
          600+ recetas como estas te esperan
        </p>
        <CtaButton className="w-full sm:w-auto">
          Quiero cocinar así (US$ 5,50)
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default ResultsSection;