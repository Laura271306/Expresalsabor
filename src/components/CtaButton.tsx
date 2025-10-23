import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string; // Adicionando propriedade href
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, href, ...props }) => {
  const baseClasses = cn(
    "bg-brand-secondary text-white hover:bg-brand-secondary/90 transition-colors duration-200 text-3xl font-extrabold py-7 px-14 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02]",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        role="button"
      >
        {children}
      </a>
    );
  }

  return (
    <Button
      className={baseClasses}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CtaButton;