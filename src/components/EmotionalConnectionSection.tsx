import React from 'react';
import SectionWrapper from './SectionWrapper';

const EmotionalConnectionSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray" className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            ¿Te ha pasado que tu AirFryer termina guardada porque las recetas no salen igual que en los videos?
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            A mí también me pasó... hasta que descubrí cómo sacarle todo su potencial.
          </p>
          <p className="text-lg md:text-xl font-semibold text-brand-primary leading-relaxed">
            Por eso creé este Kit: para que cocines fácil, sin ensayo y error.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EmotionalConnectionSection;
