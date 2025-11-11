import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-red-700 border-b border-red-800 py-2 text-center sticky top-0 z-10">
      <p className="text-sm font-bold text-white">
        🔥 OFERTA VÁLIDA SOLO HOY • ¡Compra ahora!
      </p>
    </div>
  );
};

export default TopBanner;