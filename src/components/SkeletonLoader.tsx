import React from 'react';

const SkeletonLoader: React.FC = () => (
  <div className="w-full py-8 px-4 animate-pulse" aria-busy="true" aria-live="polite">
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header skeleton */}
      <div className="h-12 bg-gray-200 rounded-lg w-3/4 mx-auto skeleton" />
      
      {/* Content blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-3">
            <div className="h-48 bg-gray-200 rounded-lg skeleton" />
            <div className="h-4 bg-gray-200 rounded w-3/4 skeleton" />
            <div className="h-4 bg-gray-200 rounded w-1/2 skeleton" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonLoader;
