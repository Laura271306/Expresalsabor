import React from 'react';
import SectionWrapper from './SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Sirve para 3,5 L / 5,5 L?",
    answer: "Sí, el método C.R.I.S.P. incluye una guía rápida de ajuste por capacidad que te permite adaptar los tiempos y temperaturas a freidoras de 3.5L, 4L, 5.5L y más grandes, asegurando resultados perfectos sin importar el modelo.",
  },
  {
    question: "¿Ingredientes caros?",
    answer: "No. Todas las recetas están diseñadas para usar ingredientes comunes y fáciles de encontrar en cualquier supermercado. Nuestro objetivo es simplificar la cocina, no complicarla.",
  },
  {
    question: "¿Opciones fit/sin gluten?",
    answer: "Absolutamente. El kit incluye colecciones específicas como 'Veggie, Fit & Sin Gluten' y '15 Postres Fit', ofreciendo opciones saludables y adaptadas a diversas necesidades dietéticas.",
  },
  {
    question: "¿Cuánto tardo en organizarme?",
    answer: "El acceso es inmediato. Puedes empezar a usar las tablas de tiempos exactos y las primeras recetas en menos de 5 minutos. El kit está diseñado para ser usado de inmediato, eliminando la curva de aprendizaje.",
  },
  {
    question: "¿Formato y acceso?",
    answer: "El kit es 100% digital (PDFs y guías descargables) con acceso inmediato tras la compra. Puedes consultarlo en tu teléfono, tablet o imprimirlo.",
  },
  {
    question: "¿Reembolso?",
    answer: "Ofrecemos una garantía de 7 días sin riesgo. Si no estás satisfecho con los resultados o sientes que no te ahorra tiempo, te devolvemos el 100% de tu dinero, sin preguntas.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="max-w-3xl mx-auto" role="region" aria-label="Preguntas frecuentes sobre el Kit Maestro">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-border rounded-lg bg-card"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:no-underline hover:bg-muted/50 rounded-lg transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;