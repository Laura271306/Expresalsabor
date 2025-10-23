import React from 'react';
import SectionWrapper from './SectionWrapper';
import FeatureListItem from './FeatureListItem';
import { Zap } from 'lucide-react';

const features = [
  {
    title: "Universal (Todas las Marcas)",
    description: "Garantizado para Ninja, Philips, Cosori, Oster, Mondial y más. No importa la marca, obtendrás crocancia.",
  },
  {
    title: "Tiempos y Temperaturas Exactas",
    description: "Incluye tablas precisas. Es la guía que tu freidora no trajo. Deja de adivinar.",
  },
  {
    title: "Ajuste para TODOS los Tamaños (Pequeños o Grandes)",
    description: "Te mostramos un ajuste simple para adaptar las recetas a tu cesto (3.5L, 5.5L+).",
  },
  {
    title: "Resultados desde el Día 1",
    description: "Adiós a la comida blanda o quemada. Sigue la guía y acierta a la primera.",
  },
];

const UniversalApplicationSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-orange-600">¿Tienes dudas? Funciona con CUALQUIER Air Fryer.</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          El Método C.R.I.S.P. funciona con todas las freidoras de aire
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