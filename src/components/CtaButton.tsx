import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      className={cn(
        "bg-cta-green text-white text-lg md:text-xl font-bold py-7 px-10 rounded-xl shadow-lg hover:bg-cta-green/90 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CtaButton;