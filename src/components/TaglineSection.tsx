import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Recetas pensadas para el día a día",
  "Aprovecha lo que ya tienes en la heladera",
  "Funciona incluso si eres \"cero cocina\"",
  "Recetas con tiempos pensados para gente ocupada"
];

const TaglineSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white" className="py-8 md:py-10">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-3">
          Para quien quiere comer rico… sin complicarse la vida.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-light mb-6">
          Porque sí, cocinar puede ser fácil, rápido y hasta disfrutarlo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start space-x-3 text-left p-3"
            >
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-brand-primary mt-0.5" />
              <span className="text-base md:text-lg text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TaglineSection;
