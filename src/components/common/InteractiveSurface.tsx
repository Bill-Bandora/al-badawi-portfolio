import { useRef, type MouseEvent, type ReactNode } from 'react';

export function MouseGlow({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function track(event: MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--glow-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--glow-y', `${event.clientY - bounds.top}px`);
  }

  return <div ref={ref} onMouseMove={track} className={`mouse-glow ${className}`}>{children}</div>;
}

export function TiltSurface({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function tilt(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (hover: none)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.transform = `perspective(1100px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-3px)`;
  }

  function reset() {
    if (ref.current) ref.current.style.transform = '';
  }

  return <div ref={ref} onMouseMove={tilt} onMouseLeave={reset} className={`project-frame ${className}`}>{children}</div>;
}
