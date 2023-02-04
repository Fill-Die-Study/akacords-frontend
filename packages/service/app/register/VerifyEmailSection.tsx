'use client';

import React, { useCallback } from 'react';
import LoginNextButton from '@components/LoginNextButton';
import Link from 'next/link';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterStep } from '@app/register/page';

const schema = yup
  .object({
    email: yup.string().email('올바르지 않는 이메일입니다.').required('이메일을 입력해주세요.')
  })
  .required();

interface VerifyEmailSectionFormInput {
  readonly email: string;
}

interface VerifyEmailSectionProps {
  readonly setStep: React.Dispatch<React.SetStateAction<RegisterStep>>;
}

export default function VerifyEmailSection({ setStep }: VerifyEmailSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<VerifyEmailSectionFormInput>({
    resolver: yupResolver(schema)
  });

  const onButtonClick: SubmitHandler<VerifyEmailSectionFormInput> = useCallback(() => {
    setStep(RegisterStep.OTHER_INPUT);
  }, [setStep]);

  return (
    <div className="flex flex-col justify-center px-10 py-26 mr-16">
      <h1 className="text-3xl font-bold">이메일 인증🔑</h1>
      <p className="text-gray-400 text-lg font-semibold">이메일 입력하면 인증 메일이 날라와요!</p>

      <div className="mt-12 space-y-5">
        <input
          type="email"
          placeholder="이메일"
          className="w-80 h-14 px-5 border-2 border-gray-200 rounded-lg"
          {...register('email')}
        />
        <span className="text-red-400 text-sm">{errors.email?.message}</span>
      </div>

      <LoginNextButton className="mt-14 bg-gray-100 text-gray-400 " onClick={handleSubmit(onButtonClick)}>
        이메일 인증
      </LoginNextButton>
      <Link href="/login">
        <p className="text-sm text-gray-600 flex justify-end mt-2">로그인으로 이동</p>
      </Link>
    </div>
  );
}
