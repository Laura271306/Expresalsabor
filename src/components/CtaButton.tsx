import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  scrollTo?: string; // ID da seção para scroll suave
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  children, 
  className, 
  href = "https://pay.hotmart.com/I102633587P?checkoutMode=10",
  scrollTo,
  ...props 
}) => {
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
      className={cn(
        // Aumentando o padding base e garantindo font-extrabold
        "inline-block bg-brand-secondary text-white hover:bg-brand-secondary/90 transition-colors duration-200 text-3xl font-extrabold py-7 px-14 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] text-center no-underline", // Aumentado para text-3xl, py-7, px-14
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default CtaButton;