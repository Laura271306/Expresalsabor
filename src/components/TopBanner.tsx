import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 py-2 text-center sticky top-0 z-10">
      <p className="text-sm font-medium text-gray-700">
        Aprobado por principiantes, resultados perfectos desde el primer uso.
      </p>
    </div>
  );
};

export default TopBanner;