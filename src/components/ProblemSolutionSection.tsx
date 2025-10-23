import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import CrispStep from './CrispStep';
import { Utensils, Clock, ShoppingCart, Star, Thermometer } from 'lucide-react';

const problems = [
  "Mi AirFryer deja la comida blanda o seca.",
  "Paso más tiempo buscando que cocinando.",
  "Repito las mismas 5 recetas y me aburro.",
  "Termino pidiendo delivery entre semana.",
];

const crispSteps = [
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Clasificar",
    description: "recetas por objetivo para decidir sin pensar",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Reloj",
    description: "tiempos exactos por alimento + ajustes por capacidad",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Ingrediente",
    description: "sustitutos simples del súper",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Sazonar",
    description: "combinaciones probadas con menos aceite",
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Precalentar",
    description: "protocolo 3-5 min para crocancia consistente",
  },
];

const testimonials = [
  {
    name: "María G.",
    text: "¡Finalmente puedo hacer papas crocantes! Mis hijos ya no piden comida rápida.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Carlos R.",
    text: "Paso de 45 minutos a 15 minutos en la cocina. Las tablas de tiempos son oro puro.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Ana M.",
    text: "Dejé de repetir las mismas 3 recetas. Ahora tengo variedad y mi familia está feliz.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Luis P.",
    text: "Ahorré $80 el primer mes sin pedir delivery. El kit se pagó solo en una semana.",
    avatar: "/placeholder.svg"
  }
];

const ProblemSolutionSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Si te reconoces en esto, este kit es para ti:
        </h2>
        
        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="p-4 border border-gray-200 rounded-lg text-center text-lg bg-white shadow-sm"
            >
              {problem}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CtaButton className="w-full sm:w-auto">
            Quiero una solución simple →
          </CtaButton>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Lo que dicen nuestros clientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.alt = "Avatar placeholder";
                  }}
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CRISP Method Explanation */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Por qué esto funciona cuando otras recetas fallan?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          Aplicamos el <span className="font-bold text-orange-600">Sistema C.R.I.S.P.</span>:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {crispSteps.map((step, index) => (
            <CrispStep key={index} {...step} />
          ))}
        </div>
      </div>

      {/* Result Banner */}
      <div className="mt-12 p-4 bg-green-100 dark:bg-green-900 border-l-4 border-cta-green rounded-lg text-center">
        <p className="font-bold text-lg text-gray-800 dark:text-gray-200">
          Resultado: platos listos en <span className="text-orange-600">10–15 min</span>, incluso si eres principiante.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSolutionSection;