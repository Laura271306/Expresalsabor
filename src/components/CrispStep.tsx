import React from 'react';
import { Utensils, Clock, ShoppingCart, Star, Thermometer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CrispStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CrispStep: React.FC<CrispStepProps> = ({ icon, title, description }) => {
  return (
    <Card className="p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full text-brand-primary bg-brand-light">
          {icon}
        </div>
      </div>
      <h4 className="font-medium text-lg text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </Card>
  );
};

export default CrispStep;