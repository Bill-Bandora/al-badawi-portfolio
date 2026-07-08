import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

export function RevealOnScroll({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`transition duration-700 motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} ${className}`}>
      {children}
    </div>
  );
}
