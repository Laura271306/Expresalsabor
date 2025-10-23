import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ShieldCheck } from 'lucide-react';

const RiskFreeGuaranteeSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="p-8 bg-green-50 dark:bg-green-950 rounded-xl border border-green-200 dark:border-green-800 text-center max-w-2xl mx-auto">
        <ShieldCheck className="w-12 h-12 mx-auto text-cta-green mb-4" />
        <h3 className="text-2xl font-bold mb-2">
          Pruébalo 7 días sin riesgo.
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Si no te ahorra tiempo o no mejoras textura, <span className="font-bold text-cta-green">te devolvemos el dinero.</span> Sin preguntas.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default RiskFreeGuaranteeSection;