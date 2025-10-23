import React from 'react';
import SectionWrapper from './SectionWrapper';
import FeatureListItem from './FeatureListItem';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Gift } from 'lucide-react';

const mainProductItems = [
  "650 Recetas para AirFryer",
  "365 Recetas en tu Freidora de Aire",
  "Freidora de aire: 300 recetas sanas y sabrosas que se preparan en 5 minutos",
  "100 Deliciosas Recetas para Freidora de Aire",
  "Libro de Cocina de la Freidora de Aire",
  "Receta de la Freidora de Aire en Español",
  "El libro de cocina de la freidora de aire",
];

const bonusItems = [
  "Checklist: 10 Errores que Arruinan tus recetas en la Airfryer",
  "Guía de Compras Inteligentes: ¡Revoluciona tus compras y ahorra dinero cada mes!",
  "Libro de Cocina de la Freidora de Aire para Principiantes: Más de 100 recetas...",
  "Ebook: ¡Descubre 15 Postres Fit Que Te Permitirán Disfrutar Lo Dulce Sin Culpa!",
  "Ebook: 30 Recetas de Galletas Sin Gluten",
  "Ebook: Mis mejores recetas en freidora de aire",
];

const ProductContentSection: React.FC = () => {
  const ctaLink = "https://pay.kiwify.com/0h3yyq8";

  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12"> {/* Padronizando mb-12 */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"> {/* Usando font-bold para consistência */}
          Todo lo que recibes hoy
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"> {/* Padronizando subtítulo e mb-8 */}
          Acceso inmediato a todo el contenido digital
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12"> {/* Padronizando mb-12 antes do CTA */}
        
        {/* Card 1: Producto Principal */}
        <Card className="p-6 border-t-4 border-brand-primary shadow-lg bg-gray-50">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full text-white mr-4 bg-brand-primary">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Kit Maestro (600+ Recetas)</h3>
          </div>
          <div className="space-y-4">
            {mainProductItems.map((item, index) => (
              <FeatureListItem key={index} className="text-base text-left">
                <span className="font-medium text-gray-800">{item}</span>
              </FeatureListItem>
            ))}
          </div>
        </Card>

        {/* Card 2: Bónus */}
        <Card className="p-6 border-t-4 border-brand-secondary shadow-lg bg-gray-50">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full text-white mr-4 bg-brand-secondary">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Bónus Exclusivos</h3>
              <p className="text-sm text-red-700 font-semibold">Incluidos por tiempo limitado</p>
            </div>
          </div>
          <div className="space-y-4">
            {bonusItems.map((item, index) => (
              <FeatureListItem key={index} className="text-base text-left">
                <span className="font-medium text-gray-800">{item}</span>
              </FeatureListItem>
            ))}
          </div>
        </Card>
      </div>

      <div className="text-center">
        <CtaButton href={ctaLink}>
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default ProductContentSection;