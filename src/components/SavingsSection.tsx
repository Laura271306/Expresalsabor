import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const SavingsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-12"> {/* Reduzindo mb-16 para mb-12 */}
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          El kit se paga solo en el primer día
        </h2>
      </div>

      <Card className="p-6 max-w-md mx-auto mb-8 shadow-md"> {/* Reduzindo padding do card */}
        <CardContent className="p-0 text-base"> {/* Garantindo que o texto da tabela seja text-base */}
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
                <td className="py-3 text-right font-bold text-brand-primary">US$ 5,50</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-gray-800">Ahorro estimado (primer mes)</td>
                <td className="py-3 text-right font-bold text-brand-secondary">US$ 90–114</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="text-center mb-10"> {/* Reduzindo mb-12 para mb-10 */}
        <p className="text-lg text-gray-600 flex items-center justify-center">
          <Zap className="w-5 h-5 mr-2 text-brand-light" />
          Si pides 2 veces/semana (US$ 12–15 por pedido), el kit se paga en el primer día.
        </p>
      </div>

      <div className="text-center">
        <CtaButton className="text-xl px-10 py-5"> {/* Padronizando para CTA secundário */}
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default SavingsSection;