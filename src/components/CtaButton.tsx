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
        // Aumentando o padding base e garantindo font-bold
        "bg-brand-secondary text-white hover:bg-brand-secondary/90 transition-colors duration-200 text-xl font-extrabold py-5 px-10 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CtaButton;