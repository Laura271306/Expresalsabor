import React from 'react';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';

const FaqCtaCard: React.FC = () => {
  return (
    <Card className="p-8 md:p-10 max-w-lg mx-auto text-center shadow-xl border-2 border-brand-secondary/50 bg-brand-light/30">
      <CardContent className="p-0">
        <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-2">
          Expres al Sabor – Kit Maestro de Recetas
        </h3>
        <p className="text-lg mb-2 text-gray-600">(Edición Premium)</p>
        
        <p className="text-5xl font-extrabold mb-4 text-brand-secondary">
          US$ 5,50
        </p>
        <p className="text-gray-500 mb-8 text-lg font-medium">acceso inmediato</p>
        
        <CtaButton className="text-2xl w-full py-6 font-extrabold">
          Comprar ahora
        </CtaButton>
      </CardContent>
    </Card>
  );
};

export default FaqCtaCard;