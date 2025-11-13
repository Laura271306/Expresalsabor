import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import CtaButton from './CtaButton';
import { cn } from '@/lib/utils';

const valueItems = [
  { label: "Colecciones (4)", value: 28 },
  { label: "Menús + listas", value: 17 },
  { label: "Tablas", value: 12 },
  { label: "Guía de limpieza", value: 7 },
  { label: "Bónus (4)", value: 39 },
];

const ValueStackSection: React.FC = () => {
  const totalValue = valueItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <SectionWrapper bgColor="light-gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        
        {/* Coluna de Título e CTA (Esquerda) */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
            Con 2 pedidos de delivery menos por semana
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            ahorras <span className="font-extrabold text-brand-secondary">US$ 80–120/mes.</span> 
            <br className="hidden md:inline"/> El kit cuesta <span className="font-extrabold text-brand-primary">US$ 5,50</span> y se paga hoy.
          </p>
          
          <div className="mb-4 p-3 bg-red-50 border-2 border-red-700 rounded-lg">
            <p className="text-base md:text-lg font-bold text-red-700 text-center lg:text-left">
              ⏰ Precio promocional válido solo hoy
            </p>
          </div>

          <div className="text-center lg:text-left">
            <CtaButton> {/* Removendo classes de tamanho, usando o padrão grande */}
              Sí, quiero este precio hoy
            </CtaButton>
          </div>
        </div>

        {/* Coluna do Card de Valor (Direita) - Destaque Aumentado */}
        <div className="flex justify-center lg:justify-start">
          <Card className="p-6 w-full max-w-md shadow-2xl border-4 border-brand-primary bg-white"> {/* Aumentando borda e sombra */}
            <CardContent className="p-0">
              <h3 className="text-center font-extrabold text-2xl text-gray-800 mb-4 p-2 bg-brand-light/50 rounded-t-lg -mx-6 -mt-6">
                Stack de Valor Total
              </h3>
              <table className="w-full text-left">
                <tbody>
                  {valueItems.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-b-0">
                      <td className="py-3 text-lg text-gray-600">{item.label}</td>
                      <td className="py-3 text-right text-lg font-medium text-red-700">US$ {item.value}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300 mt-2">
                    <td className="py-3 font-bold text-xl text-gray-800">Valor total:</td>
                    <td className="py-3 text-right">
                      <span className={cn("text-3xl font-extrabold line-through text-gray-500")}>US$ {totalValue}</span>
                    </td>
                  </tr>
                  <tr className="bg-brand-secondary/10">
                    <td className="py-4 font-extrabold text-2xl text-brand-secondary">Precio Hoy:</td>
                    <td className="py-4 text-right font-extrabold text-4xl text-brand-primary">US$ 5,50</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValueStackSection;