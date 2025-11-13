import React from 'react';
import SectionWrapper from './SectionWrapper';

const ValueAnchorSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
            Imagina tener más de 600 recetas que ya fueron probadas y ajustadas para cada modelo de AirFryer.
          </p>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
            Sin desperdiciar ingredientes ni frustrarte con resultados mediocres.
          </p>
        </div>
        
        <div className="pt-4">
          <p className="text-lg md:text-xl text-brand-primary leading-relaxed font-semibold">
            Mientras otros gastan horas buscando recetas que no funcionan, tú tendrás en minutos un plan probado que garantiza resultados deliciosos.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValueAnchorSection;
