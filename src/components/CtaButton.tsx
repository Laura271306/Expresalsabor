import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  scrollTo?: string;
  'aria-label'?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  children, 
  className, 
  href = "https://pay.hotmart.com/I102633587P?checkoutMode=10",
  scrollTo,
  'aria-label': ariaLabel,
  ...props 
}) => {
  // Gera aria-label descritivo se não fornecido
  const defaultAriaLabel = scrollTo 
    ? `Ver sección ${scrollTo}` 
    : "Comprar Kit Maestro de Recetas AirFryer por US$ 5,50 - Acceso inmediato";
    
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Se for scroll anchor, previne comportamento padrão e faz scroll suave
    if (scrollTo) {
      e.preventDefault();
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    
    // Facebook Pixel events (apenas para botões de checkout)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ClickCTA');
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <a
      href={scrollTo ? `#${scrollTo}` : href}
      target={scrollTo ? undefined : "_blank"}
      rel={scrollTo ? undefined : "noopener noreferrer"}
      onClick={handleClick}
      aria-label={ariaLabel || defaultAriaLabel}
      className={cn(
        // Responsivo: menor no mobile, maior no desktop
        "inline-block bg-brand-secondary text-alert-danger-foreground hover:bg-brand-secondary/90 transition-colors duration-200",
        "text-xl md:text-2xl lg:text-3xl font-extrabold",
        "py-4 px-8 md:py-6 md:px-12 lg:py-7 lg:px-14",
        "rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02]",
        "text-center no-underline focus:outline-none focus:ring-4 focus:ring-brand-primary/50",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default CtaButton;