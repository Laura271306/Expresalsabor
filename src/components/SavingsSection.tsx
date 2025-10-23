import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const SavingsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          El kit se paga solo en el primer día
        </h2>
      </div>

      <Card className="p-8 max-w-md mx-auto mb-8">
        <CardContent className="p-0">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 font-medium text-gray-700">Situación</th>
                <th className="py-3 font-medium text-right text-gray-700">Costo mensual</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-gray-600">Delivery 2 veces/semana (US$ 12–15 por pedido)</td>
                <td className="py-3 text-right text-gray-800">US$ 96–120</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-gray-600">Kit Maestro AirFryer Perfecta (único pago)</td>
                <td className="py-3 text-right font-bold text-red-600">US$ 5,50</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-gray-800">Ahorro estimado (primer mes)</td>
                <td className="py-3 text-right font-bold text-cta-green">US$ 90–114</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 flex items-center justify-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-500" />
          Si pides 2 veces/semana (US$ 12–15 por pedido), el kit se paga en el primer día.
        </p>
      </div>

      <div className="text-center">
        <CtaButton className="text-lg px-8 py-4">
          Empezar a ahorrar hoy (US$ 5,50)
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default SavingsSection;