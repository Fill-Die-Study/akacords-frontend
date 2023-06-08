import React, { PropsWithChildren } from 'react';

export function NavContainer({ children }: PropsWithChildren) {
  return <div className="w-full h-[110px] bg-transparent flex items-center justify-between px-[230px]">{children}</div>;
}
