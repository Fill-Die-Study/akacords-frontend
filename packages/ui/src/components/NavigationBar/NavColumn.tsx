import React, { PropsWithChildren } from 'react';

interface NavContainerProps {
  readonly isNarrow?: boolean;
}

export function NavColumn({ isNarrow, children }: PropsWithChildren<NavContainerProps>) {
  const space = isNarrow ? 'space-x-[30px]' : 'space-x-14';
  return <div className={`flex items-center ${space}`}>{children}</div>;
}
