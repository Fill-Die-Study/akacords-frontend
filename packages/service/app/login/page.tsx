'use client';

import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
import LoginImage from './login-image.png';

const loginSchema = yup
  .object({
    email: yup.string().email().required('이메일을 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요.')
  })
  .required();

type LoginInput = yup.InferType<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty }
  } = useForm<LoginInput>({ resolver: yupResolver(loginSchema), defaultValues: { email: '', password: '' } });

  const onSubmit: SubmitHandler<LoginInput> = useCallback(
    (formData) => {
      // TODO: api call
      // alert(JSON.stringify(formData));
      reset();
    },
    [reset]
  );

  return (
    <div>
      <section className="w-[903px] h-[770px] flex mx-auto mt-[80px] shadow-[0px_4px_50px_-15px_rgba(151,_71,_255,_0.08)] bg-white">
        <Image src={LoginImage} alt="This is Login Page!" placeholder="blur" />
        <div className="flex flex-col h-full justify-between flex-1 pt-[105px] border-[#E8E8E8] border-[1.5px] border-l-0">
          <div className="w-full flex-1">
            <article className="pl-10 pr-[70px] mb-5">
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-14">
                  <h3 className="text-4xl font-semibold mb-[7px]">로그인</h3>
                  <p className="text-xl font-medium text-[#959595]">로그인하시면 더욱 즐길 수 있어요!</p>
                </div>
                <fieldset className="w-full mb-10">
                  <div className="relative mb-5">
                    <input
                      type="email"
                      placeholder="이메일"
                      className={`w-full h-[60px] py-[14px] px-[22px] border rounded outline-none ${
                        errors.email?.type === 'required' ? 'border-[#ED1D1D]' : 'border-[#C4C6CC]'
                      }`}
                      {...register('email')}
                    />
                    <p className="absolute left-3 bottom-[-18px] text-[#ED1D1D] text-xs font-normal">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      autoComplete="current-password"
                      placeholder="비밀번호"
                      className={`w-full h-[60px] py-[14px] px-[22px] border rounded outline-none ${
                        errors.password ? 'border-[#ED1D1D]' : 'border-[#C4C6CC]'
                      }`}
                      {...register('password')}
                    />
                    <p className="absolute left-3 bottom-[-18px] text-[#ED1D1D] text-xs font-normal">
                      {errors.password?.message}
                    </p>
                  </div>
                </fieldset>

                <div className="w-full mb-[49px]">
                  <button
                    type="submit"
                    className={`w-full h-[72px] mb-3 rounded ${isDirty ? 'bg-primary-500' : 'bg-[#F2F4F7]'}`}
                    disabled={!isDirty}
                  >
                    <span className={`${isDirty ? 'text-[#F9F9FA]' : 'text-[#AAADB3]'} text-xl font-medium`}>
                      로그인
                    </span>
                  </button>
                  <fieldset className="w-full flex justify-between">
                    <label htmlFor="keepLogin" className="flex items-center">
                      <input
                        type="checkbox"
                        id="keepLogin"
                        className="w-[16px] h-[16px] border border-[#C4C6CC] rounded mr-2 "
                      />
                      <span className="text-[#AAADB3] text-sm">로그인 유지</span>
                    </label>

                    <Link href="/login">
                      <span className="text-[#AAADB3] text-sm">아이디 &#183; 비밀번호 찾기</span>
                    </Link>
                  </fieldset>
                </div>

                <div className="w-full flex justify-between">
                  <a href="#n" className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-100">
                    G
                  </a>
                  <a href="#n" className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-100">
                    N
                  </a>
                  <a href="#n" className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-100">
                    K
                  </a>
                  <a href="#n" className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-100">
                    H
                  </a>
                </div>
              </form>
            </article>

            <p className="w-full text-sm text-[#707070] text-right pr-9">
              계정이 없으시다면!{' '}
              <Link href="/register">
                <span className="underline">회원가입</span>
              </Link>
            </p>
          </div>

          <footer className="h-[68px] px-[45px] bg-[#F2F4F7] flex justify-center items-center">
            <p className="text-xs text-[#959595]">
              SNS로 로그인 및 회원가입 시 아카코드의{' '}
              <a href="#n" className="underline">
                이용약관
              </a>
              과{' '}
              <a href="#n" className="underline">
                개인정보 수집 및 이용
              </a>
              에 동의한 것으로 간주합니다.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}
