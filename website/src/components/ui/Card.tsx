import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div 
      className={twMerge(
        clsx(
          "bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden",
          hover && "transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200",
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
}
