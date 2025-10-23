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
    icon: <Utensils className="w-5 h-5" />,
    title: "Clasificar",
    description: "recetas por objetivo para decidir sin pensar",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Reloj",
    description: "tiempos exactos por alimento + ajustes por capacidad",
  },
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "Ingrediente",
    description: "sustitutos simples del súper",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Sazonar",
    description: "combinaciones probadas con menos aceite",
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    title: "Precalentar",
    description: "protocolo 3-5 min para crocancia consistente",
  },
];

const testimonials = [
  {
    name: "Sofía L.",
    text: "¡Salvó mis cenas entre semana! Mi freidora de aire era solo para papas fritas congeladas. Intenté hacer otras cosas, pero siempre quedaban secas o blandas. Como mamá de dos niños, no tengo tiempo para experimentar y fallar. Este recetario cambió todo. Ahora hago pollo jugoso, vegetales crujientes y hasta postres en menos de 20 minutos. ¡Mi familia está comiendo más sano y delicioso que nunca!",
    avatar: "/placeholder.svg"
  },
  {
    name: "Javier R.",
    text: "Pensé que mi freidora no servía, ¡el que no servía era yo! Estaba a punto de regalar mi Air Fryer. Todo lo que cocinaba era un desastre. Compré este ebook sin mucha fe y ¡wow! El problema no era el aparato, era que no tenía idea de los tiempos y temperaturas. Las instrucciones son súper fáciles de seguir, a prueba de tontos. La semana pasada hice unas alitas de pollo que quedaron mejores que las de mi restaurante favorito.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Isabella G.",
    text: "Mucho más que solo papas fritas. Compré la Air Fryer para comer más saludable, pero estaba aburrida de comer siempre lo mismo. Expres al Sabor me abrió un mundo de posibilidades. He probado recetas de pescado, panes, quiches y hasta el pack sin gluten es fantástico. Las recetas son sabrosas y para nada aburridas. Por fin estoy usando mi freidora todos los días y disfrutando mi comida.",
    avatar: "/placeholder.svg"
  }
];

const ProblemSolutionSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-12">
          Si te reconoces en esto, este kit es para ti:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 rounded-lg text-center text-lg bg-white shadow-sm"
            >
              {problem}
            </div>
          ))}
        </div>

        <CtaButton className="text-lg px-8 py-4">
          Quiero una solución simple →
        </CtaButton>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-900 text-center mb-12">
          Lo que dicen nuestros clientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.alt = "Avatar placeholder";
                  }}
                />
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-8">
          ¿Por qué esto funciona cuando otras recetas fallan?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Aplicamos el <span className="font-bold text-brand-primary">Sistema C.R.I.S.P.</span>:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {crispSteps.map((step, index) => (
            <CrispStep key={index} {...step} />
          ))}
        </div>
      </div>

      <div className="p-6 border border-brand-secondary/30 rounded-lg text-center max-w-2xl mx-auto bg-brand-success-bg">
        <p className="text-lg font-medium text-gray-800">
          Resultado: platos listos en <span className="font-bold text-brand-primary">10–15 min</span>, incluso si eres principiante.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSolutionSection;