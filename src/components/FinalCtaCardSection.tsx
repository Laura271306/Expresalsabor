import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Clock } from 'lucide-react';

const FinalCtaCardSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4">
          AirFryer Perfecta – Kit Maestro de Recetas (Edición Premium)
        </h2>
      </div>

      <Card className="p-12 max-w-sm mx-auto text-center">
        <p className="text-5xl font-light mb-6" style={{ color: '#e58634' }}>
          US$ 5,50
        </p>
        <p className="text-gray-600 mb-8">
          Acceso inmediato y actualizaciones del kit.
        </p>
        
        <CtaButton className="text-lg px-8 py-4 mb-8">
          Quiero mis recetas ahora (US$ 5,50)
        </CtaButton>

        <div className="flex justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Lock className="w-4 h-4 mr-2" style={{ color: '#657a38' }} />
            Acceso inmediato
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" style={{ color: '#657a38' }} />
            7 días de garantía
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
};

export default FinalCtaCardSection;