import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  background?: 'white' | 'light' | 'dark';
}

export function SectionWrapper({ className, background = 'white', children, id, ...props }: SectionWrapperProps) {
  const backgrounds = {
    white: 'bg-surface-white text-neutral-900',
    light: 'bg-surface-light text-neutral-900',
    dark: 'bg-surface-dark text-white'
  };

  return (
    <section 
      id={id}
      className={twMerge(
        clsx(
          "py-16 sm:py-20 lg:py-24 overflow-hidden",
          backgrounds[background],
          className
        )
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
