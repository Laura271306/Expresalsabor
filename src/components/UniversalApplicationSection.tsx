import React from 'react';
import SectionWrapper from './SectionWrapper';
import FeatureListItem from './FeatureListItem';
import { Zap } from 'lucide-react';

const features = [
  {
    title: "Universal (Todas as Marcas)",
    description: "Garantido para Ninja, Philips, Cosori, Oster, Mondial e mais. Não importa a marca, você obterá crocância.",
  },
  {
    title: "Tiempos e Temperaturas Exatas",
    description: "Inclui tabelas precisas. É o guia que sua freidora não trouxe. Chega de adivinhar.",
  },
  {
    title: "Ajuste para TODOS os Tamanhos (Pequenas ou Grandes)",
    description: "Mostramos um ajuste simples para adaptar as receitas ao seu cesto (3.5L, 5.5L+).",
  },
  {
    title: "Resultados desde o Dia 1",
    description: "Chega de comida mole ou queimada. Siga o guia e acerte na primeira tentativa.",
  },
];

const UniversalApplicationSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          ¿Tienes dudas? Funciona con CUALQUIER Air Fryer.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          O Método C.R.I.S.P. funciona com todas as AirFryer
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <FeatureListItem className="text-base" iconColor="text-cta-green">
              <span className="font-semibold">{feature.title}</span>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
            </FeatureListItem>
          </div>
        ))}
      </div>

      {/* Compatibility Banner */}
      <div className="mt-8 p-4 bg-green-100 dark:bg-green-900 rounded-lg text-center max-w-2xl mx-auto">
        <p className="font-medium text-gray-800 dark:text-gray-200 flex items-center justify-center">
          <Zap className="w-4 h-4 mr-2 text-red-500" />
          Compatible com <span className="font-bold mx-1">todas as marcas:</span> Philips, Ninja, Cosori, Instant Pot e mais
        </p>
      </div>
    </SectionWrapper>
  );
};

export default UniversalApplicationSection;