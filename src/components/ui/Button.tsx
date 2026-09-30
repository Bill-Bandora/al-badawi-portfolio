import { Link, type LinkProps } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

const styles = {
  primary: 'bg-gradient-to-r from-cyan to-blue text-white shadow-[0_12px_32px_rgba(8,145,178,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(37,99,235,0.32)] focus-visible:outline-cyan',
  secondary: 'border border-slate-300/60 bg-white/90 text-ink shadow-sm hover:-translate-y-0.5 hover:border-cyan hover:text-cyan',
  dark: 'border border-white/15 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-cyan/15',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof styles }) {
  return (
    <button className={`inline-flex min-h-11 items-center justify-center rounded-card px-5 py-2.5 font-semibold transition duration-300 motion-reduce:transform-none ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ children, variant = 'primary', className = '', ...props }: LinkProps & { children: ReactNode; variant?: keyof typeof styles }) {
  return (
    <Link className={`inline-flex min-h-11 items-center justify-center rounded-card px-5 py-2.5 font-semibold transition duration-300 motion-reduce:transform-none ${styles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
