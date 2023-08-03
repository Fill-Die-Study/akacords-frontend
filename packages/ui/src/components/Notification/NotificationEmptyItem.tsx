import React from 'react';

export function NotificationEmptyItem() {
  return (
    <div className="w-[180px] h-[157px] flex justify-center items-center">
      <p className="text-center text-xs">
        알림이 없습니다.
        <br />
        많은 활동을 통해 알림을 받아보세요!
      </p>
    </div>
  );
}
