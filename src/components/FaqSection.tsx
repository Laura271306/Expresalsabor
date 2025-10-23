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
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Preguntas Frecuentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white px-4 rounded-lg shadow-sm mb-3 border-none">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 p-4 pt-0">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;