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
  "Colección \"Veggie, Fit & Sin Gluten\" (opciones saludables)",
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
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
          Todo lo que recibes hoy
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Acceso inmediato a todo el contenido digital
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        <Card className="p-8 border-l-4" style={{ borderColor: '#e58634' }}>
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-full text-white mr-3" style={{ backgroundColor: '#e58634' }}>
              <Package className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Producto Principal</h3>
          </div>
          <div className="space-y-4">
            {mainProductItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e58634' }}></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 border-l-4" style={{ borderColor: '#657a38' }}>
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-full text-white mr-3" style={{ backgroundColor: '#657a38' }}>
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">Bónus y complementos</h3>
              <p className="text-sm text-gray-500">Incluidos por tiempo limitado</p>
            </div>
          </div>
          <div className="space-y-4">
            {bonusItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#657a38' }}></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="text-center">
        <CtaButton className="text-lg px-8 py-4">
          Quiero todo esto ahora (US$ 5,50)
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default ProductContentSection;