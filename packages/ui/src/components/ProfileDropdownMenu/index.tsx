import React from 'react';

interface ProfileDropdownMenuProps {
  readonly image: string;
  readonly nickname: string;
  readonly email: string;
}

export function ProfileDropdownMenu({ image, nickname, email }: ProfileDropdownMenuProps) {
  return (
    <div className="w-full h-9 flex items-center">
      <div className="flex">
        <img src={image} alt={`${nickname}님의 프로필사진`} className="rounded-full" />
        <div className="flex flex-col ml-[10px]">
          <p className="text-sm">{nickname}</p>
          <p className="text-xs text-gray-400">{email}</p>
        </div>
      </div>
    </div>
  );
}
