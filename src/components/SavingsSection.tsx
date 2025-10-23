import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, DollarSign, TrendingUp } from 'lucide-react';

const SavingsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          El kit se paga solo en el primer día
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Compara el costo de seguir pidiendo delivery vs. tener el Kit Maestro.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Coluna 1: Custo do Delivery */}
        <Card className="p-6 shadow-xl border-2 border-gray-300 bg-white">
          <div className="flex items-center mb-4">
            <DollarSign className="w-6 h-6 mr-3 text-red-600" />
            <h3 className="text-xl font-bold text-gray-800">Costo de Delivery</h3>
          </div>
          <p className="text-gray-600 mb-2 text-base">2 pedidos/semana (US$ 12–15 c/u)</p>
          <p className="text-4xl font-extrabold text-red-700 mt-4">
            US$ 96–120
          </p>
          <p className="text-sm text-gray-500 mt-1">Costo mensual estimado</p>
        </Card>

        {/* Coluna 2: Preço do Kit (Destaque) */}
        <Card className="p-6 shadow-2xl border-4 border-brand-primary bg-brand-light/50 transform scale-105">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-7 h-7 mr-3 text-brand-primary fill-brand-primary/20" />
            <h3 className="text-2xl font-extrabold text-brand-primary">Precio Hoy</h3>
          </div>
          <p className="text-gray-700 mb-2 text-center text-base">Kit Maestro Expres al Sabor (pago único)</p>
          <p className="text-6xl font-extrabold text-brand-secondary text-center mt-4">
            US$ 6,50
          </p>
          <p className="text-sm text-gray-600 mt-1 text-center">Acceso inmediato</p>
        </Card>

        {/* Coluna 3: Economia Estimada */}
        <Card className="p-6 shadow-xl border-2 border-brand-secondary/50 bg-white">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 mr-3 text-brand-secondary" />
            <h3 className="text-xl font-bold text-gray-800">Ahorro Estimado</h3>
          </div>
          <p className="text-gray-600 mb-2 text-base">Ahorro potencial en el primer mes</p>
          <p className="text-4xl font-extrabold text-brand-secondary mt-4">
            US$ 90–114
          </p>
          <p className="text-sm text-gray-500 mt-1">¡El kit se paga solo!</p>
        </Card>
      </div>

      <div className="text-center mb-10">
        <p className="text-2xl md:text-3xl text-gray-700 flex items-center justify-center font-bold p-6 bg-brand-light/50 rounded-lg max-w-3xl mx-auto">
          <Zap className="w-6 h-6 mr-2 text-brand-primary flex-shrink-0" />
          Si pides 2 veces/semana (US$ 12–15 por pedido), el kit se paga en el primer día.
        </p>
      </div>

      <div className="text-center mt-8">
        <CtaButton> {/* Removendo classes de tamanho, usando o padrão grande */}
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default SavingsSection;