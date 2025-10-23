import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Clock } from 'lucide-react';

const FinalCtaCardSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12"> {/* Padronizando mb-12 */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"> {/* Usando font-bold para consistência */}
          <span className="text-brand-secondary">Expres al Sabor</span> – Kit Maestro de Recetas (Edición Premium)
        </h2>
      </div>

      <Card className="p-8 md:p-10 max-w-lg mx-auto text-center shadow-xl border-2 border-brand-primary/50">
        <p className="text-5xl md:text-6xl font-extrabold mb-4 text-brand-primary">
          US$ 6,50
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium"> {/* Padronizando mb-8 */}
          Acceso inmediato y satisfacción garantizada.
        </p>
        
        <CtaButton className="w-full">
          Comprar ahora
        </CtaButton>

        <div className="flex justify-center gap-6 text-base text-gray-600 mt-6">
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