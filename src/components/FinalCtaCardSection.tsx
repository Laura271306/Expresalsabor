import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Clock } from 'lucide-react';

const FinalCtaCardSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          <span className="font-bold text-brand-secondary">AirFryer Perfecta</span> – Kit Maestro de Recetas (Edición Premium)
        </h2>
      </div>

      <Card className="p-10 md:p-12 max-w-lg mx-auto text-center shadow-xl border-2 border-brand-primary/50">
        <p className="text-6xl font-extrabold mb-6 text-brand-primary">
          US$ 5,50
        </p>
        <p className="text-gray-600 mb-8 text-xl font-medium">
          Acceso inmediato y actualizaciones del kit.
        </p>
        
        <CtaButton className="text-2xl w-full py-6 font-extrabold mb-8">
          Quiero mis recetas ahora (US$ 5,50)
        </CtaButton>

        <div className="flex justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Lock className="w-4 h-4 mr-2 text-brand-secondary" />
            Acceso inmediato
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-brand-secondary" />
            7 días de garantía
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
};

export default FinalCtaCardSection;