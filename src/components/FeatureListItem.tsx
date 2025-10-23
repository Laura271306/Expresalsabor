import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureListItemProps {
  children: React.ReactNode;
  className?: string;
  iconColor?: string;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ children, className, iconColor = 'text-orange-600' }) => {
  return (
    <div className={cn("flex items-start space-x-3", className)}>
      <CheckCircle className={cn("w-5 h-5 flex-shrink-0 mt-0.5", iconColor)} />
      <p className="text-gray-700">{children}</p>
    </div>
  );
};

export default FeatureListItem;