'use client';

import React from 'react';
import LoginNextButton from '@components/LoginNextButton';

export default function DoneSection() {
  return (
    <div className="flex flex-col justify-between pl-[2.6rem] pr-[4rem] pt-[6.5rem] pb-[3.75rem]">
      <div>
        <h1 className="text-3xl font-bold">
          아카코드에 오신걸
          <br />
          환영합니다 🎉
        </h1>
        <p className="text-gray-400 text-lg font-semibold mt-2">
          이제 회원만의 특별한 기능을
          <br />
          사용할 수 있어요!
        </p>
      </div>

      <div>
        <LoginNextButton className="mt-14 bg-black text-white">바로 로그인하기</LoginNextButton>
        <LoginNextButton className="mt-[6px] bg-gray-100 text-gray-400">다음 단계로</LoginNextButton>
      </div>
    </div>
  );
}
