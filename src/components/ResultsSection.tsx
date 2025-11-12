import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import CtaButton from './CtaButton';
import airfryer1 from '@/assets/airfryer1.jpg';
import airfryer2 from '@/assets/airfryer2.jpg';
import airfryer3 from '@/assets/airfryer3.jpg';
import airfryer4 from '@/assets/airfryer4.jpg';
import airfryer5 from '@/assets/airfryer5.jpg';
import airfryer6 from '@/assets/airfryer6.jpg';
import airfryer7 from '@/assets/airfryer7.jpg';
import airfryer8 from '@/assets/airfryer8.jpg';
import airfryer9 from '@/assets/airfryer9.jpg';
import airfryer10 from '@/assets/airfryer10.jpg';
import airfryer11 from '@/assets/airfryer11.jpg';
import airfryer12 from '@/assets/airfryer12.jpg';
import airfryer13 from '@/assets/airfryer13.jpg';
import airfryer14 from '@/assets/airfryer14.jpg';

const recipeImages = [
  airfryer1,
  airfryer2,
  airfryer3,
  airfryer4,
  airfryer5,
  airfryer6,
  airfryer7,
  airfryer8,
  airfryer9,
  airfryer10,
  airfryer11,
  airfryer12,
  airfryer13,
  airfryer14,
];

const ResultsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          Esto es lo que puedes lograr con tu AirFryer
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Resultados reales, crocancia perfecta en minutos
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mb-8" style={{ contain: 'layout' }}>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {recipeImages.map((src, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="border-0 shadow-none">
                  <CardContent className="p-2">
                    <img
                      src={src}
                      alt={`Receta de AirFryer ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      loading="lazy"
                      decoding="async"
                      width="300"
                      height="256"
                      fetchPriority="low"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 hidden md:block" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 hidden md:block" />
        </Carousel>
      </div>
      
      <div className="text-center">
        <p className="font-medium mb-4 text-2xl md:text-3xl font-bold text-brand-primary">
          600+ recetas como estas te esperan
        </p>
        <CtaButton> {/* Removendo classes de tamanho, usando o padrão grande */}
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default ResultsSection;