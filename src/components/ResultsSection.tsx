import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import CtaButton from './CtaButton';

const placeholderImages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const ResultsSection: React.FC = () => {
  const ctaLink = "https://pay.kiwify.com/0h3yyq8";

  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12"> {/* Padronizando mb-12 para o bloco de texto */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          Esto es lo que puedes lograr con tu AirFryer
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Resultados reales, crocancia perfecta en minutos
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mb-12"> {/* Padronizando mb-12 antes do CTA final */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-2"> {/* Ajustando margem negativa para melhor espaçamento */}
            {placeholderImages.map((src, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4" // Ajustando a densidade para 2, 3 ou 4 itens
              >
                <Card className="border-0 shadow-none">
                  <CardContent className="p-2">
                    <img
                      src={src}
                      alt={`Receta ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg transition-shadow hover:shadow-xl" // Aumentando altura para h-64 e melhorando sombra
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                        e.currentTarget.alt = "Placeholder image";
                      }}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/100 border border-gray-200 dark:border-gray-800 rounded-full p-2 hidden md:block" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/100 border border-gray-200 dark:border-gray-800 rounded-full p-2 hidden md:block" />
        </Carousel>
      </div>
      
      <div className="text-center">
        <p className="font-medium mb-6 text-2xl md:text-3xl font-bold text-brand-primary"> {/* Ajustando mb-6 */}
          600+ recetas como estas te esperan
        </p>
        <CtaButton href={ctaLink}>
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default ResultsSection;