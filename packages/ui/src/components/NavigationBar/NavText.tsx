import React, { PropsWithChildren } from 'react';

export function NavText({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <p className={`text-[#BEBEBE] text-xl cursor-pointer ${className}`}>{children}</p>;
}
