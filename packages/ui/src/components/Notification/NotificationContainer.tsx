import React, { PropsWithChildren } from 'react';

export function NotificationContainer({ children }: PropsWithChildren) {
  return (
    <div className="w-60 rounded-lg shadow-[0_0_16px_16px_rgba(0,0,0,0.1)] p-2">
      <div className="w-full h-9 p-2 flex items-center">
        <p className="font-bold text-base">알림</p>
      </div>
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
}
