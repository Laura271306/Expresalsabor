import React from 'react';
import CtaButton from './CtaButton';
import FeatureListItem from './FeatureListItem';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-amber-50 dark:bg-amber-950 pt-12 pb-16 md:pt-24 md:pb-32">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-cta-orange">La solución definitiva para activar el "Modo Chef" de tu freidora</span>
            </h1>
            
            <p className="text-lg text-graphite font-bold">
              El secreto para usar bien tu AirFryer (y no fallar más)
            </p>

            <div className="space-y-3 pt-4">
              <FeatureListItem>Verás tiempos/temperaturas claros en cada receta</FeatureListItem>
              <FeatureListItem>Menos decisiones: menús y listas de compras</FeatureListItem>
              <FeatureListItem>Acceso Inmediato • Garantía 7 días</FeatureListItem>
              <FeatureListItem>
                <span className="font-bold text-cta-orange">600+ recetas</span> AirFryer por objetivo. Cero ensayo-error desde el día 1.
              </FeatureListItem>
            </div>

            <div className="pt-6">
              <CtaButton>
                Quiero crocancia hoy (US$ 5,50)
              </CtaButton>
              <p className="text-xs mt-2 text-cta-orange">
                *Oferta válida por tiempo limitado
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 md:md-0">
            <img
              src="/hero-kit-mockup-recortado.jpg"
              alt="AirFryer Recipe Book"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md text-sm font-medium">
                Tablas de tiempos exactos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;