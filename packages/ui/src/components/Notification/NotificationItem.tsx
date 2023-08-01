import React, { MouseEventHandler } from 'react';

interface NotificationItemProps {
  readonly title: string;
  readonly body: string;
  readonly onClick?: MouseEventHandler<HTMLDivElement>;
}

export function NotificationItem({ title, body, onClick }: NotificationItemProps) {
  return (
    <div
      className="w-56 h-[60px] p-2 rounded-[7px] cursor-pointer hover:bg-[#F2F4F7]"
      onClick={onClick}
      role="presentation"
    >
      <div className="flex flex-row items-center">
        <div className="w-3 h-3 rounded-full bg-[#D9D9D9] mr-2" />
        <p className="text-[14px] font-medium">{title}</p>
      </div>
      <p className="text-xs mt-1">{body}</p>
    </div>
  );
}
