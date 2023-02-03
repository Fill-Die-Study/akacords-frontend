'use client';

import React, { PropsWithChildren } from 'react';

interface LoginNextButtonProps {
  readonly className?: string;
}

export default function LoginNextButton({ children, className }: PropsWithChildren<LoginNextButtonProps>) {
  return (
    <button type="button" className={`w-80 h-[4.3rem] rounded text-xl ${className}`}>
      {children}
    </button>
  );
}
