import React from 'react';
import SectionWrapper from './SectionWrapper';
import FeatureListItem from './FeatureListItem';
import { Zap } from 'lucide-react';

const features = [
  {
    title: "Universal (Todas las Marcas)",
    description: "Garantido para Ninja, Philips, Cosori, Oster, Mondial y más. No importa la marca, obtendrás crocancia.",
  },
  {
    title: "Tiempos y Temperaturas Exactas",
    description: "Incluye tablas precisas. Es la guía que tu freidora no trajo. Deja de adivinar.",
  },
  {
    title: "Ajuste para TODOS los Tamaños",
    description: "Te mostramos un ajuste simple para adaptar las recetas a tu cesto (3.5L, 5.5L+).",
  },
  {
    title: "Resultados desde el Día 1",
    description: "Adiós a la comida blanda o quemada. Sigue la guía y acierta a la primera.",
  },
];

const UniversalApplicationSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12"> {/* Reduzindo mb-16 para mb-12 */}
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          <span className="text-brand-primary">¿Tienes dudas? Funciona con CUALQUIER Air Fryer.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          El Método C.R.I.S.P. funciona con todas las freidoras de aire
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4"> {/* Reduzindo space-y-6 para space-y-4 */}
        {features.map((feature, index) => (
          <div key={index} className="p-5 border border-gray-200 rounded-lg shadow-sm"> {/* Reduzindo p-6 para p-5 */}
            <FeatureListItem className="text-base">
              <span className="font-semibold text-gray-900 text-lg">{feature.title}</span> {/* Aumentando título interno para text-lg */}
              <p className="text-gray-600 mt-1 text-base">{feature.description}</p> {/* Garantindo text-base */}
            </FeatureListItem>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-lg text-center max-w-2xl mx-auto bg-brand-light border border-brand-primary/30"> {/* Reduzindo mt-12 para mt-10 e p-6 para p-5 */}
        <p className="text-lg font-medium text-gray-800">
          Compatible con <span className="font-bold">todas las marcas:</span> Philips, Ninja, Cosori, Instant Pot y más
        </p>
      </div>
    </SectionWrapper>
  );
};

export default UniversalApplicationSection;