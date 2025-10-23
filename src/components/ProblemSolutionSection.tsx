import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import CrispStep from './CrispStep';
import { Utensils, Clock, ShoppingCart, Star, Thermometer, XCircle } from 'lucide-react';

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

const StarRating: React.FC = () => (
  <div className="flex justify-center mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const testimonials = [
  {
    name: "Sofía L.",
    country: "México 🇲🇽",
    text: "¡Salvó mis cenas entre semana! Mi freidora de aire era solo para papas fritas congeladas. Intenté hacer otras cosas, pero siempre quedaban secas o blandas. Como mamá de dos niños, no tengo tiempo para experimentar y fallar. Este recetario cambió todo. Ahora hago pollo jugoso, vegetales crujientes y hasta postres en menos de 20 minutos. ¡Mi familia está comiendo más sano y delicioso que nunca!",
    avatar: "/placeholder.svg"
  },
  {
    name: "Javier R.",
    country: "Colombia 🇨🇴",
    text: "Pensé que mi freidora no servía, ¡el que no servía era yo! Estaba a punto de regalar mi Air Fryer. Todo lo que cocinaba era un desastre. Compré este ebook sin mucha fe y ¡wow! El problema no era el aparato, era que no tenía idea de los tiempos y temperaturas. Las instrucciones son súper fáciles de seguir, a prueba de tontos. La semana pasada hice unas alitas de pollo que quedaron mejores que las de mi restaurante favorito.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Isabella G.",
    country: "Chile 🇨🇱",
    text: "Mucho más que solo papas fritas. Compré la Air Fryer para comer más saludable, pero estaba aburrida de comer siempre lo mismo. Expres al Sabor me abrió un mundo de posibilidades. He probado recetas de pescado, panes, quiches y hasta el pack sin gluten es fantástico. Las recetas son sabrosas y para nada aburridas. Por fin estoy usando mi freidora todos los días y disfrutando mi comida.",
    avatar: "/placeholder.svg"
  }
];

const ProblemSolutionSection: React.FC = () => {
  const ctaLink = "https://pay.kiwify.com/0h3yyq8";

  return (
    <SectionWrapper bgColor="light-gray">
      <div className="text-center mb-12"> {/* Padronizando mb-12 */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"> {/* Usando font-bold para consistência */}
          Si te reconoces en esto, este kit es para ti:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8"> {/* Padronizando mb-8 antes do CTA */}
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="p-4 border-2 border-red-300 rounded-lg text-left text-lg bg-white shadow-lg flex items-start space-x-3"
            >
              <XCircle className="w-6 h-6 flex-shrink-0 text-red-600 mt-0.5" />
              <span className="font-semibold text-gray-800">{problem}</span>
            </div>
          ))}
        </div>

        <CtaButton href={ctaLink}>
          Comprar ahora
        </CtaButton>
      </div>

      {/* Testimonial Section - Increased prominence */}
      <div className="mb-12 md:mb-16 p-6 rounded-xl bg-brand-success-bg shadow-inner">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-8">
          Lo que dicen nuestros clientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-5 border border-gray-200 rounded-lg bg-white shadow-lg">
              <StarRating />
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
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"> {/* Usando font-bold e mb-4 */}
          ¿Por qué esto funciona cuando otras recetas fallan?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"> {/* Padronizando subtítulo */}
          Aplicamos el <span className="font-bold text-brand-primary">Sistema C.R.I.S.P.</span>:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {crispSteps.map((step, index) => (
            <CrispStep key={index} {...step} />
          ))}
        </div>
      </div>

      <div className="p-5 border border-brand-secondary/30 rounded-lg text-center max-w-2xl mx-auto bg-brand-success-bg">
        <p className="text-lg font-medium text-gray-800">
          Resultado: platos listos en <span className="font-bold text-brand-primary">10–15 min</span>, incluso si eres principiante.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSolutionSection;