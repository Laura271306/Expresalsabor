import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureListItemProps {
  children: React.ReactNode;
  className?: string;
  iconColor?: string;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ children, className, iconColor = 'text-mint-sage' }) => {
  return (
    <div className={cn("flex items-start space-x-3 text-lg", className)}>
      <CheckCircle className={cn("w-6 h-6 flex-shrink-0 mt-1", iconColor)} />
      <p>{children}</p>
    </div>
  );
};

export default FeatureListItem;