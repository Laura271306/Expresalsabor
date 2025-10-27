import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import CrispStep from './CrispStep';
import { Utensils, Clock, ShoppingCart, Star, Thermometer, XCircle, BadgeCheck } from 'lucide-react';
import avatarSofia from '@/assets/avatar-sofia.jpg';
import avatarJavier from '@/assets/avatar-javier.jpg';
import avatarIsabella from '@/assets/avatar-isabella.jpg';

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
    location: "Ciudad de México, México 🇲🇽",
    date: "Hace 2 semanas",
    text: "¡Salvó mis cenas entre semana! Mi freidora de aire solo servía para papas congeladas. Intenté hacer pollo y vegetales pero siempre quedaban secos o blandos. Como mamá de dos niños, no tengo tiempo para experimentar. Este kit cambió todo: ahora hago pollo jugoso, brócoli crujiente y hasta brownies en 20 minutos. Mi familia come más sano y delicioso.",
    highlight: "Ahorro 2 horas diarias en la cocina",
    verified: true,
    avatar: avatarSofia
  },
  {
    name: "Javier R.",
    location: "Bogotá, Colombia 🇨🇴",
    date: "Hace 1 mes",
    text: "Pensé que mi Air Fryer no servía... ¡el problema era yo! Estaba a punto de regalarla porque todo salía mal. Compré este recetario sin mucha fe y quedé impactado. El secreto estaba en los tiempos y temperaturas exactas que nunca supe. Las instrucciones son a prueba de tontos. La semana pasada hice alitas que quedaron mejor que las del restaurante.",
    highlight: "De principiante a chef casero",
    verified: true,
    avatar: avatarJavier
  },
  {
    name: "Isabella G.",
    location: "Santiago, Chile 🇨🇱",
    date: "Hace 3 semanas",
    text: "Compré la Air Fryer para comer saludable pero me aburrí rápido de lo mismo. Este kit me abrió un mundo nuevo: pescado, panes, quiches, postres... hasta el pack sin gluten es increíble. Las recetas son sabrosas y variadas. Ahora uso mi freidora todos los días y disfruto cada comida sin culpa.",
    highlight: "600+ recetas que realmente uso",
    verified: true,
    avatar: avatarIsabella
  },
  {
    name: "Carlos M.",
    location: "Buenos Aires, Argentina 🇦🇷",
    date: "Hace 5 días",
    text: "Como soltero que vive solo, mi dilema era: ¿cocinar y ensuciar todo o pedir delivery carísimo? Este kit resolvió mi vida. Recetas rápidas de una porción, ingredientes simples del súper, cero complicaciones. Ahora cocino desayuno, almuerzo y cena en mi Air Fryer. Estoy ahorrando más de $200 USD al mes en pedidos.",
    highlight: "Ahorro $200+ mensuales en delivery",
    verified: true,
    avatar: avatarJavier
  },
  {
    name: "María P.",
    location: "Lima, Perú 🇵🇪",
    date: "Hace 1 semana",
    text: "Tengo diabetes tipo 2 y necesitaba comer bajo en grasa pero sabroso. Probé decenas de recetas online pero todas fallaban o eran insípidas. Con este recetario encontré el equilibrio perfecto: comida deliciosa con 70% menos aceite. Los menús semanales me facilitan la planificación. Mi médico está impresionado con mis análisis.",
    highlight: "Comida sana que sabe increíble",
    verified: true,
    avatar: avatarSofia
  },
  {
    name: "Roberto S.",
    location: "Monterrey, México 🇲🇽",
    date: "Hace 2 días",
    text: "Mi esposa estaba frustrada con nuestra Air Fryer nueva. Le regalé este kit por nuestro aniversario y fue el mejor regalo. Ahora cocina cosas que yo ni sabía que se podían hacer: pasteles, empanadas, hasta pizza. La casa huele delicioso cada noche. Valió cada centavo, debería costar 10 veces más por todo lo que incluye.",
    highlight: "El regalo perfecto que funciona",
    verified: true,
    avatar: avatarJavier
  }
];

const ProblemSolutionSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light-gray"> {/* Alterado para light-gray */}
      <div className="text-center mb-10 md:mb-12"> {/* Reduzindo espaçamento */}
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6 md:mb-8"> {/* Reduzindo espaçamento */}
          Si te reconoces en esto, este kit es para ti:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6"> {/* Reduzindo mb-8 para mb-6 */}
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="p-4 border-2 border-red-300 rounded-lg text-left text-lg bg-white shadow-lg flex items-start space-x-3" // Reduzindo p-5 para p-4 e text-xl para text-lg
            >
              <XCircle className="w-6 h-6 flex-shrink-0 text-red-600 mt-0.5" />
              <span className="font-semibold text-gray-800">{problem}</span>
            </div>
          ))}
        </div>

        <CtaButton> {/* Removendo classes de tamanho, usando o padrão grande */}
          Comprar ahora
        </CtaButton>
      </div>

      {/* Testimonial Section - Enhanced and more persuasive */}
      <div className="mb-12 md:mb-16 p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            Lo que dicen nuestros clientes
          </h3>
          <p className="text-lg text-gray-600">
            Más de <span className="font-bold text-brand-primary">2,847 personas</span> transformaron su Air Fryer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative p-6 border-2 border-gray-100 rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <StarRating />
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3 object-cover border-2 border-brand-primary"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-3 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm font-semibold text-gray-800">
                  ✨ {testimonial.highlight}
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 p-4 bg-white rounded-lg shadow-md border-2 border-green-300">
          <p className="text-sm text-gray-600">
            ⭐ <span className="font-bold">4.9/5</span> basado en 2,847 reseñas verificadas
          </p>
        </div>
      </div>

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