import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  imageSrc: string;
  title: string;
  time: string;
  temperature: string;
  details?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ imageSrc, title, time, temperature, details }) => {
  return (
    <Card className="overflow-hidden border border-gray-200">
      <div className="relative h-48 w-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
            e.currentTarget.alt = "Placeholder image";
          }}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-3 text-center">{title}</h3>
        <div className={cn("text-sm text-gray-600", details ? 'grid grid-cols-2 gap-2' : 'flex justify-center space-x-4')}>
          <div className={cn(details && 'text-left')}>
            <span className="font-medium">Tiempo:</span> {time}
          </div>
          <div className={cn(details && 'text-right')}>
            <span className="font-medium">Temperatura:</span> <span className="text-orange-600 font-medium">{temperature}</span>
          </div>
        </div>
      </CardContent>
      {details && (
        <CardFooter className="p-4 pt-0 text-sm text-center text-gray-500">
          {details}
        </CardFooter>
      )}
    </Card>
  );
};

export default RecipeCard;