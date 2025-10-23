import React from 'react';
import CtaButton from './CtaButton';
import FeatureListItem from './FeatureListItem';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-background dark:bg-gray-50 pt-10 pb-12 md:pt-12 md:pb-16">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Coluna de Conteúdo (Texto e CTA) */}
          <div className="text-center lg:text-left">
            
            <div className="mb-6 md:mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-4 md:mb-6 leading-tight">
                <span 
                  className="relative inline-block font-bold text-[var(--color2)]" // Using brand-primary
                  style={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(229, 134, 52, 0.2)'
                  }}
                >
                  La solución definitiva para activar el <span className="text-red-700">"Modo Chef"</span> de tu freidora de aire
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-4 md:mb-6 max-w-3xl mx-auto lg:mx-0 font-bold">
                El secreto para usar bien tu AirFryer (y no fallar más)
              </p>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="flex flex-col gap-3 items-center lg:items-start mb-4">
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
                <span className="font-bold text-brand-primary">600+ recetas</span> AirFryer por objetivo. Cero ensayo-error desde el día 1.
              </div>
            </div>

            <div className="mb-6 text-center lg:text-left">
              <CtaButton className="text-2xl px-12 py-6 font-extrabold">
                Comprar ahora
              </CtaButton>
              <p className="text-sm text-gray-500 mt-2">
                <span className="text-red-700">*Oferta válida por tiempo limitado</span>
              </p>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src="/hero-kit-mockup-recortado.jpg"
              alt="AirFryer Recipe Book"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-2xl shadow-brand-primary/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;