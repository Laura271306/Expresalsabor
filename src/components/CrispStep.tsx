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
    <Card className="p-4 text-center border-none shadow-none bg-transparent">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900 text-orange-600">
          {icon}
        </div>
      </div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </Card>
  );
};

export default CrispStep;