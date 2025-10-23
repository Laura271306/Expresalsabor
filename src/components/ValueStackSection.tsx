import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';

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
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          Con 2 pedidos de delivery menos por semana
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ahorras <span className="font-bold text-cta-green">US$ 80–120/mes.</span> El kit cuesta <span className="font-bold text-red-600">US$ 5,50</span> y se paga hoy.
        </p>
      </div>

      <Card className="p-8 max-w-sm mx-auto">
        <CardContent className="p-0">
          <h3 className="text-center font-medium text-gray-700 mb-6">Stack de Valor</h3>
          <table className="w-full text-left">
            <tbody>
              {valueItems.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-b-0">
                  <td className="py-3 text-gray-600">{item.label}</td>
                  <td className="py-3 text-right text-gray-800">US$ {item.value}</td>
                </tr>
              ))}
              <tr className="border-t border-gray-300 mt-2">
                <td className="py-3 font-bold text-gray-800">Valor total:</td>
                <td className="py-3 text-right font-bold text-gray-800">US$ {totalValue}</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-xl text-orange-600">Hoy:</td>
                <td className="py-3 text-right font-bold text-xl text-orange-600">US$ 5,50</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default ValueStackSection;