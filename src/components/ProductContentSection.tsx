import React from 'react';
import SectionWrapper from './SectionWrapper';
import FeatureListItem from './FeatureListItem';
import CtaButton from './CtaButton';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Gift } from 'lucide-react';

const mainProductItems = [
  "Coleção “Fundamentos + Guías Prácticas da Airfryer”",
  "Coleção “Receitas Rápidas & Do Dia a Dia” (variadas)",
  "365 recetas en tu freidora de aire",
  "Coleção “Proteínas & Comidas para a Familia”",
  "Coleção “Veggie, Fit & Sem Glúten” (opções saudáveis)",
  "15 Postres Fit",
  "Coleção “Postres & Snacks”",
];

const bonusItems = [
  "Checklist “10 Errores que arruinan tus recetas en la Airfryer”",
  "15 Postres Fit — dulce sin culpa",
  "Calendario sencillo de cocina (30 días)",
  "Guía de Compras Inteligentes / Economía mensual",
  "Guía Exprés: Limpieza e Manutenção",
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
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Todo lo que recibes hoy
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Acceso inmediato a todo el contenido digital
        </p>
      </div>

      {/* Main Product Card */}
      <Card className="p-6 border-l-4 border-orange-600 bg-orange-50 dark:bg-orange-950 shadow-lg mb-10">
        <div className="flex items-center mb-6">
          <div className="p-2 rounded-full bg-orange-600 text-white mr-3">
            <Package className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200">Producto Principal</h3>
        </div>
        <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
          {mainProductItems.map((item, index) => (
            <FeatureListItem key={index} iconColor="text-orange-600">
              {item}
            </FeatureListItem>
          ))}
        </CardContent>
      </Card>

      {/* Bonuses Card */}
      <Card className="p-6 border-l-4 border-cta-green bg-green-50 dark:bg-green-950 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="p-2 rounded-full bg-cta-green text-white mr-3">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-cta-green">Bônus e complementos</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 bg-red-200 text-red-800 inline-block px-2 py-0.5 rounded mt-1">
              Incluídos por tiempo limitado
            </p>
          </div>
        </div>
        <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
          {bonusItems.map((item, index) => (
            <FeatureListItem key={index} iconColor="text-cta-green">
              {item}
            </FeatureListItem>
          ))}
        </CardContent>
        
        {/* Language Note */}
        <div className="mt-6 p-3 bg-white rounded-lg text-center text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
            <span role="img" aria-label="taco" className="mr-2">🌮</span> Todo el contenido está en <span className="font-bold ml-1">español</span>
        </div>
      </Card>

      <div className="text-center mt-10">
        <CtaButton className="w-full sm:w-auto">
          Quiero todo esto ahora (US$ 5,50)
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default ProductContentSection;