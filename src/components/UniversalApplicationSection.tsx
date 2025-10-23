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
      <div className="text-center mb-12"> {/* Padronizando mb-12 */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"> {/* Usando font-bold para consistência */}
          <span className="text-brand-primary">¿Tienes dudas? Funciona con CUALQUIER Air Fryer.</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"> {/* Padronizando subtítulo e mb-8 */}
          El Método C.R.I.S.P. funciona con todas las freidoras de aire
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 mb-12"> {/* Padronizando mb-12 */}
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-6 border border-gray-200 rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-lg" // Enhanced styling
          >
            <FeatureListItem className="text-base">
              <span className="font-extrabold text-gray-900 text-xl block mb-1">{feature.title}</span> {/* Increased title size and weight */}
              <p className="text-gray-600 text-base">{feature.description}</p>
            </FeatureListItem>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl text-center max-w-3xl mx-auto bg-brand-success-bg border-4 border-brand-secondary/50 shadow-inner"> {/* Enhanced styling for callout */}
        <p className="text-xl font-extrabold text-gray-800 flex items-center justify-center flex-wrap">
          <Zap className="w-6 h-6 mr-3 text-brand-secondary flex-shrink-0" />
          Compatible con <span className="font-extrabold text-brand-primary ml-2">TODAS las marcas:</span> Philips, Ninja, Cosori, Instant Pot y más.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default UniversalApplicationSection;