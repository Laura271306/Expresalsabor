import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const SavingsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          El kit se paga solo en el primer día
        </h2>
      </div>

      <Card className="p-8 max-w-lg mx-auto mb-10 shadow-xl border-2 border-brand-secondary/50 bg-white"> {/* Aumentando padding, max-width, mb e adicionando borda/sombra */}
        <CardContent className="p-0 text-lg"> {/* Aumentando o texto da tabela para text-lg */}
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-3 font-bold text-gray-800 text-xl">Situación</th> {/* Aumentando fonte do cabeçalho */}
                <th className="py-3 font-bold text-right text-gray-800 text-xl">Costo mensual</th> {/* Aumentando fonte do cabeçalho */}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 text-gray-700">Delivery 2 veces/semana (US$ 12–15 por pedido)</td> {/* Aumentando py */}
                <td className="py-4 text-right text-gray-900 font-semibold">US$ 96–120</td> {/* Aumentando py */}
              </tr>
              <tr className="border-b border-gray-200 bg-brand-light/30"> {/* Destaque sutil para a linha do kit */}
                <td className="py-4 text-gray-700 font-bold">Kit Maestro AirFryer Perfecta (único pago)</td> {/* Aumentando py */}
                <td className="py-4 text-right font-extrabold text-3xl text-brand-primary">US$ 5,50</td> {/* Aumentando fonte do preço */}
              </tr>
              <tr>
                <td className="py-4 font-extrabold text-gray-800 text-xl">Ahorro estimado (primer mes)</td> {/* Aumentando fonte */}
                <td className="py-4 text-right font-extrabold text-brand-secondary text-2xl">US$ 90–114</td> {/* Aumentando fonte */}
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="text-center mb-10">
        <p className="text-xl md:text-2xl text-gray-700 flex items-center justify-center font-bold p-4 bg-brand-light/50 rounded-lg max-w-xl mx-auto"> {/* Aumentando fonte e adicionando fundo para destaque */}
          <Zap className="w-6 h-6 mr-2 text-brand-primary" />
          Si pides 2 veces/semana (US$ 12–15 por pedido), el kit se paga en el primer día.
        </p>
      </div>

      <div className="text-center mt-8"> {/* Adicionando mt-8 para espaçamento após o destaque */}
        <CtaButton className="text-xl px-10 py-5">
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default SavingsSection;