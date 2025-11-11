import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { cn } from '@/lib/utils';

const CtaFooterSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray" className="py-10 md:py-12 border-t border-gray-200">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
          <span className="font-bold text-brand-secondary">¿Listo para transformar tu Air Fryer?</span>
        </h2>
        <CtaButton 
          className={cn(
            // Custom style usando design system
            "bg-alert-danger hover:bg-alert-danger/90 transition-colors duration-200"
          )}
          aria-label="Empezar ahora - Comprar Kit Maestro con acceso inmediato y garantía de 7 días"
        >
          Empezar ahora
        </CtaButton>
        <p className="text-base text-muted-foreground mt-3">
          Acceso inmediato. Garantía de 7 días.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default CtaFooterSection;