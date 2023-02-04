'use client';

import React from 'react';
import Image from 'next/image';
import LoginNextButton from '@components/LoginNextButton';
import Link from 'next/link';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RegisterImage from './register-image.png';

const registerSchema = yup
  .object({
    password: yup.string().required('비밀번호를 입력해주세요.'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], '비밀번호가 맞지 않습니다.')
      .required(''),
    nickname: yup
      .string()
      .min(1, '닉네임은 최소 2글자부터 8글자까지 입력 가능합니다.')
      .max(8, '닉네임은 최소 2글자부터 8글자까지 입력 가능합니다.')
      .matches(/^[a-zA-Z0-9가-힣]*$/, '특수문자 제외 입력해야 합니다.')
      .required('닉네임을 입력해주세요.'),
    termOfServiceCheck: yup.boolean().isTrue(),
    privacyCheck: yup.boolean().isTrue()
  })
  .required();

interface RegisterFormInput {
  readonly password: string;
  readonly passwordConfirm: string;
  readonly nickname: string;
  readonly termOfServiceCheck: boolean;
  readonly privacyCheck: boolean;
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormInput>({
    resolver: yupResolver(registerSchema)
  });

  const onNextClick: SubmitHandler<RegisterFormInput> = async (values) => {
    console.log(values);
    // TODO: 회원가입 완료 처리
  };

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
              {...register('password')}
            />
            <span className="text-red-400 text-sm">{errors.password?.message}</span>
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="w-80 h-14 px-5 border-2 border-gray-200 rounded-lg"
              {...register('passwordConfirm')}
            />
            <span className="text-red-400 text-sm">{errors.passwordConfirm?.message}</span>
            <input
              type="text"
              placeholder="닉네임"
              className="w-80 h-14 px-5 border-2 border-gray-200 rounded-lg"
              {...register('nickname')}
            />
            <span className="text-red-400 text-sm">{errors.nickname?.message}</span>
          </div>

          <div className="mt-14 space-y-2">
            <div className="flex items-center">
              <input type="checkbox" className="border border-gray-100" {...register('termOfServiceCheck')} />
              <span className="text-sm text-gray-500 leading-tight">
                &nbsp;<span className="font-bold">[필수]</span> 서비스 약관에 동의합니다.{' '}
                <a href="/termofservice" target="_blank" rel="noreferrer">
                  <span className="underline">내용보기</span>
                </a>
              </span>
            </div>
            <div>
              <input type="checkbox" className="border border-gray-100" {...register('privacyCheck')} />
              <span className="text-sm text-gray-500 leading-tight">
                &nbsp;<span className="font-bold">[필수]</span> 개인정보 수집 및 이용에 동의합니다.{' '}
                <a href="/privacy" target="_blank" rel="noreferrer">
                  <span className="underline">내용보기</span>
                </a>
              </span>
            </div>
          </div>

          <LoginNextButton className="mt-14 bg-gray-100 text-gray-400" onClick={handleSubmit(onNextClick)}>
            다음 단계로
          </LoginNextButton>
          <Link href="/login">
            <p className="text-sm text-gray-600 flex justify-end mt-2">로그인으로 이동</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
