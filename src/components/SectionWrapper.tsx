import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'light-gray' | 'light-green';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, bgColor = 'white' }) => {
  let backgroundClass = ''; // Default to inheriting body background (cream)
  
  if (bgColor === 'light-gray') {
    backgroundClass = 'bg-gray-50';
  } else if (bgColor === 'light-green') {
    backgroundClass = 'bg-green-50';
  } else if (bgColor === 'white') {
    backgroundClass = 'bg-background'; 
  }

  return (
    <section className={cn("py-12 md:py-16", backgroundClass, className)}>
      <div className="container max-w-6xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;