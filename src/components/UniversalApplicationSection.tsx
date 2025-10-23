import React from 'react';
import SectionWrapper from './SectionWrapper';
import FeatureListItem from './FeatureListItem';
import { Zap } from 'lucide-react';

const features = [
  {
    title: "Tablas de tiempo/temperatura por alimento",
    description: "Cada receta incluye tiempos base probados para los alimentos más comunes",
  },
  {
    title: "Guía rápida de ajuste por capacidad",
    description: "Ajustes simples para 3,5 L / 4 L / 5,5 L+ según tu modelo",
  },
  {
    title: "Crocancia consistente sin ensayo-error",
    description: "Uses la marca que uses, obtendrás resultados perfectos desde el día 1",
  },
];

const UniversalApplicationSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Universal y fácil de aplicar
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          El Método C.R.I.S.P. funciona con todas las AirFryer
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
          Compatible con <span className="font-bold mx-1">todas las marcas:</span> Philips, Ninja, Cosori, Instant Pot y más
        </p>
      </div>
    </SectionWrapper>
  );
};

export default UniversalApplicationSection;