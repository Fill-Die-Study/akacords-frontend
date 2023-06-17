import React, { PropsWithChildren } from 'react';

export function NavContainer({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`z-10 absolute w-full h-[110px] bg-transparent flex items-center justify-between px-[230px] ${className}`}
    >
      {children}
    </div>
  );
}
