'use client';

import React, { PropsWithChildren } from 'react';

export function NavText({ children }: PropsWithChildren) {
  return <p className="text-[#BEBEBE] text-xl cursor-pointer">{children}</p>;
}
