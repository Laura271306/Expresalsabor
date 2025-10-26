import React from 'react';
import CtaButton from './CtaButton';
import FeatureListItem from './FeatureListItem';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-kit-mockup-recortado.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-background dark:bg-gray-50 pt-10 pb-12 md:pt-12 md:pb-16">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Layout de Duas Colunas: Conteúdo à Esquerda, Foto à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Coluna de Conteúdo - À ESQUERDA */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            
            {/* Título Principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-900 leading-tight mb-6">
              <span className="font-bold text-[var(--color2)]">
                La solución definitiva para activar el{' '}
                <span className="text-red-700">"Modo Chef"</span>
                <br className="hidden lg:block" />
                de tu freidora de aire
              </span>
            </h1>

            {/* Subtítulo */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-gray-600 mb-4 font-bold">
                El secreto para usar bien tu AirFryer (y no fallar más)
              </p>
              <div className="text-lg md:text-xl text-gray-700 mb-6">
                <span className="font-bold text-brand-primary">600+ recetas</span> AirFryer por objetivo. Cero ensayo-error desde el día 1.
              </div>
            </div>

            {/* Features List */}
            <div className="mb-6">
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
            </div>

            {/* CTA Button */}
            <div className="mb-6 text-center lg:text-left">
              <CtaButton>
                Comprar ahora
              </CtaButton>
              <p className="text-sm text-gray-500 mt-2">
                <span className="text-red-700">*Oferta válida por tiempo limitado</span>
              </p>
            </div>
          </div>

          {/* Coluna da Imagem - À DIREITA */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="AirFryer Recipe Book"
              className="w-full max-w-md rounded-lg shadow-2xl shadow-brand-primary/50"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;