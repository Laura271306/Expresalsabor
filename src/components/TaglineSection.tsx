import React from 'react';
import SectionWrapper from './SectionWrapper';

const TaglineSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white" className="py-8 md:py-10">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-3">
          Para quien quiere comer rico… sin complicarse la vida.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-light">
          Porque sí, cocinar puede ser fácil, rápido y hasta disfrutarlo.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default TaglineSection;
