import React, { ReactElement } from 'react';

interface DropdownMenuItemProps {
  readonly title: string;
  readonly icon: ReactElement;
  readonly side?: ReactElement;
}

export function DropdownMenuItem({ title, icon, side }: DropdownMenuItemProps) {
  return (
    <div className="w-56 h-9 p-2 rounded-lg flex items-center cursor-pointer hover:bg-[#F2F4F7] justify-between">
      <div className="flex flex-row items-center">
        <>
          {icon}
          <span className="ml-2 text-sm">{title}</span>
        </>
      </div>
      {side !== undefined && <div className="text-black opacity-40 text-xs">{side}</div>}
    </div>
  );
}
