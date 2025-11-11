import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import CrispStep from './CrispStep';
import { Utensils, Clock, ShoppingCart, Star, Thermometer, XCircle, BadgeCheck } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

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
  <div className="flex justify-center mb-3" role="img" aria-label="Calificación 5 de 5 estrellas">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
    ))}
  </div>
);

const ProblemSolutionSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray"> {/* Alterado para light-gray */}
      <div className="text-center mb-10 md:mb-12"> {/* Reduzindo espaçamento */}
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6 md:mb-8"> {/* Reduzindo espaçamento */}
          Si te reconoces en esto, este kit es para ti:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="p-4 border-2 border-alert-danger/30 rounded-lg text-left text-base md:text-lg bg-card shadow-lg flex items-start space-x-3"
            >
              <XCircle className="w-6 h-6 flex-shrink-0 text-alert-danger mt-0.5" aria-hidden="true" />
              <span className="font-semibold text-foreground">{problem}</span>
            </div>
          ))}
        </div>

        <CtaButton> {/* Removendo classes de tamanho, usando o padrão grande */}
          Comprar ahora
        </CtaButton>
      </div>

      {/* Testimonial Section - Enhanced and more persuasive */}
      <section 
        className="mb-12 md:mb-16 p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200"
        aria-label="Testimonios de clientes"
      >
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Lo que dicen nuestros clientes
          </h3>
          <p className="text-lg text-muted-foreground">
            Más de <span className="font-bold text-brand-primary">2,847 personas</span> transformaron su Air Fryer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index} 
              className="relative p-6 border-2 border-border rounded-xl bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <StarRating />
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  {testimonial.verified && (
                    <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" aria-label="Compra verificada" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </div>
              
              <div className="mb-3 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm font-semibold text-foreground">
                  ✨ {testimonial.highlight}
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8 p-4 bg-card rounded-lg shadow-md border-2 border-green-300">
          <p className="text-sm text-muted-foreground">
            ⭐ <span className="font-bold">4.9/5</span> basado en 2,847 reseñas verificadas
          </p>
        </div>
      </section>

      <div className="text-center mb-12 md:mb-16"> {/* Reduzindo espaçamento */}
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
          ¿Por qué esto funciona cuando otras recetas fallan?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"> {/* Aumentando o tamanho da fonte aqui */}
          Aplicamos el <span className="font-bold text-brand-primary">Sistema C.R.I.S.P.</span>:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"> {/* Reduzindo gap-6 para gap-4 */}
          {crispSteps.map((step, index) => (
            <CrispStep key={index} {...step} />
          ))}
        </div>
      </div>

      <div className="p-5 border border-brand-secondary/30 rounded-lg text-center max-w-2xl mx-auto bg-brand-success-bg"> {/* Reduzindo p-6 para p-5 */}
        <p className="text-lg font-medium text-gray-800">
          Resultado: platos listos en <span className="font-bold text-brand-primary">10–15 min</span>, incluso si eres principiante.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSolutionSection;