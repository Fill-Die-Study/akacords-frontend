import React, { PropsWithChildren } from 'react';

export function NavItem({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={`text-[#D9D9D9] cursor-pointer ${className}`}>{children}</div>;
}
