import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { cn } from '@/lib/utils';

const CtaFooterSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray" className="py-10 md:py-12 border-t border-gray-200">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
          <span className="font-bold text-brand-secondary">Listo para transformar tu Air Fryer?</span>
        </h2>
        <CtaButton 
          className={cn(
            "text-2xl px-12 py-6 font-extrabold",
            // Custom style for 'vermelho vinho' button
            "bg-red-700 hover:bg-red-800 transition-colors duration-200"
          )}
        >
          Empezar ahora
        </CtaButton>
        <p className="text-base text-gray-500 mt-3"> {/* Aumentando text-sm para text-base */}
          Acceso inmediato. Garantía de 7 días.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default CtaFooterSection;