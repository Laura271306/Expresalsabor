import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div 
      className="w-full bg-alert-danger border-b border-alert-danger/80 py-2 text-center sticky top-0 z-50" 
      role="banner"
      aria-label="Oferta especial de tiempo limitado"
    >
      <p className="text-sm font-bold text-alert-danger-foreground">
        🔥 OFERTA VÁLIDA SOLO HOY • ¡Compra ahora!
      </p>
    </div>
  );
};

export default TopBanner;