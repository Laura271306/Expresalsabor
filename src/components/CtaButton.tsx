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
        "bg-[#657a38] text-white hover:bg-[#526a30] transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CtaButton;