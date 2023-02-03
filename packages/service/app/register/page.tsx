import React from 'react';
import Image from 'next/image';
import LoginNextButton from '@components/LoginNextButton';
import Link from 'next/link';
import RegisterImage from './register-image.png';

export default function RegisterPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[56rem] h-[48rem] border-2 border-gray-100 flex shadow-lg">
        <Image className="w-2/4" src={RegisterImage} alt="Welcome" placeholder="blur" />
        <div className="flex flex-col justify-center px-10 py-26 mr-16">
          <h1 className="text-3xl font-bold">정보 입력! 🚀</h1>
          <p className="text-gray-400 text-lg font-semibold">당신의 정보를 적어주세요!</p>
          <div className="mt-12 space-y-5">
            <input
              type="password"
              placeholder="비밀번호"
              className="w-80 h-14 px-5 border-2 border-gray-200 rounded-lg"
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="w-80 h-14 px-5 border-2 border-gray-200 rounded-lg"
            />
            <input type="text" placeholder="닉네임" className="w-80 h-14 px-5 border-2 border-gray-200 rounded-lg" />
          </div>
          <div className="mt-14 space-y-2">
            <div className="flex items-center">
              <input type="checkbox" className="border border-gray-100" />
              <span className="text-sm text-gray-500 leading-tight">
                &nbsp;<span className="font-bold">[필수]</span> 서비스 약관에 동의합니다.{' '}
                <span className="underline">내용보기</span>
              </span>
            </div>
            <div>
              <input type="checkbox" className="border border-gray-100" />
              <span className="text-sm text-gray-500 leading-tight">
                &nbsp;<span className="font-bold">[필수]</span> 개인정보 수집 및 이용에 동의합니다.{' '}
                <span className="underline">내용보기</span>
              </span>
            </div>
          </div>
          <LoginNextButton className="mt-14 bg-gray-100 text-gray-400">다음 단계로</LoginNextButton>
          <Link href="/login">
            <p className="text-sm text-gray-600 flex justify-end mt-2">로그인으로 이동</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
