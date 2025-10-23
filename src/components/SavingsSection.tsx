import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const SavingsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-green">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          El kit se paga solo en el primer día
        </h2>
      </div>

      <Card className="p-6 shadow-xl max-w-md mx-auto">
        <CardContent className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 font-semibold text-gray-700 dark:text-gray-300">Situación</th>
                <th className="py-3 font-semibold text-right text-gray-700 dark:text-gray-300">Costo mensual</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 text-gray-600 dark:text-gray-400">Delivery 2 veces/semana (US$ 12–15 por pedido)</td>
                <td className="py-3 text-right text-gray-800 dark:text-gray-200">US$ 96–120</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 text-gray-600 dark:text-gray-400">Kit Maestro AirFryer Perfecta (único pago)</td>
                <td className="py-3 text-right font-bold text-red-600">US$ 5,50</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-gray-800 dark:text-gray-200">Ahorro estimado (primer mes)</td>
                <td className="py-3 text-right font-bold text-cta-green">US$ 90–114</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Info Banner */}
      <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg text-center shadow-md max-w-md mx-auto">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center">
          <Zap className="w-4 h-4 mr-2 text-yellow-500" />
          Si pides 2 veces/semana (US$ 12–15 por pedido), el kit se paga en el primer día.
        </p>
      </div>

      <div className="text-center mt-10">
        <CtaButton className="w-full sm:w-auto">
          Empezar a ahorrar hoy (US$ 5,50)
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default SavingsSection;