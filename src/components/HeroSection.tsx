import React from 'react';
import CtaButton from './CtaButton';
import FeatureListItem from './FeatureListItem';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-50 pt-12 pb-20">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        
        {/* New header/banner */}
        <div 
          className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 text-gray-800" 
          style={{ backgroundColor: '#A9CCB9' }}
        >
          Aprobado por principiantes, resultados perfectos desde el primer uso.
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-6 leading-tight">
            <span 
              className="relative inline-block font-bold"
              style={{ 
                color: '#e58634',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(229, 134, 52, 0.2)'
              }}
            >
              La solución definitiva para activar el <span style={{ color: '#8B0000' }}>"Modo Chef"</span> de tu freidora de aire
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto font-bold">
            El secreto para usar bien tu AirFryer (y no fallar más)
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-4">
            <FeatureListItem className="text-base">
              <span className="font-medium">Verás tiempos/temperaturas claros en cada receta</span>
            </FeatureListItem>
            <FeatureListItem className="text-base">
              <span className="font-medium">Menos decisiones: menús e listas de compras</span>
            </FeatureListItem>
            <FeatureListItem className="text-base">
              <span className="font-medium">Acesso Imediato • Garantía 7 días</span>
            </FeatureListItem>
          </div>
          
          <div className="text-lg md:text-xl text-gray-700 mb-6">
            <span className="font-bold" style={{ color: '#e58634' }}>600+ recetas</span> AirFryer por objetivo. Cero ensayo-error desde el día 1.
          </div>
        </div>

        <div className="mb-6">
          <CtaButton className="text-lg px-10 py-5 text-xl">
            Quiero crocancia hoy (US$ 5,50)
          </CtaButton>
          <p className="text-sm text-gray-500 mt-2">
            <span style={{ color: '#8B0000' }}>*Oferta válida por tiempo limitado</span>
          </p>
        </div>

        <div className="mt-8">
          <img
            src="/hero-kit-mockup-recortado.jpg"
            alt="AirFryer Recipe Book"
            className="w-full max-w-lg mx-auto rounded-lg shadow-md text-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;