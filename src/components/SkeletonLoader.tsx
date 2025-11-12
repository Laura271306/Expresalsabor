import React from 'react';

const SkeletonLoader: React.FC = () => (
  <div className="w-full py-8 px-4" aria-busy="true" aria-live="polite">
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header skeleton - usando design tokens */}
      <div className="h-10 bg-muted rounded-lg w-3/4 mx-auto animate-pulse" style={{ animationDuration: '1.5s' }} />
      
      {/* Content blocks - reduzido para 2 blocos para melhor performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="space-y-3">
            <div className="h-40 bg-muted rounded-lg animate-pulse" style={{ animationDuration: '1.5s', animationDelay: `${i * 0.1}s` }} />
            <div className="h-3 bg-muted rounded w-3/4 animate-pulse" style={{ animationDuration: '1.5s', animationDelay: `${i * 0.1}s` }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonLoader;
