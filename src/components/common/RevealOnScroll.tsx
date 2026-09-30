import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

export function RevealOnScroll({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: visible ? `${delay}ms` : '0ms' };
  return (
    <div ref={ref} style={style} className={`transition duration-700 motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} ${className}`}>
      {children}
    </div>
  );
}
