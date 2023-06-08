import React, { PropsWithChildren } from 'react';

export function NavItem({ children }: PropsWithChildren) {
  return <div className="text-[#D9D9D9] cursor-pointer">{children}</div>;
}
