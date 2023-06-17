import React, { PropsWithChildren } from 'react';

type SkeletonVariant = 'rect' | 'round' | 'circle';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
}

const generateSizeStyle = (value: string | number | undefined) => (typeof value === 'number' ? `${value}px` : value);

const variantStyle: { [variant in SkeletonVariant]: string } = {
  circle: 'rounded-full',
  round: 'rounded-[20px]',
  rect: ''
};

export function Skeleton({
  width: widthProps,
  height: heightProps,
  variant = 'rect'
}: PropsWithChildren<SkeletonProps>) {
  return (
    <div
      className={`bg-[#F2F4F7] ${variantStyle[variant]}`}
      style={{ width: generateSizeStyle(widthProps), height: generateSizeStyle(heightProps) }}
    />
  );
}
