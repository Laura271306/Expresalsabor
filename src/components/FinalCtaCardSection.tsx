import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Clock } from 'lucide-react';

const FinalCtaCardSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          AirFryer Perfecta – Kit Maestro de Recetas (Edición Premium)
        </h2>
      </div>

      <Card className="p-8 shadow-2xl max-w-sm mx-auto bg-white rounded-xl">
        <CardContent className="p-0 text-center">
          <p className="text-5xl md:text-6xl font-extrabold text-orange-600 mb-4">
            US$ 5,50
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Acceso inmediato y actualizaciones del kit.
          </p>
          
          <CtaButton className="w-full">
            Quiero mis recetas ahora (US$ 5,50)
          </CtaButton>

          <div className="flex justify-center space-x-4 mt-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <Lock className="w-4 h-4 mr-1 text-cta-green" />
              Acceso inmediato
            </div>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 mr-1 text-cta-green" />
              7 días de garantía
            </div>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default FinalCtaCardSection;