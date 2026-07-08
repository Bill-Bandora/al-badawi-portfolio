import { Link, type LinkProps } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

const styles = {
  primary: 'bg-cyan text-white hover:bg-blue focus-visible:outline-cyan',
  secondary: 'border border-slate-300 bg-white text-ink hover:border-cyan hover:text-cyan',
  dark: 'bg-white text-ink hover:bg-cyan hover:text-white',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof styles }) {
  return (
    <button className={`inline-flex min-h-11 items-center justify-center rounded-card px-5 py-2.5 font-semibold transition ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ children, variant = 'primary', className = '', ...props }: LinkProps & { children: ReactNode; variant?: keyof typeof styles }) {
  return (
    <Link className={`inline-flex min-h-11 items-center justify-center rounded-card px-5 py-2.5 font-semibold transition ${styles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
