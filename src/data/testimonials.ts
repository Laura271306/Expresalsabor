import avatarSofia from '@/assets/avatar-sofia.jpg';
import avatarJavier from '@/assets/avatar-javier.jpg';
import avatarIsabella from '@/assets/avatar-isabella.jpg';

export interface Testimonial {
  name: string;
  location: string;
  date: string;
  text: string;
  highlight: string;
  verified: boolean;
  avatar: string;
}

export const testimonials: Testimonial[] = [
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
