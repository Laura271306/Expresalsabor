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
        // Aumentando o padding base e garantindo font-extrabold
        "bg-brand-secondary text-white hover:bg-brand-secondary/90 transition-colors duration-200 text-2xl font-extrabold py-6 px-12 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02]", // Aumentado para text-2xl, py-6, px-12 e shadow-xl
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CtaButton;