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
    // Explicitly set white for contrast if needed, but for cream background, we can use bg-background (which is cream) or bg-white for contrast against the cream body.
    // Since the user requested a cream background for the whole site, we will let 'white' sections inherit the body background, which is now cream.
    // If we need a section to be pure white for contrast against the cream body, we would use 'bg-white'. Let's assume 'white' means the default background color (cream).
    backgroundClass = 'bg-background'; 
  }

  return (
    <section className={cn("py-16 md:py-24", backgroundClass, className)}>
      <div className="container max-w-6xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;