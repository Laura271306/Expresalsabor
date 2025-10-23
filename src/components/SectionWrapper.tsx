import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'light-gray' | 'light-green';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, bgColor = 'white' }) => {
  let backgroundClass = 'bg-white dark:bg-background';
  if (bgColor === 'light-gray') {
    backgroundClass = 'bg-gray-50 dark:bg-gray-900';
  } else if (bgColor === 'light-green') {
    backgroundClass = 'bg-green-50 dark:bg-green-950';
  }

  return (
    <section className={cn("py-12 md:py-20", backgroundClass, className)}>
      <div className="container max-w-4xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;