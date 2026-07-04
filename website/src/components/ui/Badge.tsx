import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'neutral' | 'glass';
}

export function Badge({ className, variant = 'primary', children, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest";
  
  const variants = {
    primary: "bg-primary-50 text-primary-600 border border-primary-100",
    neutral: "bg-neutral-100 text-neutral-600 border border-neutral-200",
    glass: "bg-primary-600/15 text-primary-400 border border-primary-600/30 backdrop-blur-sm"
  };
  
  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], className))} {...props}>
      {children}
    </span>
  );
}
