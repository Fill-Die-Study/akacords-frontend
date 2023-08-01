import React from 'react';

interface DividerProps {
  readonly width?: number;
}

export function Divider({ width }: DividerProps) {
  const widthStyle = width === undefined ? 'w-full' : `w-[${width}px]`;
  return <div className={`${widthStyle} h-[1px] bg-[#F2F2F2] my-1`} />;
}
