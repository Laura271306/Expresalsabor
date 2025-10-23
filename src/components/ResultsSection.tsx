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
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-10"> {/* Reduzindo mb-12 para mb-10 */}
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          Esto es lo que puedes lograr con tu AirFryer
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Resultados reales, crocancia perfecta en minutos
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto mb-8"> {/* Reduzindo mb-10 para mb-8 */}
        <Carousel className="w-full">
          <CarouselContent>
            {placeholderImages.map((src, index) => (
              <CarouselItem 
                key={index} 
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/7"
              >
                <Card className="border-0 shadow-none">
                  <CardContent className="p-2">
                    <img
                      src={src}
                      alt={`Receta ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
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
        <p className="font-medium mb-4 text-xl font-bold text-brand-primary"> {/* Reduzindo mb-6 para mb-4 e text-2xl para text-xl */}
          600+ recetas como estas te esperan
        </p>
        <CtaButton className="text-xl px-10 py-5"> {/* Padronizando para CTA secundário */}
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default ResultsSection;