'use client';

import React, { PropsWithChildren } from 'react';

interface LoginNextButtonProps {
  readonly className?: string;
  readonly onClick?: (e: React.MouseEvent) => void;
}

export default function LoginNextButton({ children, className, onClick }: PropsWithChildren<LoginNextButtonProps>) {
  return (
    <button type="button" className={`w-80 h-[4.3rem] rounded text-xl ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
