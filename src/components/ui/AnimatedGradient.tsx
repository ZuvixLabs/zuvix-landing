
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ 
  className,
  children 
}) => {
  return (
    <div className={cn(
      "relative overflow-hidden group",
      className
    )}>
      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-70 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-0 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-braindark-900 rounded-lg p-6 h-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedGradient;
