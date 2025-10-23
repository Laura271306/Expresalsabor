import React from 'react';
import CtaButton from './CtaButton';
import FeatureListItem from './FeatureListItem';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-50 pt-16 pb-24">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6 leading-tight">
            <span 
              className="relative inline-block font-bold"
              style={{ 
                color: '#e58634',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(229, 134, 52, 0.2)'
              }}
            >
              La solución definitiva para activar el <span style={{ color: '#dc2626' }}>"Modo Chef"</span> de tu freidora de aire
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            El secreto para usar bien tu AirFryer (y no fallar más)
          </p>
        </div>

        <div className="mb-10">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
            <FeatureListItem className="text-base">
              <span className="font-medium">Verás tiempos/temperaturas claros en cada receta</span>
            </FeatureListItem>
            <FeatureListItem className="text-base">
              <span className="font-medium">Menos decisiones: menús y listas de compras</span>
            </FeatureListItem>
            <FeatureListItem className="text-base">
              <span className="font-medium">Acceso Inmediato • Garantía 7 días</span>
            </FeatureListItem>
          </div>
          
          <div className="text-lg text-gray-700 mb-8">
            <span className="font-bold" style={{ color: '#e58634' }}>600+ recetas</span> AirFryer por objetivo. Cero ensayo-error desde el día 1.
          </div>
        </div>

        <div className="mb-8">
          <CtaButton className="text-lg px-8 py-4">
            Quiero crocancia hoy (US$ 5,50)
          </CtaButton>
          <p className="text-sm text-gray-500 mt-3">
            *Oferta válida por tiempo limitado
          </p>
        </div>

        <div className="mt-12">
          <img
            src="/hero-kit-mockup-recortado.jpg"
            alt="AirFryer Recipe Book"
            className="w-full max-w-md mx-auto rounded-lg shadow-md text-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;