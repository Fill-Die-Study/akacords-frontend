import React, { PropsWithChildren } from 'react';

interface NavColumnProps {
  readonly isNarrow?: boolean;
  readonly className?: string;
}

export function NavColumn({ isNarrow, className, children }: PropsWithChildren<NavColumnProps>) {
  const space = isNarrow ? 'space-x-[30px]' : 'space-x-14';
  return <div className={`flex items-center ${space} ${className}`}>{children}</div>;
}
