import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ShieldCheck } from 'lucide-react';

const RiskFreeGuaranteeSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="p-12 border border-brand-secondary/30 rounded-xl text-center max-w-2xl mx-auto bg-brand-success-bg shadow-lg">
        <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-brand-secondary" />
        <h3 className="text-2xl font-serif font-light text-gray-900 mb-4">
          Pruébalo 7 días sin riesgo.
        </h3>
        <p className="text-lg text-gray-600">
          Si no te ahorra tiempo o no mejoras la textura, <span className="font-bold text-brand-secondary">te devolvemos el dinero.</span> Sin preguntas.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default RiskFreeGuaranteeSection;