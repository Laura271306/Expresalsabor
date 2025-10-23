import React from 'react';
import SectionWrapper from './SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqCtaCard from './FaqCtaCard';

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

      {/* Novo CTA Card adicionado aqui */}
      <div className="mb-12">
        <FaqCtaCard />
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className="mb-3">
            <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;