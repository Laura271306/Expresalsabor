import React from 'react';
import SectionWrapper from './SectionWrapper';
import FeatureListItem from './FeatureListItem';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Gift } from 'lucide-react';

const mainProductItems = [
  "Colección \"Fundamentos + Guías Prácticas de la Airfryer\"",
  "Colección \"Recetas Rápidas & Del Día a Día\" (variadas)",
  "365 recetas en tu freidora de aire",
  "Colección \"Proteínas & Comidas para la Familia\"",
  "Colección \"Veggie, Fit & Sin Gluten\" (opções saudáveis)",
  "15 Postres Fit",
  "Colección \"Postres & Snacks\"",
];

const bonusItems = [
  "Checklist \"10 Errores que arruinan tus recetas en la Airfryer\"",
  "15 Postres Fit — dulce sin culpa",
  "Calendario sencillo de cocina (30 días)",
  "Guía de Compras Inteligentes / Economía mensual",
  "Guía Exprés: Limpieza y Mantenimiento",
  "Mis mejores recetas en freidora de aire",
  "Receta de la Freidora de Aire / Air Fryer Cookbook",
  "Libro de cocina AirFryer",
  "El Libro de Cocina de la Freidora de Aire",
  "100+ Recetas Airfryer",
  "100 Deliciosas Recetas",
];

const ProductContentSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          Todo lo que recibes hoy
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Acceso inmediato a todo el contenido digital
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10">
        
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
        <CtaButton className="text-xl px-10 py-5">
          Comprar ahora
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default ProductContentSection;